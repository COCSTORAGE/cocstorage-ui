import React, {
  useEffect,
  useState,
  useRef,
  forwardRef,
  ButtonHTMLAttributes,
  MouseEvent
} from 'react';
import useTheme from '@theme/provider/useTheme';

import { GenericComponentProps } from '../../types';
import { StyledDropdown, OptionWrapper, Option } from './Dropdown.styles';

// Components
import Icon from '../Icon';

export interface DropdownProps
  extends GenericComponentProps<
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'onChange'>
  > {
  options: Array<{
    name: string;
    value: number | string;
  }>;
  value: number | string;
  fullWidth?: boolean;
  onChange: (value: number | string) => void;
}

const Dropdown = forwardRef<HTMLButtonElement, DropdownProps>(function Dropdown(
  { options = [], value, fullWidth, onChange, placeholder, customStyle, ...props },
  ref
) {
  const { theme } = useTheme();

  const [open, setOpen] = useState<boolean>(false);
  const [top, setTop] = useState<number>(0);
  const [selectedValue, setSelectedValue] = useState<{
    name: string;
    value: number | string;
  } | null>();

  const optionWrapperRef = useRef<HTMLUListElement | null>(null);

  const handleClickDropdown = () => setOpen(!open);

  const handleClickOption = (event: MouseEvent<HTMLLIElement>) => {
    event.stopPropagation();

    const dataValue = event.currentTarget.getAttribute('data-value');

    if (!dataValue) return;

    if (!Number.isNaN(Number(dataValue))) {
      onChange(Number(dataValue));
    } else {
      onChange(dataValue);
    }

    setOpen(false);
  };

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
      <Icon name="PolyGon_12_12" width={12} height={12} />
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
});

export default Dropdown;
