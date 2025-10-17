import React from 'react';

export type CommitteeKey = 'advisory' | 'organizing' | 'technical';

interface CommitteeContextValue {
  selected: CommitteeKey;
  setSelected: (k: CommitteeKey) => void;
}

const CommitteeContext = React.createContext<CommitteeContextValue | undefined>(undefined);

export function useCommittee() {
  const ctx = React.useContext(CommitteeContext);
  if (!ctx) throw new Error('useCommittee must be used within CommitteeProvider');
  return ctx;
}

export const CommitteeProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [selected, setSelected] = React.useState<CommitteeKey>('advisory');

  const value = React.useMemo(() => ({ selected, setSelected }), [selected]);

  return <CommitteeContext.Provider value={value}>{children}</CommitteeContext.Provider>;
};

export default CommitteeContext;
