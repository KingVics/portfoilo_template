import DarkModeToggle from "react-dark-mode-toggle";


const Toggle = ({setDark, dark}) => {
    // const theme = useContext(ThemeContext);

    const handleClick = () => {
        // theme.dispatch({ type: "TOGGLE" });
        setDark(!dark)
    };
    return (
        <DarkModeToggle
            onChange={handleClick}
            checked={dark}
            size={50}
            // className="md:static absolute right-10 bottom-5 z-10"
        />
    );
};

export default Toggle;