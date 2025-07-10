
import React from 'react';
import { Button } from '@/components/ui/button';
import { FileDown, Moon, Sun, Layout, Zap } from 'lucide-react';
import { CVData } from '@/types/cv-types';
import { useToast } from '@/hooks/use-toast';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Link } from 'react-router-dom';

interface NavbarProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
  onTemplateSelect: () => void;
  cvData: CVData;
}

export const Navbar: React.FC<NavbarProps> = ({ isDarkMode, onToggleTheme, onTemplateSelect, cvData }) => {
  const { toast } = useToast();

  const handleExportPDF = async () => {
    try {
      toast({
        title: "Generating PDF...",
        description: "Please wait while we prepare your CV for download.",
      });

      // Find the CV preview element
      const cvElement = document.querySelector('[data-cv-preview]') as HTMLElement;
      
      if (!cvElement) {
        throw new Error('CV preview not found');
      }

      // Generate canvas from the CV element
      const canvas = await html2canvas(cvElement, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        width: cvElement.scrollWidth,
        height: cvElement.scrollHeight,
      });

      // Create PDF
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 0;

      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      
      // Generate filename
      const fileName = `${cvData.personalInfo.firstName || 'CV'}_${cvData.personalInfo.lastName || 'Resume'}.pdf`;
      
      // Download the PDF
      pdf.save(fileName);

      toast({
        title: "Success!",
        description: "Your CV has been downloaded successfully.",
      });
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast({
        title: "Export Failed",
        description: "There was an error generating your PDF. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <nav className="h-16 border-b bg-card/50 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center justify-between h-full px-6">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            CVCraft
          </span>
        </Link>

        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" className="text-sm" onClick={onTemplateSelect}>
            <Layout className="w-4 h-4 mr-2" />
            Choose Template
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={onToggleTheme}
            className="text-sm"
          >
            {isDarkMode ? <Sun className="w-4 h-4 mr-2" /> : <Moon className="w-4 h-4 mr-2" />}
            {isDarkMode ? 'Light' : 'Dark'}
          </Button>
          
          <Button 
            size="sm" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-sm"
            onClick={handleExportPDF}
          >
            <FileDown className="w-4 h-4 mr-2" />
            Export PDF
          </Button>
        </div>
      </div>
    </nav>
  );
};
