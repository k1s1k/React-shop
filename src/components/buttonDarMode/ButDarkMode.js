import {useEffect} from 'react'
import {useLocalStorage} from "../../Utils/useLocalStorage";
import detecktedDarkMode from "../../Utils/detecktedDarkMode";

import "./style.css"

import sun from "./icons/sun.svg";
import moon from "./icons/moon.svg";


function ButDarkMode() {
    const [darkMode, setDarkMode] = useLocalStorage("darkMode", detecktedDarkMode());

    useEffect(() => {
       if (darkMode === 'dark') {
           document.body.classList.add('dark');
       }else{
           document.body.classList.remove('dark');
       }
    }, [darkMode]);

    useEffect(() => {
        window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", (event) => {
                const newColorScheme = event.matches ? "dark" : "light";
                setDarkMode(newColorScheme);
            });
    },[setDarkMode])

    const toggleDarkMode = () => {
        setDarkMode((currentValue)=>{
            return currentValue === "light" ? "dark" : "light";
        });
    }

    const butNormal ="dark-mode-btn";
    const butActive ="dark-mode-btn dark-mode-btn--active";

    return (
        <button className={darkMode ==='dark'? butActive:butNormal} onClick={() => toggleDarkMode()}>
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon"/>
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon"/>
        </button>
    );
}

export default ButDarkMode;