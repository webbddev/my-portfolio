// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';

// const DURATION = 0.25;
// const STAGGER = 0.025;

// export const FlipWord = ({
//   children,
//   interval,
// }: {
//   children: string;
//   interval: number;
// }) => {
//   const [hovered, setHovered] = useState(false);

//   useEffect(() => {
//     const flipInterval = setInterval(() => {
//       setHovered((prev) => !prev);
//     }, interval);
//     return () => clearInterval(flipInterval);
//   }, [interval]);

//   return (
//     <motion.span
//       animate={hovered ? 'hovered' : 'initial'}
//       className='relative inline-block overflow-hidden whitespace-nowrap'
//       style={{
//         lineHeight: 'inherit',
//       }}
//     >
//       <div>
//         {children.split('').map((letter, index) => (
//           <motion.span
//             key={index}
//             variants={{
//               initial: { y: 0 },
//               hovered: { y: '-100%' },
//             }}
//             transition={{
//               duration: DURATION,
//               ease: 'easeInOut',
//               delay: STAGGER * index,
//             }}
//             className='inline-block'
//           >
//             {letter}
//           </motion.span>
//         ))}
//       </div>
//       <div className='absolute inset-0'>
//         {children.split('').map((letter, index) => (
//           <motion.span
//             key={index}
//             variants={{
//               initial: { y: '100%' },
//               hovered: { y: 0 },
//             }}
//             transition={{
//               duration: DURATION,
//               ease: 'easeInOut',
//               delay: STAGGER * index,
//             }}
//             className='inline-block'
//           >
//             {letter}
//           </motion.span>
//         ))}
//       </div>
//     </motion.span>
//   );
// };

// export default FlipWord;

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const DURATION = 0.3;
// const STAGGER = 0.025;
const STAGGER = 0.15;

const FlipWord = ({
  children,
  interval,
}: {
  children: string;
  interval?: number;
}) => {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (interval) {
      const flipInterval = setInterval(() => {
        setHovered((prev) => !prev);
      }, interval);
      return () => clearInterval(flipInterval);
    }
  }, [interval]);

  return (
    <motion.span
      animate={hovered ? 'hovered' : 'initial'}
      className='relative inline-flex overflow-hidden align-baseline'
      style={{ lineHeight: 'inherit' }}
      onMouseEnter={() => !interval && setHovered(true)}
      onMouseLeave={() => !interval && setHovered(false)}
    >
      <div className='inline-flex'>
        {children.split('').map((letter, index) => (
          <motion.span
            key={index}
            variants={{
              initial: { y: 0 },
              hovered: { y: '-100%' },
            }}
            transition={{
              duration: DURATION,
              ease: 'easeInOut',
              delay: STAGGER * index,
            }}
            className='inline-block'
          >
            {letter}
          </motion.span>
        ))}
      </div>
      <div className='absolute inset-0 inline-flex'>
        {children.split('').map((letter, index) => (
          <motion.span
            key={index}
            variants={{
              initial: { y: '100%' },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: 'easeInOut',
              delay: STAGGER * index,
            }}
            className='inline-block'
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </motion.span>
  );
};

export default FlipWord;
