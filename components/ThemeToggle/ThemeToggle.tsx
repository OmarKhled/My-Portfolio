import { ThemeContext } from "@components/ThemeProvider";
import { useContext } from "react";

const ThemeToggle = () => {
  const {colorMode, setColorMode} = useContext(ThemeContext);
  if(!colorMode) {
    return null
  }
  return (
    <label>
      <input
          type="checkbox"
          checked={colorMode === 'dark'}
          onChange={(ev) => setColorMode(ev.target.checked ? 'dark' : 'light')}
      />{' '}
      Dark
    </label>
  );
}

export default ThemeToggle;
