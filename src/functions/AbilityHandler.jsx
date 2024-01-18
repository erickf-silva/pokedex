import styled from "styled-components";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../contexts";

export const abilityHandler = (abilities) => {
    const { theme } = useContext(ThemeContext);

    if (abilities[1]) {
        const abilityUrl1 = abilities[0].ability.url;
        const abilityUrl2 = abilities[1].ability.url;
        const [abilityData1, setAbilityData1] = useState(null);
        const [abilityData2, setAbilityData2] = useState(null);

        useEffect(() => {
            const fetchData1 = async () => {
                try {
                    const response = await axios.get(abilityUrl1);
                    setAbilityData1(response.data);
                } catch (error) {
                    console.error("Error fetching ability data:", error);
                }
            };

            fetchData1();
        }, [abilityUrl1]);

        useEffect(() => {
            const fetchData2 = async () => {
                try {
                    const response = await axios.get(abilityUrl2);
                    setAbilityData2(response.data);
                } catch (error) {
                    console.error("Error fetching ability data:", error);
                }
            };

            fetchData2();
        }, [abilityUrl2]);

        return (
            <>
                <AbilityName theme={theme}>{abilities[0].ability.name}</AbilityName>
                <DescAbility theme={theme}>{abilityData1 ? abilityData1.effect_entries[0].short_effect : 'Loading...'}</DescAbility>

                <AbilityName theme={theme}>{abilities[1].ability.name}</AbilityName>
                <DescAbility theme={theme}>{abilityData2 ? abilityData2.effect_entries[1].short_effect : 'Loading...'}</DescAbility>
            </>
        );
    }

    return (
        <>
            <AbilityName>{abilities[0].ability.name}</AbilityName>
            <DescAbility theme={theme}>{abilityData1 ? abilityData1.effect_entries[0].short_effect : 'Loading...'}</DescAbility>
        </>
    )
};

const AbilityName = styled.h3`
    font-size: 16px;
    margin: 3px 0;
    color: ${(props) => props.theme.profile.color};

    &::first-letter {
        text-transform: uppercase;
    }
`

const DescAbility = styled.p`
    font-size: 14px;
    color: ${(props) => props.theme.profile.colorDesc};
`