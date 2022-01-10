import React from 'react';
import colors from '../../styles/colors';
import style from './MainPageDescription.module.scss';

function MainPageDescription() {
  return (
    <div>
      <h3>
        <span style={{ color: colors.secondary_color }}>Pull Request</span> עוזרת לכם להיכנס
        לפרוייקטי קוד פתוח ולתרום להם ע"י יצירת סביבה תומכת ובטוחה וחיבור עם מנטורים בעלי ניסיון
        שאכפת להם שתצליחו
      </h3>
      <p className={style.subDesc}>
        מוזמנים לתרום לפרויקט של הקהילה או לפרויקטים שרצים תחתיה בסדנאות שרצות אחת לחודש לתרומה לקוד
        פתוח.
        <br /> בנוסף מוזמנים להצטרף להרצאות העשרה, לשתף שאלות ובקשות לעזרה ולשתף מהידע שלכם בקבוצה
        שלנו בפייסבוק.
        <br />
        אם אתם רוצים להצטרף כמנטורים של פרויקט,
        <br /> מוזמנים למלא את הטופס הבא:
        <a href="https://forms.gle/6mHgTs5PnsfXUZ1f8">✍</a>
      </p>
    </div>
  );
}

export default MainPageDescription;
