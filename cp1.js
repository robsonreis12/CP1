function microondas(tempo, comida) {
    if (comida === 'pipoca') {
      if (tempo > 20 && tempo <= 29) {
        return 'comida queimou'
      } else if (tempo < 10) {
        return 'tempo insuficiente'
      } else if (tempo >= 30) {
        return 'kabumm'
      } else {
        return 'prato pronto bom apetite!!!' 
      }
    }
  }
  
  console.log(microondas(1, 'pipoca'))
  console.log(microondas(35, 'pipoca'))
  console.log(microondas(25, 'pipoca'))
  console.log(microondas(12, 'pipoca'))