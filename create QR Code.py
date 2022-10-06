import pyqrcode 
from pyqrcode import QRCode 

# String which represent the QR code 
s = "https://github.com/Ghani280706"

# Generate QR code 
url = pyqrcode.create(s) 

# Create and save the png file naming "myqr.png" 
url.svg("mygithub.svg", scale = 8)
