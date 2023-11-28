import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/sidebar";
import { RosterProvider } from "@/context/roster-context";
import { PlayerContextProvider } from "@/context/player-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bean dynamics",
  description: "team managment app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RosterProvider>
          <PlayerContextProvider>
            <div className="flex h-full">
              <Sidebar />
              {children}
            </div>
          </PlayerContextProvider>
        </RosterProvider>
      </body>
    </html>
  );
}
