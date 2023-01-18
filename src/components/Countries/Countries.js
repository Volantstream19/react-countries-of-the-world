import React from 'react';

export default function Countries({ name }) {
  return (
    <div className="country-handler">
      <div className="country-name">{name}</div>
    </div>
  );
}
