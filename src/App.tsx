import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import { useSelector } from "react-redux";
import type { RootState } from "./redux/store";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import NotFound from "./pages/NotFound";
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
  SignIn,
  SignUp,
} from "@clerk/clerk-react";

// React Query
const queryClient = new QueryClient();

// Small helper so we don't repeat SignedIn/SignedOut everywhere.
// It redirects unauthenticated users to Clerk sign-in and then back to the same page.
function Protected({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn redirectUrl={location.pathname} />
      </SignedOut>
    </>
  );
}

const App: React.FC = () => {
  const open = useSelector((state: RootState) => state.sidebar.sidebar);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* App-wide toasters */}
        <Toaster />
        <Sonner />

        <BrowserRouter>
          {/* Slide-over sidebar overlay */}
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

          {/* Header stays outside Routes so it's visible across pages */}
          <Header />

          <Routes>
            {/* Auth routes (needed for in-app auth UI) */}
            <Route
              path="/sign-in/*"
              element={<SignIn routing="path" path="/sign-in" />}
            />
            <Route
              path="/sign-up/*"
              element={<SignUp routing="path" path="/sign-up" />}
            />

            {/* Public route */}
            <Route path="/" element={<MovieDetails />} />

            {/* Protected routes */}
            <Route
              path="/the-melodic-illusion"
              element={
                <Protected>
                  <Page1 />
                </Protected>
              }
            />
            <Route
              path="/the-corpse-behind-the-curtain"
              element={
                <Protected>
                  <Page2 />
                </Protected>
              }
            />
            <Route
              path="/the-game-of-deception"
              element={
                <Protected>
                  <Page3 />
                </Protected>
              }
            />
            <Route
              path="/the-symphony-of-lies"
              element={
                <Protected>
                  <Page4 />
                </Protected>
              }
            />
            <Route
              path="/the-final-note"
              element={
                <Protected>
                  <Page5 />
                </Protected>
              }
            />
            <Route
              path="/cast"
              element={
                <Protected>
                  <MovieCast />
                </Protected>
              }
            />

            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;