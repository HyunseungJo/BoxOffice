import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
  flex-direction: row;
`;

export default function Row({children}) {
  return <Container>{children}</Container>;
}
