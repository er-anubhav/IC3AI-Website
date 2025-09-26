
interface CommitteeMember {
  name: string;
  affiliation: string;
}

export default function TechnicalCommittee() {
  const committeeMembers: CommitteeMember[] = [
    { name: 'Prof. Parmanand', affiliation: 'SU, Gr.Noida' },
    { name: 'Prof. Rajiv Saxena', affiliation: 'Jaypee University' },
    { name: 'Prof S.S. Bhaudaria', affiliation: 'MITS Gwalior' },
    { name: 'Prof. Himanshu Mishra', affiliation: 'MEGDF, Hyderabad' },
    { name: 'Prof. Prabhod Vajpayee', affiliation: 'IIT Kharagpur' },
    { name: 'Prof. B Kalyan Kumar', affiliation: 'IIT Chennai' },
    { name: 'Prof. Bharat Singh Rajpurohit', affiliation: 'IIT Mandi' },
    { name: 'Prof. Naran M. Pindoria', affiliation: 'IIT Gandhi Nagar' },
    { name: 'Prof. R C Bansal', affiliation: 'Univ. of Pretoria, South Africa' },
    { name: 'Prof. Sanjay Gairola', affiliation: 'NIET, Gr. Noida' },
    { name: 'Prof. O P Rahi', affiliation: 'NIT, Hamirpur' },
    { name: 'Prof. D. K. Caturvedi', affiliation: 'DEI, Agra' },
    { name: 'Prof. Shailesh Tiwari', affiliation: 'ABESEC, Ghaziabad' },
    { name: 'Prof. Seema Arora', affiliation: 'WCAS, Muscut, Oman' },
    { name: 'Prof. Arun K. Verma', affiliation: 'MNIT, Jaipur' },
    { name: 'Prof. Abhishesk Swaroop', affiliation: 'BPIT, Delhi' },
    { name: 'Prof. Neetesh Purohit', affiliation: 'Director, SGSITS, Indore' },
    { name: 'Prof. Neelendra Badal', affiliation: 'KNIT Sultanpur' },
    { name: 'Prof. Jawar Singh', affiliation: 'IIITDM Jabalpur' },
    { name: 'Prof. Buddha Singh', affiliation: 'JNU, Delhi' },
    { name: 'Prof. J. K Verma', affiliation: 'Amity University, Gurugram' },
    { name: 'Prof. Ratnesh Litoriya', affiliation: 'Jaypee University' },
    { name: 'Prof. Manjeet Singh', affiliation: 'Dept.of Higher Education, Govt. of Haryana' },
    { name: 'Prof. Aditya Dev Mishra', affiliation: 'DIT, Dehradun' },
  ];

  return (
    <section id="committee" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-surface-primary mb-4">Technical Program Committee</h2>
          <p className="text-xl text-surface-secondary max-w-3xl mx-auto">
            Distinguished professionals and academics leading the technical program
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {committeeMembers.map((member, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-surface hover:shadow-xl transition-shadow duration-300 border border-surface-secondary/10"
            >
              <h3 className="font-semibold text-lg text-surface-primary mb-2">{member.name}</h3>
              <p className="text-surface-secondary">{member.affiliation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}