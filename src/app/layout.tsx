import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/sidebar";
import { RosterProvider } from "@/context/roster-context";
import { PlayerContextProvider } from "@/context/player-context";
import { TeamContextProvider } from "@/context/team-name-context";
import { NationalityContextProvider } from "@/context/nationality-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beam dynamics",
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
        <TeamContextProvider>
          <RosterProvider>
            <PlayerContextProvider>
              <NationalityContextProvider>
                <div className="flex h-full font-poppins">
                  <Sidebar />
                  {children}
                </div>
              </NationalityContextProvider>
            </PlayerContextProvider>
          </RosterProvider>
        </TeamContextProvider>
      </body>
    </html>
  );
}
