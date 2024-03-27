import React from "react";
import Head from "next/head";
import Header from "./_components/Header";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Shutter Story - Hire Photographers | Capture Your Memories",
  description:
    "The Shutter Story - Hire professional photographers for your events. Capture your memories beautifully. Book now!",
};

export default function RootLayout({ children }) {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </div>
  );
}
