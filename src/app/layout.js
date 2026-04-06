import '@/styles/variables.css';
import './globals.css';
import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';

export const metadata = {
  title: 'Pegasus Web Design',
  description: 'Premium Web Design',
  icons: {
    icon: '/images/pegasus-favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
