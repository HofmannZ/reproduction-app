import { unstable_noStore as noStore } from "next/cache";
import Script from "next/script";

export default function RootLayout({ children }) {
  noStore(); // Disable prerendering for the layout (in the real world we use headers() here)

  return (
    <html>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `console.log('I am a log')`,
          }}
        />
        <Script
          strategy="beforeInteractive"
          id="log-script"
          dangerouslySetInnerHTML={{
            __html: `console.log('I am a another log')`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
