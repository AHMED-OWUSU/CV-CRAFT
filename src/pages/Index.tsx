
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { 
  FileText, 
  Zap, 
  Star, 
  Users, 
  Download, 
  Palette,
  ArrowRight,
  CheckCircle,
  Sparkles
} from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: FileText,
      title: "Professional Templates",
      description: "Choose from expertly designed CV templates that pass ATS systems"
    },
    {
      icon: Zap,
      title: "Real-time Preview",
      description: "See your changes instantly with our live A4 preview"
    },
    {
      icon: Palette,
      title: "Customizable Themes",
      description: "Light and dark modes with beautiful color schemes"
    },
    {
      icon: Download,
      title: "Export to PDF",
      description: "Download your CV as a high-quality PDF ready for applications"
    }
  ];

  const benefits = [
    "ATS-friendly templates that get past automated screening",
    "Smart sections that adapt to your experience level",
    "Professional formatting that impresses recruiters",
    "Mobile-responsive design for editing anywhere",
    "Export in multiple formats for different applications"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-blue-50/30">
      {/* Navigation */}
      <nav className="border-b bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                CVCraft
              </span>
            </div>
            <Button 
              onClick={() => navigate('/builder')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Start Building
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-200 text-sm px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Trusted by 50,000+ job seekers
            </Badge>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Build Your{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Job-Ready CV
              </span>
              <br />
              in Minutes
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Create stunning, professional CVs that get you noticed. Our AI-powered builder 
              helps you craft the perfect resume with expert templates and real-time guidance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
              <Button 
                size="lg"
                onClick={() => navigate('/builder')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4 h-auto"
              >
                Start Creating Your CV
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto">
                View Sample CVs
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500 mt-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>No signup required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Free to use</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Export to PDF</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything you need to create the perfect CV
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional tools and templates designed to help you stand out in today's competitive job market
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-white to-gray-50/50">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why top candidates choose CVCraft
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-lg leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
              <Button 
                size="lg"
                onClick={() => navigate('/builder')}
                className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full"></div>
                    <div>
                      <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
                      <div className="h-3 bg-gray-100 rounded w-24"></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-3 bg-gray-100 rounded w-full"></div>
                    <div className="h-3 bg-gray-100 rounded w-5/6"></div>
                    <div className="h-3 bg-gray-100 rounded w-4/6"></div>
                  </div>
                  <div className="mt-6 pt-4 border-t">
                    <div className="h-4 bg-blue-100 rounded w-1/3 mb-3"></div>
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-100 rounded w-full"></div>
                      <div className="h-3 bg-gray-100 rounded w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <Star className="w-5 h-5 text-yellow-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to land your dream job?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join thousands of successful job seekers who've created their perfect CV with CVCraft. 
            Start building yours today – it's completely free.
          </p>
          <Button 
            size="lg"
            onClick={() => navigate('/builder')}
            className="bg-white text-blue-600 hover:bg-gray-50 text-lg px-8 py-4 h-auto font-semibold"
          >
            Create Your CV Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">CVCraft</span>
            </div>
            <p className="text-gray-400">
              Build your job-ready CV in minutes. © 2024 CVCraft. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
