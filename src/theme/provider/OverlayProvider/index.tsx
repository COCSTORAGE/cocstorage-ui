import { PropsWithChildren, useState } from 'react';

import OverlayContext from '@theme/context/OverlayContext';
import { Overlay as TOverlay } from '@typings/component';

import Overlay from './Overlay';

function OverlayProvider({ children }: PropsWithChildren) {
  const value = useState<TOverlay>({
    root: null,
    states: []
  });

  return (
    <OverlayContext.Provider value={value}>
      <Overlay />
      {children}
    </OverlayContext.Provider>
  );
}

export default OverlayProvider;
