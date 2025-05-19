import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Navbar/Nav";

const font = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "HOME A D'OR",
  description: "Home Decor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <Nav />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
