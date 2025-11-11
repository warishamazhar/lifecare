import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, ChevronDown, ChevronRight, RefreshCw } from 'lucide-react';
import { authAPI } from '@/api/auth';
import { toast } from 'sonner';

interface TeamMember {
  id: string;
  name: string;
  username: string;
  email: string;
  referralCode: string;
  isActive: boolean;
  rank: string;
  position: 'left' | 'right';
  createdAt: string;
  children?: TeamMember[];
}

interface TeamStructure {
  user: {
    id: string;
    name: string;
    username: string;
    referralCode: string;
  };
  stats: {
    directReferrals: number;
    totalTeam: number;
  };
  tree: TeamMember[];
}

const TeamStructure: React.FC = () => {
  const [teamData, setTeamData] = useState<TeamStructure | null>(null);
  const [loading, setLoading] = useState(true);
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());

  useEffect(() => {
    fetchTeamStructure();
  }, []);

  const fetchTeamStructure = async () => {
    try {
      setLoading(true);
      const response = await authAPI.getTeamStructure();
      
      if (response.success && response.data) {
        setTeamData(response.data);
        // Expand first level by default
        if (response.data.tree && response.data.tree.length > 0) {
          const firstLevelIds = response.data.tree.map((member: TeamMember) => member.id);
          setExpandedNodes(new Set(firstLevelIds));
        }
      } else {
        setTeamData(null);
      }
    } catch (error: any) {
      console.error('Failed to load team structure:', error);
      toast.error('Failed to load team structure');
      setTeamData(null);
    } finally {
      setLoading(false);
    }
  };

  const toggleNode = (nodeId: string) => {
    const newExpanded = new Set(expandedNodes);
    if (newExpanded.has(nodeId)) {
      newExpanded.delete(nodeId);
    } else {
      newExpanded.add(nodeId);
    }
    setExpandedNodes(newExpanded);
  };

  const renderTree = (members: TeamMember[], level: number = 0): React.ReactNode => {
    if (!members || members.length === 0) return null;

    return (
      <div className={`space-y-2 ${level > 0 ? 'ml-6 border-l-2 border-gray-200 pl-4' : ''}`}>
        {members.map((member) => {
          const hasChildren = member.children && member.children.length > 0;
          const isExpanded = expandedNodes.has(member.id);

          return (
            <div key={member.id} className="space-y-2">
              <Card className={`border-${member.position === 'left' ? 'green' : 'blue'}-200 bg-${member.position === 'left' ? 'green' : 'blue'}-50/50`}>
                <CardContent className="p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {hasChildren && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleNode(member.id)}
                          className="h-6 w-6 p-0"
                        >
                          {isExpanded ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}
                        </Button>
                      )}
                      {!hasChildren && <div className="w-6" />}
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">{member.name}</span>
                          <Badge variant="outline" className="text-xs">
                            {member.rank}
                          </Badge>
                          {member.isActive ? (
                            <Badge className="bg-green-600 text-xs">Active</Badge>
                          ) : (
                            <Badge className="bg-orange-500 text-xs">Inactive</Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">
                          {member.username} • {member.referralCode}
                        </p>
                        {hasChildren && (
                          <p className="text-xs text-gray-500">
                            {member.children?.length || 0} sub-members
                          </p>
                        )}
                      </div>
                    </div>
                    <Badge className={`bg-${member.position === 'left' ? 'green' : 'blue'}-600`}>
                      {member.position.toUpperCase()}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
              {hasChildren && isExpanded && (
                <div className="mt-2">
                  {renderTree(member.children || [], level + 1)}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  const calculateTeamStats = (members: TeamMember[]): { left: number; right: number } => {
    let left = 0;
    let right = 0;

    const countMembers = (members: TeamMember[]) => {
      members.forEach(member => {
        if (member.position === 'left') left++;
        else if (member.position === 'right') right++;
        
        if (member.children) {
          countMembers(member.children);
        }
      });
    };

    countMembers(members);
    return { left, right };
  };

  if (loading) {
    return (
      <div className="p-6 space-y-6 bg-white min-h-screen">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <RefreshCw className="h-8 w-8 animate-spin text-primary mx-auto mb-4" />
            <p className="text-gray-600">Loading team structure...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!teamData) {
    return (
      <div className="p-6 space-y-6 bg-white min-h-screen">
        <div className="text-center py-12 text-gray-500">
          <Users className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <p className="text-lg font-medium">No team structure available</p>
          <Button onClick={fetchTeamStructure} className="mt-4" variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            Retry
          </Button>
        </div>
      </div>
    );
  }

  const teamStats = calculateTeamStats(teamData.tree);

  return (
    <div className="p-6 space-y-6 bg-white min-h-screen">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Users className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold text-primary">Team Structure</h1>
        </div>
        <Button onClick={fetchTeamStructure} variant="outline" disabled={loading}>
          <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
          Refresh
        </Button>
      </div>

      {/* Team Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-primary">{teamData.stats.directReferrals}</p>
            <p className="text-sm text-gray-600">Direct Referrals</p>
          </CardContent>
        </Card>
        <Card className="border-green-200 bg-green-50/50">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-green-600">{teamStats.left}</p>
            <p className="text-sm text-green-700">Left Team</p>
          </CardContent>
        </Card>
        <Card className="border-blue-200 bg-blue-50/50">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-blue-600">{teamStats.right}</p>
            <p className="text-sm text-blue-700">Right Team</p>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Binary Tree Structure</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Root User */}
            <div className="text-center">
              <div className="inline-block p-4 bg-primary/10 rounded-lg">
                <h3 className="font-semibold text-primary">{teamData.user.name}</h3>
                <p className="text-sm text-gray-600">{teamData.user.username}</p>
                <p className="text-xs text-gray-500">Code: {teamData.user.referralCode}</p>
              </div>
            </div>
            
            {/* Team Tree */}
            {teamData.tree && teamData.tree.length > 0 ? (
              <div className="mt-6">
                {renderTree(teamData.tree)}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <Users className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p>No team members yet</p>
                <p className="text-sm">Start referring members to build your team!</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeamStructure;