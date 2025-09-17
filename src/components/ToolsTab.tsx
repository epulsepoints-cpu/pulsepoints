import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import ArticleReader from './ArticleReader';
import {
  Stethoscope,
  Upload,
  Search,
  FlaskConical,
  HeartPulse
} from 'lucide-react';

type Tool = {
  id: string;
  label: string;
  icon: React.ElementType;
  url: string;
};

const tools: Tool[] = [
  {
    id: 'simulator',
    label: 'ECG Simulator',
    icon: HeartPulse,
    url: 'https://ecg-simulator-training.deploypad.app/'
  },
  {
    id: 'xray',
    label: 'ECGkid Dx (X-ray)',
    icon: Upload,
    url: 'https://ecg-react-health.deploypad.app/'
  },
  {
    id: 'icd',
    label: 'ICD Lookup Tool',
    icon: Search,
    url: 'https://search-medical-code.deploypad.app/'
  },
  {
    id: 'abg',
    label: 'ABG Analyzer',
    icon: FlaskConical,
    url: 'https://clinical-analysis-responsive.deploypad.app/'
  },
  {
    id: 'qtc',
    label: 'QTc Calculator',
    icon: Stethoscope,
    url: 'https://ecgkid.famous.ai/tools/qtc-calculator'
  }
];

const ToolsTab: React.FC = () => {
  const [activeTool, setActiveTool] = useState<Tool | null>(null);

  if (activeTool) {
    return (
      <ArticleReader
        article={{
          title: activeTool.label,
          content: `<iframe src='${activeTool.url}' title='${activeTool.label}' style='width:100%;height:60vh;border-radius:12px;border:none;margin-bottom:1rem;'></iframe>` +
            `<div style='margin-top:1rem;font-size:1rem;color:#666;'>This tool opens in a secure embedded window. For best experience, use landscape mode or open in browser.</div>`,
          category: 'Tool'
        }}
        onBack={() => setActiveTool(null)}
        showFabBack={true}
      />
    );
  }

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {tools.map((tool) => {
        const Icon = tool.icon;
        return (
          <Card
            key={tool.id}
            onClick={() => setActiveTool(tool)}
            className="hover:shadow-xl cursor-pointer transition-transform transform hover:scale-105"
          >
            <CardContent className="p-6 flex flex-col items-center justify-center gap-2 text-center">
              <Icon className="w-10 h-10 text-purple-600" />
              <h3 className="text-md font-semibold">{tool.label}</h3>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default ToolsTab;
