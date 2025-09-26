import { CreditCard, CheckCircle, AlertCircle } from 'lucide-react';

interface RegistrationFee {
  category: string;
  earlyBird: string;
  regular: string;
  description?: string;
}

export default function Registration() {
  const registrationFees: RegistrationFee[] = [
    {
      category: 'IEEE Member',
      earlyBird: '₹8,000',
      regular: '₹10,000',
      description: 'Valid IEEE membership required'
    },
    {
      category: 'Non-IEEE Member',
      earlyBird: '₹10,000',
      regular: '₹12,000'
    },
    {
      category: 'Student Member',
      earlyBird: '₹6,000',
      regular: '₹7,500',
      description: 'Must provide valid student ID'
    },
    {
      category: 'International Delegate',
      earlyBird: '$300',
      regular: '$400'
    }
  ];

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
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="bg-surface-secondary/10">
                <th className="py-4 px-6 text-left text-surface-primary font-semibold">Category</th>
                <th className="py-4 px-6 text-left text-surface-primary font-semibold">Early Bird (Before Aug 15)</th>
                <th className="py-4 px-6 text-left text-surface-primary font-semibold">Regular</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-secondary/10">
              {registrationFees.map((fee, index) => (
                <tr key={index} className="hover:bg-surface-secondary/5">
                  <td className="py-4 px-6">
                    <div className="font-medium text-surface-primary">{fee.category}</div>
                    {fee.description && (
                      <div className="text-sm text-surface-secondary mt-1">{fee.description}</div>
                    )}
                  </td>
                  <td className="py-4 px-6 text-surface-secondary">{fee.earlyBird}</td>
                  <td className="py-4 px-6 text-surface-secondary">{fee.regular}</td>
                </tr>
              ))}
            </tbody>
          </table>
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