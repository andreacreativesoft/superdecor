import Link from "next/link";
import Image from "next/image";
import { navigation } from "@/lib/site";

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center shrink-0" aria-label="SuperDecor Brașov">
          <Image
            src="/logo.svg"
            alt="SuperDecor"
            width={112}
            height={57}
            priority
            className="h-12 md:h-14 w-auto"
          />
        </Link>
        <div className="hidden lg:flex gap-7 text-[11px] font-medium uppercase tracking-[0.16em]">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-accent transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          href="/contact"
          className="font-mono text-[11px] uppercase tracking-[0.16em] px-4 py-2 border border-foreground bg-foreground text-background rounded-full hover:bg-accent hover:border-accent hover:text-background transition-colors"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
