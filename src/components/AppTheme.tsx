import { ThemeProvider } from "@emotion/react";
import { greenTheme } from "../themes/greenTheme";
import { CssBaseline } from "@mui/material";
import { ReactNode } from "react";

interface AppThemeProps {
    children: ReactNode;
}

const AppTheme: React.FC<AppThemeProps> = ({children}) => {
    return (<ThemeProvider theme={greenTheme}>
        <CssBaseline />
        {children}
    </ThemeProvider>);
}

export default AppTheme;