export const getProgressColor = (percentage) => {
    if (percentage >= 70) {
      return '#21D07A';
    } else if (percentage >= 40) {
      return '#D2D530';
    } else {
      return '#DB2360';
    }
  };
  