import React from 'react';
import { CVData } from '@/types/cv-types';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Linkedin, Globe, Calendar, Building, Trophy } from 'lucide-react';

interface ExecutiveTemplateProps {
  cvData: CVData;
}

export const ExecutiveTemplate: React.FC<ExecutiveTemplateProps> = ({ cvData }) => {
  const { personalInfo, summary, education, experience, skills, otherWorks, achievements } = cvData;

  return (
    <div className="w-[210mm] min-h-[297mm] bg-white shadow-2xl">
      {/* Premium Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white p-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            {personalInfo.profileImage && (
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-gold-400">
                <img 
                  src={personalInfo.profileImage} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            <div>
              <h1 className="text-4xl font-bold mb-2">
                {personalInfo.firstName} {personalInfo.lastName}
              </h1>
              <div className="h-1 w-20 bg-yellow-400 mb-3"></div>
              <div className="text-gray-300 space-y-1">
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
              </div>
            </div>
          </div>
          
          <div className="text-right text-gray-300 space-y-1">
            {personalInfo.location && (
              <div className="flex items-center justify-end space-x-2">
                <span>{personalInfo.location}</span>
                <MapPin className="w-4 h-4" />
              </div>
            )}
            {personalInfo.linkedin && (
              <div className="flex items-center justify-end space-x-2">
                <span>{personalInfo.linkedin}</span>
                <Linkedin className="w-4 h-4" />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="p-8 space-y-8">
        {/* Executive Summary */}
        {summary && (
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <h2 className="text-2xl font-bold text-gray-900">Executive Summary</h2>
              <div className="flex-1 h-0.5 bg-yellow-400"></div>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">{summary}</p>
          </div>
        )}

        {/* Professional Experience */}
        {experience.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <h2 className="text-2xl font-bold text-gray-900">Leadership Experience</h2>
              <div className="flex-1 h-0.5 bg-yellow-400"></div>
            </div>
            {experience.map((exp) => (
              <div key={exp.id} className="bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-400">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                    <p className="text-lg font-semibold text-gray-700">{exp.company}</p>
                    <p className="text-gray-600">{exp.location}</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="text-sm font-semibold">
                      {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                    </Badge>
                  </div>
                </div>
                {exp.description && exp.description.length > 0 && (
                  <div className="space-y-2">
                    {exp.description.map((desc, index) => (
                      <div key={index} className="flex space-x-3">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">{desc}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Other Works */}
        {otherWorks.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <h2 className="text-2xl font-bold text-gray-900">Other Professional Work</h2>
              <div className="flex-1 h-0.5 bg-yellow-400"></div>
            </div>
            {otherWorks.map((work) => (
              <div key={work.id} className="bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-400">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{work.title}</h3>
                    <p className="text-lg font-semibold text-gray-700">{work.organization}</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="text-sm font-semibold">
                      {work.date}
                    </Badge>
                  </div>
                </div>
                {work.description && (
                  <div className="flex space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">{work.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Achievements */}
        {achievements.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <h2 className="text-2xl font-bold text-gray-900">Key Achievements</h2>
              <div className="flex-1 h-0.5 bg-yellow-400"></div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {achievements.map((achievement) => (
                <div key={achievement.id} className="bg-gray-50 p-4 rounded-lg border-l-4 border-yellow-400">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-gray-900">{achievement.title}</h3>
                    <Badge variant="outline" className="text-xs">
                      {achievement.date}
                    </Badge>
                  </div>
                  {achievement.category && (
                    <p className="text-gray-600 text-sm mb-2">{achievement.category}</p>
                  )}
                  {achievement.description && (
                    <p className="text-gray-700">{achievement.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {education.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <h2 className="text-2xl font-bold text-gray-900">Education & Credentials</h2>
              <div className="flex-1 h-0.5 bg-yellow-400"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {education.map((edu) => (
                <div key={edu.id} className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                  <p className="text-gray-700 font-semibold">{edu.field}</p>
                  <p className="text-gray-600">{edu.institution}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    {edu.startDate} - {edu.endDate}
                  </p>
                  {edu.gpa && <p className="text-sm text-gray-600">GPA: {edu.gpa}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Core Competencies */}
        {skills.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <h2 className="text-2xl font-bold text-gray-900">Core Competencies</h2>
              <div className="flex-1 h-0.5 bg-yellow-400"></div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {skills.map((skill) => (
                <div key={skill.id} className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="font-semibold text-gray-900">{skill.name}</div>
                  <div className="text-sm text-gray-600 mt-1">{skill.level}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
