import { useState, useEffect } from "react";
export default function CustomResponsive(sm, md, xs) {
  const [windowWidth, setWindowSize] = useState(window.screen.width);
  const [res, setRes] = useState(() => {
    if (windowWidth < 768) {
      return sm;
    } else if (windowWidth >= 768 && windowWidth < 992) {
      return md;
    } else if (windowWidth >= 992) {
      return xs;
    }
  });
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize(() => window.screen.width);
      if (windowWidth < 768) {
        setRes(sm);
      } else if (windowWidth >= 768 && windowWidth < 992) {
        setRes(md);
      } else if (windowWidth >= 992) {
        setRes(xs);
      }
    });
     // eslint-disable-next-line
  }, [windowWidth]);

  return res;
}
