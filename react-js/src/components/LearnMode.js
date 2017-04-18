import React from 'react';
import './LearnMode.css';

class LearnMode extends React.Component {
  render() {
    return (
      <div className="LearnMode">
        <h1>{this.props.terms[0].word}</h1>
        <form>
          <input className="LearnMode-input" type="text" />
          <button className="LearnMode-submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default LearnMode;
