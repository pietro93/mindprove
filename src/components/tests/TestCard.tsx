
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Test } from "@/types/test";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface TestCardProps {
  test: Test;
}

export const TestCard = ({ test }: TestCardProps) => {
  // Mock user data - in a real app, this would come from auth context
  const user = {
    isLoggedIn: true,
    completedTests: ["anxiety-assessment", "big-five-personality"],
    lastTakenDates: {
      "anxiety-assessment": "Jan 25, 2024",
      "big-five-personality": "Feb 10, 2024"
    }
  };
  
  const hasCompleted = user.isLoggedIn && user.completedTests.includes(test.id);
  const lastTakenDate = user.isLoggedIn ? user.lastTakenDates[test.id] : null;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -5 }}
    >
      <Card className={`overflow-hidden transition-all flex flex-col h-full ${hasCompleted ? 'border-green-200 bg-green-50/30' : ''}`}>
        <div className="relative h-32 bg-secondary flex items-center justify-center overflow-hidden">
          <motion.img 
            src={test.illustration} 
            alt={test.title} 
            className="w-24 h-24 object-contain"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          {hasCompleted && (
            <div className="absolute top-2 right-2">
              <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                <Check className="h-3 w-3 mr-1" />
                Completed
              </Badge>
            </div>
          )}
        </div>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <Badge variant={test.category === 'personality' ? 'default' : 'secondary'}>
              {test.category.replace('-', ' ')}
            </Badge>
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
          {hasCompleted && lastTakenDate && (
            <div className="text-xs text-gray-500 mt-3">
              Last taken: {lastTakenDate}
            </div>
          )}
        </CardContent>
        <CardFooter className="pt-0">
          <Button asChild className="w-full">
            <Link to={`/test-intro/${test.id}`}>
              {hasCompleted ? "Take Again" : "Take Test"}
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
