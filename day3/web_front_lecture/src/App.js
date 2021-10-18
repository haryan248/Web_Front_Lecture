import "./App.css";
import home from "./pages/home";
import PropsExample from "./pages/props";
import TodoList from "./pages/TodoList";
import Register from "./pages/register";
import Reducer from "./pages/reducer";
import { Route, Switch, withRouter } from "../node_modules/react-router-dom";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={home} />
                <Route exact path="/props" component={PropsExample} />
                <Route exact path="/todo" component={TodoList} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/reducer" component={Reducer} />
            </Switch>
        </div>
    );
}

export default withRouter(App);
