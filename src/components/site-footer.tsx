import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-foreground text-background px-[19px] py-24 sm:px-6">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-20 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-display mb-8 text-[33px] leading-tight text-balance italic md:text-5xl">
              Să creăm împreună
              <br />o casă pe care să o iubești.
            </h2>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="decoration-background/20 text-[21px] font-light underline underline-offset-8 transition-colors hover:text-[#07BCC6] md:text-2xl"
            >
              {siteConfig.contact.email}
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-background/40 font-mono text-[10px] tracking-[0.2em] uppercase">
              Telefon
            </span>
            <a
              href={`tel:${siteConfig.contact.phoneE164}`}
              className="text-sm transition-colors hover:text-[#07BCC6]"
            >
              +40 728 893 118
            </a>
            <span className="text-background/40 mt-4 font-mono text-[10px] tracking-[0.2em] uppercase">
              Vizitează-ne
            </span>
            <p className="text-background/80 text-sm">
              {siteConfig.address.streetAddress}
              <br />
              {siteConfig.address.addressLocality}, RO
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-background/40 font-mono text-[10px] tracking-[0.2em] uppercase">
              Urmărește-ne
            </span>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-colors hover:text-[#07BCC6]"
            >
              Instagram
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-colors hover:text-[#07BCC6]"
            >
              Facebook
            </a>
          </div>
        </div>
        <div className="border-background/10 flex flex-col items-center justify-between gap-6 border-t pt-12 md:flex-row">
          <p className="text-background/30 font-mono text-[10px] tracking-[0.2em] uppercase">
            © {new Date().getFullYear()} SuperDecor Brașov. Toate drepturile rezervate.
          </p>
          <p className="text-background/30 font-mono text-[10px] tracking-[0.2em] uppercase">
            Calitate în fiecare detaliu
          </p>
        </div>
      </div>
    </footer>
  );
}
