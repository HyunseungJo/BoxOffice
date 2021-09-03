import { useFocusEffect } from '@react-navigation/core';
import React, { useCallback, useState } from 'react';
import axios from 'axios';
import { FlatList, Pressable, View, Text } from 'react-native';
import Paragraph from '../components/ui/Paragraph';
export default function SearchResult({ route }) {
  const [list, setList] = useState()
  useFocusEffect(useCallback(() => {
    const url = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleList.json"
    axios.get(url, {
      params: {
        key: "9c7c64460a34debed6e6dc982b99d76b",
        peopleNm: route.params.peopleNm
      }
    })
      .then(response => setList(response.data.peopleListResult.peopleList))
  }, []))
  return (
    <FlatList
      data={list}
      keyExtractor={item => item.peopleCd}
      renderItem={data => (
        <Pressable onPress={() => { }}>
          <View>
            <Paragraph>{data.item.peopleNm} ({data.item.repRoleNm})</Paragraph>
            <Text>{data.item.filmoNames}</Text>
          </View>
        </Pressable>
      )}
    >

    </FlatList>)
}