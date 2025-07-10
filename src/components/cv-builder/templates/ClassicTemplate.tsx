import React from 'react';
import { CVData } from '@/types/cv-types';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Linkedin, Globe, Calendar, Building, Trophy } from 'lucide-react';

interface ClassicTemplateProps {
  cvData: CVData;
}

export const ClassicTemplate: React.FC<ClassicTemplateProps> = ({ cvData }) => {
  const { personalInfo, summary, education, experience, skills, otherWorks, achievements } = cvData;

  return (
    <div className="w-[210mm] min-h-[297mm] bg-white shadow-2xl p-8 space-y-6">
      {/* Header Section */}
      <div className="border-b-2 border-gray-800 pb-6">
        <div className="flex items-start space-x-6">
          {personalInfo.profileImage && (
            <div className="w-24 h-24 rounded-none overflow-hidden border-2 border-gray-800">
              <img 
                src={personalInfo.profileImage} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-2 uppercase tracking-wide">
              {personalInfo.firstName} {personalInfo.lastName}
            </h1>
            
            <div className="space-y-1 text-sm text-gray-700">
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

      {/* Summary Section */}
      {summary && (
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide border-b border-gray-300 pb-1">
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">{summary}</p>
        </div>
      )}

      {/* Experience Section */}
      {experience.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide border-b border-gray-300 pb-1">
            Professional Experience
          </h2>
          {experience.map((exp) => (
            <div key={exp.id} className="space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-gray-900">{exp.position}</h3>
                  <p className="font-semibold text-gray-700">{exp.company}</p>
                  <p className="text-sm text-gray-600 italic">{exp.location}</p>
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                </div>
              </div>
              {exp.description && exp.description.length > 0 && (
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
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
          <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide border-b border-gray-300 pb-1">
            Education
          </h2>
          {education.map((edu) => (
            <div key={edu.id} className="space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-gray-900">{edu.degree} in {edu.field}</h3>
                  <p className="font-semibold text-gray-700">{edu.institution}</p>
                  {edu.gpa && <p className="text-sm text-gray-600">GPA: {edu.gpa}</p>}
                </div>
                <div className="text-sm text-gray-600 font-medium">
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
          <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide border-b border-gray-300 pb-1">
            Other Works
          </h2>
          {otherWorks.map((work) => (
            <div key={work.id} className="space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-gray-900">{work.title}</h3>
                  <p className="font-semibold text-gray-700">{work.organization}</p>
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {work.date}
                </div>
              </div>
              {work.description && (
                <p className="text-gray-700 text-sm leading-relaxed ml-4">{work.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Achievements Section */}
      {achievements.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide border-b border-gray-300 pb-1">
            Achievements
          </h2>
          {achievements.map((achievement) => (
            <div key={achievement.id} className="space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-gray-900">{achievement.title}</h3>
                  {achievement.category && (
                    <p className="font-semibold text-gray-700 text-sm">{achievement.category}</p>
                  )}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {achievement.date}
                </div>
              </div>
              {achievement.description && (
                <p className="text-gray-700 text-sm leading-relaxed ml-4">{achievement.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Skills Section */}
      {skills.length > 0 && (
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide border-b border-gray-300 pb-1">
            Core Competencies
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {skills.map((skill) => (
              <div key={skill.id} className="flex justify-between border-b border-gray-100 pb-1">
                <span className="text-gray-700 font-medium">{skill.name}</span>
                <span className="text-gray-600 text-sm">{skill.level}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
