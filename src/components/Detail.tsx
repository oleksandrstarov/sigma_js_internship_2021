import '../styles/Detail.scss';

type DetailProps = {
  title: string;
  textContent: string | number | undefined | null;
};

const Detail = ({ title, textContent }: DetailProps): JSX.Element => {
  return (
    <>
      {textContent ? (
        <div className="detail-body">
          <h4 className="detail-title">{title}:</h4>
          <div>{textContent}</div>
        </div>
      ) : null}
    </>
  );
};

export default Detail;
