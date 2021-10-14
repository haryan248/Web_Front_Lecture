import "./App.css";
import home from "./pages/home";
import PropsExample from "./pages/props";
import TodoList from "./pages/TodoList";
import Register from "./pages/register";
import { Route, Switch, withRouter } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={home} />
                <Route exact path="/props" component={PropsExample} />
                <Route exact path="/todo" component={TodoList} />
                <Route exact path="/register" component={Register} />
            </Switch>
        </div>
    );
}

export default withRouter(App);
