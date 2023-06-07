import mojito
import dotenv
import os
import json

dotenv_file = dotenv.find_dotenv()
dotenv.load_dotenv(dotenv_file)

broker = mojito.KoreaInvestment(
    api_key=os.environ["APIKey"],
    api_secret=os.environ["APISecret"],
    acc_no=os.environ["APIAccNo"],
)

# 코스피
symbols = broker.fetch_kospi_symbols()

with open('./stockRevenue.json', 'w', encoding='utf-8') as f:
    json.dump(symbols['매출액'].to_json(), f, ensure_ascii=False)