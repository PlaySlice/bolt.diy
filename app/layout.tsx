import Script from 'next/script'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* ... existing content ... */}
        {children}
        <Script
          src="https://myai.tools/vendor/chatbot/js/external-chatbot.js"
          defer
          data-chatbot-uuid="e705f22f-09d7-4960-9667-00cee386bd37"
          data-iframe-width="420"
          data-iframe-height="745"
        />
      </body>
    </html>
  );
} 