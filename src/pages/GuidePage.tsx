
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { guides } from "@/data/guides";
import { ArrowLeft, ArrowRight, BookOpen, Clock, Heart, Share2, Bookmark, CheckCircle, CheckCircle2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import ReactMarkdown from 'react-markdown';

const GuidePage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [bookmarked, setBookmarked] = useState(false);
  const [completedSections, setCompletedSections] = useState<string[]>([]);
  const [activeHeading, setActiveHeading] = useState<string | null>(null);
  // This would normally come from an auth context
  const [isSignedIn, setIsSignedIn] = useState(false);
  
  // Find the current guide
  const currentGuide = guides.find(guide => guide.id === id);
  
  // Find next and previous guides within the same course
  const courseGuides = currentGuide 
    ? [...guides].filter(guide => guide.course === currentGuide.course).sort((a, b) => (a.order || 0) - (b.order || 0))
    : [];
  const currentIndex = courseGuides.findIndex(guide => guide.id === id);
  const previousGuide = currentIndex > 0 ? courseGuides[currentIndex - 1] : null;
  const nextGuide = currentIndex < courseGuides.length - 1 ? courseGuides[currentIndex + 1] : null;
  
  // Extract headings from content for the table of contents
  const extractHeadings = (content: string) => {
    const headingRegex = /^#+\s+(.+)$/gm;
    const headings: { text: string; level: number; id: string }[] = [];
    
    let match;
    while ((match = headingRegex.exec(content)) !== null) {
      const text = match[1];
      const level = match[0].trim().split(' ')[0].length;
      const id = text.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');
      
      if (level <= 3) { // Only include h1, h2, h3
        headings.push({ text, level, id });
      }
    }
    
    return headings;
  };
  
  const handleScroll = () => {
    if (!currentGuide) return;
    
    const headings = document.querySelectorAll('h1, h2, h3');
    const scrollPosition = window.scrollY;
    
    for (let i = 0; i < headings.length; i++) {
      const heading = headings[i];
      const nextHeading = headings[i + 1];
      
      const headingTop = heading.getBoundingClientRect().top + scrollPosition - 100;
      const nextHeadingTop = nextHeading 
        ? nextHeading.getBoundingClientRect().top + scrollPosition - 100
        : document.body.scrollHeight;
      
      if (scrollPosition >= headingTop && scrollPosition < nextHeadingTop) {
        setActiveHeading(heading.id);
        break;
      }
    }
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentGuide]);
  
  if (!currentGuide) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="container mx-auto px-4 py-16 flex-1 text-center">
          <h1 className="text-2xl font-bold mb-4">Guide not found</h1>
          <p className="mb-8">The guide you're looking for doesn't exist or has been moved.</p>
          <Button asChild>
            <Link to="/guides">Return to Guides</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }
  
  const headings = extractHeadings(currentGuide.content);
  
  const handleBookmark = () => {
    if (!isSignedIn) {
      toast({
        title: "Sign in required",
        description: "Please sign in to bookmark guides and track your progress",
        action: (
          <Button size="sm" onClick={() => navigate("/login")}>
            Sign In
          </Button>
        ),
      });
      return;
    }
    
    setBookmarked(!bookmarked);
    toast({
      title: bookmarked ? "Bookmark removed" : "Guide bookmarked",
      description: bookmarked 
        ? "This guide has been removed from your bookmarks" 
        : "This guide has been added to your bookmarks for easy access",
    });
  };
  
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied",
      description: "The link to this guide has been copied to your clipboard",
    });
  };
  
  const handleCompleteSection = (headingId: string) => {
    if (!isSignedIn) {
      toast({
        title: "Sign in required",
        description: "Please sign in to track your progress",
        action: (
          <Button size="sm" onClick={() => navigate("/login")}>
            Sign In
          </Button>
        ),
      });
      return;
    }
    
    if (completedSections.includes(headingId)) {
      setCompletedSections(completedSections.filter(id => id !== headingId));
    } else {
      setCompletedSections([...completedSections, headingId]);
      
      // If all sections are completed, show a toast
      if (completedSections.length + 1 === headings.length) {
        toast({
          title: "Module completed! 🎉",
          description: "Great job! You've completed this module of the course.",
        });
      }
    }
  };
  
  // For demo purposes - in a real app, this would be connected to a backend
  const toggleSignIn = () => {
    setIsSignedIn(!isSignedIn);
    toast({
      title: isSignedIn ? "Signed out" : "Signed in",
      description: isSignedIn 
        ? "You have been signed out" 
        : "You are now signed in and can track your progress",
    });
  };
  
  // Custom component for rendering markdown with interactive elements
  const MarkdownComponents = {
    h1: ({ children }: { children: React.ReactNode }) => {
      const text = children?.toString() || "";
      const id = text.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');
      return <h1 id={id} className="text-3xl font-bold mt-8 mb-4">{children}</h1>;
    },
    h2: ({ children }: { children: React.ReactNode }) => {
      const text = children?.toString() || "";
      const id = text.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');
      return <h2 id={id} className="text-2xl font-bold mt-6 mb-3">{children}</h2>;
    },
    h3: ({ children }: { children: React.ReactNode }) => {
      const text = children?.toString() || "";
      const id = text.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');
      return <h3 id={id} className="text-xl font-bold mt-5 mb-2">{children}</h3>;
    },
    p: ({ children }: { children: React.ReactNode }) => {
      return <p className="my-4 text-gray-700 leading-relaxed">{children}</p>;
    },
    ul: ({ children }: { children: React.ReactNode }) => {
      return <ul className="list-disc pl-6 my-4 space-y-2">{children}</ul>;
    },
    ol: ({ children }: { children: React.ReactNode }) => {
      return <ol className="list-decimal pl-6 my-4 space-y-2">{children}</ol>;
    },
    li: ({ children }: { children: React.ReactNode }) => {
      return <li className="text-gray-700">{children}</li>;
    },
    blockquote: ({ children }: { children: React.ReactNode }) => {
      return <blockquote className="border-l-4 border-primary pl-4 italic my-4">{children}</blockquote>;
    },
    strong: ({ children }: { children: React.ReactNode }) => {
      return <strong className="font-bold">{children}</strong>;
    },
    em: ({ children }: { children: React.ReactNode }) => {
      return <em className="italic text-gray-800">{children}</em>;
    },
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-6 flex-1">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <Button variant="ghost" size="sm" asChild className="mb-4">
              <Link to="/guides" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to all guides
              </Link>
            </Button>
            
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-3">
                {currentGuide.illustrationPath && (
                  <img 
                    src={currentGuide.illustrationPath} 
                    alt={currentGuide.title} 
                    className="w-12 h-12 object-contain"
                  />
                )}
                <div>
                  <h1 className="text-3xl font-bold">{currentGuide.title}</h1>
                  <p className="text-gray-600 mt-1">
                    Module {currentGuide.order} • {currentGuide.course}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleBookmark}
                  className={bookmarked ? "text-primary" : ""}
                >
                  {bookmarked ? <Bookmark className="h-4 w-4 mr-2 fill-primary" /> : <Bookmark className="h-4 w-4 mr-2" />}
                  {bookmarked ? "Bookmarked" : "Bookmark"}
                </Button>
                <Button variant="outline" size="sm" onClick={handleShare}>
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
                {/* Demo toggle for sign in state */}
                <Button variant="ghost" size="sm" onClick={toggleSignIn}>
                  {isSignedIn ? "Sign Out" : "Sign In"}
                </Button>
              </div>
            </div>
            
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{currentGuide.readingTime} min read</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="h-4 w-4 mr-1" />
                <span>{currentGuide.views.toLocaleString()} views</span>
              </div>
              {isSignedIn && completedSections.length > 0 && (
                <div className="flex items-center text-primary">
                  <CheckCircle2 className="h-4 w-4 mr-1" />
                  <span>{Math.round((completedSections.length / headings.length) * 100)}% complete</span>
                </div>
              )}
            </div>
          </div>
          
          <Separator className="my-6" />
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Table of Contents - Sticky on desktop */}
            <div className="lg:w-1/4 order-2 lg:order-1">
              <div className="sticky top-24">
                <div className="p-5 rounded-lg bg-secondary/50 mb-6">
                  <h3 className="font-medium mb-4">Table of Contents</h3>
                  
                  <ScrollArea className="h-[calc(100vh-300px)]">
                    <div className="space-y-1">
                      {headings.map((heading, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <button 
                            className={`text-left text-sm py-1 px-2 rounded-md w-full transition-colors hover:bg-primary/10
                              ${activeHeading === heading.id ? 'bg-primary/20 text-primary' : ''}
                              ${heading.level === 1 ? 'font-medium' : ''}
                              ${heading.level === 2 ? 'pl-4' : ''}
                              ${heading.level === 3 ? 'pl-6 text-xs' : ''}
                            `}
                            onClick={() => {
                              document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' });
                            }}
                          >
                            {heading.text}
                          </button>
                          <button 
                            onClick={() => handleCompleteSection(heading.id)}
                            className={`flex-shrink-0 opacity-70 hover:opacity-100 ${completedSections.includes(heading.id) ? 'text-primary' : 'text-gray-400'}`}
                          >
                            {completedSections.includes(heading.id) ? (
                              <CheckCircle className="h-4 w-4 fill-primary/20" />
                            ) : (
                              <Circle className="h-4 w-4" />
                            )}
                          </button>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
                
                {isSignedIn && completedSections.length === headings.length && (
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-6">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <div className="bg-primary/20 p-2 rounded-full">
                        <CheckCircle className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-medium text-primary">Module Completed!</span>
                    </div>
                    <p className="text-sm text-center text-gray-600">
                      You've earned a completion badge for this module
                    </p>
                  </div>
                )}
                
                <div className="text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-1 mb-2">
                    <Heart className="h-4 w-4 text-primary" />
                    <span>Found this helpful? Share this guide:</span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="w-full" onClick={handleShare}>
                      <Share2 className="h-3 w-3 mr-1" /> Share
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main content */}
            <div className="flex-1 order-1 lg:order-2">
              <div className="prose prose-lg max-w-none">
                <ReactMarkdown components={MarkdownComponents as any}>
                  {currentGuide.content}
                </ReactMarkdown>
              </div>
              
              <Separator className="my-8" />
              
              {/* Navigation between guides */}
              <div className="flex flex-col sm:flex-row justify-between gap-4 mb-12">
                {previousGuide ? (
                  <Button variant="outline" className="flex-1" asChild>
                    <Link to={`/guide/${previousGuide.id}`} className="flex items-center">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      <div className="text-left">
                        <div className="text-xs opacity-70">Previous</div>
                        <div className="font-medium truncate">{previousGuide.title}</div>
                      </div>
                    </Link>
                  </Button>
                ) : (
                  <div className="flex-1"></div>
                )}
                
                {nextGuide ? (
                  <Button className="flex-1" asChild>
                    <Link to={`/guide/${nextGuide.id}`} className="flex items-center">
                      <div className="text-right">
                        <div className="text-xs opacity-70">Next</div>
                        <div className="font-medium truncate">{nextGuide.title}</div>
                      </div>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                ) : (
                  <Button className="flex-1" onClick={() => {
                    if (isSignedIn) {
                      toast({
                        title: "Course completed! 🎉",
                        description: "Congratulations on completing the course!"
                      });
                    } else {
                      toast({
                        title: "Sign in to track progress",
                        description: "Sign in to earn completion badges and track your progress"
                      });
                    }
                    navigate("/guides");
                  }}>
                    Return to Courses
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

// Simple Circle component for uncompleted sections
const Circle = ({ className }: { className?: string }) => (
  <div className={`rounded-full border ${className}`} style={{ width: '1em', height: '1em' }} />
);

export default GuidePage;
