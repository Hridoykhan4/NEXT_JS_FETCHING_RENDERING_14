import { Inter, Lora, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import CartProvider from "@/context/CartProvider";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const space = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata = {
  title: "Khatian | Delicious Food & Dining",
  description: "Experience the finest food & ordering experience",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${space.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)] font-sans">
        {/* Navigation Header */}
        <header className="border-b border-[var(--border)] bg-[var(--card)]/80 backdrop-blur-md sticky top-0 z-50">
          <div className="container-page py-3 flex items-center justify-between gap-5">
            <Link href="/" className="flex items-center gap-2">
              <Image
                width={120}
                height={50}
                className="object-contain"
                src="/logo.png"
                alt="Restaurant Logo"
                priority
              />
            </Link>

            <nav className="flex items-center gap-3">
              <Link className="btn-secondary" href="/foods">
                Food
              </Link>
              <Link className="btn-primary" href="/reviews">
                Reviews
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 container-page py-6">
          <CartProvider>{children}</CartProvider>
        </main>

        {/* Footer */}
        <footer className="border-t border-[var(--border)] bg-[var(--card)] py-6 mt-auto">
          <div className="container-page text-center text-sm text-stone-500">
            <p>© {new Date().getFullYear()} Restaurant. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
