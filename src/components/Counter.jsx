import { useDispatch, useSelector } from "react-redux";
import { increment, verifiedDecrement } from "../redux/counter/action";
import "./style/counter.css"

function Counter() {
    let { count } = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <main>
            <button onClick={() => dispatch(verifiedDecrement(1))}> - </button>
            <span> {count} </span>
            <button onClick={() => dispatch(increment(1))}> + </button>
        </main>
    );
}

export default Counter;
