"use client";

import { ChevronRight, LucideIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX } from "react";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  const pathName = usePathname();

  return (
    <SidebarGroup>
      {/* <SidebarGroupLabel>Platform</SidebarGroupLabel> */}
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.items?.some(
              (subItem) => subItem.url === pathName
            )}
            className="group/collapsible"
          >
            <SidebarMenuItem className="pb-1.5">
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon></item.icon>}
                  {item.url !== "#" ? (
                    <Link href={item.url}>
                      <span
                        // className="text-[16px] font-medium"
                        className={`${
                          pathName === item.url
                            ? "text-primary bg-primary/5 rounded-l-none text-[16px] font-medium"
                            : "bg-transparent rounded-l-none text-[16px] font-medium"
                        }`}
                      >
                        {item.title}
                      </span>
                    </Link>
                  ) : (
                    <span className="text-[16px] font-medium">
                      {item.title}
                    </span>
                  )}
                  {item.items && item.items.length > 0 ? (
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  ) : null}
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub className="my-2">
                  {item.items?.map((subItem) => {
                    return (
                      <SidebarMenuSubItem
                        key={subItem.title}
                        className={`${
                          pathName === subItem.url
                            ? "border-l-2 border-primary"
                            : ""
                        }`}
                      >
                        <SidebarMenuSubButton
                          className={`${
                            pathName === subItem.url
                              ? "text-primary bg-primary/5 rounded-l-none"
                              : "text-black bg-transparent rounded-l-none"
                          }`}
                          asChild
                        >
                          <Link href={subItem.url}>
                            <span className="text-[16px] font-normal">
                              {subItem.title}
                            </span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    );
                  })}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
