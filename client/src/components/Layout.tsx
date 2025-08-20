import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import InteractiveBackground from './InteractiveBackground';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen text-white relative overflow-x-hidden">
  <InteractiveBackground /> {/* The canvas will now show its background */}
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