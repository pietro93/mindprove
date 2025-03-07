
import { useLocation, useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Share2, Download, User } from "lucide-react";
import { tests } from "@/data/tests";
import { toast } from "@/hooks/use-toast";

const ResultPage = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const { testId, testTitle, answers } = location.state || {};
  
  // Generate a fake result
  const testScore = 75; // Score between 0-100
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `My ${testTitle} Results`,
        text: `I just completed the ${testTitle} on MindProve and scored ${testScore}!`,
        url: window.location.href,
      }).catch(() => {
        toast({
          title: "Sharing failed",
          description: "Could not share your results.",
          variant: "destructive",
        });
      });
    } else {
      navigator.clipboard.writeText(window.location.href).then(() => {
        toast({
          title: "Link copied",
          description: "Result link copied to clipboard!",
        });
      });
    }
  };
  
  const handleDownload = () => {
    toast({
      title: "Download started",
      description: "Your results will be downloaded as a PDF.",
    });
    // In a real app, this would generate and download a PDF
  };
  
  const handleSaveToAccount = () => {
    // Check if user is logged in
    const isLoggedIn = false; // This would be a real auth check
    
    if (isLoggedIn) {
      toast({
        title: "Results saved",
        description: "Your results have been saved to your account.",
      });
    } else {
      toast({
        title: "Login required",
        description: "Please log in or create an account to save your results.",
        variant: "destructive",
      });
    }
  };

  if (!testId || !testTitle) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center p-6">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Result Not Found</CardTitle>
              <CardDescription>The test result you're looking for doesn't exist or has expired.</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild className="w-full">
                <Link to="/tests">Take a Test</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  const test = tests.find(t => t.id === testId);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">{testTitle} Results</h1>
            <p className="text-gray-500 mt-2">Completed on {new Date().toLocaleDateString()}</p>
          </div>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Your Score: {testScore}/100</CardTitle>
              <CardDescription>Here's how to interpret your results</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">What this means:</h3>
                  <p className="text-gray-600 mt-1">
                    {testScore > 75 
                      ? "Your score indicates a high level in this assessment. This suggests that you have strong traits or tendencies in the measured areas."
                      : testScore > 50
                        ? "Your score is in the moderate range, suggesting balanced traits or tendencies in the measured areas."
                        : "Your score is in the lower range, which may indicate less prominent traits or tendencies in the measured areas."}
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium">Recommendations:</h3>
                  <ul className="list-disc list-inside text-gray-600 mt-1">
                    <li>Continue to develop self-awareness through regular reflection</li>
                    <li>Consider exploring related resources in our guides section</li>
                    <li>Take follow-up assessments to track changes over time</li>
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-3">
              <Button onClick={handleShare} className="flex-1" variant="outline">
                <Share2 className="mr-2 h-4 w-4" />
                Share Results
              </Button>
              <Button onClick={handleDownload} className="flex-1" variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
              <Button onClick={handleSaveToAccount} className="flex-1">
                <User className="mr-2 h-4 w-4" />
                Save to Account
              </Button>
            </CardFooter>
          </Card>
          
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">What's Next?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Explore Related Tests</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Discover more about yourself with our other assessments.</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/tests">Browse Tests</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Read Our Guides</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Learn practical strategies based on your results.</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/guides">View Guides</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResultPage;
