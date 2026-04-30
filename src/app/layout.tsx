import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kost Putra Pangestu',
  description: 'Tempat kost ideal dengan fasilitas lengkap untuk mendukung produktivitas dan kenyamanan beristirahatmu di Pekanbaru.',
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
