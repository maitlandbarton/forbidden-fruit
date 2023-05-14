import React from "react";

function SpinningText() {
  return (
    <div>
      <svg
        className="animate-spinningText"
        width="340" height="340" viewBox="0 0 400 400"
      >
        <defs>
          <path
            id="circle"
            d="M340 170C340 263.888 263.888 340 170 340C76.1116 340 0 263.888 0 170C0 76.1116 76.1116 0 170 0C263.888 0 340 76.1116 340 170Z"
          ></path>
        </defs>
        <text className="text-2xl">
          <textPath xlinkHref="#circle">
            FORBIDDEN FRUIT • FORBIDDEN FRUIT • FORBIDDEN FRUIT • FORBIDDEN FRUIT •
            </textPath>
        </text>
      </svg>
    </div>
  );
}

<svg width="340" height="340" viewBox="0 0 340 340" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M340 170C340 263.888 263.888 340 170 340C76.1116 340 0 263.888 0 170C0 76.1116 76.1116 0 170 0C263.888 0 340 76.1116 340 170Z" fill="#D9D9D9"/>
</svg>


export default SpinningText;
