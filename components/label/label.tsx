import style from './label.module.scss';

interface LabelInterface {
  type: string;
  children: string;
}

function Label({ type, children }: LabelInterface) {
  return (
    <div type={type} className={style.label}>
      {children}
    </div>
  );
}

export default Label;
