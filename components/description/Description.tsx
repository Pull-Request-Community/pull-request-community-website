import React from 'react';
import style from './description.module.scss';

const Description = () => {
  return (
    <div className={style.container}>
      <div>
        <h3>
          <span className={style.brandColor}>Pull Request</span> עוזרת לכם להיכנס לפרוייקטי קוד פתוח
          ולתרום להם ע"י <br />
          יצירת סביבה תומכת ובטוחה וחיבור עם מנטורים בעלי ניסיון שאכפת להם שתצליחו
        </h3>
        <p className={style.subDesc}>
          מוזמנים לתרום לפרויקט של הקהילה או לפרויקטים שרצים תחתיה בסדנאות שרצות אחת לחודש לתרומה
          לקוד פתוח.
          <br /> בנוסף מוזמנים להצטרף להרצאות העשרה, לשתף שאלות ובקשות לעזרה ולשתף מהידע שלכם בקבוצה
          שלנו בפייסבוק.
          <br />
          אם אתם רוצים להצטרף כמנטורים של פרויקט ,<br /> מוזמנים למלא את הטופס הבא:
          <a href="https://forms.gle/6mHgTs5PnsfXUZ1f8">✍</a>
        </p>
      </div>
      <ul className={style.squareContainer}>
        <li className={style.one} id="1"></li>
        <li className={style.two} id="2"></li>
        <li className={style.three} id="3"></li>
        <li className={style.four} id="4"></li>
        <li className={style.five} id="5"></li>
      </ul>
    </div>
  );
};

export default Description;
