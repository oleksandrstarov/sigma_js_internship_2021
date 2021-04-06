import '../styles/Details.scss';

type DetailProps = {
  title: string;
  text: string | number | {}[];
};

const Detail = ({ title, text }: DetailProps) => {
  return (
    <div className="detail-body">
      <div className="detail-title">{title}:</div>
      <div>
        {Array.isArray(text)
          ? text.map(
              (value: { [name: string]: string | number }) => value.name + ', '
            )
          : text}
      </div>
    </div>
  );
};

export default Detail;
