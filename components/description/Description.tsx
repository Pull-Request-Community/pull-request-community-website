import React from 'react';
import style from './description.module.scss';

const Description = () => {
  return (
    <div className={style.container}>
      <h3>
        <span className={style.brandColor}>Pull Request</span> עוזרת לכם להיכנס לפרוייקטי קוד פתוח
        ולתרום להם ע"י <br />
        יצירת סביבה תומכת ובטוחה וחיבור עם מנטורים בעלי ניסיון שאכפת להם שתצליחו
      </h3>
    </div>
  );
};

export default Description;
