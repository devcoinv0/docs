// @ts-nocheck
"use client";

import { usePathname } from "next/navigation";
import SubLink from "@/components/navigation/sublink";
import { useEffect, useState } from "react";

type ContractMethod = {
  name: string;
  kind: string;
};

type DebugRoute = {
  title: string;
  href: string;
  heading?: string;
  items?: {
    title: string;
    href: string;
    items?: {
      title: string;
      href: string;
    }[];
  }[];
};

async function fetchContractMethods() {
  try {
    const response = await fetch('/api/contract-abi');
    const data = await response.json();
    return data.body.functions || [];
  } catch (error) {
    console.error('Failed to fetch contract methods:', error);
    return [];
  }
}

export default function DebugMenu({ isSheet = false }) {
  const pathname = usePathname();
  const [routes, setRoutes] = useState<DebugRoute[]>([]);

  useEffect(() => {
    fetchContractMethods().then((methods: ContractMethod[]) => {
      const viewMethods = methods.filter(m => m.kind === 'view');
      const callMethods = methods.filter(m => m.kind === 'call');

      const debugRoutes: DebugRoute[] = [
        {
          title: "Contract Methods",
          href: "/debug/contract",
          heading: "Contract Methods",
          items: [
            {
              title: "View Methods",
              href: "/debug/contract/view",
              items: viewMethods.map(method => ({
                title: method.name,
                href: `/debug/contract/view#${method.name.toLowerCase().replace(/_/g, '-')}`
              }))
            },
            {
              title: "Call Methods", 
              href: "/debug/contract/call",
              items: callMethods.map(method => ({
                title: method.name,
                href: `/debug/contract/call#${method.name.toLowerCase().replace(/_/g, '-')}`
              }))
            }
          ]
        }
      ];

      setRoutes(debugRoutes);
    });
  }, []);

  if (!pathname.startsWith("/debug")) return null;

  return (
    <div className="flex flex-col gap-3.5 mt-5 pb-6">
      {routes.map((item, index) => (
        <div key={item.title + index} className="mb-2">
          {item.heading && <h2 className="text-sm font-bold mb-2">{item.heading}</h2>}
          <SubLink
            {...{
              ...item,
              level: 0,
              isSheet,
            }}
          />
        </div>
      ))}
    </div>
  );
}