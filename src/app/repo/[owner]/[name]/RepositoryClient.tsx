"use client";

import React, { useState } from "react";
import { FileTree } from '@/components/file-tree';
import { CodeViewer } from '@/components/code-viewer';
import { mockFileTree, mockFileContents, mockRepositoryStats } from '@/lib/mock-data';
import { RepositoryStats } from '@/components/repository-stats';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, GitFork, Eye, Download, Code, Users, AlertCircle, GitBranch, Clock } from 'lucide-react';

export default function RepositoryClient({ repository, owner, name }) {
    const [selectedFile, setSelectedFile] = useState('README.md');
    const selectedFileContent = mockFileContents[selectedFile] || 'File content not available.';

    return (
        <>
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
                                {/* Example issues here */}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </>
    );
} 