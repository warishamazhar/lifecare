import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { User, Camera, Save } from 'lucide-react';

const EditProfile: React.FC = () => {
  return (
    <div className="p-6 space-y-6 bg-white min-h-screen">
      <div className="flex items-center space-x-3">
        <User className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold text-primary">Edit Profile</h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-center">Profile Picture</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="w-32 h-32 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
              <User className="h-16 w-16 text-primary" />
            </div>
            <Button variant="outline" className="w-full">
              <Camera className="h-4 w-4 mr-2" />
              Change Photo
            </Button>
          </CardContent>
        </Card>
        
        <div className="lg:col-span-2">
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-xl text-primary">Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" defaultValue="john.doe@example.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="mobile">Mobile Number</Label>
                <Input id="mobile" defaultValue="+91 9876543210" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="johndoe123" disabled />
                <p className="text-sm text-gray-500">Username cannot be changed</p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <textarea 
                  id="address"
                  className="w-full p-3 border border-gray-300 rounded-md h-20"
                  defaultValue="123 Main Street, City, State - 123456"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input id="dob" type="date" defaultValue="1990-01-01" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <select className="w-full p-2 border border-gray-300 rounded-md">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <Button className="w-full bg-primary hover:bg-primary-dark mt-6">
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Card className="border-blue-200 bg-blue-50/50">
        <CardContent className="p-6">
          <h3 className="font-semibold text-blue-800 mb-4">Account Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-blue-700">Member ID</p>
              <p className="font-medium">BYO001</p>
            </div>
            <div>
              <p className="text-sm text-blue-700">Join Date</p>
              <p className="font-medium">Nov 15, 2024</p>
            </div>
            <div>
              <p className="text-sm text-blue-700">Current Rank</p>
              <p className="font-medium">Bronze</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditProfile;
