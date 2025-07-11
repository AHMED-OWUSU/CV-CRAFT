
import React, { useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { PersonalInfoForm } from './forms/PersonalInfoForm';
import { SummaryForm } from './forms/SummaryForm';
import { EducationForm } from './forms/EducationForm';
import { ExperienceForm } from './forms/ExperienceForm';
import { SkillsForm } from './forms/SkillsForm';
import { OtherWorksForm } from './forms/OtherWorksForm';
import { AchievementsForm } from './forms/AchievementsForm';
import { LanguagesForm } from './forms/LanguagesForm';
import { CVData } from '@/types/cv-types';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, User, FileText, GraduationCap, Briefcase, Star, Building, Trophy, Globe } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface FormPanelProps {
  cvData: CVData;
  updateCVData: (section: keyof CVData, data: any) => void;
}

const sections = [
  { key: 'personalInfo', title: 'Personal Information', icon: User, required: true },
  { key: 'summary', title: 'Professional Summary', icon: FileText, required: false },
  { key: 'education', title: 'Education', icon: GraduationCap, required: true },
  { key: 'experience', title: 'Work Experience', icon: Briefcase, required: true },
  { key: 'skills', title: 'Skills', icon: Star, required: true },
  { key: 'languages', title: 'Languages', icon: Globe, required: false },
  { key: 'otherWorks', title: 'Other Works', icon: Building, required: false },
  { key: 'achievements', title: 'Achievements', icon: Trophy, required: false },
];

export const FormPanel: React.FC<FormPanelProps> = ({ cvData, updateCVData }) => {
  const [openSections, setOpenSections] = useState<Set<string>>(new Set(['personalInfo']));

  const toggleSection = (sectionKey: string) => {
    setOpenSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sectionKey)) {
        newSet.delete(sectionKey);
      } else {
        newSet.add(sectionKey);
      }
      return newSet;
    });
  };

  const renderFormSection = (sectionKey: string) => {
    switch (sectionKey) {
      case 'personalInfo':
        return (
          <PersonalInfoForm
            data={cvData.personalInfo}
            onChange={(data) => updateCVData('personalInfo', data)}
          />
        );
      case 'summary':
        return (
          <SummaryForm
            data={cvData.summary}
            onChange={(data) => updateCVData('summary', data)}
          />
        );
      case 'education':
        return (
          <EducationForm
            data={cvData.education}
            onChange={(data) => updateCVData('education', data)}
          />
        );
      case 'experience':
        return (
          <ExperienceForm
            data={cvData.experience}
            onChange={(data) => updateCVData('experience', data)}
          />
        );
      case 'skills':
        return (
          <SkillsForm
            data={cvData.skills}
            onChange={(data) => updateCVData('skills', data)}
          />
        );
      case 'languages':
        return (
          <LanguagesForm
            data={cvData.languages}
            onChange={(data) => updateCVData('languages', data)}
          />
        );
      case 'otherWorks':
        return (
          <OtherWorksForm
            data={cvData.otherWorks}
            onChange={(data) => updateCVData('otherWorks', data)}
          />
        );
      case 'achievements':
        return (
          <AchievementsForm
            data={cvData.achievements}
            onChange={(data) => updateCVData('achievements', data)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full md:w-1/2 border-r bg-background/50">
      <div className="p-6 border-b">
        <h2 className="text-2xl font-bold text-foreground">Build Your CV</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Fill in your information to create a professional CV
        </p>
      </div>
      
      <ScrollArea className="h-[calc(100vh-8rem)]">
        <div className="p-6 space-y-4">
          {sections.map((section) => {
            const isOpen = openSections.has(section.key);
            const Icon = section.icon;
            
            return (
              <Card key={section.key} className="shadow-sm hover:shadow-md transition-shadow">
                <Collapsible open={isOpen} onOpenChange={() => toggleSection(section.key)}>
                  <CollapsibleTrigger className="w-full">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <Icon className="w-4 h-4 text-primary" />
                          </div>
                          <div className="text-left">
                            <h3 className="font-semibold text-foreground">{section.title}</h3>
                            {section.required && (
                              <span className="text-xs text-muted-foreground">Required</span>
                            )}
                          </div>
                        </div>
                        <ChevronRight className={`w-5 h-5 text-muted-foreground transition-transform ${isOpen ? 'rotate-90' : ''}`} />
                      </div>
                    </CardContent>
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent>
                    <CardContent className="pt-0 pb-4 px-4">
                      {renderFormSection(section.key)}
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
};
