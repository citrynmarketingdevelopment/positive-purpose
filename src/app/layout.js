import { Lexend, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-headline",
  subsets: ["latin"],
});

const lexend = Lexend({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata = {
  title: "Positive Purpose | Empowering Independence",
  description:
    "Compassionate, community-centered support for adults with developmental disabilities and the families who love them.",
  icons: {
    icon: "/citryn-gold.png",
    shortcut: "/citryn-gold.png",
    apple: "/citryn-gold.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${lexend.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
