import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Lock, Eye, EyeOff, Shield } from 'lucide-react';

const ChangePassword: React.FC = () => {
  const [showCurrentPassword, setShowCurrentPassword] = React.useState(false);
  const [showNewPassword, setShowNewPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  return (
    <div className="p-6 space-y-6 bg-white min-h-screen">
      <div className="flex items-center space-x-3">
        <Lock className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold text-primary">Change Password</h1>
      </div>
      
      <div className="max-w-md mx-auto">
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-xl text-primary flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              Update Your Password
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="currentPassword">Current Password</Label>
              <div className="relative">
                <Input 
                  id="currentPassword" 
                  type={showCurrentPassword ? "text" : "password"}
                  placeholder="Enter current password" 
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                >
                  {showCurrentPassword ? 
                    <EyeOff className="h-4 w-4 text-gray-400" /> : 
                    <Eye className="h-4 w-4 text-gray-400" />
                  }
                </button>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="newPassword">New Password</Label>
              <div className="relative">
                <Input 
                  id="newPassword" 
                  type={showNewPassword ? "text" : "password"}
                  placeholder="Enter new password" 
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                >
                  {showNewPassword ? 
                    <EyeOff className="h-4 w-4 text-gray-400" /> : 
                    <Eye className="h-4 w-4 text-gray-400" />
                  }
                </button>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm New Password</Label>
              <div className="relative">
                <Input 
                  id="confirmPassword" 
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm new password" 
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? 
                    <EyeOff className="h-4 w-4 text-gray-400" /> : 
                    <Eye className="h-4 w-4 text-gray-400" />
                  }
                </button>
              </div>
            </div>
            
            <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h4 className="font-semibold text-yellow-800 text-sm mb-2">Password Requirements:</h4>
              <ul className="text-yellow-700 text-xs space-y-1">
                <li>• At least 8 characters long</li>
                <li>• Include uppercase and lowercase letters</li>
                <li>• Include at least one number</li>
                <li>• Include at least one special character</li>
              </ul>
            </div>
            
            <Button className="w-full bg-primary hover:bg-primary-dark">
              <Lock className="h-4 w-4 mr-2" />
              Update Password
            </Button>
          </CardContent>
        </Card>
        
        <Card className="border-red-200 bg-red-50/50 mt-6">
          <CardContent className="p-4">
            <h3 className="font-semibold text-red-800 mb-2 text-sm">Security Tips:</h3>
            <ul className="text-red-700 text-xs space-y-1">
              <li>• Change your password regularly</li>
              <li>• Don't share your password with anyone</li>
              <li>• Use a unique password for this account</li>
              <li>• Enable two-factor authentication if available</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ChangePassword;
