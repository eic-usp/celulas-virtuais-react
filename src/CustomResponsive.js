export default function CustomResponsive(sm, md, xs) {
  if (window.screen.width < 768) {
    return sm;
  } else if (window.screen.width >= 768 && window.screen.width < 992) {
    return md;
  } else if (window.screen.width >= 992 && window.screen.width) {
    return xs;
  }
}

