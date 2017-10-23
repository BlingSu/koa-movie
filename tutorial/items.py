import scrapy

class DmozItem(scrapy.Item):
  title = scrapy.Field()
  name = scrapy.Field()
