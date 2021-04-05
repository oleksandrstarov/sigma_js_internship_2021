import { useEffect, useState } from "react";
import { API_KEY } from "src/constants/api";
import axios from '../axios';
import api from "src/service/api";
import '../styles/CardInfo.css';
import Image from "./Image";

let CardInfo = (prop: { number: any; }) => {

    let [data, setData] = useState({ poster_path: '', original_title: '' });
    let { poster_path, original_title } = data;
    let srcImg = api.changeImgLinks(poster_path, 'w342');

    useEffect(() => {
        api.getDataById(prop.number);
        async function fetchData() {
            const request = await axios.get(`${prop.number}?${API_KEY}`);
            setData(request.data);
        }
        fetchData();


    }, [prop.number])
    return (
        <div className='card-info'  >
            <Image src={srcImg} alt={original_title} className={'card-info_img'} />
        </div>
    )
}
export default CardInfo;