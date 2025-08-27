// app/ui/fonts.tsx (or just /app/fonts.ts if you want root level)
import { Inter, Poppins, Roboto_Mono } from "next/font/google";

// Inter – general body font
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Poppins – headings, UI
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

// Roboto Mono – code blocks, techy vibe
export const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto-mono",
  display: "swap",
});
