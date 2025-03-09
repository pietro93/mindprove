import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PageLayout } from "@/components/layout/PageLayout";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Line } from "recharts";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Calendar } from "lucide-react";

const DashboardPage = () => {
  const navigate = useNavigate();
  
  // Mock user data
  const user = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    joinDate: "January 15, 2023",
    testsCompleted: 8,
    guidesRead: 5,
  };
  
  // Mock test history data
  const testHistory = [
    { id: "result-1", testName: "Anxiety Assessment", date: "2023-06-15", score: 65 },
    { id: "result-2", testName: "Big Five Personality", date: "2023-06-02", score: 78 },
    { id: "result-3", testName: "Depression Screening", date: "2023-05-20", score: 45 },
    { id: "result-4", testName: "Anxiety Assessment", date: "2023-05-05", score: 72 },
    { id: "result-5", testName: "Career Aptitude", date: "2023-04-18", score: 81 },
  ];
  
  // Mock chart data for weekly mood
  const moodData = [
    { day: "Mon", score: 65 },
    { day: "Tue", score: 72 },
    { day: "Wed", score: 68 },
    { day: "Thu", score: 70 },
    { day: "Fri", score: 75 },
    { day: "Sat", score: 82 },
    { day: "Sun", score: 78 },
  ];

  // Mock saved tests
  const savedTests = [
    { id: "anxiety-assessment", name: "Anxiety Assessment", progress: 0 },
    { id: "big-five-personality", name: "Big Five Personality Test", progress: 40 },
    { id: "depression-screening", name: "Depression Screening", progress: 60 },
  ];
  
  // Mock recommended tests
  const recommendedTests = [
    { id: "career-aptitude", name: "Career Aptitude Test" },
    { id: "emotional-intelligence", name: "Emotional Intelligence Assessment" },
    { id: "stress-assessment", name: "Stress Level Assessment" },
  ];
  
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-gray-500">Welcome back, {user.name}</p>
          </div>
          <Button onClick={() => navigate("/tests")}>Take a New Test</Button>
        </div>
        
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="results">Test Results</TabsTrigger>
            <TabsTrigger value="history">Activity History</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Tests Completed</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{user.testsCompleted}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Guides Read</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{user.guidesRead}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Member Since</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4 text-gray-500" />
                  <div>{user.joinDate}</div>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Mood Tracking</CardTitle>
                  <CardDescription>Your mood scores for the past week</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={moodData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis domain={[0, 100]} />
                        <Tooltip />
                        <Bar dataKey="score" fill="#8884d8" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Saved Tests</CardTitle>
                    <CardDescription>Continue where you left off</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {savedTests.map((test) => (
                        <div key={test.id}>
                          <div className="flex justify-between text-sm mb-1">
                            <span>{test.name}</span>
                            <span>{test.progress}% complete</span>
                          </div>
                          <Progress value={test.progress} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="/tests">View All Tests</a>
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Recommended For You</CardTitle>
                    <CardDescription>Based on your previous activities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {recommendedTests.map((test) => (
                        <div key={test.id} className="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
                          <span>{test.name}</span>
                          <Button variant="ghost" size="sm" asChild>
                            <a href={`/test/${test.id}`}>Take Test</a>
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="results">
            <Card>
              <CardHeader>
                <CardTitle>Your Test Results</CardTitle>
                <CardDescription>History of all your completed assessments</CardDescription>
              </CardHeader>
              <CardContent>
                {testHistory.length > 0 ? (
                  <div className="space-y-4">
                    {testHistory.map((result) => (
                      <div key={result.id} className="border rounded-lg p-4">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                          <div>
                            <h3 className="font-medium">{result.testName}</h3>
                            <p className="text-sm text-gray-500">Completed on {new Date(result.date).toLocaleDateString()}</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-right">
                              <div className="font-semibold">Score: {result.score}/100</div>
                            </div>
                            <Button variant="outline" size="sm" asChild>
                              <a href={`/result/${result.id}`}>View Details</a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <h3 className="font-medium text-lg">No test results yet</h3>
                    <p className="text-gray-500 mt-1">Take your first assessment to see results here</p>
                    <Button className="mt-4" asChild>
                      <a href="/tests">Take a Test</a>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Activity History</CardTitle>
                <CardDescription>Your recent activity on MindProve</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-4 ml-2">
                    <h3 className="font-medium">Completed Anxiety Assessment</h3>
                    <p className="text-sm text-gray-500">June 15, 2023</p>
                  </div>
                  <div className="border-l-2 border-primary pl-4 ml-2">
                    <h3 className="font-medium">Read Guide: Effective Stress Reduction Techniques</h3>
                    <p className="text-sm text-gray-500">June 10, 2023</p>
                  </div>
                  <div className="border-l-2 border-primary pl-4 ml-2">
                    <h3 className="font-medium">Started Big Five Personality Test</h3>
                    <p className="text-sm text-gray-500">June 5, 2023</p>
                  </div>
                  <div className="border-l-2 border-primary pl-4 ml-2">
                    <h3 className="font-medium">Completed Depression Screening</h3>
                    <p className="text-sm text-gray-500">May 28, 2023</p>
                  </div>
                  <div className="border-l-2 border-primary pl-4 ml-2">
                    <h3 className="font-medium">Account Created</h3>
                    <p className="text-sm text-gray-500">May 15, 2023</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
};

export default DashboardPage;
