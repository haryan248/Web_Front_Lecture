import "./App.css";
import Hello from "./Component/Hello";
import BasicProps from "./Component/BasicProps";
import ManyProps from "./Component/BasicProps";
import ChildrenProps from "./Component/ChildrenProps";
import ConditionalProps from "./Component/ConditionalProps";
import StateExample from "./Component/StateExample";

function App() {
    return (
        <div className="App">
            <Hello></Hello>
            <StateExample />
            <BasicProps name="hyunJoon" age="26" />
            <ManyProps name="hyunJoon" age="26" />
            <ChildrenProps>
                <h1>Children 사용법</h1>
                <p>My name is Ha hyun joon</p>
                <p>I am 26 years old</p>
            </ChildrenProps>
            <ConditionalProps name="hyunJoon" age="26" isVip={true} />
        </div>
    );
}

export default App;
