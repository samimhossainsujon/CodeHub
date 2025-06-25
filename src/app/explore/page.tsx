'use client';

import React from 'react';
import { Header } from '@/components/header';
import { RepositoryCard } from '@/components/repository-card';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Star, GitFork, Eye } from 'lucide-react';
import { mockRepositories } from '@/lib/mock-data';

export default function ExplorePage() {
  const trendingRepos = mockRepositories.slice(0, 6);
  const topLanguages = ['JavaScript', 'TypeScript', 'Python', 'Go', 'Rust', 'Swift'];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Explore</h1>
          <p className="text-lg text-muted-foreground">
            Discover trending repositories and popular projects from the community.
          </p>
        </div>

        {/* Trending Section */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Trending Repositories</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {trendingRepos.map(repository => (
              <RepositoryCard key={repository.id} repository={repository} />
            ))}
          </div>
        </section>

        {/* Popular Languages */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Popular Languages</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {topLanguages.map(language => (
              <Card key={language} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <div className="text-lg font-semibold">{language}</div>
                  <div className="text-sm text-muted-foreground">
                    {Math.floor(Math.random() * 1000) + 100}k repos
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Topics */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Popular Topics</h2>
          <div className="flex flex-wrap gap-2">
            {[
              'react', 'javascript', 'typescript', 'nodejs', 'python', 'machine-learning',
              'web-development', 'frontend', 'backend', 'api', 'database', 'docker',
              'kubernetes', 'aws', 'microservices', 'mobile', 'ios', 'android'
            ].map(topic => (
              <Badge key={topic} variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                {topic}
              </Badge>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}