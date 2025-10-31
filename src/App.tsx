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
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";

import MovieDetails from "./pages/MovieDetails";
import MovieCast from "./pages/Cast";
import {
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  ClerkProvider,
} from "@clerk/clerk-react";

const queryClient = new QueryClient();

const App = () => {
  const PUBLISHABLE_KEY =
    "pk_test_c2luZ3VsYXItYW5lbW9uZS04MS5jbGVyay5hY2NvdW50cy5kZXYk";

  if (!PUBLISHABLE_KEY) {
    throw new Error("Add your Clerk Publishable Key to the .env file");
  }
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
          <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
            <Header />
            <Routes>
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
              <Route
                path="/The-corpse-behind-the-curtain"
                element={
                  <>
                    <SignedIn>
                      <Page2 />
                    </SignedIn>
                    <SignedOut>
                      <RedirectToSignIn
                        redirectUrl={window.location.pathname}
                      />
                    </SignedOut>
                  </>
                }
              />
              <Route
                path="/the-game-of-deception"
                element={
                  <>
                    <SignedIn>
                      <Page3 />
                    </SignedIn>
                    <SignedOut>
                      <RedirectToSignIn
                        redirectUrl={window.location.pathname}
                      />
                    </SignedOut>
                  </>
                }
              />
               <Route
                path="/the-symphony-of-lies"
                element={
                  <>
                    <SignedIn>
                      <Page4 />
                    </SignedIn>
                    <SignedOut>
                      <RedirectToSignIn
                        redirectUrl={window.location.pathname}
                      />
                    </SignedOut>
                  </>
                }
              />
               <Route
                path="/the-final-note"
                element={
                  <>
                    <SignedIn>
                      <Page5 />
                    </SignedIn>
                    <SignedOut>
                      <RedirectToSignIn
                        redirectUrl={window.location.pathname}
                      />
                    </SignedOut>
                  </>
                }
              />
               <Route
                path="/the-melodic-illusion"
                element={
                  <>
                    <SignedIn>
                      <Page1 />
                    </SignedIn>
                    <SignedOut>
                      <RedirectToSignIn
                        redirectUrl={window.location.pathname}
                      />
                    </SignedOut>
                  </>
                }
              />
              <Route
                path="/cast"
                element={
                  <>
                    <SignedIn>
                      <MovieCast />
                    </SignedIn>
                    <SignedOut>
                      <RedirectToSignIn
                        redirectUrl={window.location.pathname}
                      />
                    </SignedOut>
                  </>
                }
              />
              <Route path="/" element={<MovieDetails />} />
            </Routes>
          </ClerkProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
