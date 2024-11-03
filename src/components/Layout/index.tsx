import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

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