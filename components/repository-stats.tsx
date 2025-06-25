'use client';

import React from 'react';
import { Star, GitFork, Eye, GitCommit, Users, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface RepositoryStatsProps {
  stats: {
    stars: number;
    forks: number;
    watchers: number;
    commits: number;
    contributors: number;
    lastUpdate: string;
  };
}

export function RepositoryStats({ stats }: RepositoryStatsProps) {
  const statItems = [
    { icon: Star, label: 'Stars', value: stats.stars.toLocaleString(), color: 'text-yellow-500' },
    { icon: GitFork, label: 'Forks', value: stats.forks.toLocaleString(), color: 'text-blue-500' },
    { icon: Eye, label: 'Watchers', value: stats.watchers.toLocaleString(), color: 'text-green-500' },
    { icon: GitCommit, label: 'Commits', value: stats.commits.toLocaleString(), color: 'text-purple-500' },
    { icon: Users, label: 'Contributors', value: stats.contributors.toLocaleString(), color: 'text-orange-500' },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
      {statItems.map((item) => (
        <Card key={item.label} className="hover:shadow-md transition-shadow">
          <CardContent className="p-4 text-center">
            <item.icon className={`h-6 w-6 mx-auto mb-2 ${item.color}`} />
            <div className="text-2xl font-bold">{item.value}</div>
            <div className="text-sm text-muted-foreground">{item.label}</div>
          </CardContent>
        </Card>
      ))}
      <Card className="hover:shadow-md transition-shadow">
        <CardContent className="p-4 text-center">
          <Calendar className="h-6 w-6 mx-auto mb-2 text-gray-500" />
          <div className="text-sm font-medium">Last updated</div>
          <div className="text-sm text-muted-foreground">{stats.lastUpdate}</div>
        </CardContent>
      </Card>
    </div>
  );
}