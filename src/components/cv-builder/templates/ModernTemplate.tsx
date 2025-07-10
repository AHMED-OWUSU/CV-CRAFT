import React from 'react';
import { CVData } from '@/types/cv-types';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Linkedin, Globe, Calendar, Building, Trophy } from 'lucide-react';

interface ModernTemplateProps {
  cvData: CVData;
}

export const ModernTemplate: React.FC<ModernTemplateProps> = ({ cvData }) => {
  const { personalInfo, summary, education, experience, skills, otherWorks, achievements } = cvData;

  return (
    <div className="w-[210mm] min-h-[297mm] bg-white shadow-2xl">
      {/* Header with Blue Background */}
      <div className="bg-blue-600 text-white p-8">
        <div className="flex items-start space-x-6">
          {personalInfo.profileImage && (
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/20">
              <img 
                src={personalInfo.profileImage} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-3">
              {personalInfo.firstName} {personalInfo.lastName}
            </h1>
            
            <div className="grid grid-cols-2 gap-2 text-sm opacity-90">
              {personalInfo.email && (
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>{personalInfo.email}</span>
                </div>
              )}
              {personalInfo.phone && (
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>{personalInfo.phone}</span>
                </div>
              )}
              {personalInfo.location && (
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>{personalInfo.location}</span>
                </div>
              )}
              {personalInfo.linkedin && (
                <div className="flex items-center space-x-2">
                  <Linkedin className="w-4 h-4" />
                  <span>{personalInfo.linkedin}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-6">
        {/* Summary Section */}
        {summary && (
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900 text-blue-600">
              Professional Summary
            </h2>
            <p className="text-gray-700 leading-relaxed">{summary}</p>
          </div>
        )}

        {/* Experience Section */}
        {experience.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-blue-600">Work Experience</h2>
            {experience.map((exp) => (
              <div key={exp.id} className="border-l-4 border-blue-200 pl-6 space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900">{exp.position}</h3>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                    <p className="text-sm text-gray-600">{exp.location}</p>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </div>
                </div>
                {exp.description && exp.description.length > 0 && (
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {exp.description.map((desc, index) => (
                      <li key={index} className="text-sm leading-relaxed">{desc}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Education Section */}
        {education.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-blue-600">Education</h2>
            {education.map((edu) => (
              <div key={edu.id} className="border-l-4 border-blue-200 pl-6 space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900">{edu.degree} in {edu.field}</h3>
                    <p className="text-blue-600 font-medium">{edu.institution}</p>
                    {edu.gpa && <p className="text-sm text-gray-600">GPA: {edu.gpa}</p>}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {edu.startDate} - {edu.endDate}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Other Works Section */}
        {otherWorks.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-blue-600">Other Works</h2>
            {otherWorks.map((work) => (
              <div key={work.id} className="border-l-4 border-blue-200 pl-6 space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900">{work.title}</h3>
                    <p className="text-blue-600 font-medium">{work.organization}</p>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {work.date}
                  </div>
                </div>
                {work.description && (
                  <p className="text-gray-700 text-sm leading-relaxed">{work.description}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Achievements Section */}
        {achievements.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-blue-600">Achievements</h2>
            {achievements.map((achievement) => (
              <div key={achievement.id} className="border-l-4 border-blue-200 pl-6 space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900">{achievement.title}</h3>
                    {achievement.category && (
                      <p className="text-blue-600 font-medium text-sm">{achievement.category}</p>
                    )}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Trophy className="w-4 h-4 mr-1" />
                    {achievement.date}
                  </div>
                </div>
                {achievement.description && (
                  <p className="text-gray-700 text-sm leading-relaxed">{achievement.description}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Skills Section */}
        {skills.length > 0 && (
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-blue-600">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill.id} className="bg-blue-100 text-blue-800 border-blue-200">
                  {skill.name} ({skill.level})
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
