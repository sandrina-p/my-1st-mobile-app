import styled from "styled-components/native";

const sizes = {
    xl: 50,
    lg: 20,
    md: 16,
    sm: 14,
    default: 16,
};

export const theme = {
    dark: {
        bg: 'black',
        fg: 'white',
        primary: '#ffd72a',
        neutral: '#878787',
    },
    light: {
        bg: 'white',
        fg: 'black',
        primary: '#e84926',
        neutral: '#878787',
    }
};

export const StyledView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.bg };
`;

export const StyledFooter = styled.View`
    position: absolute;
    bottom: 16;
    flex: 1;
    justify-content: center;
    align-items: center;
    transform: scale(0.8);
`;

export const StyledText = styled.Text`
    font-size: ${ props => sizes[props.size] || sizes.default };
    text-align: center;
    margin: 10px 0;
    color: ${props => props.theme.fg };
`;
