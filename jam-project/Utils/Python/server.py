import sys
from flask import Flask

sys.path.append("../../Models/bard/bard")

app = Flack(__name__)


# from searchCompanyInfo import bard


# 회사명을 받아야 함수 실행이 가능한대.. 으엉...
@app.route('/searchCompanyInfo', methods=['POST'])
# searchCompanyInfo('')
