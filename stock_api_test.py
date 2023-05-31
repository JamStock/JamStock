import mojito
import pprint
import pandas as pd
import dotenv
# os 는 내장 모듈
import os

dotenv_file = dotenv.find_dotenv()
dotenv.load_dotenv(dotenv_file)

# f = open("../koreainvestment.key")
# lines = f.readlines()
# key = lines[0].strip()
# secret = lines[1].strip()
# acc_no = lines[2].stp()
# f.close()

broker = mojito.KoreaInvestment(
    api_key=os.environ["APIKey"],
    api_secret=os.environ["APISecret"],
    acc_no=os.environ["APIAccNo"]
)

# resp = broker.fetch_price("005930")
# pprint.pprint(resp)

symbols = broker.fetch_symbols()
symbols
print(symbols)