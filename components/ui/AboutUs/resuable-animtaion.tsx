// "use client";
// import React from "react";
// import { easeInOut, motion } from "framer-motion";

// export const CommonAnimation = ({
//   children,
//   className,
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: 0.3, ease: easeInOut }}
//       className={`common-animation ${className}`}
//     >
//       {children}
//     </motion.div>
//   );
// };

"use client";
import React, { useState } from "react";
import { easeInOut, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const CommonAnimation = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [hasBeenInView, setHasBeenInView] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures the animation triggers only once
  });

  // Update state when component comes into view
  if (inView && !hasBeenInView) {
    setHasBeenInView(true);
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={hasBeenInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.3, ease: easeInOut }}
      className={`common-animation ${className}`}
    >
      {children}
    </motion.div>
  );
};
