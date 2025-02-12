import React, { Component } from "react";

class EmojiVoting extends Component {
  constructor(props) {
    super(props);
    
    const savedVotes = JSON.parse(localStorage.getItem("emojiVotes")) || {
      "😀": 0,
      "😊": 0,
      "😎": 0,
      "🤩": 0,
      "😍": 0,
    };

    this.state = {
      votes: savedVotes,
      winner: null,
    };
  }

  handleVote = (emoji) => {
    this.setState(
      (prevState) => {
        const newVotes = { ...prevState.votes, [emoji]: prevState.votes[emoji] + 1 };
        localStorage.setItem("emojiVotes", JSON.stringify(newVotes));
        return { votes: newVotes };
      }
    );
  };

  showResults = () => {
    const { votes } = this.state;
    const winner = Object.keys(votes).reduce((a, b) => (votes[a] > votes[b] ? a : b));
    this.setState({ winner });
  };

  clearResults = () => {
    const resetVotes = { "😀": 0, "😊": 0, "😎": 0, "🤩": 0, "😍": 0 };
    localStorage.setItem("emojiVotes", JSON.stringify(resetVotes));
    this.setState({ votes: resetVotes, winner: null });
  };

  render() {
    return (
      <div style={{ textAlign: "center", fontSize: "24px" }}>
        <h2>Голосування за найкращий смайлик</h2>
        <div>
          {Object.keys(this.state.votes).map((emoji) => (
            <button 
              key={emoji} 
              onClick={() => this.handleVote(emoji)}
              style={{ fontSize: "32px", cursor: 'pointer', margin: "10px" }}
            >
              {emoji} {this.state.votes[emoji]}
            </button>
          ))}
        </div>
        <button onClick={this.showResults} style={{ margin: "10px", padding: '10px 20px', cursor: 'pointer', fontSize: "20px" }}>Show Results</button>
        <button onClick={this.clearResults} style={{ margin: "10px", padding: '10px 20px', cursor: 'pointer', fontSize: "20px" }}>Clear Results</button>
        {this.state.winner && (
          <div>
            <h3>Переможець:</h3>
            <span style={{ fontSize: "40px" }}>{this.state.winner}</span>
          </div>
        )}
      </div>
    );
  }
}

export default EmojiVoting;
