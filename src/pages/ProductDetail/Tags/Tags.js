import React from 'react';
import './Tags.scss';

const Tags = ({ data }) => {
  const { id, tags } = data;

  return (
    <div className="tags">
      <li key={id} className="hashTag" />
      {tags}
    </div>
  );
};

export default Tags;
