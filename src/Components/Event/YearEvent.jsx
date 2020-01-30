import React, { Component } from "react";

import { EventUlComponentStyled } from "./YearEvent.style";
import EventItem from "./YearEventItem";

/*
 -company name
 - years active (string)
 - role
 - number of years (int)
 - Color ( this could be a random color picker future)
*/

const timelineData = [
  {
    company: "Cog1",
    city: "San Francisco",
    monthStart: "January",
    monthEnd: "July",
    yearsEmployed: "2015-2015",
    role: "Web Developer",
    yearsNum: 1,
    color: "#ff9704"
  },
  {
    company: "Incentive Networks, Affinion Group",
    city: "San Carlos",
    monthStart: "April",
    monthEnd: "November",
    yearsEmployed: "2016 - 2018",
    role: "Front End Web Engineer",
    yearsNum: 2,
    color: "#56C2F3"
  },
  {
    company: "Postman",
    city: "San Francisco",
    monthStart: "January",
    monthEnd: "January",
    yearsEmployed: "2019 - 2020",
    role: "Front End Web Engineer",
    yearsNum: 1,
    color: "#DD3D01"
  }
];

class EventDate extends Component {
  render() {
    const eventItem = timelineData.map(event => {
      return <EventItem events={event} key={event.company} />;
    });
    return <EventUlComponentStyled>{eventItem}</EventUlComponentStyled>;
  }
}

export default EventDate;
