import styles from './container.module.scss';

interface ContainerInterface {
  children?: any;
  className?: string;
}

export default function Container({ children, className }: ContainerInterface) {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
}
