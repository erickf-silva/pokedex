import styled from "styled-components";
import { NavBar } from "../components/NavBar";
import { InfoPokemon } from "../components/InfoPokemon";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../contexts";

export const Profile = ({ pokemonData }) => {
    const { theme } = useContext(ThemeContext);

    const { name, sprites } = pokemonData || {};
    const navigate = useNavigate();

    useEffect(() => {
        if (!pokemonData) {
            navigate("/");
        }
    }, []);

    if (!pokemonData) {
        return null;
    }

    return (
        <ProfileContainer theme={theme}>
            <NavBar hideSearch />
            <Pokemon theme={theme}>
                <Img theme={theme} src={sprites.front_default} alt={name} />
                <Info>
                    <Name theme={theme}>{name}</Name>
                    <InfoPokemon pokemonData={pokemonData} />
                </Info>
            </Pokemon>
        </ProfileContainer>
    );
}

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${(props) => props.theme.background};
    transition: 0.4s ease-in-out;
    width: 100%;
    height: 200vh;
`

const Pokemon = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${(props) => props.theme.profile.colorBg};
    border-radius: 15px;
    box-shadow: 2px 2px 4px ${(props) => props.theme.profile.boxShadow};
    margin: 30px;
    padding-right: 15px;
    max-width: 800px;

    @media (max-width: 820px) {
        flex-direction: column;
        max-width: 400px;
    }

    @media (max-width: 430px) {
        margin: 0;
        min-width: 100%;
        border-radius: 15px 15px 0 0;
    }
`

const Img = styled.img`
    width: 600px;
    margin: 12px;
    border-radius: 8px;
    border: 2px solid #838383;
    background-color: ${(props) => props.theme.profile.imageBg};

    @media (max-width: 820px) {
        width: 376px;
    }

    @media (max-width: 430px) {
        min-width: 98%;
    }
`

const Info = styled.div`
    margin: 15px;
`

const Name = styled.h2`
    font-size: 35px;
    border-radius: 15px;
    margin-bottom: 6px;
    color: ${(props) => props.theme.profile.color};

    &::first-letter {
        text-transform: uppercase;
    }
`