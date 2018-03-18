import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Touchable = styled.TouchableOpacity`
    ${({noPaddingLeft}) => !noPaddingLeft && 'padding-left: 8px' };
    ${({noPaddingRight}) => !noPaddingRight && 'padding-right: 8px'};
    padding-right: 8px;
`;

export const InnerText = styled.Text`
    font-size: 24;
    font-weight: ${({isActive}) => isActive ? '700' : '200'};
`;

const TextOption = ({
    children,
    isActive,
    ...otherProps,
}) => (
    <Touchable accessible={ true }
        accessibilityTraits="button"
        { ...otherProps }
    >
        <InnerText isActive={ isActive }>
            { children }
        </InnerText>
    </Touchable>
);

export default TextOption;
