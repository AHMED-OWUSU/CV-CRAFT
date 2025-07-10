
import React, { useState } from 'react';
import { Navbar } from '@/components/cv-builder/Navbar';
import { FormPanel } from '@/components/cv-builder/FormPanel';
import { PreviewPanel } from '@/components/cv-builder/PreviewPanel';
import { TemplateSelector } from '@/components/cv-builder/TemplateSelector';
import { CVData, CVTemplate } from '@/types/cv-types';

const CVBuilder = () => {
  const [cvData, setCvData] = useState<CVData>({
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      location: '',
      linkedin: '',
      website: '',
      profileImage: null
    },
    summary: '',
    education: [],
    experience: [],
    skills: [],
    certifications: [],
    projects: [],
    languages: [],
    references: [],
    otherWorks: [],
    achievements: [],
    template: 'modern'
  });

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showTemplateSelector, setShowTemplateSelector] = useState(false);

  const updateCVData = (section: keyof CVData, data: any) => {
    setCvData(prev => ({
      ...prev,
      [section]: data
    }));
  };

  const handleTemplateSelect = (template: CVTemplate) => {
    updateCVData('template', template);
    setShowTemplateSelector(false);
  };

  return (
    <div className={`min-h-screen bg-background ${isDarkMode ? 'dark' : ''}`}>
      <Navbar 
        isDarkMode={isDarkMode} 
        onToggleTheme={() => setIsDarkMode(!isDarkMode)}
        onTemplateSelect={() => setShowTemplateSelector(true)}
        cvData={cvData}
      />
      
      {showTemplateSelector ? (
        <div className="flex h-[calc(100vh-4rem)] items-center justify-center p-6">
          <div className="max-w-4xl w-full">
            <TemplateSelector 
              selectedTemplate={cvData.template}
              onTemplateSelect={handleTemplateSelect}
            />
          </div>
        </div>
      ) : (
        <div className="flex h-[calc(100vh-4rem)]">
          <FormPanel cvData={cvData} updateCVData={updateCVData} />
          <PreviewPanel cvData={cvData} />
        </div>
      )}
    </div>
  );
};

export default CVBuilder;
