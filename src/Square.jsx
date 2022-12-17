import React from 'react'
import styles from './App.module.css'

const Square = (props) => {

    const handleClick = () => {
        if (!props.squareValue) {
            if (props.player) {
                props.squares.splice(props.index, 1, 'X')
                props.setSquares(props.squares)
                props.setPlayer(!props.player)
            }
            else {
                props.squares.splice(props.index, 1, 'O')
                props.setSquares(props.squares)
                props.setPlayer(!props.player)
            }
        }
    }

    return (
        <div className={styles.square} onClick={handleClick}>
            {props.squareValue === 'O' ? 'O' : props.squareValue}
        </div>
    )
}

export default Square
