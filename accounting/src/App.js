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

// store
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
    return (
        <Provider store={store}>
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
        </Provider>
    );
}

export default App;
