"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.svg";
import { navigation } from "@/lib/site";

export function SiteNav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav className="bg-background/85 border-border sticky top-0 z-50 border-b backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between gap-6 px-[19px] sm:px-6 md:h-20">
          <Link href="/" className="flex shrink-0 items-center" aria-label="SuperDecor">
            <Image
              src={logo}
              alt="SuperDecor"
              width={112}
              height={57}
              priority
              unoptimized
              className="h-12 w-auto md:h-14"
            />
          </Link>
          <div className="hidden gap-7 text-[11px] font-medium tracking-[0.16em] uppercase lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className={`hover:text-accent transition-colors ${pathname === item.href ? "text-accent" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="border-foreground bg-foreground text-background hover:bg-accent hover:border-accent hover:text-background hidden rounded-full border px-4 py-2 font-mono text-[11px] tracking-[0.16em] uppercase transition-colors sm:inline-block"
            >
              Contact
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Deschide meniul"
              className="border-border hover:border-foreground inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile slide-in menu */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 lg:hidden ${menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <button
          type="button"
          aria-label="Închide meniul"
          onClick={() => setMenuOpen(false)}
          className="bg-foreground/50 absolute inset-0 backdrop-blur-sm"
        />
        <aside
          className={`bg-background absolute top-0 left-0 flex h-full w-[85%] max-w-sm flex-col shadow-2xl transition-transform duration-300 ease-out ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="border-border flex h-16 items-center justify-between border-b px-[19px] sm:px-6">
            <Image
              src={logo}
              alt="SuperDecor"
              width={112}
              height={57}
              unoptimized
              className="h-10 w-auto"
            />
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Închide meniul"
              className="border-border hover:border-foreground inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-[19px] py-8 text-sm font-medium tracking-[0.16em] uppercase sm:px-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`border-border hover:text-accent border-b py-3 transition-colors ${pathname === item.href ? "text-accent" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="border-border mt-auto border-t p-6">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="bg-foreground text-background hover:bg-accent block rounded-full px-4 py-3 text-center font-mono text-[11px] tracking-[0.16em] uppercase transition-colors"
            >
              Contact
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}
