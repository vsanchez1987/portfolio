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
    yearsNum: 3,
    eventColor: "#c2e34e"
  },
  {
    id: 1,
    company: "Cog1",
    city: "San Francisco",
    monthStart: "January",
    monthEnd: "July",
    yearsEmployed: "2015-2015",
    role: "Web Developer",
    yearsNum: 1,
    eventColor: "#ff9704"
  },
  {
    id: 2,
    company: "Incentive Networks, Affinion Group",
    city: "San Carlos",
    monthStart: "April",
    monthEnd: "November",
    yearsEmployed: "2016 - 2018",
    role: "Front End Web Engineer",
    yearsNum: 2,
    eventColor: "#56C2F3"
  },
  {
    id: 3,
    company: "Postman",
    city: "San Francisco",
    monthStart: "January",
    monthEnd: "January",
    yearsEmployed: "2019 - 2020",
    role: "Front End Web Engineer",
    yearsNum: 4,
    eventColor: "#DD3D01"
  }
];

class EventDate extends Component {
  render() {
    const eventItem = timelineData.map(event => {
      return <EventItem events={event} key={event.id} />;
    });
    return <EventUlComponentStyled>{eventItem}</EventUlComponentStyled>;
  }
}

export default EventDate;
