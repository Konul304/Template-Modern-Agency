import Script from "next/script";
//= Scripts
import generateStylesheetObject from '@/common/generateStylesheetsObject';
//= Common Components
import Cursor from "@/components/Common/Cursor";
import ProgressScroll from "@/components/Common/ProgressScroll";

export const metadata = {
  title: 'Vie',
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    other: generateStylesheetObject([
      'https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap',
      'https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100;200;300;400;500;600;700;800;900&display=swap',
      'https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap',
      '/css/light.css',
    ])
  }
}

export default function LightLayout({ children }) {
  return (
    <>
      <Cursor />
      <ProgressScroll />
      {children}

      <Script strategy="beforeInteractive" src="/js/wow.min.js"></Script>
      <Script strategy="beforeInteractive" src="/js/splitting.min.js"></Script>
      <Script strategy="beforeInteractive" src="/js/simpleParallax.min.js"></Script>
      <Script strategy="beforeInteractive" src="/js/isotope.pkgd.min.js"></Script>
      <Script strategy="lazyOnload" src="/js/pace.min.js"></Script>
      <Script strategy="lazyOnload" src="/js/wowInit.js"></Script>
    </>
  )
}
