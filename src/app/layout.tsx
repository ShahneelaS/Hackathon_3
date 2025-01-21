
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/AppContext"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Marketplace",
  description: "Welcome to the best marketplace for all your needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider> {/* Wrap your application with AppProvider */}
          <main>{children}</main>
        </AppProvider>
      </body>
    </html>
  );
}
