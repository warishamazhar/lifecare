import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { authAPI } from '@/api/auth';
import { toast } from 'sonner';
import { Settings, Lock, Bell, Shield, Eye, EyeOff, Save } from 'lucide-react';

interface UserSettings {
  emailNotifications: boolean;
  smsNotifications: boolean;
  marketingEmails: boolean;
  twoFactorAuth: boolean;
  profileVisibility: 'public' | 'private';
}

const UserSettings = () => {
  const [loading, setLoading] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  
  const [settings, setSettings] = useState<UserSettings>({
    emailNotifications: true,
    smsNotifications: false,
    marketingEmails: true,
    twoFactorAuth: false,
    profileVisibility: 'private'
  });

  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleSettingsChange = (key: keyof UserSettings, value: boolean | string) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const saveSettings = async () => {
    setLoading(true);
    try {
      // In a real app, you'd call an API to save settings
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      toast.success('Settings saved successfully!');
    } catch (error) {
      toast.error('Failed to save settings');
    } finally {
      setLoading(false);
    }
  };

  const changePassword = async () => {
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      toast.error('New passwords do not match');
      return;
    }
    
    if (passwordForm.newPassword.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return;
    }

    setLoading(true);
    try {
      // In a real app, you'd call an API to change password
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      toast.success('Password changed successfully!');
      setPasswordForm({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
    } catch (error) {
      toast.error('Failed to change password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <Button onClick={saveSettings} disabled={loading} className="flex items-center gap-2">
          <Save className="h-4 w-4" />
          Save Changes
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Notifications
            </CardTitle>
            <CardDescription>
              Manage how you receive notifications
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Email Notifications</Label>
                <p className="text-sm text-gray-500">Receive updates via email</p>
              </div>
              <Switch
                checked={settings.emailNotifications}
                onCheckedChange={(checked) => handleSettingsChange('emailNotifications', checked)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>SMS Notifications</Label>
                <p className="text-sm text-gray-500">Receive updates via SMS</p>
              </div>
              <Switch
                checked={settings.smsNotifications}
                onCheckedChange={(checked) => handleSettingsChange('smsNotifications', checked)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Marketing Emails</Label>
                <p className="text-sm text-gray-500">Receive promotional content</p>
              </div>
              <Switch
                checked={settings.marketingEmails}
                onCheckedChange={(checked) => handleSettingsChange('marketingEmails', checked)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Security & Privacy
            </CardTitle>
            <CardDescription>
              Manage your security preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Two-Factor Authentication</Label>
                <p className="text-sm text-gray-500">Add extra security to your account</p>
              </div>
              <Switch
                checked={settings.twoFactorAuth}
                onCheckedChange={(checked) => handleSettingsChange('twoFactorAuth', checked)}
              />
            </div>
            
            <div className="space-y-2">
              <Label>Profile Visibility</Label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="private"
                    name="visibility"
                    checked={settings.profileVisibility === 'private'}
                    onChange={() => handleSettingsChange('profileVisibility', 'private')}
                  />
                  <Label htmlFor="private">Private (Only you can see your profile)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="public"
                    name="visibility"
                    checked={settings.profileVisibility === 'public'}
                    onChange={() => handleSettingsChange('profileVisibility', 'public')}
                  />
                  <Label htmlFor="public">Public (Visible to other members)</Label>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Change Password */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5" />
              Change Password
            </CardTitle>
            <CardDescription>
              Update your account password
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Current Password</Label>
                <div className="relative">
                  <Input
                    id="currentPassword"
                    type={showCurrentPassword ? 'text' : 'password'}
                    value={passwordForm.currentPassword}
                    onChange={(e) => setPasswordForm(prev => ({ ...prev, currentPassword: e.target.value }))}
                    placeholder="Enter current password"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  >
                    {showCurrentPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="newPassword">New Password</Label>
                <div className="relative">
                  <Input
                    id="newPassword"
                    type={showNewPassword ? 'text' : 'password'}
                    value={passwordForm.newPassword}
                    onChange={(e) => setPasswordForm(prev => ({ ...prev, newPassword: e.target.value }))}
                    placeholder="Enter new password"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                  >
                    {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={passwordForm.confirmPassword}
                  onChange={(e) => setPasswordForm(prev => ({ ...prev, confirmPassword: e.target.value }))}
                  placeholder="Confirm new password"
                />
              </div>
            </div>
            
            <Button 
              onClick={changePassword} 
              disabled={loading || !passwordForm.currentPassword || !passwordForm.newPassword}
              className="mt-4"
            >
              Update Password
            </Button>
          </CardContent>
        </Card>

        {/* Account Actions */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-red-600">Danger Zone</CardTitle>
            <CardDescription>
              Actions that cannot be undone
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 border border-red-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-red-600">Deactivate Account</h4>
                  <p className="text-sm text-gray-500">Temporarily disable your account</p>
                </div>
                <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">
                  Deactivate
                </Button>
              </div>
              
              <div className="flex justify-between items-center p-4 border border-red-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-red-600">Delete Account</h4>
                  <p className="text-sm text-gray-500">Permanently delete your account and all data</p>
                </div>
                <Button variant="destructive">
                  Delete Account
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserSettings;
