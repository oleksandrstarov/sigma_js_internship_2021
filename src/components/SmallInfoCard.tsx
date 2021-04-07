import '../styles/SmallCardInfo.scss';
import buttonImgSrc from '../assets/image95.png';
import { useEffect, useState } from 'react';
const SmallInfoCard = () => {

    const frtchRequest = {
        'adult': false,
        'backdrop_path': '/jlxDtvmdniVlnGDaDWIrlCiDNpj.jpg',
        'belongs_to_collection': null,
        'budget': 0,
        'genres': [
            {
                'id': 16,
                'name': 'Animation'
            },
            {
                'id': 28,
                'name': 'Action'
            },
            {
                'id': 12,
                'name': 'Adventure'
            },
            {
                'id': 80,
                'name': 'Crime'
            },
            {
                'id': 14,
                'name': 'Fantasy'
            }
        ],
        'homepage': 'https://www.warnerbros.com/movies/batman-soul-dragon',
        'id': 732450,
        'imdb_id': 'tt12885852',
        'original_language': 'en',
        'original_title': 'Batman: Soul of the Dragon',
        'overview': 'Bruce Wayne faces a deadly menace from his past, with the help of three former classmates: world-renowned martial artists Richard Dragon, Ben Turner and Lady Shiva.',
        'popularity': 313.648,
        'poster_path': '/uDhnTtSxU5a8DtZdbbin3aZmkmU.jpg',
        'production_companies': [
            {
                'id': 2785,
                'logo_path': '/l5zW8jjmQOCx2dFmvnmbYmqoBmL.png',
                'name': 'Warner Bros. Animation',
                'origin_country': 'US'
            },
            {
                'id': 9993,
                'logo_path': '/2Tc1P3Ac8M479naPp1kYT3izLS5.png',
                'name': 'DC Entertainment',
                'origin_country': 'US'
            },
            {
                'id': 429,
                'logo_path': '/2Tc1P3Ac8M479naPp1kYT3izLS5.png',
                'name': 'DC Comics',
                'origin_country': 'US'
            },
            {
                'id': 14772,
                'logo_path': null,
                'name': 'Warner Bros. Home Entertainment Group',
                'origin_country': ''
            }
        ],
        'production_countries': [
            {
                'iso_3166_1': 'US',
                'name': 'United States of America'
            }
        ],
        'release_date': '2021-01-12',
        'revenue': 0,
        'runtime': 83,
        'spoken_languages': [
            {
                'english_name': 'English',
                'iso_639_1': 'en',
                'name': 'English'
            }
        ],
        'status': 'Released',
        'tagline': 'Get ready for the ultimate showdown.',
        'title': 'Batman: Soul of the Dragon',
        'video': false,
        'vote_average': 7.1,
        'vote_count': 117
    }

    let [data, setData] = useState(frtchRequest);
    useEffect(() => {
        setData(frtchRequest);
    }, [])

    return (
        <div className='smallCardInfo'>

            {/* temporary TitleComponent */}
            <div className='titleComponent smallCardInfo__title'>
                <p>{data.title}</p>
            </div>

            <div className='smallCardInfo__rate'>
                <div className='smallCardInfo__rate-imdb'>IMDB <br />{data.vote_average}</div>
                <div className='smallCardInfo__rate-voters'>Voters <br /> {data.vote_average}</div>
            </div>

            <div className='smallCardInfo__filter'></div>

            <img src={`https://image.tmdb.org/t/p/w185${data.poster_path}`} alt='sdfasdf' className='smallCardInfo__img' />
            <link rel='stylesheet' href={`/movie-details/${data.id}`}>
                <button className='smallCardInfo__button'>
                    <p className='smallCardInfo__button-text' >VIEW DETAILS</p>
                    <img src={buttonImgSrc} alt='button Img' className='smallCardInfo__button-img' />
                </button>
            </link>
        </div>
    )
}

export default SmallInfoCard;

