const mongoose = require('mongoose')
const db = 'mongodb://localhost/douban-trailer'

mongoose.Promise = global.Promise

exports.connect = () => {
  let maxConnectTimes = 0

  return new Promise((resolve, reject) => {
    if (process.env.NODE_ENV !== 'production') {
      mongoose.set('debug', true)
    }
    mongoose.connect(db)

    mongoose.connection.on('disconnected', () => {
      maxConnectTimes++

      if (maxConnectTimes < 5) {
        mongoose.connect(db)
      } else {
        throw new Error(`数据库有毒!!!`)
      }
    })

    mongoose.connection.on('error', err => {
      maxConnectTimes++

      if (maxConnectTimes < 5) {
        mongoose.connect(db)
      } else {
        throw new Error(`数据库有毒!!!`)
      }
    })

    mongoose.connection.once('open', () => {
      const Dog = mongoose.model('Dog', {
        name: String,
      })
      const doga = new Dog({name: '阿尔法'})

      doga.save().then(() => {
        console.log(`dog save ok!!!`)
      })

      resolve()
      console.log(`MongDB connected successfully !!!`)
    })
  })
}