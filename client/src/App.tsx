import { Switch, Route } from "wouter";
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
import LoadingAnimation from "@/components/LoadingAnimation";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/events" component={Events} />
      <Route path="/team" component={Team} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [showLoading, setShowLoading] = useState(true);
  const [firstVisit, setFirstVisit] = useState(true);

  useEffect(() => {
    // Check if user has visited before in this session
    const hasVisited = sessionStorage.getItem('viksha-visited');
    if (hasVisited) {
      setFirstVisit(false);
      setShowLoading(false);
    }
  }, []);

  const handleLoadingComplete = () => {
    setShowLoading(false);
    sessionStorage.setItem('viksha-visited', 'true');
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        {showLoading && firstVisit && (
          <LoadingAnimation onComplete={handleLoadingComplete} />
        )}
        {(!showLoading || !firstVisit) && <Router />}
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
