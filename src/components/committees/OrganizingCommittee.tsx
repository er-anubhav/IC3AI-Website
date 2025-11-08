import CommitteeLayout from './CommitteeLayout';

interface CommitteeMember {
  name: string;
  affiliation: string;
}

interface CommitteeSection {
  title: string;
  members: CommitteeMember[];
}

export function OrganizingCommitteeContent() {
  const committeeSections: CommitteeSection[] = [
    {
      title: "Chief Patron",
      members: [
        { name: "Dr. R. P. Chadha", affiliation: "Chairman" },
        { name: "Mr. Sohil Chadha", affiliation: "Vice Chairman" },
      ]
    },
    {
      title: "Patrons",
      members: [
        { name: "Shri B. K. Arora", affiliation: "Secretary, ITSEC" },
        { name: "Prof. (Dr.) J. P. Pandey", affiliation: "Vice Chancellor, AKTU" },
        { name: "Prof. (Dr.) S. N. Singh", affiliation: "ABV-IIITM Gwalior" },
      ]
    },
    {
      title: "Conference General Chair",
      members: [
        { name: "Prof. (Dr.) Mayank Garg", affiliation: "Director, ITSEC" },
        { name: "Prof. (Dr.) S. K. Singh", affiliation: "IIIT, Allahabad" },
      ]
    },
    {
      title: "Convener & Conference Organising Chair",
      members: [
        { name: "Prof. (Dr.) Vishnu Sharma", affiliation: "Dean, CSE, ITSEC" },
      ]
    },
    {
      title: "Conference Chair",
      members: [
        { name: "Prof. (Dr.) Vishnu Sharma", affiliation: "Dean, CSE, ITSEC" },
        { name: "Prof. (Dr.) Jaya Sinha", affiliation: "HOD, CSE, ITSEC" },
      ]
    },
    {
      title: "Conference Publication Chair",
      members: [
        { name: "Prof. (Dr.) Sandhya Umrao", affiliation: "CSE, ITSEC" },
        { name: "Prof.(Dr.) Hariom Tyagi", affiliation: "CSE, ITSEC" },
      ]
    },
    {
      title: "Technical Program Chairs",
      members: [
        { name: "Prof. (Dr.) Biswa Mohan Sahoo", affiliation: "CSE, ITSEC" },
        { name: "Prof. (Dr.) Kuldeep Malik", affiliation: "CSE, ITSEC" },
        { name: "Prof. (Dr.) Vrinda Sachdeva", affiliation: "CSE, ITSEC" },
        { name: "Prof. (Dr.) Arun Kumar", affiliation: "CSE, ITSEC" },
      ]
    },
    {
      title: "Organizing Committee",
      members: [
        { name: "Prof. (Dr.) Vrinda Sachdeva", affiliation: "CSE, ITSEC" },
        { name: "Prof. Tarun Chug", affiliation: "CSE, ITSEC" },
        { name: "Prof. Abhishek Shivhare", affiliation: "CSE, ITSEC" },
        { name: "Prof. Yogesh Sharma", affiliation: "CSE, ITSEC" },
        { name: "Prof. Prachi Jain", affiliation: "CSE, ITSEC" },
        { name: "Prof. Akansha Sharma", affiliation: "CSE, ITSEC" },
      ]
    },
    {
      title: "Publication Committee",
      members: [
        { name: "Prof. Bhupendra Bhadana", affiliation: "CSE, ITSEC" },
        { name: "Prof. Ashish Shrivastava", affiliation: "CSE, ITSEC" },
        { name: "Prof. Shomil Bansal", affiliation: "CSE, ITSEC" },
        { name: "Prof. Rakhi Puri", affiliation: "CSE, ITSEC" },
        { name: "Prof. Shailja Vershney", affiliation: "CSE, ITSEC" },
      ]
    },
    {
      title: "Publicity Committee",
      members: [
        { name: "Mr. Anurag Gupta", affiliation: "CSE, ITSEC" },
        { name: "Prof. Manik Chandra", affiliation: "CSE, ITSEC" },
        { name: "Prof. Ghanshyam Yadav", affiliation: "CSE, ITSEC" },
        { name: "Prof. Shomil Bansal", affiliation: "CSE, ITSEC" },
      ]
    },
    {
      title: "Finance Committee",
      members: [
        { name: "Prof. Abhishek Shivhare", affiliation: "CSE, ITSEC" },
        { name: "Prof. Yogesh Sharma", affiliation: "CSE, ITSEC" },
        { name: "Prof. Ashish Shrivastava", affiliation: "CSE, ITSEC" },
      ]
    },
    {
      title: "Hospitality Committee",
      members: [
        { name: "Prof. Abhishek Shivhare", affiliation: "CSE, ITSEC" },
        { name: "Prof. Bhupendra Bhadana", affiliation: "CSE, ITSEC" },
        { name: "Prof. Akansha Sharma", affiliation: "CSE, ITSEC" },
      ]
    },
    {
      title: "Transport and Accommodation Committee",
      members: [
        { name: "Prof. Tarun Chug", affiliation: "CSE, ITSEC" },
        { name: "Prof. Vijay Kumar Tiwari", affiliation: "CSE, ITSEC" },
        { name: "Prof. Prashant Kumar", affiliation: "ITSEC" },
      ]
    },
    {
      title: "Website Committee",
      members: [
        { name: "Anubhav Tripathi", affiliation: "CSE-Aiml, ITSEC" },
        { name: "Deepak Kumar", affiliation: "CSE-Aiml, ITSEC" },
      ]
    },
    {
      title: "Sponsorship/Media Committee",
      members: [
        { name: "Prof. Manik Chandra", affiliation: "CSE, ITSEC" },
        { name: "Prof. Ghanshyam Yadav", affiliation: "CSE, ITSEC" },
        { name: "Prof. (Dr.) Arun Kumar", affiliation: "CSE, ITSEC" },
      ]
    },
    {
      title: "Student Co-Ordinators",
      members: [
        { name: "Anubhav Tripathi", affiliation: "CSE-Aiml, ITSEC" },
        { name: "Deepak Kumar", affiliation: "CSE-Aiml, ITSEC" },
        // { name: "Ms. Vaishali Chaurasiya", affiliation: "CSE Student, ITSEC" },
        // { name: "Mr. Yatin Kasnyal", affiliation: "CSE Student, ITSEC" },
        // { name: "Mr. Devraj Singh", affiliation: "CSE Student, ITSEC" },
        // { name: "Ms. Nirbhika Khajuriya", affiliation: "CSE Student, ITSEC" },
        // { name: "Ms. Prinshi Paliwal", affiliation: "CSE Student, ITSEC" },
      ]
    },
  ];

  return (
    <div className="space-y-12">
      {committeeSections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-12">
          <h3 className="text-2xl font-bold text-surface-primary mb-6 text-center">
            {section.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {section.members.map((member, memberIndex) => (
              <div
                key={memberIndex}
                className="p-6 rounded-lg bg-surface hover:shadow-xl transition-shadow duration-300 border border-surface-secondary/10"
              >
                <h4 className="font-semibold text-lg text-surface-primary mb-2">
                  {member.name}
                </h4>
                <p className="text-surface-secondary">{member.affiliation}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function OrganizingCommittee() {
  return (
    <CommitteeLayout title="Organizing Committee">
      <OrganizingCommitteeContent />
    </CommitteeLayout>
  );
}