class Kendaraan {
  #engineActive
  constructor(lisencePlate, wheels){
    this.lisencePlate = lisencePlate
    this.wheels = wheels
    this.#engineActive = false
  }

  set engineActive(value){
    if(typeof value === 'boolean'){
      this.#engineActive = value
    }else {
      throw Error('Value harus boolean')
    }
  }

  get engineActive() {
    return this.#engineActive
  }

  engineStart() {
    try {
      if(this.engineActive){
        throw Error("Mesin udah nyala")
      }
      this.engineActive = true
      console.log('ngiikkkkk, brummm!! bruumm!')
    } catch (error) {
      console.error(error.message)
    }
  }

  engineStop() {
    if(this.engineActive){
      console.log('cek, ngeeeeennnnggg.....')
    }else {
      console.log('mesin nya udah mati, masa dimatiin lagi, ngga logic bosss')
    }
  }

  run() {
    if(this.engineActive){
      let gear = 1;
      let speed = 0;
      let overHeat = 0
      const sound = setInterval(() => {
        if(gear % 20 === 0 || speed !== 160){
          gear += 1
        }

        if(speed >= 160){
          speed = 160
        }else if(speed > 0){
          speed *= 2
        }else {
          speed += 10
        }

        if(speed >= 160){
          console.log('ngeeeeeeeennnnnngggggg........!!!!!')
          overHeat += 1
        }else if(speed >= 80){
          console.log('ngguuunggg, nguuuungggggggg')
        }else {
          console.log('ngeeng')
        }

        console.log('\n')

        if(overHeat >= 10){
          console.log('kendaraan OverHeat')
          clearInterval(sound)
        }
      }, 2000)
      
    }else {
      console.log('Mesinnya mati, ya ngga bisa jalan')
    }
  }
}

const motor = new Kendaraan('B 1000 CH', 2)

motor.engineStart()
motor.run()

