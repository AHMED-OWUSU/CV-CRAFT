
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { OtherWork } from '@/types/cv-types';
import { Plus, Trash2, Building } from 'lucide-react';

interface OtherWorksFormProps {
  data: OtherWork[];
  onChange: (data: OtherWork[]) => void;
}

export const OtherWorksForm: React.FC<OtherWorksFormProps> = ({ data, onChange }) => {
  const addOtherWork = () => {
    const newWork: OtherWork = {
      id: Date.now().toString(),
      title: '',
      organization: '',
      date: '',
      description: ''
    };
    onChange([...data, newWork]);
  };

  const updateOtherWork = (id: string, field: keyof OtherWork, value: string) => {
    onChange(data.map(work => 
      work.id === id ? { ...work, [field]: value } : work
    ));
  };

  const removeOtherWork = (id: string) => {
    onChange(data.filter(work => work.id !== id));
  };

  return (
    <div className="space-y-4">
      {data.map((work, index) => (
        <Card key={work.id} className="relative">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center">
                <Building className="w-5 h-5 mr-2 text-green-600" />
                Other Work {index + 1}
              </CardTitle>
              {data.length > 0 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => removeOtherWork(work.id)}
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
                  placeholder="Volunteer Coordinator"
                  value={work.title}
                  onChange={(e) => updateOtherWork(work.id, 'title', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Organization *</Label>
                <Input
                  placeholder="Red Cross Society"
                  value={work.organization}
                  onChange={(e) => updateOtherWork(work.id, 'organization', e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Date</Label>
              <Input
                placeholder="Jan 2023 - Present"
                value={work.date}
                onChange={(e) => updateOtherWork(work.id, 'date', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea
                placeholder="Brief description of your role and contributions..."
                value={work.description}
                onChange={(e) => updateOtherWork(work.id, 'description', e.target.value)}
                rows={3}
              />
            </div>
          </CardContent>
        </Card>
      ))}

      <Button
        type="button"
        variant="outline"
        onClick={addOtherWork}
        className="w-full border-dashed border-2 hover:border-solid"
      >
        <Plus className="w-4 h-4 mr-2" />
        Add Other Work
      </Button>
    </div>
  );
};
