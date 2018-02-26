import React from 'react';
import './LearnMode.css';

export default class LearnMode extends React.Component {
  render() {
    return (
      <div className="LearnMode">
        <h1 className="LearnMode-prompt">{this.props.terms[0].word}</h1>
        <form className="LearnMode-form">
          <input autoFocus={true} className="LearnMode-input" type="text" />
          <button className="LearnMode-submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
