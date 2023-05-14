import { useSpring, animated } from "react-spring";

function SpinningText() {
  return (
    <svg viewBox="0 0 400 400" width="400" height="400">
      <defs>
        <path
          id="circle"
          d="
      M 100, 100
        m -80, 0
        a 80,80 0 1,1 160,0
        a 80,80 0 1,1 -160,0"
        />
      </defs>
      <animated.text font-size="23.4">
        <textPath
          xlinkHref="#circle"
          startOffset={springProps.offset}
          className="animate-rotatingText"
        >
          FORBIDDEN FRUIT • FORBIDDEN FRUIT • FORBIDDEN FRUIT •
        </textPath>
      </animated.text>
    </svg>
  );
}
