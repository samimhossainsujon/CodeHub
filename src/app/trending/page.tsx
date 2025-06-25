'use client';

import React, { useState } from 'react';
import { Header } from '@/components/header';
import { RepositoryCard } from '@/components/repository-card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  TrendingUp, 
  Calendar, 
  Star, 
  GitFork,
  Users,
  Code
} from 'lucide-react';
import { mockRepositories } from '@/lib/mock-data';

export default function TrendingPage() {
  const [timeframe, setTimeframe] = useState('today');

  const trendingRepos = mockRepositories.map(repo => ({
    ...repo,
    trendingScore: Math.floor(Math.random() * 1000) + 100,
    starsToday: Math.floor(Math.random() * 50) + 5,
  })).sort((a, b) => b.trendingScore - a.trendingScore);

  const trendingDevelopers = [
    {
      id: 1,
      name: 'John Doe',
      username: 'johndoe',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      popularRepo: 'awesome-react-components',
      language: 'TypeScript',
      followers: 1234,
      starsEarned: 156
    },
    {
      id: 2,
      name: 'Jane Smith',
      username: 'janesmith',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      popularRepo: 'python-ml-toolkit',
      language: 'Python',
      followers: 987,
      starsEarned: 134
    },
    {
      id: 3,
      name: 'Alex Johnson',
      username: 'alexj',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      popularRepo: 'rust-web-framework',
      language: 'Rust',
      followers: 756,
      starsEarned: 98
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">Trending</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            See what the GitHub community is most excited about today.
          </p>
        </div>

        {/* Time Filter */}
        <div className="flex gap-2 mb-8">
          {['today', 'this week', 'this month'].map(period => (
            <Button
              key={period}
              variant={timeframe === period ? 'default' : 'outline'}
              onClick={() => setTimeframe(period)}
              className="capitalize"
            >
              <Calendar className="h-4 w-4 mr-2" />
              {period}
            </Button>
          ))}
        </div>

        {/* Trending Content */}
        <Tabs defaultValue="repositories" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:w-auto lg:grid-cols-2">
            <TabsTrigger value="repositories" className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              Repositories
            </TabsTrigger>
            <TabsTrigger value="developers" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Developers
            </TabsTrigger>
          </TabsList>

          <TabsContent value="repositories" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {trendingRepos.map((repository, index) => (
                <div key={repository.id} className="relative">
                  <div className="absolute -left-4 top-4 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold z-10">
                    {index + 1}
                  </div>
                  <Card className="hover:shadow-lg transition-all duration-200 hover:scale-[1.02] ml-4">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="flex items-center gap-2">
                            <span className="hover:text-primary transition-colors cursor-pointer">
                              {repository.owner}/{repository.name}
                            </span>
                            {repository.isPrivate && (
                              <Badge variant="secondary" className="text-xs">
                                Private
                              </Badge>
                            )}
                          </CardTitle>
                          <CardDescription className="mt-2 line-clamp-2">
                            {repository.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-4 text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <div 
                              className="w-3 h-3 rounded-full"
                              style={{ 
                                backgroundColor: repository.language === 'TypeScript' ? '#3178c6' : 
                                                repository.language === 'Python' ? '#3572A5' :
                                                repository.language === 'Go' ? '#00ADD8' :
                                                repository.language === 'Rust' ? '#dea584' :
                                                repository.language === 'Swift' ? '#fa7343' : '#f1e05a'
                              }}
                            />
                            <span>{repository.language}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3" />
                            <span>{repository.stars.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <GitFork className="h-3 w-3" />
                            <span>{repository.forks.toLocaleString()}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-primary font-medium">
                          <Star className="h-3 w-3" />
                          <span>+{repository.starsToday} today</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="developers" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trendingDevelopers.map((developer, index) => (
                <div key={developer.id} className="relative">
                  <div className="absolute -left-4 top-4 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold z-10">
                    {index + 1}
                  </div>
                  <Card className="hover:shadow-lg transition-all duration-200 hover:scale-[1.02] ml-4">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <img 
                          src={developer.avatar} 
                          alt={developer.name}
                          className="w-16 h-16 rounded-full"
                        />
                        <div>
                          <h3 className="font-semibold text-lg">{developer.name}</h3>
                          <p className="text-muted-foreground">@{developer.username}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Popular repo:</span>
                          <span className="font-medium hover:text-primary cursor-pointer">
                            {developer.popularRepo}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Language:</span>
                          <Badge variant="secondary">{developer.language}</Badge>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          <span>{developer.followers} followers</span>
                        </div>
                        <div className="flex items-center gap-1 text-primary font-medium">
                          <Star className="h-3 w-3" />
                          <span>+{developer.starsEarned} stars</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}