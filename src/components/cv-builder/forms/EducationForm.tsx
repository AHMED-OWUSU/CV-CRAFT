
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Education } from '@/types/cv-types';
import { Plus, Trash2, GraduationCap } from 'lucide-react';

interface EducationFormProps {
  data: Education[];
  onChange: (data: Education[]) => void;
}

export const EducationForm: React.FC<EducationFormProps> = ({ data, onChange }) => {
  const addEducation = () => {
    const newEducation: Education = {
      id: Date.now().toString(),
      institution: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
      gpa: '',
      description: ''
    };
    onChange([...data, newEducation]);
  };

  const updateEducation = (id: string, field: keyof Education, value: string) => {
    onChange(data.map(edu => 
      edu.id === id ? { ...edu, [field]: value } : edu
    ));
  };

  const removeEducation = (id: string) => {
    onChange(data.filter(edu => edu.id !== id));
  };

  return (
    <div className="space-y-4">
      {data.map((education, index) => (
        <Card key={education.id} className="relative">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center">
                <GraduationCap className="w-5 h-5 mr-2 text-blue-600" />
                Education {index + 1}
              </CardTitle>
              {data.length > 1 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => removeEducation(education.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              )}
            </div>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Institution *</Label>
              <Input
                placeholder="University of California, Berkeley"
                value={education.institution}
                onChange={(e) => updateEducation(education.id, 'institution', e.target.value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Degree *</Label>
                <Input
                  placeholder="Bachelor of Science"
                  value={education.degree}
                  onChange={(e) => updateEducation(education.id, 'degree', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Field of Study *</Label>
                <Input
                  placeholder="Computer Science"
                  value={education.field}
                  onChange={(e) => updateEducation(education.id, 'field', e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>Start Date</Label>
                <Input
                  placeholder="2018"
                  value={education.startDate}
                  onChange={(e) => updateEducation(education.id, 'startDate', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>End Date</Label>
                <Input
                  placeholder="2022"
                  value={education.endDate}
                  onChange={(e) => updateEducation(education.id, 'endDate', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>GPA (Optional)</Label>
                <Input
                  placeholder="3.8"
                  value={education.gpa}
                  onChange={(e) => updateEducation(education.id, 'gpa', e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Description (Optional)</Label>
              <Textarea
                placeholder="Relevant coursework, achievements, honors, or activities..."
                value={education.description}
                onChange={(e) => updateEducation(education.id, 'description', e.target.value)}
                rows={2}
              />
            </div>
          </CardContent>
        </Card>
      ))}

      <Button
        type="button"
        variant="outline"
        onClick={addEducation}
        className="w-full border-dashed border-2 hover:border-solid"
      >
        <Plus className="w-4 h-4 mr-2" />
        Add Education
      </Button>
    </div>
  );
};
