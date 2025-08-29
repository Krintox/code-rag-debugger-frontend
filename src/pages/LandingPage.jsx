// File: src/pages/LandingPage.js
import React from 'react';
import { Code2, GitBranch, Bug, History, Sparkles, Shield, Zap, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const features = [
    {
      icon: GitBranch,
      title: 'Code Evolution Tracking',
      description: 'Analyze your git repository historiography with AI-powered insights into how your codebase evolves over time.'
    },
    {
      icon: Bug,
      title: 'Intelligent Debugging',
      description: 'Get contextual debug assistance by correlating current errors with historical resolution patterns.'
    },
    {
      icon: History,
      title: 'Historical Analysis',
      description: 'Leverage RAG architecture to semantically index commit metadata and codebase transformations.'
    },
    {
      icon: Sparkles,
      title: 'AI-Powered Solutions',
      description: 'Receive intelligent code remediation suggestions powered by Gemini AI integration.'
    },
    {
      icon: Shield,
      title: 'Predictive Debugging',
      description: 'Identify potential future issues through continuous repository ingestion and pattern recognition.'
    },
    {
      icon: Zap,
      title: 'Automated Documentation',
      description: 'Generate comprehensive documentation from your code changes and commit history automatically.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI-Powered <span className="gradient-text">Code Evolution</span> Intelligence
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              RodeCeviewr leverages Retrieval-Augmented Generation to analyze your git history, providing intelligent debugging and evolutionary code analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium rounded-xl text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium rounded-xl text-gray-900 bg-white border border-gray-200 hover:bg-gray-50 transition-all duration-300"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Revolutionary Code Intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              RodeCeviewr transforms how developers understand, debug, and evolve their codebases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="glass p-6 rounded-2xl card-hover">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 text-blue-600 mb-4">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to revolutionize your coding workflow?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
            Join thousands of developers who use RodeCeviewr to write better code, faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium rounded-xl text-blue-600 bg-white hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Free Trial
            </Link>
            <Link
              to="/subscription"
              className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium rounded-xl text-white bg-blue-800/20 hover:bg-blue-800/30 transition-all duration-300 border border-blue-400/30"
            >
              View Plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;