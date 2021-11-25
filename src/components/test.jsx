import React, { useEffect } from "react";

function test(props) {
  const { items } = props;

  const randomId = (element) => {
    const numberResults = element[Math.floor(Math.random() * element.length)]
    return numberResults
  };
  useEffect(() => {
    console.log(randomId(items));
  }, []);
  return <div></div>;
}

export default test;
