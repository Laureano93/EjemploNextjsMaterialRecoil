'use client';
import { RecoilRoot } from 'recoil';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <RecoilRoot>{children}</RecoilRoot>
      </body>
    </html>
  );
}
