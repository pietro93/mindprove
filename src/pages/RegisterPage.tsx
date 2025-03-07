
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { toast } from "@/hooks/use-toast";
import { Eye, EyeOff } from "lucide-react";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    if (!agreedToTerms) {
      toast({
        title: "Error",
        description: "You must agree to the terms and privacy policy",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    
    // Simulate registration - in a real app this would connect to authentication service
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Success",
        description: "Your account has been created successfully",
      });
      navigate("/dashboard");
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
            <CardDescription>
              Enter your information to create your MindProve account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleRegister}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    placeholder="John Doe" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@example.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input 
                      id="password" 
                      type={showPassword ? "text" : "password"} 
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-500" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-500" />
                      )}
                      <span className="sr-only">
                        {showPassword ? "Hide password" : "Show password"}
                      </span>
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Password must be at least 8 characters long
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="terms" 
                    checked={agreedToTerms}
                    onCheckedChange={(checked) => {
                      setAgreedToTerms(checked as boolean);
                    }} 
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to the{" "}
                    <Link to="/terms" className="text-primary hover:underline">
                      terms of service
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="text-primary hover:underline">
                      privacy policy
                    </Link>
                  </label>
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Creating account..." : "Create account"}
                </Button>
              </div>
            </form>
            
            <div className="mt-4">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">or</span>
                </div>
              </div>
              
              <div className="mt-4 space-y-2">
                <Button variant="outline" className="w-full">
                  Continue with Google
                </Button>
                <Button variant="outline" className="w-full">
                  Continue with Apple
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-center">
            <p className="text-sm text-center text-gray-500 pt-4">
              Already have an account?{" "}
              <Link to="/login" className="text-primary hover:underline font-medium">
                Sign in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default RegisterPage;
