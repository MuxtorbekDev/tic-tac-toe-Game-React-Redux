import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ImCross, ImRadioUnchecked } from "react-icons/im";
import {
  box1,
  box2,
  box3,
  box4,
  box5,
  box6,
  box7,
  box8,
  box9,
  resetGame,
} from "../Reducer/actions";

import { useSelector, useDispatch } from "react-redux";

export default function Game() {
  const box1State = useSelector((state) => state.box1);
  const box2State = useSelector((state) => state.box2);
  const box3State = useSelector((state) => state.box3);
  const box4State = useSelector((state) => state.box4);
  const box5State = useSelector((state) => state.box5);
  const box6State = useSelector((state) => state.box6);
  const box7State = useSelector((state) => state.box7);
  const box8State = useSelector((state) => state.box8);
  const box9State = useSelector((state) => state.box9);
  const [nowPlay, setNowPlay] = useState(true);
  const [winnerPlayer, setWinnerPlayer] = useState(null);
  const [gameOver, setGameOver] = useState(null);
  const dispatch = useDispatch();

  function handlerPlay(func, num) {
    if (num === null) {
      if (nowPlay) {
        dispatch(func(1));
        setNowPlay(!nowPlay);
      } else {
        dispatch(func(2));
        setNowPlay(!nowPlay);
      }
    }
  }

  useEffect(() => {
    if (
      box1State === box2State &&
      box2State === box3State &&
      box1State !== null
    ) {
      setGameOver(true);
      setWinnerPlayer(box1State);
    } else if (
      box4State === box5State &&
      box5State === box6State &&
      box4State !== null
    ) {
      setGameOver(true);
      setWinnerPlayer(box4State);
    } else if (
      box7State === box8State &&
      box8State === box9State &&
      box7State !== null
    ) {
      setGameOver(true);
      setWinnerPlayer(box7State);
    } else if (
      box1State === box4State &&
      box4State === box7State &&
      box1State !== null
    ) {
      setGameOver(true);
      setWinnerPlayer(box1State);
    } else if (
      box2State === box5State &&
      box5State === box8State &&
      box2State !== null
    ) {
      setGameOver(true);
      setWinnerPlayer(box2State);
    } else if (
      box3State === box6State &&
      box6State === box9State &&
      box3State !== null
    ) {
      setGameOver(true);
      setWinnerPlayer(box3State);
    } else if (
      box1State === box5State &&
      box5State === box9State &&
      box1State !== null
    ) {
      setGameOver(true);
      setWinnerPlayer(box1State);
    } else if (
      box3State === box5State &&
      box5State === box7State &&
      box3State !== null
    ) {
      setGameOver(true);
      setWinnerPlayer(box3State);
    } else if (
      box1State !== null &&
      box2State !== null &&
      box3State !== null &&
      box4State !== null &&
      box5State !== null &&
      box6State !== null &&
      box7State !== null &&
      box8State !== null &&
      box9State !== null
    ) {
      setGameOver(true);
      setWinnerPlayer(3);
    }

    // eslint-disable-next-line
  }, [
    box1State,
    box2State,
    box3State,
    box4State,
    box5State,
    box6State,
    box7State,
    box8State,
    box9State,
  ]);

  function handlerRestart() {
    dispatch(resetGame());
    setGameOver(false);
    setNowPlay(true);
    setWinnerPlayer(null);
  }

  return (
    <div>
      <FlexBox>
        <Box onClick={() => handlerPlay(box1, box1State)}>
          {box1State === 1 ? (
            <ImRadioUnchecked />
          ) : box1State === 2 ? (
            <ImCross />
          ) : null}
        </Box>
        <Box onClick={() => handlerPlay(box2, box2State)}>
          {box2State === 1 ? (
            <ImRadioUnchecked />
          ) : box2State === 2 ? (
            <ImCross />
          ) : null}
        </Box>
        <Box onClick={() => handlerPlay(box3, box3State)}>
          {box3State === 1 ? (
            <ImRadioUnchecked />
          ) : box3State === 2 ? (
            <ImCross />
          ) : null}
        </Box>
        <Box onClick={() => handlerPlay(box4, box4State)}>
          {box4State === 1 ? (
            <ImRadioUnchecked />
          ) : box4State === 2 ? (
            <ImCross />
          ) : null}
        </Box>
        <Box onClick={() => handlerPlay(box5, box5State)}>
          {" "}
          {box5State === 1 ? (
            <ImRadioUnchecked />
          ) : box5State === 2 ? (
            <ImCross />
          ) : null}
        </Box>
        <Box onClick={() => handlerPlay(box6, box6State)}>
          {box6State === 1 ? (
            <ImRadioUnchecked />
          ) : box6State === 2 ? (
            <ImCross />
          ) : null}
        </Box>
        <Box onClick={() => handlerPlay(box7, box7State)}>
          {box7State === 1 ? (
            <ImRadioUnchecked />
          ) : box7State === 2 ? (
            <ImCross />
          ) : null}
        </Box>
        <Box onClick={() => handlerPlay(box8, box8State)}>
          {box8State === 1 ? (
            <ImRadioUnchecked />
          ) : box8State === 2 ? (
            <ImCross />
          ) : null}
        </Box>
        <Box onClick={() => handlerPlay(box9, box9State)}>
          {box9State === 1 ? (
            <ImRadioUnchecked />
          ) : box9State === 2 ? (
            <ImCross />
          ) : null}
        </Box>
      </FlexBox>
      {gameOver ? (
        <Winner>
          {winnerPlayer === 1 ? (
            <h1>Winner Player O</h1>
          ) : winnerPlayer === 2 ? (
            <h1>Winner Player X</h1>
          ) : (
            <h1>Winner Player X = O</h1>
          )}
          <button onClick={() => handlerRestart()}>Restart</button>
        </Winner>
      ) : null}
    </div>
  );
}

const FlexBox = styled.div`
  display: grid;
  grid-template-areas: "1 1 1" "1 1 1" "1 1 1";
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const Box = styled.div`
  min-width: 150px;
  min-height: 150px;
  grid-area: "1";
  background-color: blue;
  cursor: pointer;
  border-radius: 10px;
  color: #fff;
  text-align: center;
  padding: 15px;
  font-size: 90px;
`;

const Winner = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  text-align: center;
  padding-top: 100px;
  color: #fff;

  h1 {
    font-size: 40px;
  }
  button {
    padding: 13px 20px;
    cursor: pointer;
    letter-spacing: 2px;
    font-size: 20px;
    border: none;
    border-radius: 3px;
  }
`;
