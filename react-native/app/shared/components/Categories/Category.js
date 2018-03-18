import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';

const Button = styled.TouchableOpacity`
	padding-top: 16px;
	padding-right: 8px;
	padding-bottom: 16px;
	padding-left: 8px;
`;

const Icon = styled.Text`
	font-size: 24;
	text-align: center;
	font-weight: 400;
	opacity: ${({isActive}) => isActive ? '1' : '0.4'};
`;

const Name = styled.Text`
	font-size: 9;
	text-align: center;
	font-weight: 400;
	opacity: ${({isActive}) => isActive ? '0.8' : '0.7'};
`;

const Category = ({ name, icon, isActive, ...otherProps }) => (
    <Button accessible={ true }
        accessibilityTraits="button"
        { ...otherProps }
    >
        <Icon isActive={ isActive }>{ icon }</Icon>
        <Name isActive={ isActive }>{ name }</Name>
    </Button>
);

export default Category;
