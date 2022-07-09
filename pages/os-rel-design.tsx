import { useState } from 'react';
import SquerLogoGenerator from '../components/os-rel-design/squerComponent/SquerComponent';
import RectangleLogoGenerator from '../components/os-rel-design/rectangleComponent/RectangleComponent';
import style from '../styles/os-rel-design.module.scss';

export default function OsRelDesign() {
  const [component, setComponent] = useState('squered');
  return (
    <div className={style.container}>
      <div className={style.navigationButtonsContainer}>
        <button onClick={() => setComponent('squered')}>Squered background</button>
        <button onClick={() => setComponent('rectangle')}>Rectangle background</button>
      </div>
      {component === 'squered' && <SquerLogoGenerator />}
      {component === 'rectangle' && <RectangleLogoGenerator />}
    </div>
  );
}
