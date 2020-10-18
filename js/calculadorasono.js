console.log('calculadora debito de sono');

let getSleepHours = day => {
    if (day === 'monday'){
      return 8;
    } else if (day === 'tuesday'){
      return 8;
    } else if (day === 'wednesday'){
      return 8;
    }
  }
  
  console.log(getSleepHours('tuesday'));
  
  let getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday');
  
  
  let getIdealSleepHours = () => {
    const idealHours = 7.5;
    return idealHours * 7;
  }
  
  console.log(getIdealSleepHours());
  console.log(getActualSleepHours());
  
  let calculatesSleepDebt = () => {
      let actualSleepHours = getActualSleepHours();
      let idealSleepHours = getIdealSleepHours();
  
      if (idealSleepHours === actualSleepHours){
        console.log('perfect amount');
      } else if (idealSleepHours > actualSleepHours){
        console.log('take some rest you slept only ' + (idealSleepHours - actualSleepHours) + ' hours');
      } else if (idealSleepHours < actualSleepHours){
        console.log('slept a lot kid, like ' + (idealSleepHours + actualSleepHours) + 'more')
      } else {
        console.log('broke')
      }
  }
  
  calculatesSleepDebt();