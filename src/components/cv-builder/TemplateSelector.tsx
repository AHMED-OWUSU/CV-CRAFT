
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check, Palette, Briefcase, Sparkles, Crown } from 'lucide-react';
import { CVTemplate } from '@/types/cv-types';

interface TemplateSelectorProps {
  selectedTemplate: CVTemplate;
  onTemplateSelect: (template: CVTemplate) => void;
}

const templates = [
  {
    id: 'modern' as CVTemplate,
    name: 'Modern',
    description: 'Clean and contemporary design with blue accents',
    icon: Palette,
    preview: 'Blue header with clean typography',
    features: ['Modern typography', 'Blue accent colors', 'Clean sections']
  },
  {
    id: 'classic' as CVTemplate,
    name: 'Classic',
    description: 'Traditional professional layout with elegant styling',
    icon: Briefcase,
    preview: 'Traditional black & white professional',
    features: ['Traditional layout', 'Professional styling', 'Time-tested design']
  },
  {
    id: 'creative' as CVTemplate,
    name: 'Creative',
    description: 'Stand out with creative elements and modern flair',
    icon: Sparkles,
    preview: 'Creative design with visual elements',
    features: ['Creative elements', 'Visual hierarchy', 'Modern flair']
  },
  {
    id: 'executive' as CVTemplate,
    name: 'Executive',
    description: 'Premium design for senior-level professionals',
    icon: Crown,
    preview: 'Sophisticated executive styling',
    features: ['Premium design', 'Executive styling', 'Leadership focus']
  }
];

export const TemplateSelector: React.FC<TemplateSelectorProps> = ({
  selectedTemplate,
  onTemplateSelect
}) => {
  return (
    <div className="space-y-4">
      <div className="text-center space-y-2">
        <h3 className="text-lg font-semibold text-foreground">Choose Your Template</h3>
        <p className="text-sm text-muted-foreground">
          Select a professional template that matches your style
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {templates.map((template) => {
          const Icon = template.icon;
          const isSelected = selectedTemplate === template.id;
          
          return (
            <Card 
              key={template.id} 
              className={`cursor-pointer transition-all hover:shadow-md ${
                isSelected 
                  ? 'ring-2 ring-primary border-primary' 
                  : 'hover:border-primary/50'
              }`}
              onClick={() => onTemplateSelect(template.id)}
            >
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    isSelected 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {isSelected ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Icon className="w-4 h-4" />
                    )}
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-foreground">{template.name}</h4>
                      {isSelected && (
                        <Badge variant="default" className="text-xs">Selected</Badge>
                      )}
                    </div>
                    
                    <p className="text-sm text-muted-foreground">
                      {template.description}
                    </p>
                    
                    <div className="text-xs text-muted-foreground italic">
                      {template.preview}
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {template.features.map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
