
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Clock, BookOpen, ArrowRight, CheckCircle2, Trophy, Award } from "lucide-react";
import { guides } from "@/data/guides";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

const GuidesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const navigate = useNavigate();
  
  // Get unique courses from guides
  const courses = [...new Set(guides.map(guide => guide.course))];
  
  // Filter guides by search and selected course
  const filteredGuides = guides.filter(guide => {
    const matchesSearch = guide.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          guide.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCourse = selectedCourse ? guide.course === selectedCourse : true;
    return matchesSearch && matchesCourse;
  });
  
  // Group guides by course
  const guidesByCourse = courses.map(course => {
    return {
      course,
      guides: guides
        .filter(guide => guide.course === course)
        .sort((a, b) => (a.order || 0) - (b.order || 0))
    };
  });
  
  // Demo progress data - in a real app, this would come from a database
  const courseProgress = {
    'DBT': 0.4, // 40% complete
    'CBT': 0.2, // 20% complete
  };
  
  // Demo badges data - in a real app, this would come from a database
  const userBadges = [
    { id: 1, title: 'DBT Foundations', description: 'Completed the DBT Introduction module', icon: 'mindfulness' },
    { id: 2, title: 'Mindfulness Master', description: 'Completed all mindfulness modules', icon: 'emotional' },
  ];
  
  const toggleSignIn = () => {
    setIsSignedIn(!isSignedIn);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">Mental Health Courses</h1>
              <p className="text-gray-600 mt-2 max-w-2xl">
                Evidence-based therapy skills courses to manage emotions, 
                improve relationships, and build a life worth living
              </p>
            </div>
            <Button onClick={toggleSignIn} variant="ghost">
              {isSignedIn ? "Sign Out" : "Sign In"}
            </Button>
          </div>
          
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search courses and modules..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <Tabs defaultValue="courses" className="mb-8">
            <TabsList className="w-full max-w-md mx-auto">
              <TabsTrigger value="courses" className="flex-1">Course Library</TabsTrigger>
              {isSignedIn && (
                <TabsTrigger value="progress" className="flex-1">Your Progress</TabsTrigger>
              )}
              {isSignedIn && (
                <TabsTrigger value="badges" className="flex-1">Your Badges</TabsTrigger>
              )}
            </TabsList>
            
            <TabsContent value="courses">
              {selectedCourse ? (
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" onClick={() => setSelectedCourse(null)}>
                      <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                      Back to all courses
                    </Button>
                    <h2 className="text-xl font-semibold">{selectedCourse} Course Modules</h2>
                  </div>
                  {isSignedIn && courseProgress[selectedCourse as keyof typeof courseProgress] && (
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full" 
                          style={{ width: `${courseProgress[selectedCourse as keyof typeof courseProgress] * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600">
                        {Math.round(courseProgress[selectedCourse as keyof typeof courseProgress] * 100)}% complete
                      </span>
                    </div>
                  )}
                </div>
              ) : null}
              
              {!selectedCourse ? (
                // Show course cards when no course is selected
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {guidesByCourse.map((courseDef) => {
                    const firstGuide = courseDef.guides[0];
                    return (
                      <Card key={courseDef.course} className="overflow-hidden hover:shadow-md transition-all">
                        <CardHeader className="pb-4">
                          <div className="flex justify-between items-start">
                            <Badge variant="outline" className="bg-primary/5">{courseDef.guides.length} modules</Badge>
                            {isSignedIn && courseProgress[courseDef.course as keyof typeof courseProgress] && (
                              <div className="flex items-center gap-1 text-xs text-gray-500">
                                <div className="h-1.5 w-16 bg-gray-200 rounded-full overflow-hidden">
                                  <div 
                                    className="h-full bg-primary rounded-full" 
                                    style={{ width: `${courseProgress[courseDef.course as keyof typeof courseProgress] * 100}%` }}
                                  ></div>
                                </div>
                                <span>
                                  {Math.round(courseProgress[courseDef.course as keyof typeof courseProgress] * 100)}%
                                </span>
                              </div>
                            )}
                          </div>
                          <div className="flex items-start gap-3 mt-3">
                            {firstGuide.illustrationPath && (
                              <img 
                                src={firstGuide.illustrationPath} 
                                alt={courseDef.course} 
                                className="w-12 h-12 object-contain flex-shrink-0"
                              />
                            )}
                            <div>
                              <CardTitle className="text-xl">{courseDef.course}</CardTitle>
                              <CardDescription className="mt-1">
                                {courseDef.guides[0].description}
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="text-sm text-gray-700">
                            <div className="flex items-start gap-2 mb-2">
                              <BookOpen className="h-4 w-4 mt-0.5 text-primary" />
                              <div>
                                <strong>First module:</strong> {courseDef.guides[0].title}
                              </div>
                            </div>
                            <div className="flex items-start gap-2">
                              <Clock className="h-4 w-4 mt-0.5 text-primary" />
                              <div>
                                <strong>Total reading time:</strong> {courseDef.guides.reduce((total, guide) => total + guide.readingTime, 0)} minutes
                              </div>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="flex gap-2">
                          <Button 
                            asChild 
                            className="flex-1"
                          >
                            <Link to={`/guide/${courseDef.guides[0].id}`}>
                              Start Course
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                          <Button 
                            variant="outline" 
                            onClick={() => setSelectedCourse(courseDef.course)}
                            className="flex-1"
                          >
                            View Modules
                          </Button>
                        </CardFooter>
                      </Card>
                    );
                  })}
                </div>
              ) : (
                // Show modules when a course is selected
                <div className="space-y-6">
                  {filteredGuides
                    .filter(guide => guide.course === selectedCourse)
                    .sort((a, b) => (a.order || 0) - (b.order || 0))
                    .map((guide, index) => (
                      <Card key={guide.id} className="overflow-hidden transition-all hover:shadow-md border-l-4 border-l-primary">
                        <CardHeader className="pb-4 relative">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">
                                {guide.order}
                              </div>
                              <Badge variant="outline" className="bg-primary/5">Module {index + 1}</Badge>
                            </div>
                            <div className="flex items-center text-gray-500 text-xs">
                              <Clock className="h-3 w-3 mr-1" />
                              <span>{guide.readingTime} min read</span>
                            </div>
                          </div>
                          <CardTitle className="text-xl mt-3 flex items-start gap-3">
                            {guide.illustrationPath && (
                              <img 
                                src={guide.illustrationPath} 
                                alt={guide.title} 
                                className="w-12 h-12 object-contain flex-shrink-0"
                              />
                            )}
                            <span>{guide.title}</span>
                          </CardTitle>
                          <CardDescription className="mt-2">{guide.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center text-sm text-gray-500 gap-4">
                            <div className="flex items-center">
                              <BookOpen className="h-4 w-4 mr-1" />
                              <span>{guide.views.toLocaleString()} views</span>
                            </div>
                            <div className="flex items-center">
                              <CheckCircle2 className="h-4 w-4 mr-1 text-primary" />
                              <span className="text-primary font-medium">Ready to start</span>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="pt-0 flex">
                          <Button 
                            asChild 
                            className="w-full group"
                          >
                            <Link to={`/guide/${guide.id}`} className="flex items-center justify-center">
                              Begin Module
                              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              )}
            </TabsContent>
            
            {isSignedIn && (
              <TabsContent value="progress">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {guidesByCourse.map((courseDef) => (
                    <Card key={courseDef.course} className="overflow-hidden">
                      <CardHeader>
                        <div className="flex items-start gap-3">
                          {courseDef.guides[0].illustrationPath && (
                            <img 
                              src={courseDef.guides[0].illustrationPath} 
                              alt={courseDef.course} 
                              className="w-10 h-10 object-contain"
                            />
                          )}
                          <div>
                            <CardTitle className="text-lg">{courseDef.course}</CardTitle>
                            <div className="mt-2 flex items-center gap-2">
                              <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-primary rounded-full" 
                                  style={{ width: `${(courseProgress[courseDef.course as keyof typeof courseProgress] || 0) * 100}%` }}
                                ></div>
                              </div>
                              <span className="text-sm whitespace-nowrap">
                                {Math.round((courseProgress[courseDef.course as keyof typeof courseProgress] || 0) * 100)}%
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="text-sm space-y-2">
                          {courseDef.guides.slice(0, 3).map((guide, index) => (
                            <div key={index} className="flex items-center justify-between">
                              <div className="flex items-center">
                                <div className="w-5 h-5 flex items-center justify-center mr-2">
                                  {index === 0 ? (
                                    <CheckCircle2 className="h-4 w-4 text-primary" />
                                  ) : index === 1 ? (
                                    <div className="h-3 w-3 rounded-full bg-primary/30" />
                                  ) : (
                                    <div className="h-3 w-3 rounded-full bg-gray-200" />
                                  )}
                                </div>
                                <span className="truncate">{guide.title}</span>
                              </div>
                              {index === 0 && <Badge variant="outline" className="bg-primary/10 text-primary">Completed</Badge>}
                              {index === 1 && <Badge variant="outline" className="bg-yellow-50 text-yellow-700">In progress</Badge>}
                            </div>
                          ))}
                          {courseDef.guides.length > 3 && (
                            <div className="text-sm text-gray-500 italic pl-7">
                              +{courseDef.guides.length - 3} more modules
                            </div>
                          )}
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button 
                          asChild
                          variant={courseProgress[courseDef.course as keyof typeof courseProgress] ? "default" : "outline"}
                          className="w-full"
                        >
                          <Link to={`/guide/${
                            courseProgress[courseDef.course as keyof typeof courseProgress] 
                              ? courseDef.guides[1].id // Continue from where they left off
                              : courseDef.guides[0].id // Start from beginning
                          }`}>
                            {courseProgress[courseDef.course as keyof typeof courseProgress] 
                              ? "Continue Course" 
                              : "Start Course"}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-primary" />
                      Learning Statistics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-primary/5 rounded-lg p-4 text-center">
                        <div className="text-3xl font-bold text-primary">2</div>
                        <div className="text-sm text-gray-600">Courses Started</div>
                      </div>
                      <div className="bg-primary/5 rounded-lg p-4 text-center">
                        <div className="text-3xl font-bold text-primary">3</div>
                        <div className="text-sm text-gray-600">Modules Completed</div>
                      </div>
                      <div className="bg-primary/5 rounded-lg p-4 text-center">
                        <div className="text-3xl font-bold text-primary">32</div>
                        <div className="text-sm text-gray-600">Minutes Learning</div>
                      </div>
                      <div className="bg-primary/5 rounded-lg p-4 text-center">
                        <div className="text-3xl font-bold text-primary">2</div>
                        <div className="text-sm text-gray-600">Badges Earned</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            )}
            
            {isSignedIn && (
              <TabsContent value="badges">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {userBadges.map((badge) => (
                    <Card key={badge.id} className="overflow-hidden">
                      <CardHeader className="text-center pb-2">
                        <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                          <Award className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{badge.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="text-center">
                        <p className="text-sm text-gray-600">{badge.description}</p>
                      </CardContent>
                      <CardFooter className="justify-center pt-1">
                        <Badge className="bg-primary/20 text-primary hover:bg-primary/30">Earned</Badge>
                      </CardFooter>
                    </Card>
                  ))}
                  
                  {/* Locked badges */}
                  <Card className="overflow-hidden bg-gray-50/50 border-dashed">
                    <CardHeader className="text-center pb-2">
                      <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-gray-200/70 flex items-center justify-center">
                        <Trophy className="h-8 w-8 text-gray-400" />
                      </div>
                      <CardTitle className="text-lg text-gray-500">CBT Expert</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-sm text-gray-500">Complete all CBT modules to earn this badge</p>
                    </CardContent>
                    <CardFooter className="justify-center pt-1">
                      <Badge variant="outline" className="text-gray-500">Locked</Badge>
                    </CardFooter>
                  </Card>
                </div>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      Achievement Milestones
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative">
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                    <div className="space-y-6 relative">
                      <div className="ml-12 relative">
                        <div className="absolute -left-12 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                          <CheckCircle2 className="h-4 w-4 text-white" />
                        </div>
                        <h3 className="font-medium">Begin your journey</h3>
                        <p className="text-sm text-gray-600">Complete your first module</p>
                        <div className="mt-1 text-xs text-gray-500">Completed on June 15, 2023</div>
                      </div>
                      
                      <div className="ml-12 relative">
                        <div className="absolute -left-12 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                          <CheckCircle2 className="h-4 w-4 text-white" />
                        </div>
                        <h3 className="font-medium">Consistent Learner</h3>
                        <p className="text-sm text-gray-600">Complete 3 modules</p>
                        <div className="mt-1 text-xs text-gray-500">Completed on June 18, 2023</div>
                      </div>
                      
                      <div className="ml-12 relative">
                        <div className="absolute -left-12 w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="text-xs font-medium text-gray-600">3/5</span>
                        </div>
                        <h3 className="font-medium text-gray-600">Course Champion</h3>
                        <p className="text-sm text-gray-500">Complete your first full course</p>
                        <div className="mt-1 text-xs text-gray-500">In progress - 60% complete</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            )}
          </Tabs>
          
          {!isSignedIn && (
            <div className="mt-12 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-shrink-0">
                  <img src="/illustrations/emotional.svg" alt="Sign in" className="w-24 h-24" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Track Your Progress</h3>
                  <p className="text-gray-600 mb-4">
                    Sign in to track your course progress, earn completion badges, and save your favorite modules. 
                    Your learning journey is important - let us help you stay on track.
                  </p>
                  <div className="flex gap-3">
                    <Button onClick={() => navigate("/login")}>
                      Sign In
                    </Button>
                    <Button variant="outline" onClick={() => navigate("/register")}>
                      Create Account
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GuidesPage;
