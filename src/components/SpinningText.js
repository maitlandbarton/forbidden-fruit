import React from "react";
import peach from "../images/peach.png";

function SpinningText() {
  return (
    <div
      className="bg-contain bg-no-repeat bg-center custom-font"
      style={{ backgroundImage: `url(${peach})` }}
    >
      <div className="flex overflow-hidden animate-spinningText w-auto md:w-1/2 mx-auto">
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <defs>
            <path
              id="circle"
              d="
                M 50, 50
                m -37, 0
                a 37,37 0 1,1 74,0
                a 37,37 0 1,1 -74,0"
            ></path>
          </defs>
          <text>
            <textPath xlinkHref="#circle" className="text-60-5 font-bold">
              <tspan style={{ fill: "navy" }}>
                forbidden fruit • forbidden fruit • berlin •{" "}
              </tspan>
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
}

export default SpinningText;
