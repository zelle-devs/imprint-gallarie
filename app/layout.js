import { Poppins, Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import CartSidebar from "@/Components/ProductArchivePage/CartSidebar/CartSidebar";
import { CartProvider } from "./CartContext";  

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Imprint Decor | Premium Home Decor",
  description: "Shop the best premium home decor and furniture at Imprint Decor.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${montserrat.variable} ${playfair.variable}`}>
      <body>
        <main className="MainContainerImprintDecor"> 
            <CartProvider>
              <Header /> 
              {children}
              <Footer />
              <CartSidebar />
            </CartProvider> 
        </main>
      </body>
    </html>
  );
}