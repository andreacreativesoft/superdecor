import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";
export const alt = `${siteConfig.name} Brașov — Perdele, draperii și mobilă la comandă`;
export const size = { width: 1200, height: 630 } as const;
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #00657E 0%, #03394A 100%)",
          color: "#FAFBFC",
          padding: "72px 80px",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 18,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#07BCC6",
            fontFamily: "monospace",
          }}
        >
          {siteConfig.name} — Brașov
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 78,
              fontStyle: "italic",
              lineHeight: 1.05,
              maxWidth: 980,
              fontWeight: 500,
            }}
          >
            Perdele, draperii și mobilă la comandă în Brașov.
          </div>
          <div
            style={{
              fontSize: 24,
              color: "rgba(250, 251, 252, 0.75)",
              maxWidth: 880,
              fontFamily: "Arial, sans-serif",
              lineHeight: 1.4,
            }}
          >
            Atelier propriu, măsurători gratuite, montaj profesional.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 24,
            borderTop: "1px solid rgba(7, 188, 198, 0.35)",
            fontSize: 18,
            letterSpacing: 3,
            textTransform: "uppercase",
            fontFamily: "monospace",
            color: "rgba(250, 251, 252, 0.7)",
          }}
        >
          <span>superdecor.ro</span>
          <span style={{ color: "#07BCC6" }}>4.9★ · peste 200 clienți</span>
        </div>
      </div>
    ),
    size,
  );
}
