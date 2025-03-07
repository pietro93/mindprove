
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { tests } from "@/data/tests";
import { toast } from "@/hooks/use-toast";
import { Clock } from "lucide-react";

const TestPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const test = tests.find((t) => t.id === id);
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  if (!test) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center p-6">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Test Not Found</CardTitle>
              <CardDescription>The test you're looking for doesn't exist.</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild className="w-full">
                <a href="/tests">Browse Tests</a>
              </Button>
            </CardFooter>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  const currentQuestion = test.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / test.questions.length) * 100;

  const handleOptionSelect = (value: string) => {
    setAnswers({ ...answers, [currentQuestion.id]: value });
  };

  const handleNext = () => {
    if (!answers[currentQuestion.id]) {
      toast({
        title: "Please select an answer",
        description: "You need to select an option before proceeding.",
        variant: "destructive",
      });
      return;
    }

    if (currentQuestionIndex < test.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setLoading(true);
      // Simulate result calculation
      setTimeout(() => {
        const resultId = `result-${Date.now()}`; 
        navigate(`/result/${resultId}`, { state: { 
          testId: test.id, 
          testTitle: test.title,
          answers 
        }});
      }, 1500);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl font-bold">{test.title}</h1>
            <div className="flex items-center mt-2 text-sm text-gray-500">
              <Clock className="h-4 w-4 mr-1" />
              <span>{test.timeMinutes} minutes</span>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex justify-between text-sm mb-2">
              <span>Question {currentQuestionIndex + 1} of {test.questions.length}</span>
              <span>{progress.toFixed(0)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">{currentQuestion.text}</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup 
                value={answers[currentQuestion.id]} 
                onValueChange={handleOptionSelect}
              >
                {currentQuestion.options.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2 py-2">
                    <RadioGroupItem value={option.id} id={option.id} />
                    <Label htmlFor={option.id}>{option.text}</Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button 
                variant="outline" 
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
              >
                Previous
              </Button>
              <Button 
                onClick={handleNext}
                disabled={loading}
              >
                {currentQuestionIndex === test.questions.length - 1 ? (loading ? "Processing..." : "Submit") : "Next"}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TestPage;
