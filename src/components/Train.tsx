import { useState, useEffect } from 'react';

const wheelFrames = [
  "'U'0 0  0 0  0 0  0 0",
  "'U'o O  o O  o O  o O",
  "'U'. o  . o  . o  . o",
  "'U'O o  O o  O o  O o",
];

// each frame: [vertical offset, smoke pattern] — starts as a single dot, grows outward, rises
const smokeFrames = [
  { top: 0,   pattern: "    .                                  " },
  { top: -5,  pattern: "    .  o                                " },
  { top: -10, pattern: "    o   .  o                             " },
  { top: -15, pattern: "    o   .  o  .  O                       " },
  { top: -20, pattern: "    o    .  o  .  o .  O                " },
  { top: -25, pattern: "        o    .  o  .  o .  o  .  o       " },
  { top: -30, pattern: "            .  o  .  o .  o  .  o  .  o " },
];

function TrainCarousel() {
  const [wheelFrame, setWheelFrame] = useState(0);
  const [smokeFrame, setSmokeFrame] = useState(0);

  useEffect(() => {
    const wheelId = setInterval(() => {
      setWheelFrame((f) => (f + 1) % wheelFrames.length);
    }, 200);
    const smokeId = setInterval(() => {
      setSmokeFrame((f) => (f + 1) % smokeFrames.length);
    }, 700);
    return () => {
      clearInterval(wheelId);
      clearInterval(smokeId);
    };
  }, []);

  return (
    <div className="overflow-hidden whitespace-nowrap w-full">
      <pre className="inline-block font-mono text-stone-100 animate-train relative">
{`   
  _||__ ____ ____ ____
 (o)___)}___}}___}}___}
 ${wheelFrames[wheelFrame]}`}
        <span
          className="absolute left-0 whitespace-pre"
          style={{ top: `${smokeFrames[smokeFrame].top}px` }}
        >
          {smokeFrames[smokeFrame].pattern}
        </span>
      </pre>
    </div>
  );
}

export default TrainCarousel;