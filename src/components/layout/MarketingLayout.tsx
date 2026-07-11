import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-ivory text-charcoal">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
