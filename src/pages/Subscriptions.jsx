// File: src/pages/SubscriptionPage.js
import React, { useState } from 'react';
import { Check, Zap, Crown, Sparkles, ArrowRight } from 'lucide-react';

const SubscriptionPage = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  const plans = [
    {
      name: 'Free',
      price: { monthly: 0, yearly: 0 },
      description: 'Get started with basic code analysis',
      features: [
        'Up to 3 projects',
        'Basic code evolution tracking',
        'Limited commit history (100 commits)',
        'Community support',
        'Email notifications'
      ],
      buttonText: 'Get Started',
      popular: false,
      icon: Sparkles
    },
    {
      name: 'Pro',
      price: { monthly: 15, yearly: 144 },
      description: 'For professional developers and teams',
      features: [
        'Unlimited projects',
        'Advanced code evolution tracking',
        'Full commit history access',
        'AI-powered debugging',
        'Priority support',
        'Predictive analytics',
        'Custom integration options'
      ],
      buttonText: 'Upgrade to Pro',
      popular: true,
      icon: Zap
    },
    {
      name: 'Enterprise',
      price: { monthly: 49, yearly: 468 },
      description: 'For organizations with advanced needs',
      features: [
        'Everything in Pro, plus:',
        'On-premise deployment',
        'Custom AI model training',
        'Dedicated account manager',
        'SLA guarantees',
        'Advanced security features',
        'Team management tools'
      ],
      buttonText: 'Contact Sales',
      popular: false,
      icon: Crown
    }
  ];

  const toggleBillingPeriod = () => {
    setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly');
  };

  const calculateYearlyDiscount = (monthlyPrice) => {
    return Math.round((1 - (monthlyPrice * 12 * 0.8) / (monthlyPrice * 12)) * 100);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 my-6">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Select the perfect plan for your development needs. All plans include our core AI-powered code analysis features.
        </p>
        
        <div className="flex items-center justify-center mt-8">
          <span className={`mr-3 font-medium ${billingPeriod === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>Monthly</span>
          <button
            onClick={toggleBillingPeriod}
            className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <span className="sr-only">Toggle billing period</span>
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                billingPeriod === 'yearly' ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
          <span className={`ml-3 font-medium ${billingPeriod === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
            Yearly <span className="text-green-600 text-sm">(20% off)</span>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan, index) => {
          const IconComponent = plan.icon;
          const price = billingPeriod === 'monthly' ? plan.price.monthly : plan.price.yearly;
          const period = billingPeriod === 'monthly' ? 'month' : 'year';
          
          return (
            <div
              key={index}
              className={`glass p-8 rounded-2xl relative ${
                plan.popular
                  ? 'ring-2 ring-blue-500 transform scale-105'
                  : ''
              } card-hover`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 text-blue-600 mb-4">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600">{plan.description}</p>
              </div>
              
              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">${price}</span>
                  <span className="text-gray-600 ml-1">/{period}</span>
                </div>
                {billingPeriod === 'yearly' && plan.price.monthly > 0 && (
                  <p className="text-green-600 text-sm mt-1">
                    Save {calculateYearlyDiscount(plan.price.monthly)}% annually
                  </p>
                )}
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button
                className={`w-full py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {plan.buttonText}
                {plan.popular && <ArrowRight className="inline-block ml-2 w-4 h-4" />}
              </button>
            </div>
          );
        })}
      </div>

      <div className="mt-16 text-center">
        <div className="glass p-8 rounded-2xl max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need a custom plan?</h2>
          <p className="text-gray-600 mb-6">
            We offer custom enterprise solutions with dedicated support, custom AI model training, and on-premise deployment options.
          </p>
          <button className="inline-flex items-center px-6 py-3 border border-gray-200 text-gray-900 rounded-xl hover:bg-gray-50 transition-all">
            Contact Sales
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;