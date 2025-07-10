
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Experience } from '@/types/cv-types';
import { Plus, Trash2, Briefcase } from 'lucide-react';

interface ExperienceFormProps {
  data: Experience[];
  onChange: (data: Experience[]) => void;
}

export const ExperienceForm: React.FC<ExperienceFormProps> = ({ data, onChange }) => {
  const addExperience = () => {
    const newExperience: Experience = {
      id: Date.now().toString(),
      company: '',
      position: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: ['']
    };
    onChange([...data, newExperience]);
  };

  const updateExperience = (id: string, field: keyof Experience, value: any) => {
    onChange(data.map(exp => 
      exp.id === id ? { ...exp, [field]: value } : exp
    ));
  };

  const updateDescription = (id: string, index: number, value: string) => {
    const experience = data.find(exp => exp.id === id);
    if (experience) {
      const newDescription = [...experience.description];
      newDescription[index] = value;
      updateExperience(id, 'description', newDescription);
    }
  };

  const addDescriptionPoint = (id: string) => {
    const experience = data.find(exp => exp.id === id);
    if (experience) {
      updateExperience(id, 'description', [...experience.description, '']);
    }
  };

  const removeDescriptionPoint = (id: string, index: number) => {
    const experience = data.find(exp => exp.id === id);
    if (experience && experience.description.length > 1) {
      const newDescription = experience.description.filter((_, i) => i !== index);
      updateExperience(id, 'description', newDescription);
    }
  };

  const removeExperience = (id: string) => {
    onChange(data.filter(exp => exp.id !== id));
  };

  return (
    <div className="space-y-4">
      {data.map((experience, index) => (
        <Card key={experience.id} className="relative">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center">
                <Briefcase className="w-5 h-5 mr-2 text-blue-600" />
                Experience {index + 1}
              </CardTitle>
              {data.length > 1 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => removeExperience(experience.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              )}
            </div>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Job Title *</Label>
                <Input
                  placeholder="Software Engineer"
                  value={experience.position}
                  onChange={(e) => updateExperience(experience.id, 'position', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Company *</Label>
                <Input
                  placeholder="Google Inc."
                  value={experience.company}
                  onChange={(e) => updateExperience(experience.id, 'company', e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Location</Label>
              <Input
                placeholder="San Francisco, CA"
                value={experience.location}
                onChange={(e) => updateExperience(experience.id, 'location', e.target.value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Start Date</Label>
                <Input
                  placeholder="Jan 2022"
                  value={experience.startDate}
                  onChange={(e) => updateExperience(experience.id, 'startDate', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>End Date</Label>
                <Input
                  placeholder="Dec 2023"
                  value={experience.endDate}
                  onChange={(e) => updateExperience(experience.id, 'endDate', e.target.value)}
                  disabled={experience.current}
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id={`current-${experience.id}`}
                checked={experience.current}
                onCheckedChange={(checked) => updateExperience(experience.id, 'current', checked)}
              />
              <Label htmlFor={`current-${experience.id}`}>I currently work here</Label>
            </div>

            <div className="space-y-3">
              <Label>Job Description & Achievements</Label>
              {experience.description.map((desc, descIndex) => (
                <div key={descIndex} className="flex gap-2">
                  <Textarea
                    placeholder="• Developed and maintained web applications using React and Node.js..."
                    value={desc}
                    onChange={(e) => updateDescription(experience.id, descIndex, e.target.value)}
                    rows={2}
                    className="flex-1"
                  />
                  {experience.description.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeDescriptionPoint(experience.id, descIndex)}
                      className="text-red-500 hover:text-red-700 mt-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => addDescriptionPoint(experience.id)}
                className="w-full border-dashed"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Achievement
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}

      <Button
        type="button"
        variant="outline"
        onClick={addExperience}
        className="w-full border-dashed border-2 hover:border-solid"
      >
        <Plus className="w-4 h-4 mr-2" />
        Add Experience
      </Button>
    </div>
  );
};
