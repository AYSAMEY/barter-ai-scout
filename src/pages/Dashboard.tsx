import React from 'react';
import { useAuth } from '../hooks/use-auth';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Plus, Search, Handshake, Zap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome back, {user?.name}</h1>
          <p className="text-muted-foreground">Here's an overview of your trade status and matches.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/profile">
            <Button variant="outline">Manage Haves/Wants</Button>
          </Link>
          <Button className="gap-2">
            <Plus size={18} /> Add New Asset
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          { label: 'Active Matches', value: '0', icon: Handshake, color: 'text-blue-600', bg: 'bg-blue-100' },
          { label: 'My Assets', value: '0', icon: Zap, color: 'text-amber-600', bg: 'bg-amber-100' },
          { label: 'My Needs', value: '0', icon: Search, color: 'text-purple-600', bg: 'bg-purple-100' },
          { label: 'Community Users', value: '1,248', icon: Users, color: 'text-green-600', bg: 'bg-green-100' },
        ].map((stat, i) => (
          <Card key={i}>
            <CardContent className="p-6 flex items-center gap-4">
              <div className={`${stat.bg} ${stat.color} p-3 rounded-xl`}>
                <stat.icon size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Opportunities</CardTitle>
            <CardDescription>New trade loops found by the AI scout based on your needs.</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] flex flex-col items-center justify-center text-center space-y-4">
            <div className="bg-muted p-4 rounded-full">
              <Search className="h-12 w-12 text-muted-foreground opacity-20" />
            </div>
            <div>
              <p className="font-semibold text-lg">No matches found yet</p>
              <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                The Scout is searching! Add more assets and needs to increase your chances of finding a trade loop.
              </p>
            </div>
            <Button variant="outline" size="sm">How to find matches?</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Trade Tips</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="h-2 w-2 mt-2 rounded-full bg-primary shrink-0" />
                <p className="text-sm leading-relaxed">
                  <strong>Be specific:</strong> Instead of "I have books", try "I have 5 vintage sci-fi novels".
                </p>
              </div>
              <div className="flex gap-4">
                <div className="h-2 w-2 mt-2 rounded-full bg-primary shrink-0" />
                <p className="text-sm leading-relaxed">
                  <strong>Diversify:</strong> List both skills and items to appear in more diverse trade loops.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="h-2 w-2 mt-2 rounded-full bg-primary shrink-0" />
                <p className="text-sm leading-relaxed">
                  <strong>Communication:</strong> Quick responses in match chats lead to faster deal closures.
                </p>
              </div>
            </div>
            <div className="pt-4 border-t">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/29ca3c64-a740-49e2-8b47-31e6d700a8c9/ai-match-illustration-4c892ca8-1779272852218.webp" 
                alt="AI Match illustration" 
                className="w-full rounded-lg"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;