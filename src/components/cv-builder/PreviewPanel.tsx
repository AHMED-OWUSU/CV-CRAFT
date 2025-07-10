
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { CVData } from '@/types/cv-types';
import { ModernTemplate } from './templates/ModernTemplate';
import { ClassicTemplate } from './templates/ClassicTemplate';
import { CreativeTemplate } from './templates/CreativeTemplate';
import { ExecutiveTemplate } from './templates/ExecutiveTemplate';

interface PreviewPanelProps {
  cvData: CVData;
}

export const PreviewPanel: React.FC<PreviewPanelProps> = ({ cvData }) => {
  const renderTemplate = () => {
    switch (cvData.template) {
      case 'modern':
        return <ModernTemplate cvData={cvData} />;
      case 'classic':
        return <ClassicTemplate cvData={cvData} />;
      case 'creative':
        return <CreativeTemplate cvData={cvData} />;
      case 'executive':
        return <ExecutiveTemplate cvData={cvData} />;
      default:
        return <ModernTemplate cvData={cvData} />;
    }
  };

  const getTemplateName = () => {
    switch (cvData.template) {
      case 'modern':
        return 'Modern Template';
      case 'classic':
        return 'Classic Template';
      case 'creative':
        return 'Creative Template';
      case 'executive':
        return 'Executive Template';
      default:
        return 'Modern Template';
    }
  };

  return (
    <div className="w-1/2 bg-muted/30">
      <div className="p-6 border-b bg-background/50">
        <h2 className="text-2xl font-bold text-foreground">Live Preview</h2>
        <p className="text-sm text-muted-foreground mt-1">
          {getTemplateName()} - Your CV preview in A4 format
        </p>
      </div>
      
      <ScrollArea className="h-[calc(100vh-8rem)]">
        <div className="p-6 flex justify-center">
          <div data-cv-preview>
            {renderTemplate()}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};
