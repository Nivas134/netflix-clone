import React from "react";
import { BrowserContainer } from "../containers/browse";
import { useContent } from "../hooks";
import selectionFilter from "../utils/selection-filter";

function Browse() {
  const { series } = useContent("series");
  const { films } = useContent("films");
  const slides = selectionFilter({ series, films });
  // console.log("series", series);
  // console.log("films", films);
  // console.log("slides", slides);

  return (
    <div>
      <BrowserContainer slides={slides} />
    </div>
  );
}

export default Browse;
