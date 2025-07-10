
import React, { useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { PersonalInfo } from '@/types/cv-types';
import { Upload, X, AlertCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

interface PersonalInfoFormProps {
  data: PersonalInfo;
  onChange: (data: PersonalInfo) => void;
}

export const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({ data, onChange }) => {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (field: keyof PersonalInfo, value: string) => {
    onChange({ ...data, [field]: value });
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid file type",
        description: "Please select an image file (JPG, PNG, etc.)",
        variant: "destructive",
      });
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please select an image smaller than 5MB",
        variant: "destructive",
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        onChange({ ...data, profileImage: result });
        toast({
          title: "Image uploaded successfully",
          description: "Your profile image has been updated",
        });
      }
    };
    reader.onerror = () => {
      toast({
        title: "Upload failed",
        description: "There was an error uploading your image. Please try again.",
        variant: "destructive",
      });
    };
    reader.readAsDataURL(file);
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const removeImage = () => {
    onChange({ ...data, profileImage: null });
    toast({
      title: "Image removed",
      description: "Your profile image has been removed",
    });
  };

  return (
    <div className="space-y-6">
      {/* Profile Image Upload */}
      <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-dashed border-2 border-blue-200">
        <CardContent className="p-6">
          <div className="text-center">
            {data.profileImage ? (
              <div className="relative inline-block">
                <img
                  src={data.profileImage}
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                  onError={() => {
                    toast({
                      title: "Image error",
                      description: "There was an error displaying your image",
                      variant: "destructive",
                    });
                    onChange({ ...data, profileImage: null });
                  }}
                />
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  className="absolute -top-2 -right-2 rounded-full w-6 h-6 p-0"
                  onClick={removeImage}
                >
                  <X className="w-3 h-3" />
                </Button>
              </div>
            ) : (
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center border-4 border-white shadow-lg">
                <Upload className="w-8 h-8 text-blue-500" />
              </div>
            )}
            <div className="mt-4">
              <Button 
                type="button" 
                variant="outline" 
                size="sm" 
                className="w-full hover:bg-blue-50"
                onClick={handleUploadClick}
              >
                <Upload className="w-4 h-4 mr-2" />
                {data.profileImage ? 'Change Photo' : 'Upload Photo'}
              </Button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <p className="text-xs text-muted-foreground mt-2">
                Upload a professional headshot (JPG, PNG, max 5MB)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Personal Information Fields */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name *</Label>
          <Input
            id="firstName"
            placeholder="John"
            value={data.firstName}
            onChange={(e) => handleChange('firstName', e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name *</Label>
          <Input
            id="lastName"
            placeholder="Doe"
            value={data.lastName}
            onChange={(e) => handleChange('lastName', e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address *</Label>
        <Input
          id="email"
          type="email"
          placeholder="john.doe@example.com"
          value={data.email}
          onChange={(e) => handleChange('email', e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            placeholder="+1 (555) 123-4567"
            value={data.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            placeholder="New York, NY"
            value={data.location}
            onChange={(e) => handleChange('location', e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="linkedin">LinkedIn Profile</Label>
        <Input
          id="linkedin"
          placeholder="linkedin.com/in/johndoe"
          value={data.linkedin}
          onChange={(e) => handleChange('linkedin', e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="website">Website/Portfolio</Label>
        <Input
          id="website"
          placeholder="www.johndoe.com"
          value={data.website}
          onChange={(e) => handleChange('website', e.target.value)}
        />
      </div>
    </div>
  );
};
