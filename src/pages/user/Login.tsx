import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { authAPI } from '@/api/auth';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

const UserLogin = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Suppress MetaMask auto-detection errors
  React.useEffect(() => {
    // Prevent MetaMask auto-connection attempts
    const suppressMetaMaskErrors = () => {
      if (typeof window !== 'undefined') {
        window.addEventListener('error', (e) => {
          if (e.message && (e.message.includes('MetaMask') || e.message.includes('ethereum'))) {
            e.preventDefault();
            console.log('MetaMask detection suppressed - using simple login');
          }
        });
      }
    };
    suppressMetaMaskErrors();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await authAPI.login(formData);
      
      if (response.success) {
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.data));
        toast.success('Login successful!');
        navigate('/user/dashboard');
      }
    } catch (error: any) {
      toast.error(error.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">User Login</CardTitle>
          <CardDescription className="text-center">
            Enter your credentials to access your dashboard
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                required
                disabled={loading}
                placeholder="Enter your username"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
                disabled={loading}
                placeholder="Enter your password"
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button 
              type="submit" 
              className="w-full" 
              disabled={loading}
            >
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Sign In
            </Button>
            <div className="text-sm text-center">
              Don't have an account?{' '}
              <Link to="/user/register" className="text-blue-600 hover:underline">
                Register here
              </Link>
            </div>
            <div className="text-sm text-center">
              Want to see our plans first?{' '}
              <Link to="/join" className="text-green-600 hover:underline">
                View Plans
              </Link>
            </div>
            <div className="text-sm text-center">
              <Link to="/" className="text-gray-600 hover:underline">
                ← Back to Home
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default UserLogin;
