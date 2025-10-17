import CommitteeLayout from './CommitteeLayout';
import { AdvisoryBoardContent } from './AdvisoryBoard';
import { OrganizingCommitteeContent } from './OrganizingCommittee';
import { TechnicalCommitteeContent } from './TechnicalCommittee';
import { useCommittee } from './CommitteeContext';

export default function CommitteesPage() {
  const { selected } = useCommittee();

  const renderSelected = () => {
    switch (selected) {
      case 'advisory':
        return <AdvisoryBoardContent />;
      case 'organizing':
        return <OrganizingCommitteeContent />;
      case 'technical':
        return <TechnicalCommitteeContent />;
      default:
        return <AdvisoryBoardContent />;
    }
  };

  const titleMap: Record<string, string> = {
    advisory: 'Advisory Board',
    organizing: 'Organizing Committee',
    technical: 'Technical Program Committee',
  };

  return (
    <CommitteeLayout title={titleMap[selected]}>
      {renderSelected()}
    </CommitteeLayout>
  );
}
