import styles, { css } from "styled-components";

const yearsLength = 160;
let beforeSeperation = -32;
let afterSeperation = 16;

const listItemDefault = {
  default: css`
    &:before {
      position: absolute;
      left: 0;
      bottom: ${beforeSeperation}px;
      height: 8px;
      border-radius: 8px;
      width: ${props =>
        props.yearsNum
          ? props.yearsNum * yearsLength + "px"
          : yearsLength + "px"};
      content: "";
    }
    position: relative;
    bottom: ${props =>
      props.id ? (afterSeperation += 16) + "px" : (afterSeperation = 0) + "px"};
    width: ${props =>
      props.yearsNum
        ? props.yearsNum * yearsLength + "px"
        : yearsLength + "px"};
    display: inline-block;
  `
};

const headerDefaults = {
  default: css`
    margin: 0 0 1px 0;
    font-weight: normal;
    font-size: 11px;
  `
};

export const YearListItem = styles.li`

  ${listItemDefault.default}
    &:before{
      background: ${props => (props.eventColor ? props.eventColor : "#e74c3c")};
    }

`;

export const YearStyle = styles.h2`
  ${headerDefaults.default}
  
  color: #777;
  text-transform: uppercase;
`;

export const CompanyStyle = styles.h3`
  ${headerDefaults.default}
  color: #FF9704;
`;

export const RoleStyle = styles.h4`
  ${headerDefaults.default}
  color: #fff;
  font-style: italic;
`;
