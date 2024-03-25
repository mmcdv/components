import { motion } from 'framer-motion';

const toggleVariants = {
  opened: {
    rotate: 90, 
    scaleX: 1 
  },
  closed: {
    rotate: 0, 
    scaleX: 1
  },
};

export default function AccordionToggle({ isOpen }) {
  return (
    <svg
      width="18"
      height="22"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.line
        x1="2"
        y1="11.5"
        x2="20"
        y2="11.5"
        stroke="#f9f9f9"
        strokeWidth="2"
        strokeLinecap="round"
        initial={false}
        animate={isOpen ? "opened" : "closed"}
        variants={{
          closed: { opacity: 1 },
          opened: { opacity: 1 },
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.line
        x1="11"
        y1="2"
        x2="11"
        y2="20"
        stroke="#f9f9f9"
        strokeWidth="2"
        strokeLinecap="round"
        initial={false}
        animate={isOpen ? "opened" : "closed"}
        variants={toggleVariants}
        transition={{ duration: 0.3 }}
      />
    </svg>
  );
}
