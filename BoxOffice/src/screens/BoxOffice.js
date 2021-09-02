import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import axios from 'axios';
import BoxOfficeItem from '../components/BoxOfficeItem';
export default function BoxOffice() {
  const [ranks, setRanks] = useState();
  useEffect(() => {
    const url =
      'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json';
    axios
      .get(url, {
        params: {
          key: '9c7c64460a34debed6e6dc982b99d76b',
          targetDt: '20210901',
        },
      })
      .then(response => {
        setRanks(response.data.boxOfficeResult.dailyBoxOfficeList)
      })
  }, []);
  return (
    <>
      {ranks.map((item)=><BoxOfficeItem key={item.rnum} data={item} />)}
      
    </>
  );
}
