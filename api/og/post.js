// api/og/post.js
import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

export default function handler(req) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") || "Glenn Hammond";
  const site = "glennhammond.com";
  const tag = "AI-Enhanced Learning • eLearning • xAPI";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
          color: "#ffffff",
          // Gradient Luxe background
          backgroundImage:
            "linear-gradient(135deg, #0b1020 0%, #151b3a 35%, #223a60 70%, #3e7ba8 100%)",
        }}
      >
        {/* Top label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "22px",
            opacity: 0.8,
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "999px",
              background:
                "radial-gradient(circle at 30% 30%, #7df9ff, #00ffd1 60%, #00b3a4 100%)",
            }}
          />
          <span>{tag}</span>
        </div>

        {/* Title */}
        <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
          <h1
            style={{
              fontSize: "70px",
              lineHeight: "1.05",
              fontWeight: 650,
              letterSpacing: "-0.04em",
              maxWidth: "900px",
            }}
          >
            {title}
          </h1>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "24px",
            opacity: 0.9,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <span style={{ fontWeight: 600 }}>Glenn Hammond</span>
            <span style={{ fontSize: "18px", opacity: 0.8 }}>
              eLearning • xAPI • AI-Enhanced Learning
            </span>
          </div>

          <div
            style={{
              padding: "10px 20px",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.35)",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.09), rgba(255,255,255,0.02))",
              backdropFilter: "blur(8px)",
            }}
          >
            {site}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
