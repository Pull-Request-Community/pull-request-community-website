const Title = ({ children, center, className, ...rest }: TitleProps) => {
  // @ts-ignore
  const { fontSize } = rest;

  return (
    <div className={`${className} Title`}>
      <p>{children}</p>

      <style jsx>{`
        .Title {
          font-size: ${fontSize ?? '2.375rem'};
          line-height: 1.8;
          font-weight: bold;
          text-align: ${center ?? 'right'};
        }

        @media only screen and (max-width: 800px) {
          .Title {
            font-size: 2.2rem;
          }
        }
      `}</style>
    </div>
  );
};

interface TitleProps {
  children: object | string;
  center?: boolean;
  className: string;
  rest?: any;
}

Title.defaultProps = {
  className: '',
  center: 'left',
};

export default Title;
