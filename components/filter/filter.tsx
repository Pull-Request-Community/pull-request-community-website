import { Dispatch, SetStateAction } from 'react';
import Search from './search';
import styles from './filter.module.scss';
import Dropdown from './dropdown';

interface IProps {
  dropdownData: {
    placeholder: string;
    data: {
      name: {
        english: string;
        hebrew: string;
      };
      icon: string;
      checked: boolean;
    }[];
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

const Filter = ({ dropdownData, setDropdownData }: IProps) => {
  return (
    <div className={styles.container}>
      <Search />
      {dropdownData.map(({ placeholder, data }, index) => (
        <Dropdown
          key={index}
          placeholder={placeholder}
          dropdownData={data}
          setDropdownData={setDropdownData}
        />
      ))}
    </div>
  );
};

export default Filter;
