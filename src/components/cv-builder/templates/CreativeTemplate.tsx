
import React from 'react';
import { CVData } from '@/types/cv-types';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Linkedin, Globe, Calendar, Star } from 'lucide-react';

interface CreativeTemplateProps {
  cvData: CVData;
}

export const CreativeTemplate: React.FC<CreativeTemplateProps> = ({ cvData }) => {
  const { personalInfo, summary, education, experience, skills } = cvData;

  return (
    <div className="w-[210mm] min-h-[297mm] bg-white shadow-2xl">
      {/* Sidebar */}
      <div className="flex">
        <div className="w-1/3 bg-gradient-to-b from-purple-600 to-purple-800 text-white p-6 space-y-6">
          {/* Profile Section */}
          <div className="text-center space-y-4">
            {personalInfo.profileImage && (
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-white/30">
                <img 
                  src={personalInfo.profileImage} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            <div>
              <h1 className="text-xl font-bold">
                {personalInfo.firstName}
              </h1>
              <h1 className="text-xl font-bold">
                {personalInfo.lastName}
              </h1>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold border-b border-white/30 pb-2">Contact</h3>
            <div className="space-y-2 text-sm">
              {personalInfo.email && (
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span className="break-all">{personalInfo.email}</span>
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
                  <span className="break-all">{personalInfo.linkedin}</span>
                </div>
              )}
            </div>
          </div>

          {/* Skills Section */}
          {skills.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-lg font-semibold border-b border-white/30 pb-2">Skills</h3>
              <div className="space-y-2">
                {skills.map((skill) => (
                  <div key={skill.id} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{skill.name}</span>
                      <span>{skill.level}</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div 
                        className="bg-white rounded-full h-2 transition-all"
                        style={{
                          width: skill.level === 'Expert' ? '100%' : 
                                 skill.level === 'Advanced' ? '80%' :
                                 skill.level === 'Intermediate' ? '60%' : '40%'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 space-y-6">
          {/* Summary Section */}
          {summary && (
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900 text-purple-600">
                About Me
              </h2>
              <p className="text-gray-700 leading-relaxed">{summary}</p>
            </div>
          )}

          {/* Experience Section */}
          {experience.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-purple-600">Experience</h2>
              {experience.map((exp, index) => (
                <div key={exp.id} className="relative">
                  <div className="flex space-x-4">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
                      {index < experience.length - 1 && (
                        <div className="w-0.5 h-full bg-purple-200 mt-2"></div>
                      )}
                    </div>
                    <div className="flex-1 space-y-2 pb-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-gray-900">{exp.position}</h3>
                          <p className="text-purple-600 font-semibold">{exp.company}</p>
                          <p className="text-sm text-gray-600">{exp.location}</p>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                        </Badge>
                      </div>
                      {exp.description && exp.description.length > 0 && (
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                          {exp.description.map((desc, descIndex) => (
                            <li key={descIndex} className="text-sm leading-relaxed">{desc}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Education Section */}
          {education.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-purple-600">Education</h2>
              {education.map((edu) => (
                <div key={edu.id} className="bg-purple-50 p-4 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-gray-900">{edu.degree} in {edu.field}</h3>
                      <p className="text-purple-600 font-semibold">{edu.institution}</p>
                      {edu.gpa && <p className="text-sm text-gray-600">GPA: {edu.gpa}</p>}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {edu.startDate} - {edu.endDate}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
