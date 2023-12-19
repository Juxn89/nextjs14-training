import { montserrat } from './ui/fonts/fonts';
import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ `${ montserrat.className } antialiased` }>{children}</body>
      <footer>
        <span>This footer is in Layout</span>
      </footer>
    </html>
  );
}
