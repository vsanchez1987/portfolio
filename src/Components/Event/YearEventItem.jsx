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

const YearEventItem = ({ events: { yearsEmployed, company, role } }) => {
  return (
    <YearListItem>
      <YearStyle>{yearsEmployed}</YearStyle>
      <CompanyStyle>{company}</CompanyStyle>
      <RoleStyle>{role}</RoleStyle>
    </YearListItem>
  );
};

export default YearEventItem;
