export const getProgressColor = (percentage) => {
    if (percentage >= 70) {
      return '#21D07A';
    } else if (percentage >= 40) {
      return '#D2D530';
    } else {
      return '#DB2360';
    }
  };
  
  export const formatDate = (rawDate) => {
    if (!rawDate) {
      return "Date inconnue";
    }
  
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(rawDate).toLocaleDateString('fr-FR', options);
  };
  