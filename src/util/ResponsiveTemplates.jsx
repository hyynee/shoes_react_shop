import React, { useEffect, useState } from "react";
/*
    <ResponsiveTemplate component={component} mobileComponent={MobileComponent} />

    props: 
    component
    mobileComponent

*/

export default function ResponsiveTemplates(props) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  let Component = props.component;
  if (screenWidth <= 768) {
    Component = props.mobileComponent;
  }
  useEffect(() => {
    window.onload = () => {
      setScreenWidth(window.innerWidth);
    };
    window.onresize = () => {
      setScreenWidth(window.innerWidth);
    };
    return () => {
      window.removeEventListener("onload", window.onload);
      window.removeEventListener("resize", window.onresize);
    };
  }, []);
  return <Component></Component>;
}
