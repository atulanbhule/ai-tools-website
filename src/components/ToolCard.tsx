"use client";

import React from 'react';
import { Tool } from '@/types';

interface ToolCardProps {
  tool: Tool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  return (
    <div className="card flex flex-col h-full transition-all hover:shadow-lg">
      <div className="p-4 bg-primary/10 aspect-video flex items-center justify-center overflow-hidden">
        {tool.logo ? (
          <img 
            src={tool.logo} 
            alt={`${tool.name} logo`} 
            className="w-full max-h-16 object-contain"
          />
        ) : (
          <div className="text-4xl font-bold text-primary/50">{tool.name.charAt(0)}</div>
        )}
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h4 className="text-xl font-bold mb-2">{tool.name}</h4>
        <p className="text-gray-600 mb-4 flex-grow">{tool.description}</p>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {tool.tags.map((tag: string, index: number) => (
              <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          
          <a 
            href={tool.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary w-full flex justify-center items-center"
            aria-label={`Visit ${tool.name} website`}
          >
            Visit Tool
          </a>
        </div>
      </div>
    </div>
  );
};

export default ToolCard; 