import React from "react";

import { EventListItem } from "./EventDate.style";

const yearsActive = [
  {
    year: "2012"
  },
  {
    year: "2013"
  },
  {
    year: "2014"
  },
  {
    year: "2015"
  },
  {
    year: "2016"
  },
  {
    year: "2017"
  },
  {
    year: "2018"
  },
  {
    year: "2019"
  },
  {
    year: "2020"
  }
];

const EventDate = () => {
  return yearsActive.map(years => {
    return <EventListItem key={years.year}>{years.year}</EventListItem>;
  });
};

export default EventDate;
