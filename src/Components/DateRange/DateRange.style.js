import styles, { css } from "styled-components";

const pxPerYear = 160;
const gridWidth = 160;

export const DateRangeContainer = styles.section`
  display: grid;
  grid-template-column:${pxPerYear}px;
`;

export const DateRangeList = styles.ul`
  position: absolute;
  top: 300px;
  padding: 0 0 0 ${gridWidth}px;
  margin: 0;
  border-top: 1px solid #282828;
  list-style: none;
  font-size: 0;
`;
