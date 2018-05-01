// const arrow = function(param) {}

// const arrow = (param) => {}

// const arrow = param => {}

// const arrow = param => console.log(param)

// const arrow = param => ({param: param})

// const arrow = (param1, param2) => {}

// // {id: 1, movie: xxx}
// const arrow = ({id, movie}) => console.log(id, movie)


const luck = {
  id: 2,
  say: function() {
    setTimeout(function() {
      console.log('id', this.id)
    }, 50)
  },
  sayWithThis: function() {
    let that = this

    setTimeout(function() {
      console.log('this id', that.id)
    }, 500)
  },
  sayWithArrow: function() {
    setTimeout(() => {
      console.log('arrow id', this.id)
    }, 1500)
  },
  sayWithGlobalArrow: () => {
    setTimeout(() => {
      console.log('globalArrow id', this.id)
    }, 2000)
  }
}


luck.say()
luck.sayWithThis()
luck.sayWithArrow()
luck.sayWithGlobalArrow()
