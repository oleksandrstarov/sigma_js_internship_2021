import Detail from './Detail';
import '../styles/Details.scss';
const film = {
  adult: false,
  backdrop_path: null,
  belongs_to_collection: null,
  budget: 0,
  genres: [{ id: 18, name: 'Drama' }],
  homepage: '',
  id: 732410,
  imdb_id: 'tt12899214',
  original_language: 'uk',
  original_title: 'Тумани',
  overview:
    "Military conflict and the death of their father brings the two brothers back home. Grieving mother tries to hide from Stasik the truth about Bodia. Everything would go well, if not for the military mercenaries who come after Bodia's life.",
  popularity: 0.6,
  poster_path: '/li0Bf02wLbCwWBfxC0fMRC2GzD5.jpg',
  production_companies: [
    {
      id: 2785,
      logo_path: '/l5zW8jjmQOCx2dFmvnmbYmqoBmL.png',
      name: 'Warner Bros. Animation',
      origin_country: 'US'
    },
    {
      id: 9993,
      logo_path: '/2Tc1P3Ac8M479naPp1kYT3izLS5.png',
      name: 'DC Entertainment',
      origin_country: 'US'
    },
    {
      id: 429,
      logo_path: '/2Tc1P3Ac8M479naPp1kYT3izLS5.png',
      name: 'DC Comics',
      origin_country: 'US'
    },
    {
      id: 14772,
      logo_path: null,
      name: 'Warner Bros. Home Entertainment Group',
      origin_country: ''
    }
  ],
  production_countries: [{ iso_3166_1: 'UA', name: 'Ukraine' }],
  release_date: '2020-08-12',
  revenue: 0,
  runtime: 19,
  spoken_languages: [
    { english_name: 'Russian', iso_639_1: 'ru', name: 'Pусский' },
    { english_name: 'Ukrainian', iso_639_1: 'uk', name: 'Український' }
  ],
  status: 'Released',
  tagline: '',
  title: 'Fogs',
  video: false,
  vote_average: 0.0,
  vote_count: 0
};

const MovieDetails = () => {
  return (
    <div>
      <h1>
        Movie details
        <Detail film={film} />
      </h1>
    </div>
  );
};

export default MovieDetails;
