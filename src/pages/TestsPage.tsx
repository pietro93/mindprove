
import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TestCard } from "@/components/tests/TestCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { tests } from "@/data/tests";
import { Search } from "lucide-react";

const TestsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const categories = Array.from(new Set(tests.map(test => test.category)));
  
  const filteredTests = tests.filter(test => {
    const matchesSearch = test.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          test.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? test.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">Mental Health & Personality Tests</h1>
            <p className="text-gray-500 mt-2">
              Explore our collection of scientifically-backed assessments
            </p>
          </div>
          
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search tests..."
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
          
          {filteredTests.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTests.map(test => (
                <TestCard key={test.id} test={test} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-xl font-semibold">No tests found</h2>
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

export default TestsPage;
