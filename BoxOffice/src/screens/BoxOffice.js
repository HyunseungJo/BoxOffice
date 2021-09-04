import React, { useCallback, useEffect, useState } from 'react';
import tw from "tailwind-react-native-classnames"
import BoxOfficeItem from '../components/BoxOfficeItem';
import { useFocusEffect } from '@react-navigation/core';
import useFetch, { prefetch } from "../net/useFecth"
import Paragraph from '../components/ui/Paragraph';
import { ActivityIndicator, View, Text } from 'react-native';
export default function BoxOffice() {
  const url =
    'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json';
  const { data, error } = useFetch(url, {
    key: '9c7c64460a34debed6e6dc982b99d76b',
    targetDt: '20210902',
  })
  const ranks = data?.boxOfficeResult?.dailyBoxOfficeList || []
  useEffect(() => {
    if (!data) return;
    const ranks = data?.boxOfficeResult?.dailyBoxOfficeList || []
      (async function () {
        for (const rank of ranks) {
          await prefetch("https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json", {
            key: "9c7c64460a34debed6e6dc982b99d76b",
            movieCd: rank.movieCd
          })
          console.log(rank.movieCd)
        }
      })();
  }, [data])

  if (error) return <Paragraph>{JSON.stringify(error)}</Paragraph>
  if (!data) return <ActivityIndicator />

  return (
    <>
      <View style={tw`bg-white p-4 border-b`}>
        <Text style={tw`text-xl font-bold`}>박스 오피스</Text>
      </View>
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
//     key: '9c7c64460a34debed6e6dc982b99d76b',
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
//             key: '9c7c64460a34debed6e6dc982b99d76b',
//             movieCd: rank.movieCd,
//           },
//         );
//       }
//       console.log(rank.movieCd)
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