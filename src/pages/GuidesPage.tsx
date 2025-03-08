
import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Clock, BookOpen, ArrowRight, CheckCircle2 } from "lucide-react";
import { guides } from "@/data/guides";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";

const GuidesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  
  const orderedGuides = [...guides].sort((a, b) => (a.order || 0) - (b.order || 0));
  
  const filteredGuides = orderedGuides.filter(guide => {
    const matchesSearch = guide.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          guide.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">DBT Skills Training Course</h1>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Learn the core skills of Dialectical Behavior Therapy to manage emotions, 
              improve relationships, and build a life worth living
            </p>
          </div>
          
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search guides..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <Tabs defaultValue="modules" className="mb-8">
            <TabsList className="w-full max-w-md mx-auto">
              <TabsTrigger value="modules" className="flex-1">Course Modules</TabsTrigger>
              <TabsTrigger value="progress" className="flex-1">Your Progress</TabsTrigger>
            </TabsList>
            
            <TabsContent value="modules">
              {filteredGuides.length > 0 ? (
                <div className="space-y-6">
                  {filteredGuides.map((guide, index) => (
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
                          onClick={() => {
                            // This would normally update progress tracking
                            console.log(`Starting guide: ${guide.id}`);
                          }}
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
              ) : (
                <div className="text-center py-12">
                  <h2 className="text-xl font-semibold">No guides found</h2>
                  <p className="text-gray-500 mt-2">Try adjusting your search</p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => setSearchQuery("")}
                  >
                    Reset Search
                  </Button>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="progress">
              <div className="bg-secondary/50 rounded-lg p-8 text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <BookOpen className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Track Your Progress</h3>
                <p className="text-gray-600 max-w-md mx-auto mb-6">
                  Sign in to track your progress through the DBT course modules and save your favorite sections.
                </p>
                <div className="flex gap-4 justify-center">
                  <Button onClick={() => navigate("/login")}>Sign In</Button>
                  <Button variant="outline" onClick={() => navigate("/register")}>Create Account</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-12 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-shrink-0">
                <img src="/illustrations/emotional.svg" alt="DBT" className="w-24 h-24" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">About Dialectical Behavior Therapy</h3>
                <p className="text-gray-600 mb-4">
                  DBT is an evidence-based psychotherapy that combines cognitive-behavioral techniques with 
                  mindfulness practices. Originally developed to treat borderline personality disorder, DBT 
                  is now used for a wide range of mental health conditions.
                </p>
                <Button variant="outline" onClick={() => navigate("/guide/dbt-introduction")}>
                  Learn More About DBT
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GuidesPage;
