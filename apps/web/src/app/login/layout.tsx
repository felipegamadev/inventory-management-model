import React from 'react'
import { Inter } from 'next/font/google'
import { type Metadata } from 'next'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app'
}

export default function LoginLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>): React.JSX.Element {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    )
}
