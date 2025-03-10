
import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { TestCard } from "@/components/tests/TestCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { tests } from "@/data/tests";
import { Search } from "lucide-react";

const TestsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  const categories = Array.from(new Set(tests.map(test => test.category)));
  const tags = Array.from(new Set(tests.flatMap(test => test.tags))).sort();
  
  const filteredTests = tests.filter(test => {
    const matchesSearch = test.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          test.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? test.category === selectedCategory : true;
    const matchesTag = selectedTag ? test.tags.includes(selectedTag) : true;
    
    return matchesSearch && matchesCategory && matchesTag;
  });
  
  return (
    <PageLayout>
      <div className="w-full py-8 px-4 md:px-6 lg:pr-[320px]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
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
          
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="w-full md:w-auto">
              <h2 className="text-lg font-medium mb-2">Categories</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                <Button
                  variant={selectedCategory === null ? "default" : "outline"}
                  onClick={() => setSelectedCategory(null)}
                  size="sm"
                >
                  All
                </Button>
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    size="sm"
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="w-full md:w-auto">
              <h2 className="text-lg font-medium mb-2">Popular Tags</h2>
              <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                  <Badge 
                    key={tag}
                    variant={selectedTag === tag ? "default" : "outline"} 
                    className="cursor-pointer"
                    onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          
          {filteredTests.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
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
                  setSelectedTag(null);
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default TestsPage;
