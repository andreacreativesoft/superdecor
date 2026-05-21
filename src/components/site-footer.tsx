import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-foreground text-background py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-4xl md:text-5xl font-display italic mb-8 leading-tight text-balance">
              Să creăm împreună
              <br />o casă pe care să o iubești.
            </h2>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-2xl font-light hover:text-accent transition-colors underline underline-offset-8 decoration-background/20"
            >
              {siteConfig.contact.email}
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-background/40">
              Telefon
            </span>
            <a
              href={`tel:${siteConfig.contact.phoneE164}`}
              className="text-sm hover:text-accent transition-colors"
            >
              {siteConfig.contact.phone}
            </a>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-background/40 mt-4">
              Vizitează-ne
            </span>
            <p className="text-sm text-background/80">
              {siteConfig.address.streetAddress}
              <br />
              {siteConfig.address.addressLocality} {siteConfig.address.postalCode}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-background/40">
              Navigare
            </span>
            <Link href="/" className="text-sm hover:text-accent transition-colors">Acasă</Link>
            <Link href="/servicii" className="text-sm hover:text-accent transition-colors">Servicii</Link>
            <Link href="/contact" className="text-sm hover:text-accent transition-colors">Contact</Link>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-background/40 mt-4">
              Urmărește-ne
            </span>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-accent transition-colors"
            >
              Facebook
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-accent transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="pt-12 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-background/30">
            © {new Date().getFullYear()} {siteConfig.legalName}. Toate drepturile rezervate.
          </p>
          <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-background/30">
            Calitate în fiecare detaliu
          </p>
        </div>
      </div>
    </footer>
  );
}
