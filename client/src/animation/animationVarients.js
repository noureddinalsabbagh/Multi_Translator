export const fadeInVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export const inputLeftVariants = {
  hidden: {
    x: '-50vw',
  },
  visible: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 50,
    },
  },
};

export const inputRightVariants = {
  hidden: {
    x: '50vw',
  },
  visible: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 50,
    },
  },
};

export const slideUpVariants = {
  hidden: {
    y: '50vh',
  },
  visible: {
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 50,
    },
  },
};

export const scaleFrames = {
  hover: {
    scale: [1, 1.5, 1, 1.5, 1, 1.5, 1],
  },
};

export const slidDown = {
  hidden: {
    y: '-50vh',
  },
  visible: {
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 30,
    },
  },
};
