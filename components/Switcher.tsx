"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", label: "Overview" },
  { href: "/a", label: "Direction A" },
  { href: "/b", label: "Direction B" },
];

export default function Switcher() {
  const path = usePathname();
  return (
    <nav className="switcher" aria-label="Redesign directions">
      {items.map((i) => (
        <Link key={i.href} href={i.href} aria-current={path === i.href ? "page" : undefined}>
          {i.label}
        </Link>
      ))}
    </nav>
  );
}
