import { useNavigation } from '@react-navigation/core';
import React, { useCallback } from 'react';
import { Pressable } from "react-native"
import Row from '../Row';
import Paragraph from './ui/Paragraph';
import styled from "styled-components"

const Padding = styled.View`
  padding: 12px;
`

export default function BoxOfficeItem({ data }) {
  const navigation = useNavigation()
  let intenIcon = '⏺';
  const parsedRankInten = parseInt(data.rankInten, 10);
  if (parsedRankInten < 0) {
    intenIcon = '🔽';
  } else if (parsedRankInten > 0) {
    intenIcon = '🔼';
  }
  const navigateMovieDetail = useCallback(() => {
    navigation.navigate("MovieDetail", { movieCd: data.movieCd })
  }, [navigation, data])
  return (
    <Pressable onPress={navigateMovieDetail}>
      <Padding>
        <Row>
          <Paragraph>{data.rank}</Paragraph>
          <Paragraph>
            {intenIcon} {data.rankInten}
          </Paragraph>
          <Paragraph>{data.movieNm}</Paragraph>
          <Paragraph>{data.rankOldAndNew === 'new' ? '🆕' : ''}</Paragraph>
        </Row>
      </Padding>
    </Pressable>
  );
}
