import Providers from './providers';
import './globals.css';
import Navbar from '../components/Navbar'; // <--- Add this import line

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar /> 
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}