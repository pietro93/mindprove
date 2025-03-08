
import { useLocation, useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Share2, User } from "lucide-react";
import { tests } from "@/data/tests";
import { toast } from "@/hooks/use-toast";
import { TestResultChart } from "@/components/tests/TestResultChart";
import { Progress } from "@/components/ui/progress";

const ResultPage = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const { testId, testTitle, answers } = location.state || {};
  
  // Generate results from answers
  const testScore = 75; // Score between 0-100
  
  // Generate mock dimension scores for more detailed results
  const dimensions = [
    { name: "Openness", score: 85 },
    { name: "Conscientiousness", score: 65 },
    { name: "Extraversion", score: 45 },
    { name: "Agreeableness", score: 72 },
    { name: "Neuroticism", score: 38 },
  ];
  
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
              <CardDescription>Here's a detailed breakdown of your results</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Overall Score Visualization */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Overall Score</h3>
                <div className="relative pt-1">
                  <Progress value={testScore} className="h-4" />
                  <div className="flex justify-between text-xs mt-1">
                    <span>0</span>
                    <span>25</span>
                    <span>50</span>
                    <span>75</span>
                    <span>100</span>
                  </div>
                </div>
              </div>
              
              {/* Radar Chart for Dimensions */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Dimension Breakdown</h3>
                <div className="h-64 w-full">
                  <TestResultChart dimensions={dimensions} />
                </div>
              </div>
              
              {/* Dimension Details */}
              <div className="space-y-4">
                {dimensions.map((dimension) => (
                  <div key={dimension.name} className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{dimension.name}</span>
                      <span className="text-sm font-bold">{dimension.score}%</span>
                    </div>
                    <Progress value={dimension.score} className="h-2" />
                    <p className="text-sm text-gray-500 mt-1">
                      {dimension.score > 75 
                        ? `Your ${dimension.name.toLowerCase()} score is high, indicating ${getDimensionDescription(dimension.name, 'high')}`
                        : dimension.score > 50
                          ? `Your ${dimension.name.toLowerCase()} score is moderate, indicating ${getDimensionDescription(dimension.name, 'moderate')}`
                          : `Your ${dimension.name.toLowerCase()} score is low, indicating ${getDimensionDescription(dimension.name, 'low')}`}
                    </p>
                  </div>
                ))}
              </div>
              
              <Separator />
              
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
            </CardContent>
            <CardFooter className="flex flex-wrap gap-3">
              <Button onClick={handleShare} className="flex-1" variant="outline">
                <Share2 className="mr-2 h-4 w-4" />
                Share Results
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

// Helper function to generate descriptions for each dimension
function getDimensionDescription(dimension: string, level: 'high' | 'moderate' | 'low'): string {
  const descriptions = {
    Openness: {
      high: "a strong curiosity and appreciation for art, emotion, adventure, and unusual ideas.",
      moderate: "a balance between traditional and new approaches, with selective curiosity.",
      low: "a preference for the familiar, traditional, and concrete."
    },
    Conscientiousness: {
      high: "strong self-discipline, carefulness, thoroughness, and a need for achievement.",
      moderate: "reasonable organization and reliability, with some flexibility in approach.",
      low: "a preference for spontaneity and flexibility over structured approaches."
    },
    Extraversion: {
      high: "outgoing energy, positive emotions, assertiveness, and a desire for social stimulation.",
      moderate: "a balance between social engagement and personal time.",
      low: "a preference for solitary activities and environments with less external stimulation."
    },
    Agreeableness: {
      high: "optimistic view of human nature, compassion, cooperation, and concern for social harmony.",
      moderate: "selective trust and cooperation, with healthy skepticism.",
      low: "skepticism about others' intentions and a focus on self-interest."
    },
    Neuroticism: {
      high: "tendency to experience negative emotions, such as anxiety, anger, or depression more intensely.",
      moderate: "occasional emotional reactions, but generally stable responses.",
      low: "emotional stability and resilience in stressful situations."
    }
  };
  
  return descriptions[dimension as keyof typeof descriptions][level];
}

export default ResultPage;
