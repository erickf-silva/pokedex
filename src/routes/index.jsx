import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Profile } from "../pages/Profile";
import { useState } from "react";

export const AppRoutes = () => {
    const [pokemonData, setPokemonData] = useState();

    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home setPokemonData={setPokemonData} />} />
                <Route path="/profile" element={<Profile pokemonData={pokemonData} />} />
            </Routes>
        </HashRouter>
    );
};