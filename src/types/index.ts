export interface Tool {
  id: string;
  name: string;
  description: string;
  url: string;
  logo?: string;
  tags: string[];
  featured?: boolean;
}

export interface ToolsData {
  [category: string]: Tool[];
} 