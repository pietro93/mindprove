
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Test } from "@/types/test";
import { Clock, User } from "lucide-react";

interface TestCardProps {
  test: Test;
}

export const TestCard = ({ test }: TestCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md flex flex-col h-full">
      <div className="relative h-32 bg-secondary flex items-center justify-center overflow-hidden">
        <img 
          src={test.illustration} 
          alt={test.title} 
          className="w-24 h-24 object-contain"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <Badge variant={test.category === 'personality' ? 'default' : 'secondary'}>
            {test.category}
          </Badge>
          <div className="flex items-center text-gray-500 text-xs">
            <Clock className="h-3 w-3 mr-1" />
            <span>{test.timeMinutes} min</span>
          </div>
        </div>
        <CardTitle className="text-xl mt-2">{test.title}</CardTitle>
        <CardDescription>{test.shortDescription}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2 flex-1">
        <div className="flex flex-wrap gap-1 mt-2">
          {test.tags.slice(0, 3).map(tag => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
          {test.tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{test.tags.length - 3} more
            </Badge>
          )}
        </div>
        <div className="flex items-center text-sm text-gray-500 mt-3">
          <User className="h-4 w-4 mr-1" />
          <span>{test.completions.toLocaleString()} completed</span>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button asChild className="w-full">
          <Link to={`/test-intro/${test.id}`}>Take Test</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
