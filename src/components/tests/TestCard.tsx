
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
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="pb-4">
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
      <CardContent>
        <div className="flex items-center text-sm text-gray-500">
          <User className="h-4 w-4 mr-1" />
          <span>{test.completions} people completed</span>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button asChild className="w-full">
          <Link to={`/test/${test.id}`}>Take Test</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
