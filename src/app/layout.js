import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SGTMake: Your One-Stop Shop for Engineering Services",
  description: "SGTMake is an online store that caters to a wide range of electronic product needs. They offer a comprehensive selection of components and assemblies, making them an ideal resource for various industries and individual projects.",
  keywords: ["sgtmake electronic components", "3D Designing Services", "3D Printing Services"," CNC Machining Services", "Laser Cutting Services", "Custom Battery Pack Manufacturing", "Wiring Harness Manufacturing"," Prototyping Services" ,"Precision Engineering","Custom Manufacturing Solutions","Rapid Prototyping","Product Development Services","Reverse Engineering Services","CAD Design Services","Plastic Fabrication Services","Metal Fabrication Services","Custom Component Manufacturing"]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-JP2Y3ZV648"></Script>
<Script>
 {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-JP2Y3ZV648');`}
</Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
