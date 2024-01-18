import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { ThemeContext } from '../../contexts';

export const PokemonFilter = ({ pokemons, setPokemons, getPokemons }) => {
    const { theme } = useContext(ThemeContext);
    const [types, setTypes] = useState([]);
    const [noPokemonMessage, setNoPokemonMessage] = useState('');

    useEffect(() => {
        const fetchTypes = async () => {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/type');
                setTypes(response.data.results);
            } catch (error) {
                console.error('Error fetching Pokemon types:', error);
            }
        };

        fetchTypes();
    }, []);

    const [filterPokemon, setFilterPokemon] = useState('');

    const allTypes = types.map((type) => type.name);

    const filteredPokemons = allTypes.filter((type) => type.includes(filterPokemon));

    const filterPokemonByType = (selectedType) => {
        if (selectedType === "All types") {
            getPokemons();
            setNoPokemonMessage('');
        } else {
            const filteredPokemonsByType = pokemons.filter((pokemon) => {
                const { types } = pokemon.data;
                return types.some((type) => type.type.name.includes(selectedType));
            });

            if (filteredPokemonsByType.length === 0) {
                setNoPokemonMessage(`No Pokémon found with the selected type`);
                setPokemons([]);
            } else {
                setNoPokemonMessage('');
                setPokemons(filteredPokemonsByType);
            }
        }
    };


    return (
        <>
            <Select theme={theme} onChange={(e) => filterPokemonByType(e.target.value)}>
                <option>All types</option>
                {filteredPokemons.map((type) => (
                    <option key={type} value={type}>
                        {type}
                    </option>
                ))}
            </Select>

            {noPokemonMessage && (
                <NoPokemonMessage>{noPokemonMessage}</NoPokemonMessage>
            )}
        </>
    );
};

const Select = styled.select`
    background-color: ${(props) => props.theme.input.inputBg};
    color: ${(props) => props.theme.input.inputColor};
    padding: 8px 12px 8px 8px;
    border: 1px solid ${(props) => props.theme.input.inputBorder};
    border-radius: 15px;
    font-weight: 700;
`

const NoPokemonMessage = styled.p`
    color: #ff5151;
    margin: 8px 0 0 6px;
    font-size: 13px;
    position: absolute;
`