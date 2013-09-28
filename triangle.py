import sys
import math

def detect_triangle(a,b,c):
    if (type(a) not in [float, int] or type(b) not in [float, int]
        or type(c) not in [float, int]
        or a<=0 or b<=0 or c<=0
        or a>2**32-1 or b>2**32-1 or c>2**32-1):
        return "Khong thuoc vung du lieu"
    elif a+b>c and b+c>a and c+a>b:
        if a == b == c :
            return "Tam giac deu"
        elif ((round(a**2+b**2,4)==round(c**2,4) and a==b) or (round(b**2+c**2,4)==round(a**2,4)
            and b==c) or (round(c**2+a**2,4)==round(b**2,4) and c==a)):
            return "Tam giac vuong can"
        elif a == b or b == c or c == a:
            return "Tam giac can"
        elif a**2+b**2==c**2 or b**2+c**2==a**2 or c**2+a**2==b**2:
            return "Tam giac vuong"
        else:
            return "Tam giac thuong"
    else:
        return "Khong phai tam giac"

#print (tamgiac(3.0,4.0,5))
