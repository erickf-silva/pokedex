import { typeHandler } from "../../functions/TypeHandler";
import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../contexts";

export function PokemonCard({ name, image, types, id }) {
    const { theme } = useContext(ThemeContext);

    const formatteddId = id < 10 ? `#00${id}` : id < 100 ? `#0${id}` : `#${id}`;

    return (
        <>
            <Section theme={theme}>
                <Img src={image} alt="pokemon" />
                <Div theme={theme}>
                    <Id>{formatteddId}</Id>
                    <Name theme={theme}>{name}</Name>
                    <Type theme={theme}>{typeHandler(types)}</Type>
                </Div>
            </Section>
        </>
    )
}

const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background-color: ${(props) => props.theme.card.cardBg};
    box-shadow: 2px 2px 4px ${(props) => props.theme.card.boxShadow};
    width: 175px;
    height: 260px;
    border-radius: 0 15px;
    cursor: pointer;

    &:hover {
        background-color: ${(props) => props.theme.card.cardHover};
        transition: 0.8s;
    }
`

const Img = styled.img`
    height: 100%;
`

const Div = styled.div`
    background-color: ${(props) => props.theme.card.infoPokemon.colorBg};
    padding: 12px;
    margin-bottom: 10px;
    border-radius: 10px;
    width: 90%;
`

const Id = styled.p`
    font-weight:700;
    color: #787676;
`

const Name = styled.h3`
    font-size: 22px;
    font-weight: 600;
    margin: 10px 0;
    color: ${(props) => props.theme.card.infoPokemon.colorName};
`

const Type = styled.p`
    display: inline;
    margin-right: 8px;
    padding: 0 10px 4px;
    border-radius: 8px;
    background-color: #f6f6;
    color: ${(props) => props.theme.card.infoPokemon.colorType};
`