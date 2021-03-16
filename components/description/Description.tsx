import React from 'react';
import style from './description.module.scss';
import colors from '../../styles/colors';

const Description = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <h3 className={style.title}>
          <span style={{ color: colors.secondary_color }}>Request Pull</span> עוזרת לכם להיכנס
          לפרוייקטי קוד פתוח ולתרום להם ע"י <br />
          יצירת סביבה תומכת ובטוחה וחיבור עם מנטורים בעלי ניסיון שאכפת להם שתצליחו
        </h3>
      </div>
      <div className={style.contributions}>b</div>
    </div>
  );
};

export default Description;
