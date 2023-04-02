import React, { useReducer } from "react";

const reducer = (state, action) => {
    switch (action) {
        case "UP":
            return state + 1;
        case "DOWN":
            return state - 1;
        case "REMOVE_ALL":
            return 0;
        default:
            return state;
    }
};

const reducer2 = (state, action) => {
    switch (action.type) {
        case "GIA_TRI_1":
            return action.data;
        case "GIA_TRI_2":
            return action.data;
        default:
            return state;
    }
};

const initState = {
    loading: false,
    data: [],
    error: null
}
const userReducer = (state, action) => {
    switch (action.type) {
        case 'GET_USER_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'GET_USER_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.data
            }
        case 'GET_USER_ERROR':
            return {
                ...state,
                data: [],
                error: action.data
            }
        default:
    }
}

const ReducerHook = () => {
    const [count, dispatch] = useReducer(reducer, 0);
    const [count2, dispatch2] = useReducer(reducer2, 0);
    const [user, userDispatch] = useReducer(userReducer, initState)

    const getUser = () => {
        userDispatch({
            type: 'GET_USER_REQUEST'
        })
        setTimeout(() => {
            fetch('https://reqres.in/api/users')
                .then(res => res.json())
                .then(res => {
                    userDispatch({
                        type: 'GET_USER_SUCCESS',
                        data: res
                    })
                })
                .catch (err => {
                    userDispatch({
                        type: 'GET_USER_ERROR',
                        data: err
                    })
                })
        }, 2000)
    }

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={() => dispatch("UP")}>UP</button>
            <button onClick={() => dispatch("DOWN")}>DOWN</button>
            <button onClick={() => dispatch("REMOVE_ALL")}>REMOVE ALL</button>

            <p>Count2: {count2}</p>
            <button
                onClick={() =>
                    dispatch2({
                        type: "GIA_TRI_1",
                        data: 10,
                    })
                }
            >
                GAN_GIA_TRI_1
            </button>
            <button
                onClick={() =>
                    dispatch2({
                        type: "GIA_TRI_2",
                        data: 12,
                    })
                }
            >
                GAN_GIA_TRI_2
            </button>
            <br></br>
            <button onClick={getUser}>GET USER</button>
            {user.loading ? <p>Loading...</p> : <p>{JSON.stringify(user)}</p>}
        </>
    );
};

export default ReducerHook;

/*
    ACTION: 'ADD_NEW_ITEM'

    VIEW: Nhan len 1 BUTTON dispatch('ADD_NEW_ITEM')

    REDUCER (state, action) => {
        switch (action) {
            case 'ADD_NEW_ITEM':
                state += 1
            case 'ABC':

            default:
        }
    }
*/
