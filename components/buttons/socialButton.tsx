import styles from './button.module.scss';

const SocialButton = ({ children, className }: BasicButtonProps) => {
  return (
    <>
      <button className={`${styles[className]} ${styles.socialButton}`}>{children}</button>
    </>
  );
};

interface BasicButtonProps {
  children: object | string;
  className: string;
}

SocialButton.defaultProps = {
  className: '',
};

export default SocialButton;
