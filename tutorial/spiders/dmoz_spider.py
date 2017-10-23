import scrapy

from tutorial.items import DmozItem

class DmozSpider(scrapy.Spider):
    name = "dmoz"
    allowed_domains = ["dmoz.org"]
    start_urls = [
        "http://www.zwdu.com/book/8634/"
    ]

    def parse(self, response):
        for book in response.xpath('//*[@id="info"]'):
          item = DmozItem()
          item['title'] = book.xpath('//*[@id="info"]/h1/text()').extract()[0]
          item['name'] = book.xpath('//*[@id="info"]/p[1]/text()').extract()[0]
          yield item
