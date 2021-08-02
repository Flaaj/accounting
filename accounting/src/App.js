import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// routes:
import { routes } from "./router";

// styles:
import "./styles/index.scss";

// store:
import { Provider as StoreProvider } from "react-redux";
import { store } from "./store";

// material ui theme:
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./theme";

function App() {
    return (
        <StoreProvider store={store}>
            <ThemeProvider theme={theme}>
                <Router>
                    <Switch>
                        {routes.map(({ path, component, exact }) => (
                            <Route key={path} exact={exact} path={path} component={component} />
                        ))}
                    </Switch>
                </Router>
            </ThemeProvider>
        </StoreProvider>
    );
}

export default App;
