import '../styles/SmallCardInfo.scss';
import buttonImgSrc from '../assets/image95.png';
import { useEffect, useState } from 'react';
const SmallInfoCard = () => {

    // fetchRequest
    let [data, setData] = useState(fetchRequest);
    useEffect(() => {

        setData(fetchRequest);
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

