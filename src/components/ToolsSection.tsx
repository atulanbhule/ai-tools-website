"use client";

import React from 'react';
import ToolCard from './ToolCard';
import { Tool } from '@/types';

interface ToolsSectionProps {
  category: string;
  tools: Tool[];
}

const ToolsSection: React.FC<ToolsSectionProps> = ({ category, tools }) => {
  // Format category name for display (e.g., "content-generation" -> "Content Generation")
  const formatCategoryName = (category: string) => {
    return category
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <section id={category} className="mb-16">
      <h3 className="text-2xl font-bold mb-6">{formatCategoryName(category)}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </section>
  );
};

export default ToolsSection; 