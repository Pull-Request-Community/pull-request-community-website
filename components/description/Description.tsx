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

<div class="content">
  <h1 class="title">
    Using SCSS's <code>@each</code> directive
  </h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam ex doloribus exercitationem
    saepe voluptas recusandae,{' '}
    <a class="articles" href="#">
      soluta
    </a>
    , ab eaque repellat eius alias! Doloribus, libero neque aperiam atque odit repudiandae tenetur
    facere accusamus, explicabo vero optio id.{' '}
    <a class="youtube" href="#">
      Consectetur fuga
    </a>{' '}
    ut, in ipsa illo eos vero fugiat quam dignissimos sint voluptas deleniti facilis reiciendis,
    placeat praesentium nemo magnam tenetur? Aspernatur dolorum cum quisquam labore consectetur,
    molestiae eius in voluptas repudiandae quas perspiciatis,{' '}
    <a class="community" href="#">
      maxime a veritatis
    </a>{' '}
    dolor ratione velit suscipit dignissimos. Suscipit rerum atque{' '}
    <a class="courses" href="#">
      numquam quisquam corrupti
    </a>
    , esse autem modi velit repellendus, dolorem nostrum consequuntur soluta nesciunt animi
    recusandae temporibus laborum optio vero cum.
  </p>
</div>;
