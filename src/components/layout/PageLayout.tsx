
import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Sidebar } from "@/components/layout/Sidebar";
import { useLocation } from "react-router-dom";

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex flex-row relative">
        <main className="flex-1 w-full">
          {children}
        </main>
        {!isHomePage && (
          <aside className="hidden lg:block w-[300px] fixed right-0 top-[60px] bottom-0 border-l border-border overflow-y-auto">
            <Sidebar />
          </aside>
        )}
      </div>
      <Footer />
    </div>
  );
};
