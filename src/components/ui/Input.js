import React from 'react';
import { forwardRef } from 'react';

// eslint-disable-next-line react/display-name
export const Input = forwardRef(({ ...props }, ref) => {
  return <input {...props} ref={ref} />;
});
