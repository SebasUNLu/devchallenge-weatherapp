import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import WeatherContextProvider from "./utils/context/WeatherContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Weather App",
  description:
    "Weather app, shows you the weather of your current city and the 5 next days, and you can search for other cities.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`} suppressHydrationWarning={true}>
        <WeatherContextProvider>{children}</WeatherContextProvider>
      </body>
    </html>
  );
}
