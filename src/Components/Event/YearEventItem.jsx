import React from "react";
import {
  YearListItem,
  YearStyle,
  CompanyStyle,
  RoleStyle
} from "./YearEventItem.style";

/*
    company: "Postman",
    city: "San Francisco",
    monthStart: "January",
    monthEnd: "January",
    yearsEmployed: "2019 - 2020",
    role: "Front End Web Engineer",
    yearsNum: 1,
    color: "#DD3D01"
 */

const YearEventItem = props => {
  console.log(props);
  return this.props.timelineData.map(timeEvent => {
    return (
      <YearListItem>
        <YearStyle>{timeEvent.yearsEmployed}</YearStyle>
        <CompanyStyle>{timeEvent.company}</CompanyStyle>
        <RoleStyle>{timeEvent.role}</RoleStyle>
      </YearListItem>
    );
  });
};

export default YearEventItem;
