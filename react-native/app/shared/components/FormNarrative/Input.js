import React from 'react';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export const Styles = styled.TextInput`
    height: 40;
    width: 100%;
    border-width: 0;
    font-size: 24;
    font-weight: 700;
`;

const NarrativeInput = ({ ...otherProps }) => (
    <Styles { ...otherProps } />
);

export default NarrativeInput;
