'use client';

import React, { useState } from 'react';
import { ChevronRight, ChevronDown, File, Folder, FolderOpen } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FileTreeNode {
  name: string;
  type: 'file' | 'folder';
  path: string;
  children?: FileTreeNode[];
}

interface FileTreeProps {
  nodes: FileTreeNode[];
  onFileSelect: (path: string) => void;
  selectedFile: string;
}

function FileTreeItem({ 
  node, 
  depth = 0, 
  onFileSelect, 
  selectedFile 
}: { 
  node: FileTreeNode; 
  depth?: number; 
  onFileSelect: (path: string) => void;
  selectedFile: string;
}) {
  const [isExpanded, setIsExpanded] = useState(depth < 2);

  const handleClick = () => {
    if (node.type === 'folder') {
      setIsExpanded(!isExpanded);
    } else {
      onFileSelect(node.path);
    }
  };

  const isSelected = selectedFile === node.path;

  return (
    <div>
      <div
        className={cn(
          "flex items-center py-1 px-2 cursor-pointer hover:bg-muted/50 transition-colors file-tree-item",
          isSelected && "bg-primary/10 text-primary font-medium"
        )}
        style={{ paddingLeft: `${depth * 16 + 8}px` }}
        onClick={handleClick}
      >
        {node.type === 'folder' ? (
          <>
            {isExpanded ? (
              <ChevronDown className="h-4 w-4 mr-1 flex-shrink-0" />
            ) : (
              <ChevronRight className="h-4 w-4 mr-1 flex-shrink-0" />
            )}
            {isExpanded ? (
              <FolderOpen className="h-4 w-4 mr-2 flex-shrink-0 text-blue-500" />
            ) : (
              <Folder className="h-4 w-4 mr-2 flex-shrink-0 text-blue-500" />
            )}
          </>
        ) : (
          <>
            <div className="w-5 flex-shrink-0" />
            <File className="h-4 w-4 mr-2 flex-shrink-0 text-muted-foreground" />
          </>
        )}
        <span className="truncate">{node.name}</span>
      </div>
      {node.type === 'folder' && isExpanded && node.children && (
        <div>
          {node.children.map((child, index) => (
            <FileTreeItem
              key={`${child.path}-${index}`}
              node={child}
              depth={depth + 1}
              onFileSelect={onFileSelect}
              selectedFile={selectedFile}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function FileTree({ nodes, onFileSelect, selectedFile }: FileTreeProps) {
  return (
    <div className="border rounded-lg bg-card">
      <div className="p-3 border-b font-semibold">Files</div>
      <div className="max-h-96 overflow-y-auto">
        {nodes.map((node, index) => (
          <FileTreeItem
            key={`${node.path}-${index}`}
            node={node}
            onFileSelect={onFileSelect}
            selectedFile={selectedFile}
          />
        ))}
      </div>
    </div>
  );
}