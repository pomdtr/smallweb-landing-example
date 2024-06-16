/** @jsxImportSource https://esm.sh/react */
import { renderToString } from "npm:react-dom/server";

export default function (_req: Request) {
  return new Response(
    renderToString(
      <html>
        <head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Joe Schmo</title>
        </head>
        <body
          style={{
            padding: "30px",
            width: "300px",
            margin: "0 auto",
            fontFamily: "sans-serif",
            textAlign: "center",
          }}
        >
          <h1>Joe Schmo</h1>
          <p>Just an average Joe</p>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <a href="https://www.instagram.com/joeschmo" style={itemStyle}>
              Instagram
            </a>
            <a href="https://github.com/joeschmo" style={itemStyle}>
              Github
            </a>
            <a href="https://www.linkedin.com/in/joeschmo" style={itemStyle}>
              LinkedIn
            </a>
            <a href="https://twitter.com/joeschmo" style={itemStyle}>
              Twitter
            </a>
            <a href="https://www.youtube.com/joeschmo" style={itemStyle}>
              YouTube
            </a>
          </div>
        </body>
      </html>,
    ),
    {
      headers: {
        "Content-Type": "text/html",
      },
    },
  );
}

const itemStyle = {
  padding: "10px",
  color: "white",
  backgroundColor: "#ff748d",
  borderRadius: "20px",
  textDecoration: "none",

  boxShadow:
    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
};
