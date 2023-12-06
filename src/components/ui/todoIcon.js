import React from 'react';
import { FcCheckmark } from 'react-icons/fc';
import { LiaTimesSolid } from 'react-icons/lia';
import { AiOutlineUndo } from 'react-icons/ai';

export const Todoicon = ({ name, ...props }) => {
  if(name == 'complete'){
    return <FcCheckmark  width={16} height={16} {...props} />
  } 
  if(name == 'delete'){
    return <LiaTimesSolid  width={16} height={16} {...props} />
  }
  return (
      <AiOutlineUndo width={16} height={16} {...props} />
  );
};
