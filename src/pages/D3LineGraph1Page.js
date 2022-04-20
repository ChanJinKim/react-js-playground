import React, { useRef, useEffect, useState } from 'react';
import { select, line, curveBasis } from 'd3';

/**
 * line graph
 * @returns
 */
export default function D3LineGraph1Page() {
  const [data, setData] = useState([24, 30, 45, 70, 26]);
  const svgRef1 = useRef(null);
  const svgRef2 = useRef(null);

  useEffect(() => {
    console.log('11111');
    const svg1 = select(svgRef1.current);
    const svg2 = select(svgRef2.current);

    const myLine1 = line()
      .x((value, index) => index * 50)
      .y(value => 300 - value);

    const myLine2 = line()
      .x((value, index) => index * 50)
      .y(value => 300 - value)
      .curve(curveBasis);

    svg1
      .selectAll('path')
      .data([data])
      .join(enter => enter.append('path'))
      .attr('d', value => myLine1(value))
      .attr('fill', 'none')
      .attr('stroke', 'red');
    svg2
      .selectAll('path')
      .data([data])
      .join(enter => enter.append('path'))
      .attr('d', value => myLine2(value))
      .attr('fill', 'none')
      .attr('stroke', 'blue');
  }, [data]);

  return (
    <>
      <svg
        ref={svgRef1}
        xmlns="http://www.w3.org/2000/svg"
        width="300"
        height="300"
        viewBox="0 0 300 300"
        version="1.1"
      />
      <svg
        ref={svgRef2}
        xmlns="http://www.w3.org/2000/svg"
        width="300"
        height="300"
        viewBox="0 0 300 300"
        version="1.1"
      />
    </>
  );
}
