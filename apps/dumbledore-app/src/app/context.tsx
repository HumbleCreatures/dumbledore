import { createContext, useState, useContext } from 'react';


export type Theme = 'light' | 'dark';
export type ThemeContextType = {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
};


export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider  = ({ children }:{children: JSX.Element | JSX.Element[];}) => {
  const [themeMode, setThemeMode] = useState<Theme>('light');
  return <ThemeContext.Provider value={{ theme: themeMode, changeTheme: setThemeMode }}>{children}</ThemeContext.Provider>;
};




const ThemeWrapper = ({ children }:{children: JSX.Element | JSX.Element[];}) => {
  const { theme, changeTheme } = useContext(ThemeContext) as ThemeContextType;

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    changeTheme(event.target.value as Theme);
  };
  return (
    <div className="Theme-wrapper" data-theme={theme}>
      <select className="Theme-toggler" name="toggleTheme" onChange={handleThemeChange}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      {children}
    </div>
  );
};

export default ThemeWrapper;