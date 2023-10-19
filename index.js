function calculateProportion(total, broken) {
    return broken / total;
  }
  
  let total = 100;
  let broken = 20;
  
  let proportion = calculateProportion(total, broken);
  console.log(proportion); 
  