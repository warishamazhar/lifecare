import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { authAPI } from '@/api/auth';
import { toast } from 'sonner';
import { Users, Copy, Share2, Link, UserPlus, TrendingUp, Award } from 'lucide-react';

interface UserProfile {
  referralCode: string;
  name: string;
  username: string;
}

interface Referral {
  id: string;
  name: string;
  username: string;
  email: string;
  joinDate: string;
  status: 'active' | 'inactive';
  level: number;
}

const MyReferrals = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [referrals, setReferrals] = useState<Referral[]>([]);
  const [referralsLoading, setReferralsLoading] = useState(true);

  useEffect(() => {
    fetchProfile();
    fetchReferrals();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await authAPI.getProfile();
      setProfile(response.data);
    } catch (error: any) {
      toast.error('Failed to load profile data');
    } finally {
      setLoading(false);
    }
  };

  const fetchReferrals = async () => {
    try {
      setReferralsLoading(true);
      const response = await authAPI.getDirectReferrals();
      
      if (response.success && response.data) {
        const referralsData = response.data.map((ref: any) => ({
          id: ref.id,
          name: ref.name,
          username: ref.username,
          email: ref.email,
          joinDate: ref.createdAt,
          status: ref.isActive ? 'active' as const : 'inactive' as const,
          level: 1 // Direct referrals are level 1
        }));
        setReferrals(referralsData);
      } else {
        setReferrals([]);
      }
    } catch (error: any) {
      console.error('Failed to load referrals:', error);
      setReferrals([]);
    } finally {
      setReferralsLoading(false);
    }
  };

  const copyReferralLink = () => {
    const referralLink = `${window.location.origin}/user/register?ref=${profile?.referralCode}`;
    navigator.clipboard.writeText(referralLink);
    toast.success('Referral link copied to clipboard!');
  };

  const shareReferralLink = () => {
    const referralLink = `${window.location.origin}/user/register?ref=${profile?.referralCode}`;
    const text = `Join Byoliva using my referral link: ${referralLink}`;
    
    if (navigator.share) {
      navigator.share({
        title: 'Join Byoliva',
        text: text,
        url: referralLink
      });
    } else {
      // Fallback for desktop - copy to clipboard
      navigator.clipboard.writeText(text);
      toast.success('Referral message copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
      </div>
    );
  }

  const activeReferrals = referrals.filter(r => r.status === 'active').length;
  const totalEarnings = activeReferrals * 250; // Example calculation

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">My Referrals</h1>
        <Button onClick={shareReferralLink} className="flex items-center gap-2">
          <Share2 className="h-4 w-4" />
          Share Referral Link
        </Button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-600">
              <Users className="h-5 w-5" />
              Total Referrals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">{referrals.length}</div>
            <p className="text-gray-600">People you've referred</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-600">
              <UserPlus className="h-5 w-5" />
              Active Referrals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">{activeReferrals}</div>
            <p className="text-gray-600">Currently active members</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-purple-600">
              <TrendingUp className="h-5 w-5" />
              Total Earnings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-600">₹{totalEarnings.toLocaleString()}</div>
            <p className="text-gray-600">From referral commissions</p>
          </CardContent>
        </Card>
      </div>

      {/* Referral Link */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Link className="h-5 w-5" />
            Your Referral Link
          </CardTitle>
          <CardDescription>
            Share this link with others to earn referral commissions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input
              value={`${window.location.origin}/user/register?ref=${profile?.referralCode || ''}`}
              readOnly
              className="font-mono text-sm"
            />
            <Button onClick={copyReferralLink} variant="outline" className="flex items-center gap-2">
              <Copy className="h-4 w-4" />
              Copy
            </Button>
          </div>
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <h4 className="font-medium text-green-800 mb-2">Your Referral Code:</h4>
            <div className="text-2xl font-bold text-green-600 font-mono">
              {profile?.referralCode}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Referrals List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            Referral Network
          </CardTitle>
          <CardDescription>People who joined using your referral link</CardDescription>
        </CardHeader>
        <CardContent>
          {referrals.length > 0 ? (
            <div className="space-y-4">
              {referrals.map((referral) => (
                <div key={referral.id} className="flex justify-between items-center p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">{referral.name}</h4>
                      <p className="text-sm text-gray-500">@{referral.username}</p>
                      <p className="text-sm text-gray-500">{referral.email}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      referral.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {referral.status}
                    </span>
                    <p className="text-sm text-gray-500 mt-1">Joined: {referral.joinDate}</p>
                    <p className="text-sm text-blue-600">Level {referral.level}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No referrals yet</p>
              <p className="text-sm">Share your referral link to start earning commissions</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default MyReferrals;
