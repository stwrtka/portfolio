import { useState, useEffect } from 'react';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { faPaintbrush } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const wheelFrames = [
  "'U'0 0  0 0  0 0  0 0",
  "'U'o O  o O  o O  o O",
  "'U'. o  . o  . o  . o",
  "'U'O o  O o  O o  O o",
];

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
    }, 300);
    return () => {
      clearInterval(wheelId);
      clearInterval(smokeId);
    };
  }, []);

  return (
    <div className="overflow-hidden whitespace-nowrap w-full">
      <div className='flex flex-row animate-train w-max'>
      <pre className="inline-block text-stone-100 relative">
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

        <div className='pt-16 pl-5 flex flex-row gap-5'>
         <div className='flex flex-row gap-7'>
          <div className='flex flex-row gap-2'>
            <a href='https://www.linkedin.com/in/khadijastewart/' target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
            <p className='text-sm'>LinkedIn</p>
          </div>
          <div className='flex flex-row gap-2'>
            <a href='https://149hst.itch.io/' target="_blank" rel="noopener noreferrer" aria-label="itch.io"><FontAwesomeIcon icon={faGamepad} /></a>
            <p className='text-sm'>Itch.io</p>
          </div>
          <div className='flex flex-row gap-2'>
            <a href='https://www.instagram.com/149hst/' target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FontAwesomeIcon icon={faPaintbrush} /></a>
            <p className='text-sm'>Design</p>
          </div>
          <div className='flex flex-row gap-2'>
            <a href='mailto:k.stewxrt@gmail.com'><FontAwesomeIcon icon={faEnvelope} /></a>
            <p className='text-sm'>Email</p>
          </div>
          <div className='flex flex-row gap-2'>
            <a href='https://github.com/stwrtka'><FontAwesomeIcon icon={faGithub} /></a>
            <p className='text-sm'>GitHub</p>
          </div>
        </div>
        </div>
      </div>
    </div>
    
  );
}

export default TrainCarousel;