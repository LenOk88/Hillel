import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "./Button";

const Heading = styled.h1`
  color: darkblue;
  text-align: center;
`;

const EmojiContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
`;

const Result = styled.div`
  margin-top: 20px;
  font-size: 24px;
  font-weight: bold;
  color: darkgreen;
  text-align: center;
`;

const EmojiVoting = () => {
  const initialEmojis = JSON.parse(localStorage.getItem("votes")) || [
    { id: 1, symbol: "😀", votes: 0 },
    { id: 2, symbol: "😊", votes: 0 },
    { id: 3, symbol: "😎", votes: 0 },
    { id: 4, symbol: "🤩", votes: 0 },
    { id: 5, symbol: "😍", votes: 0 },
  ];

  const [emojis, setEmojis] = useState(initialEmojis);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    localStorage.setItem("votes", JSON.stringify(emojis));
  }, [emojis]);

  const handleVote = (id) => {
    setEmojis((prevEmojis) =>
      prevEmojis.map((emoji) =>
        emoji.id === id ? { ...emoji, votes: emoji.votes + 1 } : emoji
      )
    );
  };

  const showResults = () => {
    const winnerEmoji = emojis.reduce((prev, current) =>
      prev.votes > current.votes ? prev : current
    );
    setWinner(winnerEmoji);
  };

  const clearResults = () => {
    localStorage.removeItem("votes");
    setEmojis(emojis.map((emoji) => ({ ...emoji, votes: 0 })));
    setWinner(null);
  };

  return (
    <div>
      <Heading>Голосування за найкращий смайлик</Heading>
      
      <EmojiContainer>
        {emojis.map((emoji) => (
          <Button key={emoji.id} onClick={() => handleVote(emoji.id)}>
            {emoji.symbol} {emoji.votes}
          </Button>
        ))}
      </EmojiContainer>

      <ButtonContainer>
        <Button onClick={showResults}>Show Results</Button>
        <Button onClick={clearResults}>Clear Results</Button>
      </ButtonContainer>

      {winner && (
        <Result>
          <h3>🏆 Переможець:</h3> 
          <h2>{winner.symbol}</h2>
           Кількість голосів: {winner.votes}
        </Result>
      )}
    </div>
  );
};

export default EmojiVoting;
