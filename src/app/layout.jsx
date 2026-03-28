import './globals.css';

export const metadata = {
  title: 'The Umbrella Group — Full-Service Solutions Under One Roof',
  description: 'The Umbrella Group is a multi-vertical service enterprise under The Kollective Hospitality Group. Auto exchange, injury network, realty, cleaning, and more.',
  keywords: 'Umbrella Group, KHG, Kollective Hospitality, auto exchange, injury network, realty, cleaning services, Atlanta',
  openGraph: {
    title: 'The Umbrella Group — Full-Service Solutions Under One Roof',
    description: 'Multi-vertical service enterprise. Auto, injury, realty, clean, and beyond.',
    siteName: 'The Umbrella Group',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Umbrella Group',
    description: 'Full-service solutions under one roof.',
  },
  icons: {
    icon: '/favicon.ico',
  },
  themeColor: '#14161B',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&family=DM+Mono:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
