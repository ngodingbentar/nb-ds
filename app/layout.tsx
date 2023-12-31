import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import BaseLayout from './components/BaseLayout'
import ReduxProvider from '@/app/store/provider'
import { ProvidersReactQuery } from './providersReactQuery'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ngodingbentar',
  description: 'Ngodingbentar - dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProvidersReactQuery>
          <Providers>
            <ReduxProvider>
              <BaseLayout>
                {children}
              </BaseLayout>
            </ReduxProvider>
          </Providers>
        </ProvidersReactQuery>
      </body>
    </html>
  )
}
