import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import styled from "styled-components";

import { ThemeContext } from "../contexts";
import { useNavigate } from "react-router-dom";
import { PokemonCard } from "../components/PokemonCard";
import { NavBar } from "../components/NavBar";

export const Home = ({ setPokemonData }) => {
    const { theme } = useContext(ThemeContext);

    const navigate = useNavigate();
    const [pokemons, setPokemons] = useState([]);
    const [limit, setLimit] = useState(10);

    useEffect(() => {
        getPokemons();
    }, [limit]);

    const getPokemons = () => {
        var endpoints = [];
        for (var i = 1; i <= limit; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }

        var response = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
    };

    const filterPokemon = (name) => {
        var filteredPokemons = [];
        if (name === "") {
            getPokemons();
        }
        for (var i in pokemons) {
            if (pokemons[i].data.name.includes(name)) {
                filteredPokemons.push(pokemons[i]);
            }
        }

        setPokemons(filteredPokemons);
    };

    const loadMorePokemons = () => {
        setLimit((prevLimit) => prevLimit + 10);
    }

    const pokemonPickHandler = (pokemonData) => {
        setPokemonData(pokemonData);
        navigate("/profile");
    }

    return (
        <HomeContainer theme={theme}>
            <NavBar filterPokemon={filterPokemon} pokemons={pokemons} setPokemons={setPokemons} getPokemons={getPokemons} />
            <Container>
                <Ul>
                    {pokemons.map((pokemon) =>
                        <li onClick={() => pokemonPickHandler(pokemon.data)} key={pokemon.data.id}>
                            <PokemonCard
                                name={pokemon.data.name}
                                image={pokemon.data.sprites.front_default}
                                types={pokemon.data.types}
                                id={pokemon.data.id}
                            />
                        </li>
                    )}
                </Ul>

                <LoadMoreBtn onClick={loadMorePokemons} theme={theme}>Load more</LoadMoreBtn>
            </Container >
        </HomeContainer>
    );
}

const HomeContainer = styled.div`
    background-color: ${(props) => props.theme.background};
    transition: 0.4s ease-in-out;
    width: 100%;
    height: 800vh;
`

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
`

const Ul = styled.ul`
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 18px;
    margin: 30px;
`

const LoadMoreBtn = styled.button`
    border: 3px solid ${(props) => props.theme.loadMoreBtn.colorBorder};
    background-color: ${(props) => props.theme.loadMoreBtn.colorBg};
    color: ${(props) => props.theme.loadMoreBtn.color};
    cursor: pointer;
    font-weight: 700;
    font-size: 20px;
    margin: 20px;
    padding: 15px;
    border-radius: 30px;
`