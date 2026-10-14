import { Newsreader } from "next/font/google";
import "./globals.css";

const serif = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

export const metadata = {
  title: "Cindy Chen",
  description: "Data science and political science student at UC San Diego.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={serif.variable}>
      <body>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}