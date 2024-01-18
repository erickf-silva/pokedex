import React, { useContext, useState } from "react";
import { ThemeContext, themes } from "../../contexts";
import ReactSwitch from "react-switch";
import moonIcon from "../../assets/moon-icon.jpg"

export const ThemeTogglerButton = (props) => {
    const { theme, setTheme } = useContext(ThemeContext);
    const [isChecked, setIsChecked] = useState(false);

    const handleSwitchChange = (checked) => {
        setIsChecked(checked);
        setTheme(checked ? themes.light : themes.dark);
    }

    const customSwitchStyles = {
        onColor: "#c7c7c7",
        offColor: "#c7c7c7",
        boxShadow: "0 0 2px 3px #888",
        checkedIcon: null,
        uncheckedIcon: (
            <img
                src={moonIcon}
                alt="Moon Icon"
                style={{ height: "100%", width: "100%", borderRadius: "50%" }}
            />
        )
    };

    return <ReactSwitch
        {...customSwitchStyles}
        checked={isChecked}
        onChange={handleSwitchChange}
    />
}
