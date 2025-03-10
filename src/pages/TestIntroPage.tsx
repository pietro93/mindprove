
import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PageLayout } from "@/components/layout/PageLayout";
import { tests } from "@/data/tests";
import { ArrowRight, Tag, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const TestIntroPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const test = tests.find((t) => t.id === id);
  const [loading, setLoading] = useState(false);
  
  // Mock user data - in a real app, this would come from auth
  const user = {
    isLoggedIn: true,
    completedTests: ["anxiety-assessment"],
    lastTakenDates: {
      "anxiety-assessment": "Jan 25, 2024"
    }
  };
  
  const hasCompletedTest = user.isLoggedIn && user.completedTests.includes(id || "");
  const lastTakenDate = user.isLoggedIn ? user.lastTakenDates[id || ""] : null;
  
  if (!test) {
    return (
      <PageLayout>
        <div className="flex-1 flex items-center justify-center p-6">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Test Not Found</CardTitle>
              <CardDescription>The test you're looking for doesn't exist.</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild className="w-full">
                <Link to="/tests">Browse Tests</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </PageLayout>
    );
  }
  
  const handleStartTest = () => {
    setLoading(true);
    setTimeout(() => {
      navigate(`/test/${test.id}`);
    }, 300);
  };
  
  return (
    <PageLayout>
      <div className="w-full py-8 px-4 md:px-6 lg:pr-[320px]">
        <div className="max-w-2xl mx-auto">
          <Link 
            to="/tests" 
            className="flex items-center text-sm text-gray-500 hover:text-gray-700 mb-4"
          >
            <ArrowRight className="h-4 w-4 mr-1 rotate-180" />
            Back to Tests
          </Link>
          
          <motion.div 
            className="flex flex-col md:flex-row gap-6 items-start mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-full md:w-48 h-40 bg-secondary rounded-lg flex items-center justify-center">
              <motion.img 
                src={test.illustration} 
                alt={test.title} 
                className="w-32 h-32 object-contain"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge variant="default" className="capitalize">
                  {test.category.replace('-', ' ')}
                </Badge>
                
                {hasCompletedTest && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
                    Completed
                    {lastTakenDate && <span className="ml-1 opacity-75">• Last taken {lastTakenDate}</span>}
                  </Badge>
                )}
              </div>
              
              <h1 className="text-3xl font-bold mb-2">{test.title}</h1>
              <p className="text-gray-500 text-lg">{test.shortDescription}</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Info className="h-5 w-5 mr-2" />
                  About This Test
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{test.fullDescription}</p>
                
                <div className="mt-6">
                  <h3 className="text-sm font-medium mb-2">Related Topics</h3>
                  <div className="flex flex-wrap gap-2">
                    {test.tags.map(tag => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>What to Expect</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">1</div>
                    <div>
                      <p className="font-medium">Quick & Easy</p>
                      <p className="text-gray-500">This test contains {test.questions.length} simple questions that you can answer at your own pace.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">2</div>
                    <div>
                      <p className="font-medium">Simple Format</p>
                      <p className="text-gray-500">Questions have multiple options. Just pick the answer that feels right to you - there are no right or wrong answers!</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">3</div>
                    <div>
                      <p className="font-medium">Helpful Insights</p>
                      <p className="text-gray-500">After finishing, you'll get personalized insights about yourself and suggestions that might be helpful.</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button 
              size="lg" 
              onClick={handleStartTest} 
              disabled={loading}
              className="px-8 hover:scale-105 transition-transform"
            >
              {loading ? "Loading..." : "Start Test"}
              {!loading && <ArrowRight className="ml-2 h-5 w-5" />}
            </Button>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
};

export default TestIntroPage;
