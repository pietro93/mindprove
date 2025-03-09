
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLocation } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BookOpen, Brain, Info, Lightbulb, TestTube } from "lucide-react";

export const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  // Content based on current page
  const getPageSpecificContent = () => {
    if (currentPath.includes("/tests")) {
      return (
        <div className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Our Tests</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <p className="text-muted-foreground mb-2">
                Our tests are designed for educational purposes and are not a substitute for professional diagnosis.
              </p>
              <div className="flex items-center gap-2 mt-4">
                <TestTube className="h-5 w-5 text-primary" />
                <span className="font-medium">Scientifically validated</span>
              </div>
            </CardContent>
          </Card>
          <QuickTestsSection />
        </div>
      );
    } else if (currentPath.includes("/guides")) {
      return (
        <div className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Learning Resources</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <p className="text-muted-foreground">
                Our guides are for educational purposes only and not a substitute for therapy or professional advice.
              </p>
              <div className="flex items-center gap-2 mt-4">
                <BookOpen className="h-5 w-5 text-primary" />
                <span className="font-medium">Updated regularly</span>
              </div>
            </CardContent>
          </Card>
          <RecommendedGuidesSection />
        </div>
      );
    } else if (currentPath.includes("/about")) {
      return (
        <div className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">About Us</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <p className="text-muted-foreground">
                MindProve is dedicated to making mental health resources accessible to everyone.
              </p>
              <div className="flex items-center gap-2 mt-4">
                <Info className="h-5 w-5 text-primary" />
                <span className="font-medium">Evidence-based approach</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <p className="mb-2">
                Have questions or feedback? We'd love to hear from you.
              </p>
              <p className="text-primary hover:underline">
                <a href="mailto:contact@mindprove.com">contact@mindprove.com</a>
              </p>
            </CardContent>
          </Card>
        </div>
      );
    } else if (currentPath.includes("/resources")) {
      return (
        <div className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Mental Health Resources</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <p className="text-muted-foreground">
                These resources are for educational purposes only and not a substitute for professional help.
              </p>
              <div className="flex items-center gap-2 mt-4">
                <Lightbulb className="h-5 w-5 text-primary" />
                <span className="font-medium">Global support options</span>
              </div>
            </CardContent>
          </Card>
          <QuickResourcesSection />
        </div>
      );
    } else if (currentPath.includes("/dashboard")) {
      return (
        <div className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Dashboard Tips</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <p className="text-muted-foreground mb-2">
                Track your progress and get personalized recommendations.
              </p>
              <p className="text-primary hover:underline">
                <a href="/tests">Explore more tests</a>
              </p>
            </CardContent>
          </Card>
          <ProgressSection />
        </div>
      );
    } else {
      // Default content for other pages
      return <DefaultSidebarContent />;
    }
  };

  return (
    <div className="hidden lg:block w-[300px] flex-shrink-0 border-l">
      <ScrollArea className="h-full py-6 px-4">
        {getPageSpecificContent()}
        <Separator className="my-6" />
        <NewsletterSignup />
        <DisclosureSection />
      </ScrollArea>
    </div>
  );
};

// Component sections
const DefaultSidebarContent = () => (
  <div className="space-y-4">
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Welcome to MindProve</CardTitle>
      </CardHeader>
      <CardContent className="text-sm">
        <p className="text-muted-foreground mb-2">
          Explore our mental health tests and educational guides.
        </p>
        <div className="flex flex-col gap-2 mt-4">
          <Button size="sm" asChild className="w-full">
            <a href="/tests">Take a Test</a>
          </Button>
          <Button variant="outline" size="sm" asChild className="w-full">
            <a href="/guides">Browse Guides</a>
          </Button>
        </div>
      </CardContent>
    </Card>
  </div>
);

const QuickTestsSection = () => (
  <Card>
    <CardHeader className="pb-2">
      <CardTitle className="text-base">Popular Tests</CardTitle>
    </CardHeader>
    <CardContent className="text-sm">
      <ul className="space-y-1">
        <li className="hover:text-primary">
          <a href="/test/anxiety-assessment">Anxiety Assessment</a>
        </li>
        <li className="hover:text-primary">
          <a href="/test/depression-screening">Depression Screening</a>
        </li>
        <li className="hover:text-primary">
          <a href="/test/big-five-personality">Big Five Personality</a>
        </li>
      </ul>
    </CardContent>
  </Card>
);

const RecommendedGuidesSection = () => (
  <Card>
    <CardHeader className="pb-2">
      <CardTitle className="text-base">Recommended Guides</CardTitle>
    </CardHeader>
    <CardContent className="text-sm">
      <ul className="space-y-1">
        <li className="hover:text-primary">
          <a href="/guide/stress-management">Stress Management</a>
        </li>
        <li className="hover:text-primary">
          <a href="/guide/mindfulness-basics">Mindfulness Basics</a>
        </li>
        <li className="hover:text-primary">
          <a href="/guide/building-resilience">Building Resilience</a>
        </li>
      </ul>
    </CardContent>
  </Card>
);

const QuickResourcesSection = () => (
  <Card>
    <CardHeader className="pb-2">
      <CardTitle className="text-base">Quick Links</CardTitle>
    </CardHeader>
    <CardContent className="text-sm">
      <ul className="space-y-1">
        <li className="hover:text-primary">
          <a href="https://www.7cups.com" target="_blank" rel="noopener noreferrer">7 Cups - Online Support</a>
        </li>
        <li className="hover:text-primary">
          <a href="https://www.headspace.com" target="_blank" rel="noopener noreferrer">Headspace - Meditation App</a>
        </li>
        <li className="hover:text-primary">
          <a href="https://www.online-therapy.com" target="_blank" rel="noopener noreferrer">Online-Therapy.com (20% off)</a>
        </li>
      </ul>
    </CardContent>
  </Card>
);

const ProgressSection = () => (
  <Card>
    <CardHeader className="pb-2">
      <CardTitle className="text-base">Your Progress</CardTitle>
    </CardHeader>
    <CardContent className="text-sm">
      <p className="text-muted-foreground mb-2">
        Complete more tests to get a comprehensive assessment.
      </p>
      <div className="flex items-center gap-2 mt-4">
        <Brain className="h-5 w-5 text-primary" />
        <span className="font-medium">Track your mental wellness</span>
      </div>
    </CardContent>
  </Card>
);

const NewsletterSignup = () => (
  <Card className="mb-4">
    <CardHeader className="pb-2">
      <CardTitle className="text-base">Join Our Newsletter</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground mb-3">
        Get mental health tips and resources delivered to your inbox.
      </p>
      <div className="flex flex-col gap-2">
        <input
          type="email"
          placeholder="Your email"
          className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm"
        />
        <Button size="sm" className="w-full">Subscribe</Button>
      </div>
    </CardContent>
  </Card>
);

const DisclosureSection = () => (
  <div className="mt-6 text-xs text-muted-foreground">
    <p className="mb-2">
      <strong>Disclaimer:</strong> MindProve is for educational purposes only and not a substitute for professional mental health treatment or medical advice.
    </p>
    <p>
      © {new Date().getFullYear()} MindProve. All rights reserved.
    </p>
  </div>
);
