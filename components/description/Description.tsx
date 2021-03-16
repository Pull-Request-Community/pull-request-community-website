import React from 'react';
import style from './description.module.scss';
import colors from '../../styles/colors';

const Description = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <h3 className={style.title}>
          <span style={{ color: colors.secondary_color, fontWeight: 'bolder' }}>Request Pull</span>{' '}
          עוזרת לכם להיכנס לפרוייקטי קוד פתוח ולתרום להם ע"י <br />
          יצירת סביבה תומכת ובטוחה וחיבור עם מנטורים בעלי ניסיון שאכפת להם שתצליחו
        </h3>
        <p className={style.description}>
          מוזמנים לתרום לפרויקט של הקהילה או לפרויקטים שרצים תחתיה בסדנאות שרצות אחת לחודש לתרומה
          לקוד פתוח.
          <br /> בנוסף מוזמנים להצטרף להרצאות העשרה, לשתף שאלות ובקשות לעזרה ולשתף מהידע שלכם בקבוצה
          שלנו בפייסבוק.
          <br />
          אם אתם רוצים להצטרף כמנטורים של פרויקט,
          <br /> מוזמנים למלא את הטופס הבא: https://forms.gle/6mHgTs5PnsfXUZ1f8
        </p>
      </div>
      <div className={style.contributions}>b</div>
    </div>
  );
};

export default Description;
