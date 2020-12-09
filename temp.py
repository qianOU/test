import pandas
from datetime import datetime
import requests

time = int(datetime.now().timestamp()*1000)
url = 'http://127.0.0.1:3000/encrypt'

data = {"func": 'fun("%s")'}

response = requests.post(url, data=data)
print(response.text + ('|%d' % (time/1000)))