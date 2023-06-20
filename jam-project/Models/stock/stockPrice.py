from pykis import *
import dotenv
import mojito;
import json
from flask import Flask, jsonify, request
import os
import json
from prettytable import PrettyTable
import requests
from pykis.utlis import *

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


@app.route('/stock/stockSearch', methods=['POST'])
def post_stockSearch():
    my_object = myObject()
    print("서버 동작")

    data = request.get_json()  # POST 요청으로부터 JSON 데이터를 가져옴
    # code = data.get('code')
    print("body: ", data)
    keywoard = data.get('src')

    searchName = []
    searchPrice = []
    searchCode = []
    for market, stocks in kis.market.stock_search(keywoard).items():
        #print(f' - - - {market} - - - ')
        for stock in stocks:
            #print(stock.mksc_shrn_iscd, stock.hts_kor_isnm)
            stock = kis.stock(stock.mksc_shrn_iscd)
            price = stock.price()
            if market == 'kospi':
                searchName.append(stock.name)
                searchCode.append(stock.code)
                searchPrice.append(price.stck_prpr)

    key = "searchResult"
    value = {
        'code': searchCode, #종목코드
        'name': searchName, #종목이름
        'prpr': searchPrice, #종목 현재가
    }
    my_object.data[key] = value

    data = my_object.data[key]
    return jsonify(data)


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


############ 주식 호가 출력 ###########
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
        
    for i in range(9, -1, -1):
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
        'buyPrice': buyP, #매도 호가
        'buyCount': buyC, #매도 잔량
    }
    my_object.data[key] = value

    data = my_object.data[key]
    return jsonify(data)
####################################################


############ 거래 상위 기업 출력 ############
cmpCode = []
cmpName = []

rankTrade = KRXFluctRank.fetch(table='거래상위',market='코스피')[:8]
for i, item in enumerate(rankTrade):
    item: KRXRank
    cmpCode.append(item.isu_cd)
    cmpName.append(item.isu_abbrv)

print("거래상위: ", cmpCode, cmpName)

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


##############실시간 체결가 조회###############
rankTopVlm = KRXFluctRank.fetch(table='상한가', market='코스피', sort='거래량')
rankTopTrd = KRXFluctRank.fetch(table='상한가', market='코스피', sort='거래대금')
rankDown = KRXFluctRank.fetch(table='하락', market='코스피', sort='등락율')
rankUp = KRXFluctRank.fetch(table='상승', market='코스피', sort='등락율')

@app.route('/stock/realTime', methods=['POST'])
def post_realTime():
    my_object = myObject()
    print("서버 동작")

    data = request.get_json()  # POST 요청으로부터 JSON 데이터를 가져옴
    dataType = data.get('type')
    print("body: ", dataType)

    resData = []
    resName = []
    resCode = []

    #상승율
    if(dataType == 'up'):
        for i, item in enumerate(rankUp):
            resName.append(item.isu_abbrv)
            resData.append(item.fluc_rt)
            resCode.append(item.isu_cd)
    #하락율
    if(dataType == 'down'):
        for i, item in enumerate(rankDown):
            resName.append(item.isu_abbrv)
            resData.append(item.fluc_rt)
            resCode.append(item.isu_cd)

    #거래량
    if(dataType == 'TopVlm'):
        for i, item in enumerate(rankTopVlm):
            resName.append(item.isu_abbrv)
            resData.append(item.acc_trdvol)
            resCode.append(item.isu_cd)

    #거래대금
    if(dataType == 'TopTrd'):
        for i, item in enumerate(rankTopTrd):
            resName.append(item.isu_abbrv)
            resData.append(item.acc_trdval / 10000 if False else item.acc_trdval // 10000)
            resCode.append(item.isu_cd)

    key = 'realTime'
    value = {
        'name': resName,
        'data': resData,
        'code': resCode
    }
    my_object.data[key] = value

    data = my_object.data[key]
    print(data)
    return jsonify(data)
#############################################



if(__name__) == '__main__':
    app.run(host='0.0.0.0', port=5000)