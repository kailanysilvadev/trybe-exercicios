// Requisito 1

const turnOnOffCar = (motorCar) => {
  return (motorCar === 'off') ? motorCar = 'desligando motor' : motorCar = 'ligando motor'
};

console.log(turnOnOffCar('on'))