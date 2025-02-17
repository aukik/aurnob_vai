import { Bebas_Neue ,Inter} from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: '400',   // 400, 700, 900
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  // You can specify multiple weights for Inter
  weight: '400',
});


export const metadata = {
  title: "CapeC.",
  description: "CapeC Advisory",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${inter.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
