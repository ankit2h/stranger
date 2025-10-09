import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useSelector } from "react-redux";
import type { RootState } from "./redux/store";
import Data from "./data";
import Portfolio from './portfolio';

const queryClient = new QueryClient();

const App = () => {
  const open = useSelector((state: RootState) => state.sidebar.sidebar);
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {open && (
            <div className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm flex">
              <Sidebar
                onClose={() =>
                  window.dispatchEvent(new CustomEvent("closeSidebar"))
                }
              />
              {/* Click outside to close */}
              <div
                className="flex-1 cursor-pointer"
                onClick={() =>
                  window.dispatchEvent(new CustomEvent("closeSidebar"))
                }
              />
            </div>
          )}
          <Header />
          <Routes>
            <Route path="/tutorial/:pagelink" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
            <Route path="/structure" element={<Data />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
