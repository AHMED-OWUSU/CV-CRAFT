
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Achievement } from '@/types/cv-types';
import { Plus, Trash2, Trophy } from 'lucide-react';

interface AchievementsFormProps {
  data: Achievement[];
  onChange: (data: Achievement[]) => void;
}

export const AchievementsForm: React.FC<AchievementsFormProps> = ({ data, onChange }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const sampleAchievements = [
    {
      title: "Employee of the Year",
      description: "Recognized for outstanding performance and dedication to team success.",
      date: "2023",
      category: "Professional"
    },
    {
      title: "Dean's List",
      description: "Achieved academic excellence for three consecutive years.",
      date: "2022",
      category: "Academic"
    },
    {
      title: "Top Sales Performer",
      description: "Exceeded sales targets by 30% and led the team in new client acquisitions.",
      date: "2021",
      category: "Professional"
    },
    {
      title: "Volunteer of the Month",
      description: "Recognized for exceptional commitment to community service initiatives.",
      date: "2023",
      category: "Personal"
    }
  ];

  const addAchievement = () => {
    const newAchievement: Achievement = {
      id: Date.now().toString(),
      title: '',
      description: '',
      date: '',
      category: ''
    };
    onChange([...data, newAchievement]);
  };

  const addSuggestedAchievement = (achievement: typeof sampleAchievements[0]) => {
    if (data.some(a => a.title === achievement.title && a.description === achievement.description)) return;
    const newAchievement: Achievement = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 5),
      ...achievement
    };
    onChange([...data, newAchievement]);
  };

  const updateAchievement = (id: string, field: keyof Achievement, value: string) => {
    onChange(data.map(achievement => 
      achievement.id === id ? { ...achievement, [field]: value } : achievement
    ));
  };

  const removeAchievement = (id: string) => {
    onChange(data.filter(achievement => achievement.id !== id));
  };

  return (
    <div className="space-y-4">
      <button
        type="button"
        className="mb-2 px-3 py-1 bg-primary text-white rounded text-sm shadow hover:bg-primary/90"
        onClick={() => setShowSuggestions((v) => !v)}
      >
        Suggest Achievements
      </button>
      {showSuggestions && (
        <div className="mb-2 border rounded bg-background shadow p-2 space-y-2">
          {sampleAchievements.map((ach, idx) => (
            <div
              key={idx}
              className="cursor-pointer hover:bg-yellow-100 p-2 rounded text-sm border"
              onClick={() => addSuggestedAchievement(ach)}
            >
              <strong>{ach.title}</strong> <span className="text-xs text-muted-foreground">({ach.category}, {ach.date})</span>
              <div>{ach.description}</div>
            </div>
          ))}
        </div>
      )}
      {data.map((achievement, index) => (
        <Card key={achievement.id} className="relative">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center">
                <Trophy className="w-5 h-5 mr-2 text-yellow-600" />
                Achievement {index + 1}
              </CardTitle>
              {data.length > 0 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => removeAchievement(achievement.id)}
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
                <Label>Title *</Label>
                <Input
                  placeholder="Employee of the Year"
                  value={achievement.title}
                  onChange={(e) => updateAchievement(achievement.id, 'title', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Date</Label>
                <Input
                  placeholder="Dec 2023"
                  value={achievement.date}
                  onChange={(e) => updateAchievement(achievement.id, 'date', e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Category</Label>
              <Input
                placeholder="Professional, Academic, Personal, etc."
                value={achievement.category || ''}
                onChange={(e) => updateAchievement(achievement.id, 'category', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea
                placeholder="Brief description of your achievement..."
                value={achievement.description}
                onChange={(e) => updateAchievement(achievement.id, 'description', e.target.value)}
                rows={3}
              />
            </div>
          </CardContent>
        </Card>
      ))}

      <Button
        type="button"
        variant="outline"
        onClick={addAchievement}
        className="w-full border-dashed border-2 hover:border-solid"
      >
        <Plus className="w-4 h-4 mr-2" />
        Add Achievement
      </Button>
    </div>
  );
};
