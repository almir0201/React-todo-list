import React from 'react';
import { FcCheckmark } from 'react-icons/fc';
import { LiaTimesSolid } from 'react-icons/lia';
import { AiOutlineUndo } from 'react-icons/ai';

const PATHS = {
  completeIcon: 'FcCheckmark',
  deleteIcon: 'MLiaTimesSolid',
  revertIcon: 'AiOutlineUndo'
};

export const Todoicon = ({ name, ...props }) => {
  return (
    <svg height="16" width="16">
      <path d={PATHS[name]} />;
    </svg>
  );
};
