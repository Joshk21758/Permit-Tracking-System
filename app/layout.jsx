import "./globals.css"; // Global styles
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Header />
        <Toaster position="top-right" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
