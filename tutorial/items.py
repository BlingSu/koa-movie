import scrapy

class DmozItem(scrapy.Item):
  id = scrapy.Field()
  name = scrapy.Field()
  author = scrapy.Field()
  images = scrapy.Field()
  ratings = scrapy.Field()
  wordcount = scrapy.Field()
  type = scrapy.Field()
  intro = scrapy.Field()
  serialize = scrapy.Field()
  like = scrapy.Field()

