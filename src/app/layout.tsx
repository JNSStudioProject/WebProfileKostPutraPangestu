import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'HeroHire - Elevate Your Security',
  description: 'Hire vetted superhumans for your most critical missions with HeroHire.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
