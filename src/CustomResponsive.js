export default function CustomResponsive(sm, md, xs) {
  let result;
  if (window.screen.width < 768) {
    result = sm;
  } else if (window.screen.width >= 768 && window.screen.width < 992) {
    result = md;
  } else if (window.screen.width >= 992) {
    result = xs;
  }
  window.onresize = () => {
    console.log(`Resize ${result}`)
    if (window.screen.width < 768) {
      result = sm;
    } else if (window.screen.width >= 768 && window.screen.width < 992) {
      result = md;
    } else if (window.screen.width >= 992) {
      result = xs;
    }
  };

  return result;
}
