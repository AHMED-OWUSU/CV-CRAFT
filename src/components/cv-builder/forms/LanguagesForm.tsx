import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Trash2, Globe } from 'lucide-react';
import { Language } from '@/types/cv-types';

interface LanguagesFormProps {
  data: Language[];
  onChange: (data: Language[]) => void;
}

export const LanguagesForm: React.FC<LanguagesFormProps> = ({ data, onChange }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const sampleLanguages = [
    'English', 'French', 'Spanish', 'German', 'Mandarin', 'Arabic', 'Hindi', 'Portuguese', 'Russian', 'Italian', 'Japanese', 'Korean', 'Swahili', 'Turkish', 'Dutch'
  ];

  const addLanguage = () => {
    const newLanguage: Language = {
      id: Date.now().toString(),
      name: '',
      proficiency: 'Conversational'
    };
    onChange([...data, newLanguage]);
  };

  const addSuggestedLanguage = (langName: string) => {
    if (data.some(lang => lang.name.toLowerCase() === langName.toLowerCase())) return;
    const newLanguage: Language = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 5),
      name: langName,
      proficiency: 'Conversational'
    };
    onChange([...data, newLanguage]);
  };

  const updateLanguage = (id: string, field: keyof Language, value: string) => {
    onChange(data.map(lang => lang.id === id ? { ...lang, [field]: value } : lang));
  };

  const removeLanguage = (id: string) => {
    onChange(data.filter(lang => lang.id !== id));
  };

  return (
    <div className="space-y-4">
      <div className="text-sm text-muted-foreground bg-blue-50 p-3 rounded-lg border-l-4 border-blue-400">
        💡 <strong>Tip:</strong> List languages you speak and your proficiency level.
      </div>
      <button
        type="button"
        className="mb-2 px-3 py-1 bg-primary text-white rounded text-sm shadow hover:bg-primary/90"
        onClick={() => setShowSuggestions((v) => !v)}
      >
        Suggest Languages
      </button>
      {showSuggestions && (
        <div className="mb-2 border rounded bg-background shadow p-2 flex flex-wrap gap-2">
          {sampleLanguages.map((lang, idx) => (
            <span
              key={idx}
              className="cursor-pointer bg-muted hover:bg-blue-100 px-3 py-1 rounded text-sm border"
              onClick={() => addSuggestedLanguage(lang)}
            >
              {lang}
            </span>
          ))}
        </div>
      )}
      {data.map((lang, index) => (
        <Card key={lang.id} className="relative">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center">
                <Globe className="w-5 h-5 mr-2 text-green-600" />
                Language {index + 1}
              </CardTitle>
              {data.length > 0 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => removeLanguage(lang.id)}
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
                <Label>Language Name *</Label>
                <Input
                  placeholder="e.g. English"
                  value={lang.name}
                  onChange={(e) => updateLanguage(lang.id, 'name', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Proficiency</Label>
                <Select
                  value={lang.proficiency}
                  onValueChange={(value: Language['proficiency']) => updateLanguage(lang.id, 'proficiency', value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Basic">Basic</SelectItem>
                    <SelectItem value="Conversational">Conversational</SelectItem>
                    <SelectItem value="Fluent">Fluent</SelectItem>
                    <SelectItem value="Native">Native</SelectItem>
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
        onClick={addLanguage}
        className="w-full border-dashed border-2 hover:border-solid"
      >
        <Plus className="w-4 h-4 mr-2" />
        Add Language
      </Button>
    </div>
  );
}; 