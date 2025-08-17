import "./globals.css";

export const metadata = {
  title: "Backcountry Nepal",
  description: "Snowboarding Kashmir with Backcountry Nepal",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head />
      <body className="bg-gradient-to-b from-slate-50 to-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
