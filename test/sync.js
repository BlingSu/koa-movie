
const doSync = (sth,time) => new Promise(resolve => {
  setTimeout(() => {
    console.log(`${sth} 用了 ${time} 毫秒`)
    resolve()
  }, time)
})

const doAsync = (sth,time, cb) => {
  setTimeout(() => {
    console.log(`${sth} 用了 ${time} 毫秒`)
    cb && cb()
  }, time)
}

const doElse = (sth) => { console.log(sth) }

const angelasu = {doSync, doAsync}
const Gril = {doSync, doAsync, doElse}

;(async () => {
  await angelasu.doSync(`angelasu 刷牙`, 1000)
  console.log(`干等。。啥都没干`)
  await Gril.doSync('gril 洗澡', 2000)
  Gril.doElse(`gril做别的事情`)




  console.log(`case 3: 有人来门口按通知开关`)
  angelasu.doAsync('angelasu 刷牙', 1000, () => {
    console.log(`卫生间通知gril来洗澡`)
    Gril.doAsync(`洗澡`, 2000)
  })
  Gril.doElse(`gril做别的事情`)
})()
