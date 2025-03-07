
import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Clock, BookOpen } from "lucide-react";
import { guides } from "@/data/guides";

const GuidesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const categories = Array.from(new Set(guides.map(guide => guide.category)));
  
  const filteredGuides = guides.filter(guide => {
    const matchesSearch = guide.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          guide.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? guide.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">Mental Health & Wellness Guides</h1>
            <p className="text-gray-500 mt-2">
              Expert-created resources to help you understand and improve your mental wellbeing
            </p>
          </div>
          
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search guides..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <div className="mb-8 flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              onClick={() => setSelectedCategory(null)}
              className="mr-2"
            >
              All
            </Button>
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            ))}
          </div>
          
          {filteredGuides.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredGuides.map(guide => (
                <Card key={guide.id} className="overflow-hidden transition-all hover:shadow-md">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{guide.category}</Badge>
                      <div className="flex items-center text-gray-500 text-xs">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{guide.readingTime} min read</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl mt-2">{guide.title}</CardTitle>
                    <CardDescription>{guide.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-gray-500">
                      <BookOpen className="h-4 w-4 mr-1" />
                      <span>{guide.views} views</span>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button asChild className="w-full">
                      <Link to={`/guide/${guide.id}`}>Read Guide</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-xl font-semibold">No guides found</h2>
              <p className="text-gray-500 mt-2">Try adjusting your search or filters</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory(null);
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GuidesPage;
