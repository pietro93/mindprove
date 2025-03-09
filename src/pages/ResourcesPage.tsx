
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, PhoneCall, BookOpen, Globe, Smartphone, HeartPulse } from "lucide-react";

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
            <p className="text-sm text-gray-500 mt-4 max-w-2xl mx-auto">
              <strong>Disclaimer:</strong> These resources are for educational and informational purposes only and 
              are not a substitute for professional therapy or medical advice. Our guides and assessments 
              are meant to complement, not replace, professional mental health treatment.
            </p>
          </div>
          
          <Tabs defaultValue="crisis" className="w-full">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="crisis">Crisis Support</TabsTrigger>
              <TabsTrigger value="educational">Educational</TabsTrigger>
              <TabsTrigger value="community">Community</TabsTrigger>
              <TabsTrigger value="digital">Digital Tools</TabsTrigger>
            </TabsList>
            
            <TabsContent value="crisis" className="space-y-4">
              <h2 className="text-xl font-semibold mb-4">Global & Regional Crisis Resources</h2>
              
              <Card className="card-hover">
                <CardHeader className="flex flex-row items-center gap-2">
                  <PhoneCall className="h-5 w-5 text-primary" />
                  <div>
                    <CardTitle>International Association for Suicide Prevention (IASP)</CardTitle>
                    <CardDescription>Global crisis resources directory</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">Find crisis services in your country through IASP's international directory</p>
                  <a href="https://www.iasp.info/resources/Crisis_Centres/" target="_blank" rel="noopener noreferrer" 
                    className="text-primary hover:underline inline-flex items-center gap-1">
                    Find local crisis services <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardHeader className="flex flex-row items-center gap-2">
                  <PhoneCall className="h-5 w-5 text-primary" />
                  <div>
                    <CardTitle>National Suicide Prevention Lifeline (US)</CardTitle>
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
                    <CardTitle>Samaritans (UK)</CardTitle>
                    <CardDescription>24/7 emotional support helpline</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">Call 116 123 (UK) or email jo@samaritans.org</p>
                  <a href="https://www.samaritans.org" target="_blank" rel="noopener noreferrer" 
                    className="text-primary hover:underline inline-flex items-center gap-1">
                    Visit website <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardHeader className="flex flex-row items-center gap-2">
                  <PhoneCall className="h-5 w-5 text-primary" />
                  <div>
                    <CardTitle>Lifeline (Australia)</CardTitle>
                    <CardDescription>24/7 crisis support and suicide prevention</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">Call 13 11 14 or text 0477 13 11 14</p>
                  <a href="https://www.lifeline.org.au" target="_blank" rel="noopener noreferrer" 
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
                    <CardDescription>Text support in US, UK, Canada & Ireland</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">US & Canada: Text HOME to 741741</p>
                  <p className="mb-2">UK: Text SHOUT to 85258</p>
                  <p className="mb-2">Ireland: Text HELLO to 50808</p>
                  <a href="https://www.crisistextline.org" target="_blank" rel="noopener noreferrer" 
                    className="text-primary hover:underline inline-flex items-center gap-1">
                    Visit website <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="educational" className="space-y-4">
              <h2 className="text-xl font-semibold mb-4">Educational Resources</h2>
              
              <Card className="card-hover">
                <CardHeader className="flex flex-row items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <div>
                    <CardTitle>World Health Organization (WHO)</CardTitle>
                    <CardDescription>Global mental health resources and research</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">Evidence-based information and resources for mental health conditions worldwide</p>
                  <a href="https://www.who.int/health-topics/mental-health" target="_blank" rel="noopener noreferrer" 
                    className="text-primary hover:underline inline-flex items-center gap-1">
                    Visit website <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
              
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
                    <CardTitle>Mind (UK)</CardTitle>
                    <CardDescription>Mental health information and support</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">Comprehensive guides on mental health conditions, treatments, and support options</p>
                  <a href="https://www.mind.org.uk" target="_blank" rel="noopener noreferrer" 
                    className="text-primary hover:underline inline-flex items-center gap-1">
                    Visit website <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardHeader className="flex flex-row items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <div>
                    <CardTitle>Black Dog Institute (Australia)</CardTitle>
                    <CardDescription>Research-based resources for depression and anxiety</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">Science-based resources for understanding and managing mood disorders</p>
                  <a href="https://www.blackdoginstitute.org.au" target="_blank" rel="noopener noreferrer" 
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
              <h2 className="text-xl font-semibold mb-4">Community Support</h2>
              
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
              
              <Card className="card-hover">
                <CardHeader className="flex flex-row items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  <div>
                    <CardTitle>7 Cups</CardTitle>
                    <CardDescription>Online emotional support community</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">Free emotional support through trained volunteer listeners and online forums</p>
                  <a href="https://www.7cups.com" target="_blank" rel="noopener noreferrer" 
                    className="text-primary hover:underline inline-flex items-center gap-1">
                    Connect with listeners <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardHeader className="flex flex-row items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  <div>
                    <CardTitle>Mental Health Forum</CardTitle>
                    <CardDescription>Global online peer support community</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">Connect with others experiencing similar mental health challenges</p>
                  <a href="https://www.mentalhealthforum.net" target="_blank" rel="noopener noreferrer" 
                    className="text-primary hover:underline inline-flex items-center gap-1">
                    Join the forum <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="digital" className="space-y-4">
              <h2 className="text-xl font-semibold mb-4">Online Therapy & Digital Tools</h2>
              
              <Card className="card-hover">
                <CardHeader className="flex flex-row items-center gap-2">
                  <HeartPulse className="h-5 w-5 text-primary" />
                  <div>
                    <CardTitle>Online-Therapy.com</CardTitle>
                    <CardDescription>CBT-based online therapy platform</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">Complete online therapy program based on cognitive behavioral therapy (CBT)</p>
                  <p className="text-sm text-green-600 font-semibold mb-2">
                    Special offer: 20% discount with our affiliate link
                  </p>
                  <a href="https://www.online-therapy.com/?ref=mindwell" target="_blank" rel="noopener noreferrer" 
                    className="text-primary hover:underline inline-flex items-center gap-1">
                    Get 20% off your first month <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardHeader className="flex flex-row items-center gap-2">
                  <HeartPulse className="h-5 w-5 text-primary" />
                  <div>
                    <CardTitle>BetterHelp</CardTitle>
                    <CardDescription>Online counseling and therapy services</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">Professional therapy accessible anytime, anywhere through web and mobile</p>
                  <a href="https://www.betterhelp.com" target="_blank" rel="noopener noreferrer" 
                    className="text-primary hover:underline inline-flex items-center gap-1">
                    Visit website <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardHeader className="flex flex-row items-center gap-2">
                  <HeartPulse className="h-5 w-5 text-primary" />
                  <div>
                    <CardTitle>Talkspace</CardTitle>
                    <CardDescription>Text, audio, and video therapy</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">Connect with a licensed therapist through various communication methods</p>
                  <a href="https://www.talkspace.com" target="_blank" rel="noopener noreferrer" 
                    className="text-primary hover:underline inline-flex items-center gap-1">
                    Visit website <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardHeader className="flex flex-row items-center gap-2">
                  <Smartphone className="h-5 w-5 text-primary" />
                  <div>
                    <CardTitle>Headspace</CardTitle>
                    <CardDescription>Mindfulness and meditation app</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">Guided meditations, sleep sounds, and mindfulness exercises</p>
                  <a href="https://www.headspace.com" target="_blank" rel="noopener noreferrer" 
                    className="text-primary hover:underline inline-flex items-center gap-1">
                    Visit website <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardHeader className="flex flex-row items-center gap-2">
                  <HeartPulse className="h-5 w-5 text-primary" />
                  <div>
                    <CardTitle>Pride Counseling</CardTitle>
                    <CardDescription>Online counseling for the LGBTQ+ community</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">Professional online counseling specialized for the LGBTQ+ community</p>
                  <a href="https://www.pridecounseling.com" target="_blank" rel="noopener noreferrer" 
                    className="text-primary hover:underline inline-flex items-center gap-1">
                    Visit website <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardHeader className="flex flex-row items-center gap-2">
                  <Smartphone className="h-5 w-5 text-primary" />
                  <div>
                    <CardTitle>Calm</CardTitle>
                    <CardDescription>Sleep, meditation and relaxation app</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">Tools to help reduce stress, improve sleep, and enhance wellbeing</p>
                  <a href="https://www.calm.com" target="_blank" rel="noopener noreferrer" 
                    className="text-primary hover:underline inline-flex items-center gap-1">
                    Visit website <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardHeader className="flex flex-row items-center gap-2">
                  <Smartphone className="h-5 w-5 text-primary" />
                  <div>
                    <CardTitle>Woebot</CardTitle>
                    <CardDescription>AI-powered mental health chatbot</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">24/7 cognitive behavioral therapy techniques through an AI chatbot</p>
                  <a href="https://woebothealth.com" target="_blank" rel="noopener noreferrer" 
                    className="text-primary hover:underline inline-flex items-center gap-1">
                    Visit website <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          <div className="mt-12 p-4 bg-wellness-50 rounded-lg text-center">
            <p className="text-sm text-gray-500">
              <strong>Important:</strong> These resources are provided for informational purposes only and do not constitute medical advice. 
              Our guides and assessments are for educational purposes and are not substitutes for professional therapy.
              If you're experiencing a mental health emergency, please call your local emergency number, crisis hotline, or go to your nearest emergency room.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ResourcesPage;
