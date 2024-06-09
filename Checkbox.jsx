import { useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import classes from './Checkbox.module.css';

export const CheckboxTypes = {
  MAIN: classes.checkboxMain,
  MAIN_GREEN: classes.checkboxMainGreen,
  USER: classes.checkboxUser,
  FILTERS: classes.filtersCheckbox,
  LQS: classes.lqsCheckbox
};

export const Checkbox = ({
  id,
  size,
  onChange,
  active,
  data,
  className = '',
  checkboxType = '',
  disabled,
  ...otherProps
}) => {
  const checkboxId = useMemo(() => (id ? id : uuidv4()), [id]);

  return (
    <div className={className}>
      <input
        type="checkbox"
        id={checkboxId}
        className={`${classes.checkbox} ${checkboxType} `}
        checked={active}
        onChange={onChange}
        disabled={disabled}
        data-name={data ? data.name : ''}
        data-value={data ? data.value : ''}
        {...otherProps}
      />
      <label htmlFor={checkboxId} style={{ '--d': size }}>
        <svg viewBox="0,0,50,50">
          <path d="M5 30 L 20 45 L 45 5"></path>
        </svg>
      </label>
    </div>
  );
};
