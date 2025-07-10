// This file defines the overall layout structure of your application.
// It's like your HTML template that wraps every page in the app.
// This is like your global HTML template. It defines the HTML skeleton — <html>, <head>, <body>, and wraps all your pages.

import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          if (localStorage.theme === 'dark') {
            document.documentElement.classList.add('dark');
          }
        `,
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html >
  );
}
