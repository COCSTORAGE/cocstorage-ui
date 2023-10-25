import { Dispatch, SetStateAction, createContext } from 'react';

import { Overlay } from '@typings/component';

const OverlayContext = createContext<[Overlay, Dispatch<SetStateAction<Overlay>>]>([
  {
    root: null,
    states: []
  },
  () => []
]);

export default OverlayContext;
