import { Inter } from "next/font/google";
import "./globals.css";
import {Providers} from './providers'
import {Penegalaticto} from './components/Navbar'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rilash",
  description: "Hola",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
        <Penegalaticto/>
        {children}
        </Providers>
        </body>
    </html>
  );
}
