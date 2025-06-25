'use client';

import React, { useState } from 'react';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  AlertCircle, 
  Search, 
  Filter, 
  Plus,
  MessageSquare,
  Clock
} from 'lucide-react';

export default function IssuesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const mockIssues = [
    {
      id: 1,
      title: 'Fix responsive layout on mobile devices',
      description: 'The layout breaks on screens smaller than 768px. Need to adjust CSS grid and flexbox properties.',
      status: 'open',
      author: 'johndoe',
      repository: 'awesome-react-components',
      owner: 'john-doe',
      time: '2 hours ago',
      comments: 5,
      labels: ['bug', 'mobile', 'css']
    },
    {
      id: 2,
      title: 'Add dark mode support',
      description: 'Users have requested dark mode functionality. This should include theme switching and persistence.',
      status: 'open',
      author: 'janedoe',
      repository: 'vue-dashboard-ui',
      owner: 'ui-team',
      time: '5 hours ago',
      comments: 12,
      labels: ['enhancement', 'ui', 'feature-request']
    },
    {
      id: 3,
      title: 'Performance optimization needed',
      description: 'Application is slow on initial load. Need to implement code splitting and lazy loading.',
      status: 'closed',
      author: 'techuser',
      repository: 'python-ml-toolkit',
      owner: 'jane-smith',
      time: '1 day ago',
      comments: 8,
      labels: ['performance', 'optimization']
    },
    {
      id: 4,
      title: 'Documentation update required',
      description: 'API documentation is outdated and missing several new endpoints.',
      status: 'open',
      author: 'docwriter',
      repository: 'golang-microservices',
      owner: 'tech-corp',
      time: '3 days ago',
      comments: 3,
      labels: ['documentation', 'api']
    }
  ];

  const filteredIssues = mockIssues.filter(issue =>
    issue.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    issue.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openIssues = filteredIssues.filter(issue => issue.status === 'open');
  const closedIssues = filteredIssues.filter(issue => issue.status === 'closed');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Issues</h1>
            <p className="text-lg text-muted-foreground">
              Track bugs, feature requests, and other issues across repositories.
            </p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Issue
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search issues..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>

        {/* Issues Tabs */}
        <Tabs defaultValue="open" className="space-y-6">
          <TabsList>
            <TabsTrigger value="open" className="flex items-center gap-2">
              <AlertCircle className="h-4 w-4" />
              Open ({openIssues.length})
            </TabsTrigger>
            <TabsTrigger value="closed" className="flex items-center gap-2">
              <AlertCircle className="h-4 w-4" />
              Closed ({closedIssues.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="open" className="space-y-4">
            {openIssues.map(issue => (
              <Card key={issue.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertCircle className="h-4 w-4 text-green-500" />
                        <h3 className="text-lg font-semibold hover:text-primary cursor-pointer">
                          {issue.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground mb-3">
                        {issue.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>#{issue.id}</span>
                        <span>opened {issue.time} by {issue.author}</span>
                        <span className="hover:text-primary cursor-pointer">
                          {issue.owner}/{issue.repository}
                        </span>
                        <div className="flex items-center gap-1">
                          <MessageSquare className="h-3 w-3" />
                          <span>{issue.comments}</span>
                        </div>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      {issue.status}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {issue.labels.map(label => (
                      <Badge key={label} variant="secondary" className="text-xs">
                        {label}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="closed" className="space-y-4">
            {closedIssues.map(issue => (
              <Card key={issue.id} className="hover:shadow-md transition-shadow opacity-75">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertCircle className="h-4 w-4 text-purple-500" />
                        <h3 className="text-lg font-semibold hover:text-primary cursor-pointer">
                          {issue.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground mb-3">
                        {issue.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>#{issue.id}</span>
                        <span>closed {issue.time} by {issue.author}</span>
                        <span className="hover:text-primary cursor-pointer">
                          {issue.owner}/{issue.repository}
                        </span>
                        <div className="flex items-center gap-1">
                          <MessageSquare className="h-3 w-3" />
                          <span>{issue.comments}</span>
                        </div>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-purple-600 border-purple-600">
                      {issue.status}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {issue.labels.map(label => (
                      <Badge key={label} variant="secondary" className="text-xs">
                        {label}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}