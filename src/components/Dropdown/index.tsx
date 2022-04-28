import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  memo,
  HTMLAttributes,
  MouseEvent,
  RefObject
} from 'react';
import useTheme from '@theme/provider/useTheme';

import { GenericComponentProps } from '../../types';
import { StyledDropdown, OptionWrapper, Option } from './Dropdown.styles';

export interface DropdownProps
  extends GenericComponentProps<Omit<HTMLAttributes<HTMLButtonElement>, 'onClick' | 'onChange'>> {
  ref?: RefObject<HTMLButtonElement>;
  options: Array<{
    name: string;
    value: number | string;
  }>;
  value: number | string;
  fullWidth?: boolean;
  onChange: (value: number | string) => void;
}

function Dropdown({
  ref,
  options = [],
  value,
  fullWidth,
  onChange,
  placeholder,
  customStyle,
  ...props
}: DropdownProps) {
  const { theme } = useTheme();

  const [open, setOpen] = useState<boolean>(false);
  const [top, setTop] = useState<number>(0);
  const [selectedValue, setSelectedValue] = useState<{
    name: string;
    value: number | string;
  } | null>();

  const optionWrapperRef = useRef<HTMLUListElement | null>(null);

  const handleClickDropdown = useCallback(() => setOpen(!open), [open]);

  const handleClickOption = useCallback(
    (event: MouseEvent<HTMLLIElement>) => {
      event.stopPropagation();

      const dataValue = event.currentTarget.getAttribute('data-value');

      if (!dataValue) return;

      if (!Number.isNaN(Number(dataValue))) {
        onChange(Number(dataValue));
      } else {
        onChange(dataValue);
      }

      setOpen(false);
    },
    [onChange]
  );

  useEffect(() => {
    if (optionWrapperRef.current) setTop(Number(optionWrapperRef.current?.clientHeight || 0) + 8);
  }, [open]);

  useEffect(() => {
    setSelectedValue(options.find((option) => option.value === value));
  }, [options, value]);

  return (
    <StyledDropdown
      ref={ref}
      theme={theme}
      open={open && top > 0}
      css={customStyle}
      fullWidth={fullWidth}
      onClick={handleClickDropdown}
      {...props}
    >
      {!value && !selectedValue && placeholder && <span>{placeholder}</span>}
      {value && selectedValue && <span>{selectedValue.name}</span>}
      <DropDownIcon />
      <OptionWrapper ref={optionWrapperRef} theme={theme} top={top} open={open && top > 0}>
        {options.map((option) => (
          <Option
            key={`dropdown-option-${option.name}`}
            theme={theme}
            data-value={option.value}
            onClick={handleClickOption}
          >
            {option.name}
          </Option>
        ))}
      </OptionWrapper>
    </StyledDropdown>
  );
}

export default memo(Dropdown);

function DropDownIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2_600)">
        <path d="M6 10L1.66987 2.5L10.3301 2.5L6 10Z" fill="current" fillOpacity="0.7" />
      </g>
      <defs>
        <clipPath id="clip0_2_600">
          <rect width="12" height="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
