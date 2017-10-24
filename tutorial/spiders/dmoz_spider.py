import scrapy
import random
import math
import re
import url

from tutorial.items import DmozItem

class DmozSpider(scrapy.Spider):
    name = "dmoz"
    allowed_domains = ["dmoz.org"]

    start_urls = url.url
    def parse(self, response):
        print self
        for book in response.xpath('//*[@id="wrapper"]/div[4]'):
          item = DmozItem()
          item['id'] = re.findall(r"\d+\.?\d*", response.url)[0]
          item['name'] = book.xpath('//*[@id="info"]/h1/text()').extract()[0]
          item['author'] = book.xpath('//*[@id="info"]/p[1]/text()').extract()[0][7:9]
          item['images'] = book.xpath('//*[@id="fmimg"]/img/@src').extract()[0]
          item['ratings'] = round(random.random() * 2 + 3, 1)
          item['wordcount'] = round(random.random() * 200 + 100, 2)
          item['type'] = book.xpath('//*[@id="wrapper"]/div[3]/div[1]/a[2]/text()').extract()[0][0:2]
          item['intro'] = book.xpath('//*[@id="intro"]/p[1]/text()').extract()[0]
          item['serialize'] = book.xpath('//*[@id="info"]/p[2]/text()').extract()[0][7:9]
          item['like'] = str(int(math.floor(random.random() * (150 - 1) + 1))) + '-' + str(int(math.floor(random.random() * (150 - 1) + 1))) + '-' + str(int(math.floor(random.random() * (150 - 1) + 1)))
          yield item
