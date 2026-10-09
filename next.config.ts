import type { NextConfig } from "next";

// ACSD - Vercel analytics hosts only when built on Vercel
const onVercel = Boolean(process.env.VERCEL);

const ContentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${onVercel ? " https://va.vercel-scripts.com" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  `connect-src 'self'${onVercel ? " https://vitals.vercel-insights.com https://vercel.live" : ""}`,
  "frame-src 'self' https://www.google.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: ContentSecurityPolicy },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=(), interest-cohort=()",
  },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const legacyRedirects = [
  // ACSD - Mobilă la comandă hidden for now: temporary redirects, restore the permanent one when it returns
  // { source: "/mobila", destination: "/mobila-la-comanda", permanent: true },
  { source: "/mobila", destination: "/", permanent: false },
  { source: "/mobila-la-comanda", destination: "/", permanent: false },
  { source: "/perdele", destination: "/perdele-draperii", permanent: true },
  { source: "/sine", destination: "/sine-galerii", permanent: true },
  { source: "/jaluzele", destination: "/jaluzele-rolete", permanent: true },
  { source: "/lenjerii", destination: "/lenjerii-de-pat", permanent: true },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "**" }],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|ico|woff|woff2)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
  async redirects() {
    return [
      // ACSD - one canonical host: www -> apex
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.superdecor.ro" }],
        destination: "https://superdecor.ro/:path*",
        permanent: true,
      },
      ...legacyRedirects,
    ];
  },
};

export default nextConfig;
