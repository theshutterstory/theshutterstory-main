"use client";
import React from "react";
import PhotographerDetail from "../_components/PhotographerDetail";
import PhotographerSuggestionList from "../_components/PhotographerSuggestionList";
import Gallery from "../_components/Gallery";

// import photographer from "../../../../app/_components/tempdata/photographerDetails.json";

const Details = (photographerId) => {
  return (
    <div className="p-5 md:px-10">
      <h2 className="font-bold text-[22px]">Details</h2>

      <div className="grid grid-cols-1 lg:grid-cols-4 ">
        {/* Photographer Detail  */}
        <div className=" col-span-3">
          {/* {photographerId && <PhotographerDetail photographer={photographerId} />} */}
          <PhotographerDetail />
          <Gallery />
        </div>
        {/* photographer Suggestion  */}
        <div>
          <PhotographerSuggestionList />
        </div>
      </div>
    </div>
  );
};

export default Details;
