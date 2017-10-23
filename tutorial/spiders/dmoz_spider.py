import scrapy

from tutorial.items import DmozItem

class DmozSpider(scrapy.Spider):
    name = "dmoz"
    allowed_domains = ["dmoz.org"]
    start_urls = [
        'http://www.zwdu.com/book/8634/'
    ]

    def parse(self, response):
        titles = response.xpath('//div/h1/text()').extract()
        for title in titles:
          item = DmozItem()
          item['title'] = title
          yield item
