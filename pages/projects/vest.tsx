import Navbar from '../../components/layout/navbar/navbar';
import style from '../../styles/projects.module.scss';

export default function vast() {
  return (
    <div>
      <Navbar />
      <div className={style.container}>
        <h3 className={style.title}>Vest</h3>
        <div className={style.star}>
          <div className={style.starText}>30K</div>
        </div>
      </div>
    </div>
  );
}
