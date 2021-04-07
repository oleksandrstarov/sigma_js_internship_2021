import '../styles/Detail.scss';

type DetailProps =
  | {
      title: string;
      textContent?: string | number;
      arrayOfContent: { name: string }[];
    }
  | {
      title: string;
      textContent: string | number;
      arrayOfContent?: { name: string }[];
    };

const Detail = ({ title, textContent, arrayOfContent }: DetailProps) => {
  return (
    <div className="detail-body">
      <div className="detail-title">{title}:</div>
      <div>
        {arrayOfContent?.map(
          (item: { name: string | number }) => item.name + ', '
        ) || textContent}
      </div>
    </div>
  );
};

export default Detail;
