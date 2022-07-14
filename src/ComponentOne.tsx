import React from 'react';

type Props = {
  value?: string;
};

const ComponentOne = ({ value }: Props) => {
  return <div>ComponentOne - {value}</div>;
};

export default ComponentOne;
