'use client';

import React, { useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Copy, Download, Edit } from 'lucide-react';
import { toast } from 'sonner';

interface CodeViewerProps {
  fileName: string;
  content: string;
  language: string;
}

export function CodeViewer({ fileName, content, language }: CodeViewerProps) {
  const lines = useMemo(() => content.split('\n'), [content]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(content);
      toast.success('Code copied to clipboard');
    } catch (err) {
      toast.error('Failed to copy code');
    }
  };

  const getLanguageFromFileName = (fileName: string) => {
    const ext = fileName.split('.').pop()?.toLowerCase();
    const languageMap: { [key: string]: string } = {
      js: 'javascript',
      jsx: 'javascript',
      ts: 'typescript',
      tsx: 'typescript',
      py: 'python',
      java: 'java',
      cpp: 'cpp',
      c: 'c',
      go: 'go',
      rs: 'rust',
      php: 'php',
      rb: 'ruby',
      swift: 'swift',
      kt: 'kotlin',
      cs: 'csharp',
      css: 'css',
      html: 'html',
      json: 'json',
      xml: 'xml',
      yaml: 'yaml',
      yml: 'yaml',
      md: 'markdown',
      sh: 'bash',
      sql: 'sql',
    };
    return languageMap[ext || ''] || 'text';
  };

  const detectedLanguage = getLanguageFromFileName(fileName);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CardTitle className="text-lg">{fileName}</CardTitle>
            <Badge variant="secondary">{detectedLanguage}</Badge>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={copyToClipboard}>
              <Copy className="h-4 w-4 mr-1" />
              Copy
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-1" />
              Raw
            </Button>
            <Button variant="outline" size="sm">
              <Edit className="h-4 w-4 mr-1" />
              Edit
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="bg-muted/30 border-t">
          <div className="flex">
            <div className="bg-muted/50 px-4 py-2 text-xs text-muted-foreground border-r min-w-[60px]">
              {lines.map((_, index) => (
                <div key={index} className="text-right leading-6">
                  {index + 1}
                </div>
              ))}
            </div>
            <div className="flex-1 overflow-x-auto">
              <pre className="text-sm">
                <code>
                  {lines.map((line, index) => (
                    <div key={index} className="code-line">
                      {line || '\u00A0'}
                    </div>
                  ))}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}