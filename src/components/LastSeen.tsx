import { useEffect, useState } from 'react';
import api from 'src/service/api';
import RenderResults from './RenderResults';

const LastSeen = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        api.getDataByIds(api.getHistoryIdList()).then((res: any) => {
            setData(res);
        });
    }, [])

    return (
        <RenderResults list={data} />
    );
};

export default LastSeen;
