import React from 'react';
import { Link } from 'react-router-dom';

/**
 * main
 * @returns
 */
export default function MainPage() {
  return (
    <>
      <h1>List</h1>
      <ul>
        <li>
          <Link to="/d3-circle-1">D3 circle 1</Link>
        </li>
        <li>
          <Link to="/d3-line-graph-1">D3 line graph 1</Link>
        </li>
      </ul>
    </>
  );
}
