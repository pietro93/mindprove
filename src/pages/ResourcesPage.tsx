
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, PhoneCall, BookOpen, Globe } from "lucide-react";

const ResourcesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="container px-4 py-8 flex-1">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-wellness-400 bg-clip-text text-transparent">Mental Health Resources</h1>
            <p className="text-gray-500 mt-2">
              Free resources to support your mental health journey
            </p>
          </div>
          
          <Tabs defaultValue="crisis" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="crisis">Crisis Support</TabsTrigger>
              <TabsTrigger value="educational">Educational</TabsTrigger>
              <TabsTrigger value="community">Community</TabsTrigger>
            </TabsList>
            
            <TabsContent value="crisis" className="space-y-4">
              <Card className="card-hover">
                <CardHeader className="flex flex-row items-center gap-2">
                  <PhoneCall className="h-5 w-5 text-primary" />
                  <div>
                    <CardTitle>National Suicide Prevention Lifeline</CardTitle>
                    <CardDescription>24/7, free and confidential support</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">Call or text 988 or chat at 988lifeline.org</p>
                  <a href="https://988lifeline.org" target="_blank" rel="noopener noreferrer" 
                    className="text-primary hover:underline inline-flex items-center gap-1">
                    Visit website <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardHeader className="flex flex-row items-center gap-2">
                  <PhoneCall className="h-5 w-5 text-primary" />
                  <div>
                    <CardTitle>Crisis Text Line</CardTitle>
                    <CardDescription>Text HOME to 741741</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">Free 24/7 support for people in crisis</p>
                  <a href="https://www.crisistextline.org" target="_blank" rel="noopener noreferrer" 
                    className="text-primary hover:underline inline-flex items-center gap-1">
                    Visit website <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="educational" className="space-y-4">
              <Card className="card-hover">
                <CardHeader className="flex flex-row items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <div>
                    <CardTitle>Mental Health America</CardTitle>
                    <CardDescription>Education, research and advocacy</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">Resources on various mental health conditions and screening tools</p>
                  <a href="https://www.mhanational.org/" target="_blank" rel="noopener noreferrer" 
                    className="text-primary hover:underline inline-flex items-center gap-1">
                    Visit website <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardHeader className="flex flex-row items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <div>
                    <CardTitle>National Institute of Mental Health</CardTitle>
                    <CardDescription>Research-based information</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">Expert information about mental health conditions and research</p>
                  <a href="https://www.nimh.nih.gov/" target="_blank" rel="noopener noreferrer" 
                    className="text-primary hover:underline inline-flex items-center gap-1">
                    Visit website <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="community" className="space-y-4">
              <Card className="card-hover">
                <CardHeader className="flex flex-row items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  <div>
                    <CardTitle>Mental Health America Affiliate Network</CardTitle>
                    <CardDescription>Local community resources</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">Find mental health resources in your local community</p>
                  <a href="https://arc.mhanational.org/find-affiliate" target="_blank" rel="noopener noreferrer" 
                    className="text-primary hover:underline inline-flex items-center gap-1">
                    Find local resources <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardHeader className="flex flex-row items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  <div>
                    <CardTitle>NAMI Connection Support Groups</CardTitle>
                    <CardDescription>Peer support for mental health</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">Free, peer-led support groups for adults living with mental illness</p>
                  <a href="https://www.nami.org/Support-Education/Support-Groups" target="_blank" rel="noopener noreferrer" 
                    className="text-primary hover:underline inline-flex items-center gap-1">
                    Find support groups <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          <div className="mt-12 p-4 bg-wellness-50 rounded-lg text-center">
            <p className="text-sm text-gray-500">
              Disclaimer: These resources are provided for informational purposes only and do not constitute medical advice. 
              If you're experiencing a mental health emergency, please call 988 or go to your nearest emergency room.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ResourcesPage;
