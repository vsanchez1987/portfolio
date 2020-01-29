import styles, { css } from "styled-components";

const yearsLength = 160;

const listItemDefault = {
  default: css`
    &:before {
      position: absolute;
      left: 0;
      bottom: -36px;
      height: 8px;
      border-radius: 8px;
      width: ${yearsLength}px;
      content: "";
    }
    position: relative;
    width: ${yearsLength}px;
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
  // &:before {
  //   position: absolute;
  //   left: 0;
  //   bottom: -36px;
  //   height: 8px;
  //   border-radius: 8px;
  //   content: "";
  //   background: #ff9704;
  // }
  ${listItemDefault.default}
    &:before{
      background: #ff9704;
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
