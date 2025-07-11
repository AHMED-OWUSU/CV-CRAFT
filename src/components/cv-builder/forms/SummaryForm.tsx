
import React, { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface SummaryFormProps {
  data: string;
  onChange: (data: string) => void;
}

export const SummaryForm: React.FC<SummaryFormProps> = ({ data, onChange }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const sampleSummaries = [
    "Results-driven software engineer with 5+ years of experience designing, developing, and implementing scalable applications. Adept at collaborating with cross-functional teams to deliver high-quality solutions on time.",
    "Creative marketing specialist with a proven track record in digital campaigns and brand management. Skilled in content creation, analytics, and driving engagement across multiple platforms.",
    "Detail-oriented accountant with expertise in financial reporting, budgeting, and compliance. Committed to ensuring accuracy and efficiency in all financial operations.",
    "Experienced educator passionate about fostering student growth and engagement through innovative teaching methods and personalized learning plans."
  ];

  const handleSuggestionClick = (summary: string) => {
    onChange(summary);
    setShowSuggestions(false);
  };

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
        <button
          type="button"
          className="mt-2 px-3 py-1 bg-primary text-white rounded text-sm shadow hover:bg-primary/90"
          onClick={() => setShowSuggestions((v) => !v)}
        >
          Suggest Summary
        </button>
        {showSuggestions && (
          <div className="mt-2 border rounded bg-background shadow p-2 space-y-2">
            {sampleSummaries.map((summary, idx) => (
              <div
                key={idx}
                className="cursor-pointer hover:bg-muted p-2 rounded text-sm"
                onClick={() => handleSuggestionClick(summary)}
              >
                {summary}
              </div>
            ))}
          </div>
        )}
        <p className="text-xs text-muted-foreground">
          💡 Tip: Focus on your most relevant achievements and skills for the role you're targeting.
        </p>
      </div>
    </div>
  );
};
