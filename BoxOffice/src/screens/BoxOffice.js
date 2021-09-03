import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BoxOfficeItem from '../components/BoxOfficeItem';
export default function BoxOffice() {
  const [ranks, setRanks] = useState([]);
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
        console.log(ranks)
      })
      .catch(console.warn)
  }, []);

  return (
    <>
      {ranks.map((item) => <BoxOfficeItem key={item.rnum} data={item} />)}
    </>
  );
}
// import React, { useEffect } from 'react';
// import BoxOfficeItem from '../components/BoxOfficeItem';
// import useFetch, { prefetch } from '../net/useFecth';
// import Paragraph from '../components/ui/Paragraph';
// import { ActivityIndicator, Text, View } from 'react-native';
// import tw from 'tailwind-react-native-classnames';

// export default function BoxOffice() {
//   const url =
//     'https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json';
//   const { data, error } = useFetch(url, {
//     key: '2363f339334c482a526d952cdba548b3',
//     targetDt: '20210827',
//   });

//   useEffect(() => {
//     if (!data) return;
//     const ranks = data?.boxOfficeResult?.dailyBoxOfficeList || [];

//     (async function () {
//       for (const rank of ranks) {
//         await prefetch(
//           'https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json',
//           {
//             key: '2363f339334c482a526d952cdba548b3',
//             movieCd: rank.movieCd,
//           },
//         );
//       }
//     })();
//   }, [data]);

//   if (error) return <Paragraph>{JSON.stringify(error)}</Paragraph>;
//   if (!data) return <ActivityIndicator />;

//   const ranks = data?.boxOfficeResult?.dailyBoxOfficeList || [];

//   return (
//     <>
//       <View style={tw`bg-white p-4 border-b`}>
//         <Text style={tw`text-xl font-bold`}>박스 오피스</Text>
//       </View>
//       {ranks.map(item => (
//         <BoxOfficeItem key={item.rnum} data={item} />
//       ))}
//     </>
//   );
// }