export default function WorkShopMainContainer() {
  return (
    <div>
      <h3>ברוכים הבאים לסדנת חודש XXX </h3>
      <h4>הסדנא הקרובה תתקיים ב תאריך XXX בין בשעות XXX</h4>
      <div className="instructions">
        <p>:לוח זמנים</p>
        <p>XXXX</p>
        <p>XXXX</p>
        <p>XXXX</p>
      </div>
      <style>{`
                h3 {
                    color: #CE5A55;
                    font-size: 3.6rem;
                }

                h4 {
                    font-size: 3.2rem;
                    font-weight: lighter;
                    margin-bottom: 20px;
                }

                .instructions {
                    font-size: 1.6rem
                }
            `}</style>
    </div>
  );
}
