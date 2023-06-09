import '@tamagui/core/reset.css'
import RootProviders from '@/app/RootProviders';
import { Inter } from 'next/font/google'
import React from 'react';


const inter = Inter({
  subsets: ['latin'],
  variable: '--f-fa',
  weight: ['400', '700', '800'],
});
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <RootProviders>{children}</RootProviders>
      </body>
    </html>
  )
}
