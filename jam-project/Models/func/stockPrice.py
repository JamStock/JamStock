from pykis import *
import dotenv
import mojito;
import json
from flask import Flask, jsonify, request
import os
import json
from prettytable import PrettyTable
import requests

dotenv_file = dotenv.find_dotenv()
dotenv.load_dotenv(dotenv_file)

key = os.environ['APIKey']
secret = os.environ['APISecret']
acc_no = os.environ['APIAccNo']

class myObject:
    def __init__(self):
        self.data = {}
    def __str__(self):
        return str(self.data)

app = Flask(__name__)

kis = PyKis(
    # 앱 키  예) Pa0knAM6JLAjIa93Miajz7ykJIXXXXXXXXXX
    appkey=key,
    # 앱 시크릿  예) V9J3YGPE5q2ZRG5EgqnLHn7XqbJjzwXcNpvY . . .
    appsecret=secret,
    # 가상 계좌 여부
    virtual_account=True,
    # 실시간 조회 비활성화
    realtime=False
)

#코스피, 코스닥 종목 검색 코드
# for market, stocks in kis.market.stock_search("에너지").items():
#     print(f' - - - {market} - - - ')
#     for stock in stocks:
#         print(stock.mksc_shrn_iscd, stock.hts_kor_isnm)



############ 주식 현재가 출력 #########
@app.route('/stock/stockPrice', methods=['POST'])
def post_stockPrice():
    my_object = myObject()
    print("서버 동작")

    data = request.get_json()  # POST 요청으로부터 JSON 데이터를 가져옴
    code = data.get('code')
    print("body: ", code)

    stock = kis.stock(code)
    price = stock.price()

    key = stock.name
    value = {
        'code': stock.code, #종목코드
        'name': stock.name, #종목이름
        'prpr': price.stck_prpr, #종목 현재가
    }
    my_object.data[key] = value

    data = my_object.data[key]
    return jsonify(data)
#######################################################


############ 주식 호가 출력 #########
@app.route('/stock/buySell', methods=['POST'])
def post_buySell():
    my_object = myObject()
    print("서버 동작")

    data = request.get_json()  # POST 요청으로부터 JSON 데이터를 가져옴
    code = data.get('code')
    print("body: ", code)

    stock = kis.stock(code)
    price = stock.price()
    askp = stock.asking_price()

    sellP = []
    sellC = []
    buyP = []
    buyC = []

    for i in range(9, -1, -1):
        print(f'SELL {i+1:3d}: {askp.askp[i]:8d}원 {askp.askp_rsqn[i]:8d}주')
        sellP.append(askp.askp[i])
        sellC.append(askp.askp_rsqn[i])
        
    for i in range(10):
        print(f'BUY  {i+1:3d}: {askp.bidp[i]:8d}원 {askp.bidp_rsqn[i]:8d}주')
        buyP.append(askp.bidp[i])
        buyC.append(askp.bidp_rsqn[i])

    key = stock.name
    value = {
        'code': stock.code, #종목코드
        'name': stock.name, #종목이름
        'prpr': price.stck_prpr, #종목 현재가
        'lwpr': price.stck_lwpr, #종목 최저가
        'hgpr': price.stck_hgpr, #종목 최고가
        'sellPrice': sellP, #매수 호가
        'sellCount': sellC, #매수 잔량
        'buyPrice': sellC, #매도 호가
        'buyCount': sellC, #매도 잔량
    }
    my_object.data[key] = value

    data = my_object.data[key]
    return jsonify(data)
####################################################


######## 거래 상위 기업 출력 ########
cmpCode = []
cmpName = []

def add_rank(rank: list, p: bool = False):
    global cmpCode
    global cmpName
    for i, item in enumerate(rank):
        item: KRXRank
        cmpCode.append(item.isu_cd)
        cmpName.append(item.isu_abbrv)

rank = KRXFluctRank.fetch(table='거래상위')[:8]
add_rank(rank)

print(cmpCode, cmpName)

@app.route('/stock/data', methods=['GET'])
def get_rank():
    my_object = myObject()
    print("서버 동작")

    key = '거래상위'
    value = {
        'name': cmpName,
        'code': cmpCode,
    }
    my_object.data[key] = value

    # print(my_object.data)
    data = my_object.data
    return jsonify(data)
####################################################


if(__name__) == '__main__':
    app.run(host='0.0.0.0', port=5000)