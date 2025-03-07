
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TestCard } from "@/components/tests/TestCard";
import { popularTests } from "@/data/tests";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-violet-50 to-indigo-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                MindProve
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Free mental health assessments, personality tests, and guides to help you understand yourself better.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link to="/tests">Take a Test</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
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
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Popular Tests</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Discover our most popular assessments and learn more about yourself.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {popularTests.slice(0, 3).map((test) => (
                <TestCard key={test.id} test={test} />
              ))}
            </div>
            <Button asChild variant="outline" className="mt-8">
              <Link to="/tests">View All Tests</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-12">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Scientifically Validated</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Our tests are based on established psychological research and validated methodologies.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Save Your Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Create an account to save your test results and track your progress over time.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Share Your Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Easily share your test results on social media or with your healthcare provider.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
