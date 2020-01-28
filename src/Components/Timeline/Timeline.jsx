import React, { Component } from "react";

import { TimelineBackground } from "./Timeline.style";
import DateRange from "../DateRange";

class Timeline extends Component {
  render() {
    return (
      <TimelineBackground>
        <DateRange />
      </TimelineBackground>
    );
  }
}

export default Timeline;
