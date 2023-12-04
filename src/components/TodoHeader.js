import React from 'react';

export const TodoHeader = () => {
  return (
    <nav className="bg-purple-600 text-white">
      <div className="containter mx-auto">
        <div className="flex items-center">
          <a
            href="/"
            className="inline-block px-16 py-4 transition-colors bg-purple-700 hover:bg-purple-500 duration-300">
            Home
          </a>
        </div>
      </div>
    </nav>
  );
};
