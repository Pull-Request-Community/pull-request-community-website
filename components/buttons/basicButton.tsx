import styles from './button.module.scss';

const BasicButton = ({ children, className }: BasicButtonProps) => {
  return (
    <>
      <button className={`${className} ${styles.basicButton}`}>{children}</button>
    </>
  );
};

interface BasicButtonProps {
  children: object | string;
  className: string;
}

BasicButton.defaultProps = {
  className: '',
};

export default BasicButton;
