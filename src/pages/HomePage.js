import { useSpring, animated } from "react-spring";

function HomePage() {
  const springProps = useSpring({
    from: { offset: "25%" },
    to: { offset: "125%" },
    loop: true,
    config: { duration: 5000 },
  });

  return (
    <div>
      <h1 className="text-slate-700 text-6xl">THIS IS THE HOME PAGE</h1>
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
        <animated.text font-size="17">
          <textPath xlinkHref="#circle" startOffset={springProps.offset}>
            FORBIDDEN FRUIT • FORBIDDEN FRUIT • FORBIDDEN FRUIT •
          </textPath>
        </animated.text>
      </svg>
    </div>
  );
}

export default HomePage;
