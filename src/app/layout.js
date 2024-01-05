//= Global Styles
import "@/styles/main.scss";
import "@/styles/preloader.css";
import "@/styles/modal-video.css";
import "swiper/css/bundle";
import "react-circular-progressbar/dist/styles.css";


export const metadata = {
  title: 'Vie',
  description: 'Vie - Multi-Purpose React.js Next.js Template',
  keywords: ['HTML5', 'Template', 'Vie', 'Multi-Purpose', 'themeforest'],
  icons: {
    icon: "/assets/imgs/favicon.ico",
    shortcut: "/assets/imgs/favicon.ico"
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
