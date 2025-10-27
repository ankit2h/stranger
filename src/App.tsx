import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useSelector } from "react-redux";
import type { RootState } from "./redux/store";
import Gallery from "./pages/Gallery";
import MovieDetails from "./pages/MovieDetails";

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
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
            <Route path="/movie-plot" element={<Gallery />} />
            <Route path="/" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
