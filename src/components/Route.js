import React, { useState, useEffect } from "react";

const Route = ({ path, children }) => {
  const [currentPath, setcurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      console.log("Location Change");
      setcurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", onLocationChange);

    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);

  const showContent = currentPath === path ? children : null;

  return showContent;
};

export default Route;
