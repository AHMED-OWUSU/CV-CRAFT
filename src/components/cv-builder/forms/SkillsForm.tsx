
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skill } from '@/types/cv-types';
import { Plus, Trash2, Star } from 'lucide-react';

interface SkillsFormProps {
  data: Skill[];
  onChange: (data: Skill[]) => void;
}

export const SkillsForm: React.FC<SkillsFormProps> = ({ data, onChange }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const sampleSkills = [
    "JavaScript", "Project Management", "Communication", "Python", "Team Leadership",
    "Data Analysis", "Customer Service", "React", "Problem Solving", "Time Management",
    "Marketing", "SQL", "Creativity", "Collaboration", "Adaptability"
  ];

  const addSkill = () => {
    const newSkill: Skill = {
      id: Date.now().toString(),
      name: '',
      level: 'Intermediate'
    };
    onChange([...data, newSkill]);
  };

  const addSuggestedSkill = (skillName: string) => {
    if (data.some(skill => skill.name.toLowerCase() === skillName.toLowerCase())) return;
    const newSkill: Skill = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 5),
      name: skillName,
      level: 'Intermediate'
    };
    onChange([...data, newSkill]);
  };

  const updateSkill = (id: string, field: keyof Skill, value: string) => {
    onChange(data.map(skill => 
      skill.id === id ? { ...skill, [field]: value } : skill
    ));
  };

  const removeSkill = (id: string) => {
    onChange(data.filter(skill => skill.id !== id));
  };

  return (
    <div className="space-y-4">
      <div className="text-sm text-muted-foreground bg-blue-50 p-3 rounded-lg border-l-4 border-blue-400">
        💡 <strong>Pro tip:</strong> List your most relevant technical and soft skills. Be honest about your proficiency levels.
      </div>
      <button
        type="button"
        className="mb-2 px-3 py-1 bg-primary text-white rounded text-sm shadow hover:bg-primary/90"
        onClick={() => setShowSuggestions((v) => !v)}
      >
        Suggest Skills
      </button>
      {showSuggestions && (
        <div className="mb-2 border rounded bg-background shadow p-2 flex flex-wrap gap-2">
          {sampleSkills.map((skill, idx) => (
            <span
              key={idx}
              className="cursor-pointer bg-muted hover:bg-blue-100 px-3 py-1 rounded text-sm border"
              onClick={() => addSuggestedSkill(skill)}
            >
              {skill}
            </span>
          ))}
        </div>
      )}

      {data.map((skill, index) => (
        <Card key={skill.id} className="relative">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center">
                <Star className="w-5 h-5 mr-2 text-blue-600" />
                Skill {index + 1}
              </CardTitle>
              {data.length > 1 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => removeSkill(skill.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              )}
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Skill Name *</Label>
                <Input
                  placeholder="JavaScript, Project Management, etc."
                  value={skill.name}
                  onChange={(e) => updateSkill(skill.id, 'name', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Proficiency Level</Label>
                <Select
                  value={skill.level}
                  onValueChange={(value: Skill['level']) => updateSkill(skill.id, 'level', value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Beginner">Beginner</SelectItem>
                    <SelectItem value="Intermediate">Intermediate</SelectItem>
                    <SelectItem value="Advanced">Advanced</SelectItem>
                    <SelectItem value="Expert">Expert</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      <Button
        type="button"
        variant="outline"
        onClick={addSkill}
        className="w-full border-dashed border-2 hover:border-solid"
      >
        <Plus className="w-4 h-4 mr-2" />
        Add Skill
      </Button>
    </div>
  );
};
