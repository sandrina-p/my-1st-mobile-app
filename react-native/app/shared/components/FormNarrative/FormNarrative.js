import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

export const Styles = styled.View`
    padding-top: 80;
    padding-bottom: 16;
`;

const FormNarrative = ({ children, ...otherProps}) => (
    <Styles { ...otherProps }>
        { children }
    </Styles>
);

export default FormNarrative;
