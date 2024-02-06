import { motion } from 'framer-motion';
import React from 'react'
import { twMerge } from 'tailwind-merge';

type buttonProps = {
  className?: string;
  children: React.ReactNode;
  onClick: () => void;
}

export const Button = (props: buttonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={props.onClick}
      className={twMerge('bg-customSecondary rounded-full text-customPrimary text-center py-2 px-4 min-w-24', props.className)}
    >
      { props.children }
    </motion.button>
  )
}
