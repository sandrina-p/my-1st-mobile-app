import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

export const Styles = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 8px;
    padding-right: 16;
    padding-bottom: 8px;
    padding-left: 16;
`;

const Row = ({ children, ...otherProps}) => (
    <Styles { ...otherProps }>
        { children }
    </Styles>
);

export default Row;
