import { useEffect, useState } from "react";
import { API_KEY } from "src/constants/api";
import axios from '../axios';
import api from "src/service/api";
import '../styles/CardInfo.scss';
import Image from "./Image";
// import Button from "./Button";
import buttonImg from "../assets/image84.png";


let CardInfo = (prop: { number: any; }) => {

    let [data, setData] = useState({
        poster_path: '',
        original_title: '',
        title: '',
        vote_average: '',
        vote_count: ''
    });
    let { poster_path, original_title, title, vote_average } = data;
    let srcImg = api.changeImgLinks(poster_path, 'w342');

    useEffect(() => {
        api.getDataById(prop.number);
        async function fetchData() {
            const request = await axios.get(`${prop.number}?${API_KEY}`);
            console.log(request.data);

            setData(request.data);
        }
        fetchData();


    }, [prop.number])
    return (
        <div className='card-info'  >
            {/* temporary TitleComponent */}
            <div className='titleComponent card-info__title'>
                <h2>{title}</h2>
            </div>
            <div className="cars-info_container">
                <Image src={srcImg} alt={original_title} className={'card-info__img'} />
                <div className="card-info__gradient" />
                <div className="info-card__rate">

                    <div className="info-card__imdb">
                        IMDB {vote_average}
                    </div>
                    <div className="info-card__voters">
                        Voters {vote_average}
                    </div>
                </div>
                {/* <Button text={'VIEW DATSILS'} className={'card-info__button'} /> */}

                <button type="button" className={'card-info__button'}>
                    <div className="card-info__botton-view">
                        VIEW DATSILS
                   <Image src={buttonImg} alt={'title'} className={'card-info__button-img'} />
                    </div>
                </button>
            </div>
        </div>
    )
}
export default CardInfo;