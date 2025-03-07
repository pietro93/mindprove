
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TestCard } from "@/components/tests/TestCard";
import { popularTests } from "@/data/tests";
import { Brain, HeartPulse, Leaf, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 gradient-bg">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <Leaf className="h-12 w-12 text-primary mb-2" />
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                <span className="bg-gradient-to-r from-primary to-wellness-400 bg-clip-text text-transparent">
                  MindProve
                </span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                Free mental health assessments, personality tests, and guides to help you understand yourself better.
              </p>
            </div>
            <div className="space-x-4 pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/tests">Take a Test</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                <Link to="/guides">Explore Guides</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Tests Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                <span className="bg-gradient-to-r from-primary to-wellness-400 bg-clip-text text-transparent">
                  Popular Tests
                </span>
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Discover our most popular assessments and learn more about yourself.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {popularTests.slice(0, 3).map((test) => (
                <TestCard key={test.id} test={test} />
              ))}
            </div>
            <Button asChild variant="outline" className="mt-8 border-primary text-primary hover:bg-primary/10">
              <Link to="/tests">View All Tests</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 bg-accent">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              <span className="bg-gradient-to-r from-primary to-wellness-400 bg-clip-text text-transparent">
                Why MindProve?
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-12">
            <Card className="border-0 shadow-sm card-hover">
              <CardHeader className="text-center">
                <Brain className="h-12 w-12 text-primary mx-auto mb-2" />
                <CardTitle>Scientifically Validated</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Our tests are based on established psychological research and validated methodologies.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm card-hover">
              <CardHeader className="text-center">
                <HeartPulse className="h-12 w-12 text-primary mx-auto mb-2" />
                <CardTitle>Save Your Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Create an account to save your test results and track your progress over time.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm card-hover">
              <CardHeader className="text-center">
                <Sparkles className="h-12 w-12 text-primary mx-auto mb-2" />
                <CardTitle>Share Your Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Easily share your test results on social media or with your healthcare provider.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center mt-12">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link to="/resources">Explore Resources</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
