import styled from 'styled-components';
import { motion } from 'framer-motion';
interface WrapperProps {
    width: string;
    height: string;
    flexDirection: string;
    justifyContent: string;
    alignItems: string;
    flexWrap?: 'wrap' | 'nowrap';
    margin?: Array<string>;
    padding?: Array<string>;
    backgroundColor?: string;
    maxWidth?: string;
}

export const Wrapper = styled(motion.div)<WrapperProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color: ${(props) =>
        props.backgroundColor || props.theme.colors.background};
    font-family: ${(props) => props.theme.fonts.primary};
    color: ${(props) => props.theme.colors.primary};
    padding: ${(props) => props.padding?.join(' ')};
    margin: ${(props) => props.margin?.join(' ')};
    flex-direction: ${(props) => props.flexDirection};
    justify-content: ${(props) => props.justifyContent};
    align-items: ${(props) => props.alignItems};
    flex-wrap: ${(props) => props.flexWrap};
    max-width: ${(props) => props.maxWidth};
    position: relative;
    display: flex;
    box-sizing: border-box;
`;
