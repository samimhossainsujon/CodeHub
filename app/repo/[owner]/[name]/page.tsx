'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { Header } from '@/components/header';
import { FileTree } from '@/components/file-tree';
import { CodeViewer } from '@/components/code-viewer';
import { RepositoryStats } from '@/components/repository-stats';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Star, 
  GitFork, 
  Eye, 
  Download, 
  Code, 
  FileText, 
  Users, 
  AlertCircle,
  GitBranch,
  Clock
} from 'lucide-react';
import { 
  mockFileTree, 
  mockFileContents, 
  mockRepositoryStats,
  mockRepositories 
} from '@/lib/mock-data';

export async function generateStaticParams() {
  return mockRepositories.map((repo) => ({
    owner: repo.owner,
    name: repo.name,
  }));
}

export default function RepositoryPage() {
  const params = useParams();
  const [selectedFile, setSelectedFile] = useState('README.md');
  
  const owner = params?.owner as string;
  const name = params?.name as string;
  
  // Find the repository data
  const repository = mockRepositories.find(
    repo => repo.owner === owner && repo.name === name
  );

  if (!repository) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Repository not found</h1>
            <p className="text-muted-foreground">The repository you're looking for doesn't exist.</p>
          </div>
        </div>
      </div>
    );
  }

  const selectedFileContent = mockFileContents[selectedFile] || 'File content not available.';

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Repository Header */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Code className="h-6 w-6 text-muted-foreground" />
                <span className="text-muted-foreground">{owner} /</span>
                <h1 className="text-3xl font-bold">{name}</h1>
                {repository.isPrivate && (
                  <Badge variant="secondary">Private</Badge>
                )}
              </div>
              <p className="text-lg text-muted-foreground mb-4">
                {repository.description}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: repository.language === 'TypeScript' ? '#3178c6' : '#f1e05a' }}
                  />
                  <span>{repository.language}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>Updated {repository.updatedAt}</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm">
                <Eye className="h-4 w-4 mr-1" />
                Watch
              </Button>
              <Button variant="outline" size="sm">
                <Star className="h-4 w-4 mr-1" />
                Star
              </Button>
              <Button variant="outline" size="sm">
                <GitFork className="h-4 w-4 mr-1" />
                Fork
              </Button>
              <Button variant="default" size="sm">
                <Download className="h-4 w-4 mr-1" />
                Code
              </Button>
            </div>
          </div>

          {/* Repository Stats */}
          <RepositoryStats stats={mockRepositoryStats} />
        </div>

        {/* Main Content */}
        <Tabs defaultValue="code" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4">
            <TabsTrigger value="code" className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              Code
            </TabsTrigger>
            <TabsTrigger value="issues" className="flex items-center gap-2">
              <AlertCircle className="h-4 w-4" />
              Issues
            </TabsTrigger>
            <TabsTrigger value="pulls" className="flex items-center gap-2">
              <GitBranch className="h-4 w-4" />
              Pull Requests
            </TabsTrigger>
            <TabsTrigger value="contributors" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Contributors
            </TabsTrigger>
          </TabsList>

          <TabsContent value="code" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* File Tree */}
              <div className="lg:col-span-1">
                <FileTree 
                  nodes={mockFileTree} 
                  onFileSelect={setSelectedFile}
                  selectedFile={selectedFile}
                />
              </div>
              
              {/* Code Viewer */}
              <div className="lg:col-span-3">
                <CodeViewer 
                  fileName={selectedFile}
                  content={selectedFileContent}
                  language={repository.language.toLowerCase()}
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="issues" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  Issues
                </CardTitle>
                <CardDescription>
                  Track bugs, feature requests, and other issues
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { id: 1, title: 'Fix responsive layout on mobile devices', status: 'open', author: 'johndoe', time: '2 hours ago' },
                    { id: 2, title: 'Add dark mode support', status: 'open', author: 'janedoe', time: '5 hours ago' },
                    { id: 3, title: 'Performance optimization needed', status: 'closed', author: 'techuser', time: '1 day ago' },
                  ].map(issue => (
                    <div key={issue.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <AlertCircle className={`h-4 w-4 ${issue.status === 'open' ? 'text-green-500' : 'text-purple-500'}`} />
                        <div>
                          <h4 className="font-medium">{issue.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            #{issue.id} opened {issue.time} by {issue.author}
                          </p>
                        </div>
                      </div>
                      <Badge variant={issue.status === 'open' ? 'default' : 'secondary'}>
                        {issue.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pulls" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GitBranch className="h-5 w-5" />
                  Pull Requests
                </CardTitle>
                <CardDescription>
                  Collaborate on code changes and reviews
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { id: 1, title: 'Add TypeScript support', status: 'open', author: 'contributor1', time: '3 hours ago' },
                    { id: 2, title: 'Update dependencies', status: 'merged', author: 'maintainer', time: '1 day ago' },
                  ].map(pr => (
                    <div key={pr.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <GitBranch className={`h-4 w-4 ${pr.status === 'open' ? 'text-green-500' : 'text-purple-500'}`} />
                        <div>
                          <h4 className="font-medium">{pr.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            #{pr.id} by {pr.author} • {pr.time}
                          </p>
                        </div>
                      </div>
                      <Badge variant={pr.status === 'open' ? 'default' : 'secondary'}>
                        {pr.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contributors" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Contributors
                </CardTitle>
                <CardDescription>
                  People who have contributed to this repository
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { name: 'John Doe', username: 'johndoe', commits: 147, avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2' },
                    { name: 'Jane Smith', username: 'janesmith', commits: 89, avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2' },
                    { name: 'Alex Johnson', username: 'alexj', commits: 56, avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2' },
                  ].map(contributor => (
                    <div key={contributor.username} className="flex items-center gap-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                      <img 
                        src={contributor.avatar} 
                        alt={contributor.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <h4 className="font-medium">{contributor.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          @{contributor.username} • {contributor.commits} commits
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}