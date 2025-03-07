
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">About MindProve</h1>
            <p className="text-gray-500 mt-2">
              Our mission, vision, and commitment to mental health
            </p>
          </div>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                At MindProve, our mission is to make mental health assessments and resources accessible to everyone. 
                We believe that understanding yourself better is the first step toward improved mental wellbeing and personal growth.
              </p>
            </CardContent>
          </Card>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Our Approach</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                We provide scientifically validated assessments and evidence-based resources that empower you to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Gain insights into your mental health and personality</li>
                <li>Track changes in your wellbeing over time</li>
                <li>Access practical strategies for improvement</li>
                <li>Make informed decisions about seeking professional help when needed</li>
              </ul>
            </CardContent>
          </Card>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <p className="text-gray-600 mb-6">
              MindProve was founded by a team of mental health professionals, researchers, and technology experts 
              committed to making psychological tools more accessible.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">Dr. Emma Roberts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Clinical Psychologist & Co-founder
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">Michael Chen</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Technology Director & Co-founder
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">Dr. James Wilson</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Research Lead
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">Sarah Johnson</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Content Director
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Evidence-Based Approach</h3>
                <p className="text-gray-600 mt-1">
                  We prioritize scientific validity in all our assessments and resources.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium">Accessibility</h3>
                <p className="text-gray-600 mt-1">
                  We're committed to making mental health tools available to everyone, regardless of background or resources.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium">Privacy</h3>
                <p className="text-gray-600 mt-1">
                  We maintain the highest standards of data protection and privacy.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium">Continuous Improvement</h3>
                <p className="text-gray-600 mt-1">
                  We regularly update our assessments and resources based on the latest research and user feedback.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              Have questions, feedback, or suggestions? We'd love to hear from you!
            </p>
            <p className="text-gray-600">
              Email: <a href="mailto:contact@mindprove.com" className="text-primary hover:underline">contact@mindprove.com</a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
