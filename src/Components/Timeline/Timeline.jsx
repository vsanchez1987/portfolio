import React, { Component } from "react";

import { TimelineBackground } from "./Timeline.style";
import DateRange from "../DateRange";
import YearEvent from "../Event";

class Timeline extends Component {
  render() {
    return (
      <TimelineBackground>
        <YearEvent />
        <DateRange />
      </TimelineBackground>
    );
  }
}

export default Timeline;
