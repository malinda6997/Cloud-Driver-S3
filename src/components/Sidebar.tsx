"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, HardDrive, FolderPlus } from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { href: "/", name: "Dashboard", icon: LayoutDashboard },
    { href: "/manage", name: "Manage Items", icon: FolderPlus },
  ];

  return (
    <aside className="w-full md:w-64 bg-slate-900 text-slate-100 flex flex-col border-r border-slate-800">
      {/* Brand Header - Modern Cloud Drive Title with Neon Glow */}
      <div className="p-6 border-b border-slate-800 flex items-center gap-3">
        <HardDrive className="text-cyan-400 h-6 w-6 animate-pulse" />
        <span className="font-bold text-lg tracking-wider bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent uppercase">
          CLOUD DRIVE
        </span>
      </div>
      
      {/* Navigation Links with Dynamic Active States */}
      <nav className="flex-1 p-4 space-y-2">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                isActive
                  ? "bg-cyan-600/20 text-cyan-400 border border-cyan-500/30 shadow-inner"
                  : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="font-medium text-sm">{link.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}