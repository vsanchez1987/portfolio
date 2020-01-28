import styles from "styled-components";

const gridWidth = 160;

export const EventListItem = styles.li`
  display: inline-block;
  position: relative;
  top: -6px;
  width: ${gridWidth}px;
  color: #868686;
  font-size: 11px;
  line-height: 11px;
  text-indent: -12px;

  &:last-child {
    width: ${gridWidth}px;
  }
`;
