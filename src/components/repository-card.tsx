'use client';

import React from 'react';
import Link from 'next/link';
import { Star, GitFork, Circle, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface RepositoryCardProps {
  repository: {
    id: string;
    name: string;
    description: string;
    language: string;
    stars: number;
    forks: number;
    isPrivate: boolean;
    updatedAt: string;
    owner: string;
  };
}

const languageColors: { [key: string]: string } = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  Java: '#b07219',
  'C++': '#f34b7d',
  Go: '#00ADD8',
  Rust: '#dea584',
  PHP: '#4F5D95',
  Ruby: '#701516',
  Swift: '#fa7343',
};

export function RepositoryCard({ repository }: RepositoryCardProps) {
  return (
    <Card className="hover:shadow-lg transition-all duration-200 hover:scale-[1.02] group">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="flex items-center gap-2">
              <Link 
                href={`/repo/${repository.owner}/${repository.name}`}
                className="hover:text-primary transition-colors"
              >
                {repository.owner}/{repository.name}
              </Link>
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
          <Button variant="outline" size="sm" className="ml-4">
            <Star className="h-4 w-4 mr-1" />
            Star
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-4">
            {repository.language && (
              <div className="flex items-center space-x-1">
                <Circle 
                  className="h-3 w-3 fill-current" 
                  style={{ color: languageColors[repository.language] || '#8b949e' }}
                />
                <span>{repository.language}</span>
              </div>
            )}
            <div className="flex items-center space-x-1">
              <Star className="h-3 w-3" />
              <span>{repository.stars.toLocaleString()}</span>
            </div>
            <div className="flex items-center space-x-1">
              <GitFork className="h-3 w-3" />
              <span>{repository.forks.toLocaleString()}</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="h-3 w-3" />
            <span>Updated {repository.updatedAt}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}