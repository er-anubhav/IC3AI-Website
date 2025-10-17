import CommitteeLayout from './CommitteeLayout';

interface AdvisoryMember {
  name: string;
  affiliation: string;
}

export function AdvisoryBoardContent() {
  const advisoryMembers: AdvisoryMember[] = [
    { name: 'Prof. S. C. Srivastava', affiliation: 'IIT Kanpur' },
    { name: 'Prof. J. Ram Kumar', affiliation: 'IIT Kanpur' },
    { name: 'Prof. Vivekanand Mukherjee', affiliation: 'ISM, Dhanbad' },
    { name: 'Prof. Fushuan Wen', affiliation: 'China' },
    { name: 'Prof. Malay Kishore Dutta', affiliation: 'AKTU' },
    { name: 'Prof. Avadhesh Kumar', affiliation: 'PVC,GU' },
    { name: 'Prof. Anurag Srivastava', affiliation: 'WS University, USA' },
    { name: 'Prof. Parmanand', affiliation: 'SU, Gr.Noida' },
    { name: 'Prof. Jai Govind', affiliation: 'AIT, Bangkok' },
    { name: 'Prof. Brij N. Singh', affiliation: 'North Dakota, USA' },
    { name: 'Prof. K. P. Wang', affiliation: 'Sydney University, Australia' },
    { name: 'Prof. Istovan Erlich', affiliation: 'DE University, Germany' },
    { name: 'Prof. L Lai', affiliation: 'City University, London' },
    { name: 'Prof. K. N. Srivastava', affiliation: 'ABB Sweden' },
    { name: 'Prof. Ambrish Chandra', affiliation: 'Montreal Canada' },
    { name: 'Prof. D. S. Chauhan', affiliation: 'Vice Chancellor, GLA University, Mathura' },
    { name: 'Prof. Bhim Singh', affiliation: 'Chairman, IEEE Delhi Section, IITD, India' },
    { name: 'Prof. Shailesh Tiwari', affiliation: 'ABESEC, Ghaziabad' },
    { name: 'Prof. Dilip Sharma', affiliation: 'GLA University, Mathura' },
    { name: 'Prof. Rajiv Saxena', affiliation: 'Jaypee University' },
    { name: 'Prof. S. S. Bhaudaria', affiliation: 'MITS, Gwalior' },
    { name: 'Prof. N. P. Padhy', affiliation: 'IIT Rorkee' },
    { name: 'Prof. Avadhesh Kumar', affiliation: 'PVC, GU, Gr. Noida' },
    { name: 'Prof. Sukumar Mishra', affiliation: 'IIT Delhi' },
    { name: 'Prof. A. N. Tiwari', affiliation: 'MMMTU, Gorakhpur' },
    { name: 'Prof. Asheesh Singh', affiliation: 'MNNIT, Allahabad' },
    { name: 'Prof. S. K. Singh', affiliation: 'IIIT, Allahabad' },
    { name: 'Prof. Neetesh Purohit', affiliation: 'Director, SGSITS, Indore' },
    { name: 'Prof. Neelendra Badal', affiliation: 'KNIT Sultanpur' },
    { name: 'Prof. Jawar Singh', affiliation: 'IIITDM, Jabalpur' },
    { name: 'Prof. Mini S. Thomas', affiliation: 'JMI, New Delhi' },
    { name: 'Prof. Shivaji Chakraborthy', affiliation: 'JU, West Bengal' },
    { name: 'Prof. Kwang Lee', affiliation: 'BB University, USA' },
    { name: 'Prof. Praveen Maduri', affiliation: 'GCET, Greater Noida' },
    { name: 'Prof. Brijesh Singh', affiliation: 'GCET, Greater Noida' },
    { name: 'Prof. Lakshmanan M', affiliation: 'GCET, Greater Noida' },
    { name: 'Prof. Mohd Asim Qadri', affiliation: 'GCET, Greater Noida' },
    { name: 'Prof. Rajni Saggu', affiliation: 'GCET Greater Noida' },
    { name: 'Prof. Md. Danish Equbal', affiliation: 'GCET, Greater Noida' },
    { name: 'Prof. A. Ambikapathy', affiliation: 'GCET, Greater Noida' },
    { name: 'Prof. Sansar Singh Chauhan', affiliation: 'GU, Greater Noida' },
    { name: 'Prof. Sanjay Chauhan', affiliation: 'GU, Greater Noida' },
    { name: 'Prof. Usha Chauhan', affiliation: 'GU, Greater Noida' },
    { name: 'Prof. Sanjeev Pippal', affiliation: 'GL Bajaj, Greater Noida' },
    { name: 'Prof. Ajay Shankar Singh', affiliation: 'GU, Greater Noida' },
    { name: 'Prof. Prashant Jhori', affiliation: 'GU, Greater Noida' },
    { name: 'Prof. Thirunavukkarasu K', affiliation: 'GU, Greater Noida' },
    { name: 'Prof. J N Singh', affiliation: 'GU, Greater Noida' },
    { name: 'Prof. Rani Astya', affiliation: 'SU, Greater Noida' },
    { name: 'Prof. Anurag Dixit', affiliation: 'GU, Greater Noida' },
    { name: 'Prof. Nikhil Marriwala', affiliation: 'UIET, Kurukshetra University' },
    { name: 'Prof. Sanjoy Das', affiliation: 'IGNTU, Manipur' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {advisoryMembers.map((member, index) => (
        <div
          key={index}
          className="p-6 rounded-lg bg-surface hover:shadow-xl transition-shadow duration-300 border border-surface-secondary/10"
        >
          <h3 className="font-semibold text-lg text-surface-primary mb-2">{member.name}</h3>
          <p className="text-surface-secondary">{member.affiliation}</p>
        </div>
      ))}
    </div>
  );
}

// Keep default export for backward compatibility (wrapped with layout)
export default function AdvisoryBoard() {
  return (
    <CommitteeLayout title="Advisory Board">
      <AdvisoryBoardContent />
    </CommitteeLayout>
  );
}