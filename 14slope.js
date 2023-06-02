var slope = (x1, y1, x2, y2) => {
  console.log(
    `Slope between point (${y2},${y1}) and point (${x2},${x1}) is ${
      (y2 - y1) / (x2 - x1)
    }`
  ); // Slope between point (10,2) and point (6,2) is 2
};

slope(2, 2, 6, 10);
