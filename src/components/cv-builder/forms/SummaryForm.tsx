
import React from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface SummaryFormProps {
  data: string;
  onChange: (data: string) => void;
}

export const SummaryForm: React.FC<SummaryFormProps> = ({ data, onChange }) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="summary">Professional Summary</Label>
        <Textarea
          id="summary"
          placeholder="Write a compelling professional summary that highlights your key skills, experience, and career objectives. Keep it concise and impactful (2-3 sentences)."
          value={data}
          onChange={(e) => onChange(e.target.value)}
          rows={4}
          className="resize-none"
        />
        <p className="text-xs text-muted-foreground">
          💡 Tip: Focus on your most relevant achievements and skills for the role you're targeting.
        </p>
      </div>
    </div>
  );
};
