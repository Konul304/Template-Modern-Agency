//= Global Styles
import '@/styles/main.scss';
import '@/styles/preloader.css';
import '@/styles/modal-video.css';
import 'swiper/css/bundle';
import 'react-circular-progressbar/dist/styles.css';
import ProvidersWrapper from './Providers';

export const metadata = {
  title: 'C141',
  description: 'Creative 141',
  keywords: ['HTML5', 'Template', 'Vie', 'Multi-Purpose', 'themeforest'],
  icons: {
    icon: '/assets/imgs/favicon.ico',
    shortcut: '/assets/imgs/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {' '}
        <ProvidersWrapper>{children}</ProvidersWrapper>
      </body>
    </html>
  );
}

export const revalidate = 5;
