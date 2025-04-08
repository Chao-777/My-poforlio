import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'My Portfolio',
  description: 'Personal portfolio site',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Example: A global navbar */}
        <header className="p-4 bg-white shadow">
          <nav className="max-w-6xl mx-auto flex justify-between">
            <div className="font-bold">MyLogo</div>
            <div>/* nav items */</div>
          </nav>
        </header>

        {/* The main content changes based on the route */}
        <main>{children}</main>

        {/* A global footer */}
        <footer className="p-4 text-center text-gray-600">
          &copy; 2025 My Portfolio
        </footer>
      </body>
    </html>
  );
}
