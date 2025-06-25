/* eslint-disable react/no-unescaped-entities */
// 'use client'; // Removed to make this a Server Component

import React from 'react';
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
import { notFound } from 'next/navigation';
import RepositoryClient from './RepositoryClient';

export async function generateStaticParams() {
  return mockRepositories.map((repo) => ({
    owner: repo.owner,
    name: repo.name,
  }));
}

export default function RepositoryPage({ params }: { params: { owner: string; name: string } }) {
  const owner = params.owner;
  const name = params.name;
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
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <RepositoryClient repository={repository} owner={owner} name={name} />
      </main>
    </div>
  );
}