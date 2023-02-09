import React, { FC } from 'react';
import './error.scss';

interface Props {
  msg: string;
}

const Error: FC<Props> = ({ msg }) => {
  return (
    <div className="error">
      <span>:( Ops!</span>
      Error: {msg}
    </div>
  );
};

export default Error;
