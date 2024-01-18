import styled from "styled-components";
import { typeHandler } from "../../functions/TypeHandler";
import { abilityHandler } from "../../functions/AbilityHandler";
import { useContext } from "react";
import { ThemeContext } from "../../contexts";

export const InfoPokemon = ({ pokemonData }) => {
    const { theme } = useContext(ThemeContext);
    const { height, weight, types, moves, abilities } = pokemonData;

    return (
        <>
            <Container>
                <Info>
                    <Li theme={theme}>{`Height: ${height}cm`}</Li>
                    <Li theme={theme}>{`Weight: ${weight}g`}</Li>
                    <Li theme={theme}>{`Type: ${typeHandler(types)}`}</Li>
                </Info>

                <Moves theme={theme}>Moves</Moves>

                <div>
                    {moves.slice(0, 10).map((moveData, index) => (
                        <Move theme={theme} key={index}>{moveData.move.name}</Move>
                    ))}
                </div>

                <Abilities theme={theme}>Abilities</Abilities>

                <div>
                    {abilityHandler(abilities)}
                </div>
            </Container>
        </>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const Info = styled.ul`
    flex-direction: column;
    gap: 5px;
`

const Moves = styled.h2`
    color: ${(props) => props.theme.profile.color};
`

const Abilities = styled.h2`
    color: ${(props) => props.theme.profile.color};
`

const Li = styled.li`
    font-size: 14px;
    color: ${(props) => props.theme.profile.colorDesc};
`

const Move = styled.p`
    display: inline;
    font-size: 14px;
    color: ${(props) => props.theme.profile.colorDesc};
    margin-right: 10px;
`