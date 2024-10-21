import Footer from "../SharedComponent/Footer";
import Navbar from "../SharedComponent/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar/>
      {children}
      <Footer/>
    </>
  );
}