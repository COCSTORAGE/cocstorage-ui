import React, {
  useEffect,
  useRef,
  useCallback,
  memo,
  PropsWithChildren,
  HTMLAttributes,
  MouseEvent
} from 'react';
import { SerializedStyles } from '@emotion/react';
import useTheme from '@theme/useTheme';

import { ThemeType } from '@types';
import { StyledTabs, TabsInner } from './Tabs.styles';

export interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  centered?: boolean;
  onChange: (value: number | string) => void;
  value: number | string;
  customStyle?: SerializedStyles;
}

function Tabs({
  children,
  centered = false,
  onChange,
  value,
  customStyle,
  ...props
}: PropsWithChildren<TabsProps>) {
  const { theme } = useTheme();

  const tabsInnerRef = useRef<HTMLDivElement | null>(null);
  const prevValueRef = useRef<number | string>(0);
  const prevThemeType = useRef<ThemeType | null>(null);
  const isMountedRef = useRef<boolean>(false);

  const handleClick = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      const dataValue = (event.target as Element).getAttribute('data-value');

      if (!dataValue) return;

      if (!Number.isNaN(Number(dataValue))) {
        onChange(Number(dataValue));
      } else {
        onChange(dataValue);
      }
    },
    [onChange]
  );

  useEffect(() => {
    if (prevThemeType.current && prevThemeType.current !== theme.type) {
      isMountedRef.current = false;
    }

    prevThemeType.current = theme.type;
  }, [theme.type]);

  useEffect(() => {
    if (tabsInnerRef.current && (!isMountedRef.current || prevValueRef.current !== value)) {
      isMountedRef.current = true;

      const { children: childrenEl } = tabsInnerRef.current;

      for (let i = 0; i < childrenEl.length; i += 1) {
        childrenEl[i].className = childrenEl[i].className.replace(/ selected/g, '');

        const dataValue = childrenEl[i].getAttribute('data-value');

        if (!Number.isNaN(Number(dataValue)) && Number(dataValue) === value) {
          childrenEl[i].className = `${childrenEl[i].className} selected`;
        } else if (dataValue === value) {
          childrenEl[i].className = `${childrenEl[i].className} selected`;
        }
      }
    }

    prevValueRef.current = value;
  }, [value, theme.type]);

  return (
    <StyledTabs
      css={customStyle}
      centered={centered}
      onClick={handleClick}
      role="tablist"
      {...props}
    >
      <TabsInner ref={tabsInnerRef}>{children}</TabsInner>
    </StyledTabs>
  );
}

export default memo(Tabs);
