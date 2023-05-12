import React, { useReducer } from "react";
// import { useState } from 'react'
import { calculateWinner } from "./helpers";
import Board from "./Board";
import "./GameStyle.css";

const initialState = {
    board: Array(9).fill(null),
    xIsNext: true,
};

const gameReducer = (state, action) => {
    switch (action.type) {
        case 'CLICK': {
            const { board, xIsNext } = state;
            const { index, winner } = action.payload
            if (winner || board[index]) return state;
            const nextState = JSON.parse(JSON.stringify(state))
            nextState.board[index] = xIsNext ? 'X' : 'O'
            nextState.xIsNext = !xIsNext
            
            return nextState
        }
        case 'RESET': {
            const nextState = JSON.parse(JSON.stringify(state))
            nextState.board = Array(9).fill(null)
            nextState.xIsNext = true
            
            return nextState
        }
        default:
            console.log('ERROR')
            break;
    }
    return state;
}

const GameWithReducer = () => {
    //useReducer
    const [state, dispatch] = useReducer(gameReducer, initialState);
    // const action = {type: 'CLICK', payload: {}}
    // dispacth({type: 'CLICK'})

    // const winner = calculateWinner(state.board);
    const winner = calculateWinner(state.board2);
    // Test lỗi với ErrorBoundary
    const handleClick = (index) => {
        dispatch({
            type: 'CLICK',
            payload: {
                index,
                winner
            }
        })
    };
    const handleResetGame = () => {
        dispatch({
            type: 'RESET'
        })
    };
    return (
        <div>
            <Board cells={state.board} onClick={handleClick} />
            <div className="game-control">
                <button onClick={handleResetGame} className="game-reset">
                    Reset Game
                </button>
                {winner ? (
                    <div className="game-winner">Winner is {winner}</div>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};

export default GameWithReducer;
