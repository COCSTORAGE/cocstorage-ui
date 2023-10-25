import { CustomStyle } from '@typings/theme';

export interface Overlay {
  root: HTMLDivElement | null;
  states: OverlayState[];
}

export type OverlayStatus = 'pending' | 'active' | 'fulfilled';

export type OverlayFrom = 'dialog' | 'bottomSheet' | 'backdrop';

export interface OverlayState {
  id: string;
  status: OverlayStatus;
  from: OverlayFrom;
  props: {
    onClose: () => void;
    transitionDuration?: number;
    overlayCustomStyle?: CustomStyle;
  };
}
