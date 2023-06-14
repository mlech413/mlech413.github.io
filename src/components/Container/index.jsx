import React from "react";
import './Container.css';

const Container = ({splash, children}) => {
  return (
    <div className={splash ? 'container-splash' : 'container'}>
      {children}
    </div>
  );
}

export default Container;
