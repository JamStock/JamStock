import mojito
import pprint
import json

key = "PSqY0usw7Qno1EZq5htoLFGSMghmflV4sSOK"
secret = "tPzkiC4pW43WHREcTXm7rPBRodtAWioxndwBTilX6E3uB1ef6s66jcTyc/dvBG70jrByEWE9uZCG0zbT+XhGydFjJBWgw+huQqRvpl1QYFZiF0I/C1sSfBxXhPI7YhZY7eb04A0E0TAsAvhP4DuA8INfVfYgvxsrMr9UVz3UsWk6yAxYpmE="
acc_no = "50087039-01"
broker = mojito.KoreaInvestment(api_key=key, api_secret=secret, acc_no=acc_no)


# symbols = broker.fetch_symbols()
symbols = broker.fetch_kospi_symbols()
stockCode = symbols['단축코드']
stockName = symbols['한글명']

kospiData = {}
kosdaqData = {}
stockData = {}

for i in range(len(stockCode)):
    key = stockName[i]
    # value = [stockCode[i], stockName[i]]
    value = stockCode[i]
    kospiData[key] = value

#코스피 종목 코드
stockData['kospi'] = kospiData

stockCode = 0
stockName = 0

symbols = broker.fetch_kosdaq_symbols()

stockCode = symbols['단축코드']
stockName = symbols['한글명']

for i in range(len(stockCode)):
    key = stockName[i]
    # value = [stockCode[i], stockName[i]]
    value = stockCode[i]
    kosdaqData[key] = value

#코스닥 종목 코드
stockData['kosdaq'] = kosdaqData

# print(stockData)

file_path = './stockInfo.json'
with open(file_path, 'w', encoding='utf-8') as f:
    json.dump(symbols.head().to_json(), f, ensure_ascii=False)