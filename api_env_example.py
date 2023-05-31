import mojito
import pandas as pd

# npm install python-dotenv
import dotenv
# os 는 내장 모듈
import os

# 파일 경로를 인식해서 파일 로드
dotenv_file = dotenv.find_dotenv()
dotenv.load_dotenv(dotenv_file)

broker = mojito.KoreaInvestment(
		# 아래처럼 os.envron[key값]을 입력하면 value가 출력된다.
    api_key=os.environ["APIKey"],
    api_secret=os.environ["APISecret"],
    acc_no=os.environ["APIAccNo"]
)

symbols = broker.fetch_symbols()
print(symbols)