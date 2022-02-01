import colors from '../../styles/colors';

const BasicButton = ({ children, className }: BasicButtonProps) => {
  return (
    <>
      <button className={`${className} BasicButton`}>{children}</button>
      <style jsx>{`
        .BasicButton {
          user-select: none;
          cursor: pointer;
          color: white;
          font-size: 1.6rem;
          border: none;
          border-radius: 16%/50%;
          background-color: ${colors.secondary_color};
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6px 12px 6px 6px;
          transition: all 0.3s;
          width: 126px;
          height: 36px;
        }

        .BasicButton:hover {
          filter: brightness(1.2);
          transform: scale(1.02);
        }
      `}</style>
    </>
  );
};

interface BasicButtonProps {
  children: object | string;
  className: string;
}

BasicButton.defaultProps = {
  className: '',
};

export default BasicButton;
