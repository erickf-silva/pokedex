import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { PokemonFilter } from "../PokemonFilter";
import { ThemeTogglerButton } from "../ThemeTogglerBtn";
import { useContext } from "react";
import { ThemeContext } from "../../contexts";
import PokemonLogo from "../../assets/pokemon-logo.png"

export const NavBar = ({ filterPokemon, hideSearch, pokemons, setPokemons, getPokemons }) => {
    const { theme } = useContext(ThemeContext);

    const navigate = useNavigate();

    return (
        <Nav>
            <Btn>
                <ThemeTogglerButton />
            </Btn>

            <Div>
                <a href="" onClick={() => navigate("/")}>
                    <Img src={PokemonLogo} alt="logo pokemon" />
                </a>

                {!hideSearch && (
                    <ul>
                        <li>
                            <Input theme={theme} type="text" placeholder="Searching..." onChange={(e) => filterPokemon(e.target.value)} />
                        </li>
                        <li>
                            <PokemonFilter pokemons={pokemons} setPokemons={setPokemons} getPokemons={getPokemons} />
                        </li>
                    </ul>
                )}
            </Div>
        </Nav>
    );
};

const Nav = styled.nav`
    position: relative;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    width: 100%;
    margin: 15px 0 15px 0;
`

const Btn = styled.div`
    position: absolute;
    right: 0;
    margin-right: 20px;
`

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`

const Img = styled.img`
    max-width: 500px;

    @media (max-width: 550px) {
        max-width: 330px;
        margin-top: 30px;
    }
`

const Input = styled.input`
    background-color: ${(props) => props.theme.input.inputBg};
    color: ${(props) => props.theme.input.inputColor};
    padding: 8px;
    border: 1px solid ${(props) => props.theme.input.inputBorder};
    border-radius: 15px;
    font-weight: 700;
`