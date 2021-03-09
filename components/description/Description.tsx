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
          https://forms.gle/6mHgTs5PnsfXUZ1f8
        </p>
      </div>
    </div>
  );
};

export default Description;
