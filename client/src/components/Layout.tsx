import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import InteractiveBackground from './InteractiveBackground';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-x-hidden">
      <InteractiveBackground />
      <div className="relative z-10">
        <Header />
        <main className="min-h-[calc(100vh-200px)]">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}