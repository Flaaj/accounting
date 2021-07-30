import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Account from "./routes/Account";
import Categories from "./routes/Categories";
import History from "./routes/History";
import Login from "./routes/Login";
import Register from "./routes/Register";
import NewEntry from "./routes/NewEntry";
import Profile from "./routes/Profile";
import Record from "./routes/Record";
import Planning from "./routes/Planning";

// store:
import { Provider } from "react-redux";
import { store } from "./store";

// material ui theme:
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createTheme({
    palette: {
        primary: {
            light: "#2bbbad",
            main: "#26a69a",
            dark: "#2bbbad",
            contrastText: "#fff",
        },
        secondary: {
            light: "#ff7961",
            main: "#ffab40",
            dark: "#ba000d",
            contrastText: "#000",
        },
    },
});

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Account} />
                        <Route exact path="/history" component={History} />
                        <Route exact path="/categories" component={Categories} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/new-entry" component={NewEntry} />
                        <Route exact path="/profile" component={Profile} />
                        <Route exact path="/record" component={Record} />
                        <Route exact path="/planning" component={Planning} />
                    </Switch>
                </Router>
            </ThemeProvider>
        </Provider>
    );
}

export default App;
