// we are here to find out which is suitable no of card within the viewPort

export function slider_responsive() {
  // i will get NO of card according to innerWidth
  const width = window.innerWidth;
if (width < 690) {
    // return no 1
    return 1;
} else if (width <= 1000) {
    return 2;
} else if (width <= 1336) {
    return 3;
  } else {
    return 4;
  }
}
