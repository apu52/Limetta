"use client";

import Link from "next/link";
import { Session } from "next-auth";
import { Avatar } from "@nextui-org/avatar";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { accounts, settings, siteConfig } from "@/config";

export const DashboardSidebar = ({ session }: { session: Session }) => {
  const pathname = usePathname();

  return (
    <div className="hidden xl:flex flex-col gap-y-8 px-5 pb-8 pt-3 xl:pt-6 md:py-8">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-lg font-bold tracking-tight">
          {siteConfig.name}
        </Link>
        <Avatar
          src={session.user.image ?? ""}
          size="sm"
          showFallback
          name={session.user.name ?? ""}
        />
      </div>

      <div className="space-y-4 tracking-tight">
        <div className="flex gap-x-2 items-center">
          <div className="h-3 w-3 rounded-sm bg-primary" />
          <h1 className="text-sm">Main menu</h1>
        </div>
        <div className="ml-4 flex flex-col gap-y-4 text-sm text-muted-foreground">
          {accounts.map((account, index) => (
            <Link
              className={cn("hover:text-primary transition", {
                "text-primary": pathname === account.href,
              })}
              href={account.href}
              key={index}
            >
              <div className="flex gap-x-2">
                <account.Icon className="h-4 w-4" />
                {account.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="space-y-4 tracking-tight">
        <div className="flex gap-x-2 items-center">
          <div className="h-3 w-3 rounded-sm bg-yellow-400" />
          <h1 className="text-sm">Account</h1>
        </div>
        <div className="ml-4 flex flex-col gap-y-4 text-sm text-muted-foreground">
          {settings.map((setting, index) =>
            setting.hardReload ? (
              <a
                key={index}
                className={cn("hover:text-primary transition", {
                  "text-primary": pathname === setting.href,
                })}
                href={setting.href}
              >
                <div className="flex gap-x-2">
                  <setting.Icon className="h-4 w-4" />
                  {setting.label}
                </div>
              </a>
            ) : (
              <Link
                className={cn("hover:text-primary transition", {
                  "text-primary": pathname === setting.href,
                })}
                href={setting.href}
                key={index}
              >
                <div className="flex gap-x-2">
                  <setting.Icon className="h-4 w-4" />
                  {setting.label}
                </div>
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
};
