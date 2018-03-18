import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

export const Styles = styled.Text`
    ${({noPaddingLeft}) => !noPaddingLeft && 'padding-left: 8px' };
    ${({noPaddingRight}) => !noPaddingRight && 'padding-right: 8px'};
    font-size: 24;
    font-weight: 200;
`;

const NarrativeText = ({
    children,
    ...otherProps
}) => (
    <Styles
        { ...otherProps }>
        { children }
    </Styles>
);

export default NarrativeText;
