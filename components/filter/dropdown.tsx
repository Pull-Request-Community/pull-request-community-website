import { useRef, useEffect, Dispatch, SetStateAction } from 'react';
import { mdiChevronUp, mdiChevronDown } from '@mdi/js';
import Icon from '@mdi/react';
import { useDetectOutsideClick } from '../../utils/hooks';
import styles from './filter.module.scss';

interface IProps {
  placeholder: string;
  dropdownData: {
    name: {
      english: string;
      hebrew: string;
    };
    icon: string;
    checked: boolean;
  }[];
  setDropdownData: Dispatch<
    SetStateAction<
      {
        placeholder: string;
        data: {
          name: {
            english: string;
            hebrew: string;
          };
          icon: string;
          checked: boolean;
        }[];
      }[]
    >
  >;
}

const Dropdown = ({ placeholder, dropdownData, setDropdownData }: IProps) => {
  // Ref and hook for toggling dropdown list
  const dropdownRef = useRef();
  const [dropDownState, setDropdownState] = useDetectOutsideClick(dropdownRef, false);

  // Open the dropdown
  const onDropdownClick = () => {
    setDropdownState((prevState) => (prevState = !dropDownState));
  };

  // Select a dropdown option
  const onSelectionClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, name: string) => {
    // Prevent from bubbling up
    e.stopPropagation();
    // set dropdown state
    setDropdownData((prevState) =>
      prevState.map((row) => {
        if (row.placeholder === placeholder) {
          return {
            ...row,
            data: row.data.map((element) =>
              element.name.english === name ? { ...element, checked: !element.checked } : element
            ),
          };
        }
        return row;
      })
    );
  };

  return (
    <button
      className={styles.dropdownContainer}
      onClick={() => onDropdownClick()}
      ref={dropdownRef}
    >
      <span className={styles.dropdownPlaceholder}>{placeholder}</span>

      <div>
        {dropdownData.map((element) =>
          element.checked && element.icon ? (
            <Icon className={styles.dropdownIcon} path={element.icon} />
          ) : null
        )}
      </div>

      {/* Icon state */}
      {dropDownState ? (
        <Icon className={styles.dropdownIcon} path={mdiChevronUp} />
      ) : (
        <Icon className={styles.dropdownIcon} path={mdiChevronDown} />
      )}

      {/* Dropdown state */}
      {dropDownState && (
        <ul>
          {dropdownData.map(({ name, icon, checked }) => (
            <li key={name.english + checked} onClick={(e) => onSelectionClick(e, name.english)}>
              <div>
                {icon && <Icon className={styles.dropdownDataIcon} path={icon} />}
                <span>{name.hebrew}</span>
              </div>
              <input type="checkbox" defaultChecked={checked} />
            </li>
          ))}
        </ul>
      )}
    </button>
  );
};

export default Dropdown;
