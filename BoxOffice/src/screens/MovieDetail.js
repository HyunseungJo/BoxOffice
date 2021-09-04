import React, { useCallback, useEffect, useState } from "react"
import { Text } from 'react-native'
import Paragraph from '../components/ui/Paragraph'
import Row from '../Row'
import { useFocusEffect, useRoute } from '@react-navigation/core'
import { ActivityIndicator, Pressable } from 'react-native'
import axios from 'axios'
import Link from '../components/ui/Link'
import useFetch from '../net/useFecth'
export default function ({ route, navigation }) {
  const url = "https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json"
  const { data, error } = useFetch(url, {
    key: "9c7c64460a34debed6e6dc982b99d76b",
    movieCd: route.params.movieCd
  })
  useEffect(() => {
    if (data) {
      navigation.setOptions({
        title: data.movieInfoResult.movieInfo.movieNm
      }, [data])
    }
  })
  if (error) return <Paragraph>{JSON.stringify(error)}</Paragraph>
  if (!data) return <ActivityIndicator />
  const detail = data.movieInfoResult.movieInfo
  return (
    <>
      <Row>
        <Paragraph>영화명 :{detail.movieNm}</Paragraph>
      </Row>
      <Row>
        <Paragraph>상영시간 : {detail.showTm}분</Paragraph>
      </Row>
      <Row>
        <Paragraph>개봉일 : {detail.openDt}</Paragraph>
      </Row>
      <Row>
        <Paragraph>
          감독 : {detail.directors.map(
            director => (
              <Link
                key={director.peopleNm}
                onPress={() => {
                  navigation.navigate("SearchResult", {
                    peopleNm: director.peopleNm
                  })
                }}
              >
                {director.peopleNm}
              </Link>))}
        </Paragraph>
      </Row>
      <Row>
        <Paragraph>
          출연 : {detail.actors.map(
            actor => (
              <Link
                key={actor.peopleNm}
                onPress={() => {
                  navigation.navigate('SearchResult', {
                    peopleNm: actor.peopleNm
                  })
                }}
              >
                {actor.peopleNm}
              </Link>))}
        </Paragraph>
      </Row>
    </>
  )
}