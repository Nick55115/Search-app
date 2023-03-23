import React from 'react';
import './Results.css'

const Results = (props) => {
  const { results } = props;

  return (
      <div className="results">
        <div className={`${results.length >= 1 ? 'line' : ''}`} />
        {results.map((item, index) => (
          <div className="resultItem" key={index}>
            <h3 className="title">{item.title}</h3>
            <span className="description">{item.description}</span>
          </div>
        ))}
      </div>
  );
}

export default Results;
