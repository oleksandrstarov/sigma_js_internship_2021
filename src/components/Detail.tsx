// type DescriptionProps = {
//   film: {
//     title: string;
//     release_date: string;
//     runtime: string;
//     production_countries: {}[];
//     spoken_languages: {}[];
//     status: string;
//     tagline: string;
//     vote_average: string;
//   };
// };

type DetailProps = {
  title: string;
  text: string | number | {}[];
};
const Component = ({ title, text }: DetailProps) => {
  return (
    <>
      <div className="detail-name">{title}:</div>
      <div className="detail-text">
        {Array.isArray(text)
          ? text.map((value: { [name: string]: string }) => value.name + ', ')
          : text}
      </div>
    </>
  );
};

const Detail = ({ film }: any) => {
  return (
    <div className="detail-body">
      <div className="detail-name">Release data:</div>
      <div className="detail-text">{film.release_date}</div>
      <div className="detail-name">Genres:</div>
      <div className="detail-text">
        {film.genres.map((value: { name: string }) => value.name + ' ')}
      </div>
      <div className="detail-name">Production countries:</div>
      <div className="detail-text">
        {film.production_countries.map(
          (value: { name: string }) => value.name + ' '
        )}
      </div>
      <div className="detail-name">Spoken languages:</div>
      <div className="detail-text">
        {film.spoken_languages.map(
          (value: { english_name: string }) => value.english_name + ' '
        )}
      </div>
      <Component title={'Release data'} text={film.release_date} />
      {/* <div className="detail-name">Runtime:</div>
      <div className="detail-text">{film.runtime} minutes</div> */}
    </div>
  );
};

export default Detail;
