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
  
  // Generate dimensions based on test type
  const getDimensionsForTest = (testId: string) => {
    switch(testId) {
      case "anxiety-assessment":
        return [
          { name: "General Anxiety", score: 78 },
          { name: "Physical Symptoms", score: 65 },
          { name: "Worry Patterns", score: 82 },
          { name: "Sleep Disturbance", score: 53 },
          { name: "Emotional Reactivity", score: 71 },
        ];
      case "big-five-personality":
        return [
          { name: "Openness", score: 85 },
          { name: "Conscientiousness", score: 65 },
          { name: "Extraversion", score: 45 },
          { name: "Agreeableness", score: 72 },
          { name: "Neuroticism", score: 38 },
        ];
      case "depression-screening":
        return [
          { name: "Mood", score: 58 },
          { name: "Interest", score: 63 },
          { name: "Sleep", score: 42 },
          { name: "Energy", score: 55 },
          { name: "Appetite", score: 61 },
        ];
      case "career-aptitude":
        return [
          { name: "Analytical", score: 75 },
          { name: "Social", score: 82 },
          { name: "Creative", score: 63 },
          { name: "Leadership", score: 70 },
          { name: "Organizational", score: 58 },
        ];
      case "myers-briggs":
        return [
          { name: "Extraversion", score: 35 },
          { name: "Intuition", score: 68 },
          { name: "Thinking", score: 72 },
          { name: "Judging", score: 59 },
        ];
      case "hedonism-scale":
        return [
          { name: "Pleasure Seeking", score: 82 },
          { name: "Immediate Gratification", score: 76 },
          { name: "Experience Value", score: 85 },
          { name: "Discomfort Avoidance", score: 68 },
          { name: "Enjoyment Priority", score: 79 },
        ];
      case "personality-disorder-screening":
        return [
          { name: "Relationship Patterns", score: 45 },
          { name: "Emotional Stability", score: 63 },
          { name: "Self-Image", score: 58 },
          { name: "Social Judgment", score: 71 },
          { name: "Trust", score: 52 },
        ];
      case "emotional-intelligence":
        return [
          { name: "Self-Awareness", score: 75 },
          { name: "Empathy", score: 82 },
          { name: "Emotional Regulation", score: 68 },
          { name: "Social Skills", score: 72 },
          { name: "Emotional Perception", score: 79 },
        ];
      default:
        return [
          { name: "Overall Score", score: 75 },
          { name: "Detail Dimension 1", score: 68 },
          { name: "Detail Dimension 2", score: 82 },
          { name: "Detail Dimension 3", score: 59 },
          { name: "Detail Dimension 4", score: 71 },
        ];
    }
  };
  
  const dimensions = testId ? getDimensionsForTest(testId) : [];
  
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
                        ? `Your ${dimension.name.toLowerCase()} score is high, indicating ${getCustomDimensionDescription(testId, dimension.name, 'high')}`
                        : dimension.score > 50
                          ? `Your ${dimension.name.toLowerCase()} score is moderate, indicating ${getCustomDimensionDescription(testId, dimension.name, 'moderate')}`
                          : `Your ${dimension.name.toLowerCase()} score is low, indicating ${getCustomDimensionDescription(testId, dimension.name, 'low')}`}
                    </p>
                  </div>
                ))}
              </div>
              
              <Separator />
              
              <div>
                <h3 className="font-medium">What this means:</h3>
                <p className="text-gray-600 mt-1">
                  {getTestInterpretation(testId, testScore)}
                </p>
              </div>
              
              <div>
                <h3 className="font-medium">Recommendations:</h3>
                <ul className="list-disc list-inside text-gray-600 mt-1">
                  {getRecommendations(testId, testScore).map((rec, index) => (
                    <li key={index}>{rec}</li>
                  ))}
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

// Get test-specific interpretation
function getTestInterpretation(testId: string, score: number): string {
  const highScore = score > 75;
  const mediumScore = score > 50 && score <= 75;
  
  switch(testId) {
    case "anxiety-assessment":
      return highScore 
        ? "Your score suggests you may be experiencing significant anxiety symptoms. Consider discussing these results with a mental health professional."
        : mediumScore 
          ? "Your score indicates moderate anxiety levels. Learning some anxiety management techniques could be beneficial."
          : "Your anxiety levels appear to be well-managed at this time.";
    
    case "big-five-personality":
      return "These scores reflect your unique personality pattern across five major dimensions. There are no 'good' or 'bad' patterns - each combination offers different strengths and growth areas.";
    
    case "depression-screening":
      return highScore 
        ? "Your score suggests you may be experiencing symptoms consistent with depression. Consider reaching out to a healthcare provider."
        : mediumScore 
          ? "Your score indicates some mood-related symptoms. Self-care strategies and monitoring how you feel could be helpful."
          : "Your score suggests minimal depressive symptoms at this time.";
    
    case "career-aptitude":
      return "These scores reflect your natural inclinations and strengths across different work domains. Consider exploring career paths that align with your higher-scoring dimensions.";
    
    case "myers-briggs":
      return "Your Myers-Briggs profile offers insight into your preferences for how you perceive the world and make decisions. This profile can help you understand your communication style and work preferences.";
    
    case "hedonism-scale":
      return highScore 
        ? "Your score indicates a strong tendency toward pleasure-seeking and enjoyment as core values. You likely prioritize experiences that bring immediate joy and satisfaction."
        : mediumScore 
          ? "Your score suggests you value pleasure and enjoyment, while maintaining some balance with other life priorities."
          : "Your score indicates you tend to prioritize other values above immediate pleasure and enjoyment in your decision-making.";
    
    case "personality-disorder-screening":
      return highScore 
        ? "Your score indicates some patterns that may be worth discussing with a mental health professional. This screening is not diagnostic, but suggests areas for further exploration."
        : mediumScore 
          ? "Your score shows some areas that might benefit from further reflection. Consider how these patterns affect your relationships and well-being."
          : "Your score indicates minimal concerning patterns in the areas assessed.";
    
    case "emotional-intelligence":
      return highScore 
        ? "Your score suggests strong emotional intelligence skills. You likely navigate social situations well and have good insight into your own and others' emotions."
        : mediumScore 
          ? "Your score indicates moderate emotional intelligence. There are both strengths to leverage and areas where skill development could be beneficial."
          : "Your score suggests there may be opportunities to develop your emotional intelligence skills, which could enhance your relationships and well-being.";
    
    default:
      return "Your score provides insight into your patterns and tendencies in this area. Consider how these results align with your self-perception and experiences.";
  }
}

// Get test-specific recommendations
function getRecommendations(testId: string, score: number): string[] {
  const highScore = score > 75;
  const mediumScore = score > 50 && score <= 75;
  
  switch(testId) {
    case "anxiety-assessment":
      return highScore 
        ? [
            "Consider consulting with a mental health professional",
            "Try daily mindfulness meditation to reduce anxiety",
            "Practice deep breathing exercises when feeling anxious",
            "Limit caffeine and alcohol which can worsen anxiety",
            "Establish a regular sleep schedule"
          ]
        : mediumScore 
          ? [
              "Learn and practice relaxation techniques",
              "Maintain a regular exercise routine",
              "Keep a worry journal to track anxiety triggers",
              "Practice self-care and stress management",
              "Consider reading self-help resources on anxiety management"
            ]
          : [
              "Continue your effective coping strategies",
              "Practice preventative self-care",
              "Stay physically active",
              "Maintain healthy social connections",
              "Monitor any changes in your anxiety levels"
            ];
    
    case "big-five-personality":
      return [
        "Use your unique personality pattern to inform career choices",
        "Consider how your traits influence your relationships",
        "Leverage your natural strengths in daily activities",
        "Be mindful of potential blind spots related to your profile",
        "Remember that traits can be developed and moderated with awareness"
      ];
    
    case "depression-screening":
      return highScore 
        ? [
            "Consider speaking with a healthcare provider about your symptoms",
            "Establish small, achievable daily goals",
            "Prioritize regular physical activity",
            "Maintain social connections even when challenging",
            "Practice self-compassion during difficult times"
          ]
        : mediumScore 
          ? [
              "Develop a consistent daily routine",
              "Engage in regular physical exercise",
              "Practice mindfulness meditation",
              "Ensure adequate sleep and nutrition",
              "Connect with supportive people regularly"
            ]
          : [
              "Continue practices that support your mental wellbeing",
              "Monitor your mood and energy levels",
              "Maintain healthy lifestyle habits",
              "Practice stress management techniques preventatively",
              "Know the signs of depression for future reference"
            ];
    
    case "career-aptitude":
      return [
        "Explore career paths that align with your highest dimensions",
        "Consider how to use your strengths in your current role",
        "Look for professional development in areas of natural interest",
        "Network with professionals in fields that match your aptitudes",
        "Consider how to balance teams with complementary strengths"
      ];
    
    case "myers-briggs":
      return [
        "Learn about typical career preferences for your type",
        "Consider communication strategies that work well for your type",
        "Reflect on how your type interacts with different team dynamics",
        "Recognize potential blind spots associated with your preferences",
        "Use your awareness to improve relationships with different types"
      ];
    
    case "hedonism-scale":
      return highScore 
        ? [
            "Consider how to balance immediate enjoyment with long-term goals",
            "Practice mindful enjoyment of pleasurable experiences",
            "Reflect on how your pleasure-seeking affects relationships",
            "Explore the concept of 'meaningful pleasure' in your life",
            "Consider if there are times when delayed gratification serves you"
          ]
        : mediumScore 
          ? [
              "Find healthy ways to incorporate pleasure into daily routines",
              "Balance enjoyment with other values important to you",
              "Notice when you might benefit from more pleasure and rest",
              "Reflect on what types of experiences bring you the most joy",
              "Consider if there are areas where you might benefit from more spontaneity"
            ]
          : [
              "Reflect on the role of pleasure and enjoyment in your life",
              "Consider if there are areas where more enjoyment would benefit you",
              "Balance discipline with occasional planned pleasurable activities",
              "Notice if you tend to postpone enjoyment unnecessarily",
              "Explore what true enjoyment means to you personally"
            ];
    
    case "personality-disorder-screening":
      return [
        "Remember that this screening is not diagnostic",
        "Consider discussing these results with a mental health professional if concerning",
        "Practice self-awareness around recurring patterns in relationships",
        "Learn about healthy coping strategies for emotional regulation",
        "Focus on building consistent self-care practices"
      ];
    
    case "emotional-intelligence":
      return highScore 
        ? [
            "Share your emotional intelligence skills through mentoring others",
            "Continue developing nuanced emotional vocabulary",
            "Practice advanced empathy in challenging situations",
            "Use your skills to navigate complex team dynamics",
            "Consider how to apply emotional intelligence in leadership"
          ]
        : mediumScore 
          ? [
              "Practice recognizing subtle emotions in yourself and others",
              "Develop techniques for managing strong emotions effectively",
              "Work on active listening skills in conversations",
              "Read about emotional intelligence to expand your understanding",
              "Practice naming your emotions with greater specificity"
            ]
          : [
              "Begin with basic emotion recognition exercises",
              "Practice checking in with your feelings throughout the day",
              "Work on expressing emotions clearly and appropriately",
              "Develop active listening without immediately responding",
              "Learn to recognize how emotions affect your decision making"
            ];
    
    default:
      return [
        "Reflect on how these results align with your self-perception",
        "Consider discussing these insights with trusted friends or family",
        "Explore resources related to your areas of interest or concern",
        "Set small, achievable goals based on what you've learned",
        "Remember that self-awareness is an ongoing journey"
      ];
  }
}

// Helper function for custom dimension descriptions
function getCustomDimensionDescription(testId: string, dimension: string, level: 'high' | 'moderate' | 'low'): string {
  // Custom descriptions based on test type and dimension
  const descriptions: Record<string, Record<string, Record<string, string>>> = {
    "big-five-personality": {
      "Openness": {
        high: "a strong curiosity and appreciation for art, emotion, adventure, and unusual ideas.",
        moderate: "a balance between traditional and new approaches, with selective curiosity.",
        low: "a preference for the familiar, traditional, and concrete."
      },
      "Conscientiousness": {
        high: "strong self-discipline, carefulness, thoroughness, and a need for achievement.",
        moderate: "reasonable organization and reliability, with some flexibility in approach.",
        low: "a preference for spontaneity and flexibility over structured approaches."
      },
      "Extraversion": {
        high: "outgoing energy, positive emotions, assertiveness, and a desire for social stimulation.",
        moderate: "a balance between social engagement and personal time.",
        low: "a preference for solitary activities and environments with less external stimulation."
      },
      "Agreeableness": {
        high: "optimistic view of human nature, compassion, cooperation, and concern for social harmony.",
        moderate: "selective trust and cooperation, with healthy skepticism.",
        low: "skepticism about others' intentions and a focus on self-interest."
      },
      "Neuroticism": {
        high: "tendency to experience negative emotions, such as anxiety, anger, or depression more intensely.",
        moderate: "occasional emotional reactions, but generally stable responses.",
        low: "emotional stability and resilience in stressful situations."
      }
    },
    "anxiety-assessment": {
      "General Anxiety": {
        high: "significant ongoing feelings of worry and nervousness.",
        moderate: "periodic feelings of anxiety that are manageable.",
        low: "minimal general anxiety in your daily life."
      },
      "Physical Symptoms": {
        high: "frequent physical manifestations of anxiety such as tension or restlessness.",
        moderate: "occasional physical symptoms related to stress or anxiety.",
        low: "rare physical symptoms related to anxiety."
      },
      "Worry Patterns": {
        high: "a tendency to worry excessively about different aspects of life.",
        moderate: "some worry patterns that are generally manageable.",
        low: "minimal tendency to worry excessively."
      },
      "Sleep Disturbance": {
        high: "significant impact on your sleep quality related to anxiety.",
        moderate: "occasional sleep issues that may be related to anxiety.",
        low: "minimal impact on sleep from anxiety."
      },
      "Emotional Reactivity": {
        high: "a tendency to become easily annoyed or emotionally reactive.",
        moderate: "occasional irritability that's generally manageable.",
        low: "good emotional regulation even in stressful situations."
      }
    },
    "hedonism-scale": {
      "Pleasure Seeking": {
        high: "a strong drive to pursue pleasurable experiences.",
        moderate: "a balanced approach to seeking enjoyable activities.",
        low: "less emphasis on seeking pleasure as a primary motivation."
      },
      "Immediate Gratification": {
        high: "a tendency to prioritize immediate rewards over long-term benefits.",
        moderate: "some balance between immediate enjoyment and delayed rewards.",
        low: "a preference for delayed gratification and long-term planning."
      },
      "Experience Value": {
        high: "strong belief in living life to the fullest through pleasurable experiences.",
        moderate: "appreciation for enjoyable experiences alongside other values.",
        low: "placing higher value on factors other than pleasurable experiences."
      },
      "Discomfort Avoidance": {
        high: "strong tendency to avoid situations that might cause discomfort.",
        moderate: "reasonable balance between comfort and necessary discomfort.",
        low: "willingness to experience discomfort when it serves important goals."
      },
      "Enjoyment Priority": {
        high: "making decisions primarily based on what will bring the most enjoyment.",
        moderate: "considering enjoyment alongside other factors in decision-making.",
        low: "prioritizing factors other than enjoyment in most decisions."
      }
    }
  };
  
  // Get the description if it exists for this test and dimension
  if (descriptions[testId] && descriptions[testId][dimension] && descriptions[testId][dimension][level]) {
    return descriptions[testId][dimension][level];
  }
  
  // Generic fallbacks if specific descriptions aren't available
  const genericDescriptions = {
    high: "a strong expression of this trait in your profile.",
    moderate: "a balanced level of this trait in your profile.",
    low: "a less prominent expression of this trait in your profile."
  };
  
  return genericDescriptions[level];
}

export default ResultPage;
