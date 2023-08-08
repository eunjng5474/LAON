from urllib.request import urlopen
from bs4 import BeautifulSoup
import sys

html = urlopen("https://api-gw.sports.naver.com/schedule/games/" + sys.argv[1] + sys.argv[2] + "SS0" + sys.argv[3] + "/game-polling?inning=" + sys.argv[4])

bsObject = BeautifulSoup(html, "html.parser")
print(bsObject)
