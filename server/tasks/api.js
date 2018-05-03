
const rp = require('request-promise-native')

async function fetchMovie(item) {
  const url = `http://api.douban.com/v2/movie/subject/${item.doubanId}`

  const res = await rp(url)
  return res
}

;(async () => {
  let movies = [
    { doubanId: 27021609,
      title: '自觉美丽',
      rate: 6.7,
      poster: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2512993242.jpg' },
    { doubanId: 26953998,
      title: '小戏骨：水浒传',
      rate: 8.1,
      poster: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2518847266.jpg' }
    ]

    movies.map(async movie => {
      let movieData = await fetchMovie(movie)

      try {
        movieData = JSON.parse(movieData)
        console.log(movieData.summary)
      } catch(err) {
        console.log(err)
      }
    })
})()
