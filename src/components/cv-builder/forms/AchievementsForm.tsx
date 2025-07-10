
import React from 'react';
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
