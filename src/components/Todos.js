import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos } from '../services/actions/todosAction';

const Todos = () => {
    const { isLoading, todos, error } = useSelector(state => state);
    const dispatch = useDispatch();
    // console.log(todos);

    useEffect(() => {
        dispatch(getAllTodos())
    }, []);

    return (
        <div>
            <h2>Todos App</h2>
            {isLoading && <h3>Loading . . .</h3>}
            {error && <h3>{error.nessage}</h3>}
            {
                todos?.map((todo, idx) => <h4 key={idx}>{todo?.id + ' ' + todo?.title}</h4>)
            }
        </div>
    );
};

export default Todos;