import style from './socialButton.module.scss';

const SocialButton = ({ children, className }: BasicButtonProps) => {
  return <button className={`${style[className]} ${style.SocialButton}`}>{children}</button>;
};

interface BasicButtonProps {
  children: object | string;
  className: string;
}

SocialButton.defaultProps = {
  className: '',
};

export default SocialButton;
