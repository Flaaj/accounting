// routes:
import Account from "../pages/Account";
import Categories from "../pages/Categories";
import History from "../pages/History";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NewEntry from "../pages/NewEntry";
import Profile from "../pages/Profile";
import Record from "../pages/Record";
import Planning from "../pages/Planning";

export const routes = [
    { path: "/", component: Account, exact: true },
    { path: "/history", component: History, exact: true },
    { path: "/categories", component: Categories, exact: true },
    { path: "/login", component: Login, exact: true },
    { path: "/register", component: Register, exact: true },
    { path: "/new-entry", component: NewEntry, exact: true },
    { path: "/profile", component: Profile, exact: true },
    { path: "/record", component: Record, exact: true },
    { path: "/planning", component: Planning, exact: true },
];
