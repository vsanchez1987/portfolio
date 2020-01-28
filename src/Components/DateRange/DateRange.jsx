import React from "react";
import EventDate from "./EventDate";

import { DateRangeContainer, DateRangeList } from "./DateRange.style";

const DateRange = () => {
  return (
    <DateRangeContainer>
      <DateRangeList>
        <EventDate />
      </DateRangeList>
    </DateRangeContainer>
  );
};

export default DateRange;
