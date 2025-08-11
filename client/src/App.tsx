import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState, useEffect } from "react";

import Home from "@/pages/home";
import Projects from "@/pages/projects";
import Events from "@/pages/events";
import Team from "@/pages/team";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";
import Blogs from "@/pages/blogs";

// animation component
import IntroAnimation from "@/components/IntroAnimation";

// ✅ ScrollToTop component
function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop /> {/* this ensures scroll resets on every route change */}
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/events" component={Events} />
        <Route path="/team" component={Team} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  const [showLoading, setShowLoading] = useState(true);
  const [firstVisit, setFirstVisit] = useState(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("viksha-visited");
    if (hasVisited) {
      setFirstVisit(false);
      setShowLoading(false);
    }
  }, []);

  const handleLoadingComplete = () => {
    setShowLoading(false);
    sessionStorage.setItem("viksha-visited", "true");
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />

        {/* Show your animation if it's the first visit */}
        {showLoading && firstVisit && (
          <IntroAnimation onComplete={handleLoadingComplete} />
        )}

        {/* Show main site after animation */}
        {(!showLoading || !firstVisit) && <Router />}
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
