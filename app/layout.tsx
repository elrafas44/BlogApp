import { Providers } from './providers';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <Providers>
          <main className="p-4 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Blog</h1>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}