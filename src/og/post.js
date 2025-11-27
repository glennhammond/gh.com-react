// Vercel OG Image function
import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

export default async function handler(req) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") || "Untitled Post";

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: "#0b0f19",
          color: "white",
          width: "100%",
          height: "100%",
          padding: "80px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {title}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
