import "./App.css";
import Hello from "./Component/day3/Hello";
import BasicProps from "./Component/day3/BasicProps";
import ManyProps from "./Component/day3/BasicProps";
import ChildrenProps from "./Component/day3/ChildrenProps";
import ConditionalProps from "./Component/day3/ConditionalProps";
import StateExample from "./Component/day3/StateExample";
import Counter from "./Component/day3/Counter";
import TodoList from "./Component/day4/TodoList";

function App() {
    return (
        <div className="App">
            {/* <Hello></Hello>
            <StateExample />
            <BasicProps name="hyunJoon" age="26" />
            <ManyProps name="hyunJoon" age="26" />
            <ChildrenProps>
                <h1>Children 사용법</h1>
                <p>My name is Ha hyun joon</p>
                <p>I am 26 years old</p>
            </ChildrenProps>
            <ConditionalProps name="hyunJoon" age="26" isVip={true} />
            <Counter /> */}
            <TodoList />
        </div>
    );
}

export default App;
