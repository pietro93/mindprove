
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
      <div className="flex-1 flex">
        <div className={`flex-1 w-full ${!isHomePage ? "lg:mr-[300px]" : ""}`}>
          {children}
        </div>
        {!isHomePage && <Sidebar />}
      </div>
      <Footer />
    </div>
  );
};
