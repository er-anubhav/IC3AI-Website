import { FileText, Download, CheckCircle, Upload } from 'lucide-react';

export default function Guidelines() {
  const guidelines = [
    {
      title: 'Paper Format',
      description: 'All papers must be Springer templet format submitted . Maximum paper length is 10-12 pages.',
      icon: FileText
    },
    {
      title: 'Submission Process',
      description: 'Papers should be submitted through Microsoft CMT. Only PDF files are accepted.',
      icon: Upload
    },
    {
      title: 'Review Process',
      description: 'All submissions will undergo a double-blind peer review process.',
      icon: CheckCircle
    }
  ];

  const formatInstructions = [
    'Use the official Springer LaTeX or Word template',
    'Page limit around 10-12 pages including references',
    'Font: Times New Roman',
    'Title: 24pt, Section Headings: 12pt, Body: 10pt',
    'Margins: 1 inch all around',
    'Single column format',
    'Include abstract (max 250 words)',
    'Keywords (3-6 keywords)',
  ];

  return (
    <section id="guidelines" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-surface-primary mb-4">Submission Guidelines</h2>
          <p className="text-xl text-surface-secondary max-w-3xl mx-auto">
            Please follow these guidelines carefully when preparing and submitting your paper
          </p>
        </div>

        {/* Main Guidelines */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {guidelines.map((item, index) => (
            <div key={index} className="p-6 rounded-lg bg-surface hover:shadow-xl transition-shadow duration-300 border border-surface-secondary/10">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-surface-primary">{item.title}</h3>
              <p className="text-surface-secondary">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Formatting Instructions */}
        <div className="bg-surface rounded-lg p-8 border border-surface-secondary/10">
          <h3 className="text-2xl font-semibold mb-6 text-surface-primary">Formatting Instructions</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-4">
              {formatInstructions.map((instruction, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-surface-secondary">{instruction}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col space-y-4">
              <button className="flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
                <Download className="w-5 h-5 mr-2" />
                Download Springer Templet
              </button>
              <button className="flex items-center justify-center px-6 py-3 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors">
                <FileText className="w-5 h-5 mr-2" />
                View Sample Paper
              </button>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="mt-12 p-6 bg-warning/10 rounded-lg border border-warning/20">
          <h4 className="text-xl font-semibold mb-3 text-warning">Important Notes</h4>
          <ul className="list-disc list-inside space-y-2 text-surface-secondary">
            <li>Papers not following the format will be rejected without review</li>
            <li>Ensure your paper is free from any identifying information for blind review</li>
            <li>Check plagiarism before submission - maximum acceptable similarity is 20%</li>
            <li>At least one author must register for the conference if the paper is accepted</li>
          </ul>
        </div>
      </div>
    </section>
  );
}