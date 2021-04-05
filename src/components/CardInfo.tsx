import { useEffect, useState } from 'react';
import api from 'src/service/api';
import '../styles/CardInfo.scss';
import Button from './Button';
import buttonImgSrc from '../assets/image84.png';
import { NavLink } from 'react-router-dom';

let CardInfo = ({ tailWide, number }: { number: any; tailWide: boolean }) => {
    let [data, setData] = useState({
        poster_path: '',
        original_title: '',
        title: '',
        vote_average: '',
        vote_count: '',
        overview: ''
    });
    let { poster_path, original_title, title, vote_average, overview } = data;
    let srcImg = api.changeImgLinks(poster_path, 'w342');

    useEffect(() => {
        api.newFunc(537056).then((res: any) => {
            setData(res.data);
        });
    }, [number]);

    return (
        <div className={!tailWide ? 'card-info' : 'card-info card-info__tail'}>
            {/* temporary TitleComponent */}
            <div className='card-info__wrapper'>
                {!tailWide ? (
                    <div className='titleComponent card-info__title'>
                        <h2>{title}</h2>
                    </div>
                ) : (
                    <div className='titleComponent card-info__title-tail'>
                        <h2>{title}</h2>
                    </div>
                )}
                {!tailWide ? null : (
                    <div className='card-info__description'>
                        {overview.length >= 250 ? (
                            <p>
                                {' '}
                                {overview.slice(0, 250)}
                                <NavLink to={`/movie-details/:${number} `}>
                                    <span>...Read more</span>
                                </NavLink>
                            </p>
                        ) : (
                            overview
                        )}
                    </div>
                )}
            </div>
            <div className='cars-info_container'>
                <img src={srcImg} alt={original_title} className={'card-info__img'} />
                <div className='card-info__gradient' />
                <div className='info-card__rate'>
                    <div className='info-card__imdb'>IMDB {vote_average}</div>
                    <div className='info-card__voters'>Voters {vote_average}</div>
                </div>
                <Button
                    classNameButton={'card-info__button'}
                    classNameContainer={'card-info__botton-view'}
                    classNameImg={'card-info__button-img'}
                    text={'VIEW DATSILS'}
                    buttonImgSrc={buttonImgSrc}
                    original_title={original_title}
                    number={number}
                    link={'/movie-details/:'}
                />
            </div>
        </div>
    );
};
export default CardInfo;
