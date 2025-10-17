import { CreditCard, CheckCircle, AlertCircle, Calendar, Users, GraduationCap, Briefcase } from 'lucide-react';
import React from 'react';

interface RegistrationFee {
  registrationType: string;
  earlyBird: string;
  lateRegistration: string;
  foreignNationals: string;
  icon: React.ReactNode;
}

export default function Registration() {
  const registrationFees: RegistrationFee[] = [
    {
      registrationType: 'CO-Authors/Attendees',
      earlyBird: '₹2,000',
      lateRegistration: '₹2,500',
      foreignNationals: '$100',
      icon: <Users className="w-6 h-6 text-primary" />
    },
    {
      registrationType: 'Research Scholars/Post Doc/UG/PG',
      earlyBird: '₹6,000',
      lateRegistration: '₹6,500',
      foreignNationals: '$150',
      icon: <GraduationCap className="w-6 h-6 text-primary" />
    },
    {
      registrationType: 'Academicians',
      earlyBird: '₹7,000',
      lateRegistration: '₹7,500',
      foreignNationals: '$200',
      icon: <GraduationCap className="w-6 h-6 text-primary" />
    },
    {
      registrationType: 'Industry Professionals',
      earlyBird: '₹8,000',
      lateRegistration: '₹8,500',
      foreignNationals: '$200',
      icon: <Briefcase className="w-6 h-6 text-primary" />
    }
  ];

  <p>*note: This registration fee is only for conference participation/presentation.</p>

  const registrationSteps = [
    'Complete the online registration form',
    'Make the payment through provided payment gateway',
    'Upload payment proof and required documents',
    'Receive confirmation email within 48 hours',
    'Download your registration certificate'
  ];

  return (
    <section id="register" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-surface-primary mb-4">Registration</h2>
          <p className="text-xl text-surface-secondary max-w-3xl mx-auto">
            Register for IC3AI 2026 to present your research and network with experts
          </p>
        </div>

        {/* Registration Fees Table */}
        <div className="mb-16 overflow-x-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {registrationFees.map((fee, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  {fee.icon}
                  <h3 className="text-lg font-semibold text-surface-primary ml-3">{fee.registrationType}</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-2">
                    <span className="text-gray-600 dark:text-gray-400">Early Bird</span>
                    <span className="text-lg font-bold text-primary">{fee.earlyBird}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-2">
                    <span className="text-gray-600 dark:text-gray-400">Late Registration</span>
                    <span className="text-lg font-semibold text-surface-primary">{fee.lateRegistration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Foreign Nationals</span>
                    <span className="text-lg font-semibold text-surface-primary">{fee.foreignNationals}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important Dates */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-surface-primary text-center mb-8">Important Dates</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-surface-primary">Submission Portal Opens</h4>
                  <p className="text-gray-600 dark:text-gray-400">__ month, 2026</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-surface-primary">Full Paper Submission</h4>
                  <p className="text-gray-600 dark:text-gray-400">__ month, 2026</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-surface-primary">Acceptance Notification</h4>
                  <p className="text-gray-600 dark:text-gray-400">__ month, 2026</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-surface-primary">Camera Ready Submission</h4>
                  <p className="text-gray-600 dark:text-gray-400">__  month, 2026</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-surface-primary">Last Date of Registration</h4>
                  <p className="text-gray-600 dark:text-gray-400">__ month, 2026</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-surface-primary">Conference Dates</h4>
                  <p className="text-gray-600 dark:text-gray-400">__ month, 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Registration Process */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-surface-primary">Registration Process</h3>
            <div className="space-y-4">
              {registrationSteps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-primary font-semibold">{index + 1}</span>
                  </div>
                  <p className="text-surface-secondary mt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 text-surface-primary">Important Notes</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-success mt-1 mr-3 flex-shrink-0" />
                <p className="text-surface-secondary">Registration fee includes conference kit, lunch, and refreshments</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-success mt-1 mr-3 flex-shrink-0" />
                <p className="text-surface-secondary">Each accepted paper requires at least one author registration</p>
              </div>
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 text-warning mt-1 mr-3 flex-shrink-0" />
                <p className="text-surface-secondary">Registration fees are non-refundable</p>
              </div>
            </div>

            <button className="mt-8 w-full flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
              <CreditCard className="w-5 h-5 mr-2" />
              Register Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}