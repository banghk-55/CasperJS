import triangle
import unittest
import math

class test_triange(unittest.TestCase):
    
    def test_KhongPhaiTamGiac1(self):
        self.assertEqual(triangle.detect_triangle(1.0,2.0,4.0),"Khong phai tam giac")

    def test_KhongPhaiTamGiac2(self):
        self.assertEqual(triangle.detect_triangle(4.0,1.0,2.0),"Khong phai tam giac")

    def test_KhongPhaiTamGiac3(self):
        self.assertEqual(triangle.detect_triangle(1.0,4.0,2.0),"Khong phai tam giac")
        
    def test_TamGiacVuong1(self):
        self.assertEqual(triangle.detect_triangle(3.0,4.0,5.0),"Tam giac vuong")

    def test_TamGiacVuong2(self):
        self.assertEqual(triangle.detect_triangle(3.0,5.0,4.0),"Tam giac vuong")

    def test_TamGiacVuong3(self):
        self.assertEqual(triangle.detect_triangle(5.0,3.0,4.0),"Tam giac vuong")
        
    def test_TamGiacVuongCan1(self):
        self.assertEqual(triangle.detect_triangle(3.0,3.0,math.sqrt(18)),"Tam giac vuong can")

    def test_TamGiacVuongCan2(self):
        self.assertEqual(triangle.detect_triangle(3.0,math.sqrt(18),3.0),"Tam giac vuong can")

    def test_TamGiacVuongCan3(self):
        self.assertEqual(triangle.detect_triangle(math.sqrt(18),3,3),"Tam giac vuong can")

    def test_TamGiacCan1(self):
        self.assertEqual(triangle.detect_triangle(3,3,5),"Tam giac can")

    def test_TamGiacCan2(self):
        self.assertEqual(triangle.detect_triangle(3,5,3),"Tam giac can")

    def test_TamGiacCan3(self):
        self.assertEqual(triangle.detect_triangle(5,3,3),"Tam giac can")
        
    def test_TamGiacDeu(self):
        self.assertEqual(triangle.detect_triangle(3,3,3),"Tam giac deu")
        
    def test_TamGiacThuong(self):
        self.assertEqual(triangle.detect_triangle(3,4,6),"Tam giac thuong")
        
    def test_MienGiaTri1(self):
        self.assertEqual(triangle.detect_triangle(-4,4,5),"Khong thuoc vung du lieu")

    def test_MienGiaTri2(self):
        self.assertEqual(triangle.detect_triangle(4,-4,5),"Khong thuoc vung du lieu")

    def test_MienGiaTri3(self):
        self.assertEqual(triangle.detect_triangle(4,4,-5),"Khong thuoc vung du lieu")

    def test_MienGiaTri4(self):
        self.assertEqual(triangle.detect_triangle("a",4,5),"Khong thuoc vung du lieu")

    def test_MienGiaTri5(self):
        self.assertEqual(triangle.detect_triangle(4,"a",5),"Khong thuoc vung du lieu")

    def test_MienGiaTri6(self):
        self.assertEqual(triangle.detect_triangle(4,4,"a"),"Khong thuoc vung du lieu")

    def test_MienGiaTri7(self):
        self.assertEqual(triangle.detect_triangle(2**32,4,5),"Khong thuoc vung du lieu")

    def test_MienGiaTri8(self):
        self.assertEqual(triangle.detect_triangle(2,2**32,5),"Khong thuoc vung du lieu")

    def test_MienGiaTri9(self):
        self.assertEqual(triangle.detect_triangle(2,4,2**32),"Khong thuoc vung du lieu")

    def test_MienGiaTri10(self):
        self.assertEqual(triangle.detect_triangle(-4,-4,5),"Khong thuoc vung du lieu")

    def test_MienGiaTri11(self):
        self.assertEqual(triangle.detect_triangle(4,-4,-5),"Khong thuoc vung du lieu")

    def test_MienGiaTri12(self):
        self.assertEqual(triangle.detect_triangle(-4,4,-5),"Khong thuoc vung du lieu")

    def test_MienGiaTri13(self):
        self.assertEqual(triangle.detect_triangle("a","b",5),"Khong thuoc vung du lieu")

    def test_MienGiaTri14(self):
        self.assertEqual(triangle.detect_triangle("a",4,"b"),"Khong thuoc vung du lieu")

    def test_MienGiaTri15(self):
        self.assertEqual(triangle.detect_triangle(4,"a","b"),"Khong thuoc vung du lieu")

    def test_MienGiaTri16(self):
        self.assertEqual(triangle.detect_triangle(2**32,2**32,5),"Khong thuoc vung du lieu")

    def test_MienGiaTri17(self):
        self.assertEqual(triangle.detect_triangle(2**32,4,2**32),"Khong thuoc vung du lieu")

    def test_MienGiaTri18(self):
        self.assertEqual(triangle.detect_triangle(4,2**32,2**32),"Khong thuoc vung du lieu")

    def test_MienGiaTri19(self):
        self.assertEqual(triangle.detect_triangle(-4,-4,-5),"Khong thuoc vung du lieu")

    def test_MienGiaTri20(self):
        self.assertEqual(triangle.detect_triangle(2**32,2**32,2**32),"Khong thuoc vung du lieu")
        
    def test_MienGiaTri21(self):
        self.assertEqual(triangle.detect_triangle("a","b","c"),"Khong thuoc vung du lieu")
        
if __name__ == '__main__':
    unittest.main()
