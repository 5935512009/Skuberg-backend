# Skuberg-backend
## ER diagram  
 ![ค้าหา Terminal](public/ERdiagram.jpg)
# ขั้นตอนการเริ่ม project
1. เข้าหน้า Terminal บน window จากนั้นใช้คำสั่ง git clone https://github.com/5935512009/Skuberg-backend.git เพื่อโหลดโปรเจคเข้ามาในเครื่อง
2. เข้าไปใน folder "Skuberg-backend" โดยใช้คำสั่ง "cd Skuberg-backend" บนหน้า Terminal
3. หลังจากเข้ามาใน folder "Skuberg-backend" ใช้คำสั่ง "npm install" เพื่อทำการติดตั้ง library เสริมที่เกี่ยวกับกับโปรเจค (สามารถดู library เสริมได้ที่ไฟล์ package.json)
4. หลังจากติดตั้งเรียบร้อยให้ใช้คำสั่ง " npm start " เพื่อทำการเริ่มโปรเจคโดยสามารถเข้าผ่านทาง http://localhost:4001 บนเว็บบราวเซอร์ได้เลย

## 
1. เปิด Terminal บน Window  
 ![ค้าหา Terminal](public/find_Terminal.jpg)

2. เริ่มต้นโปรเจค  
 ![เริ่ม Project](public/start_project.jpg)

3. หลังจากกด link แล้วจะได้หน้านี้ขึ้นมา  
 ![เริ่ม Project](public/click_link.jpg)  

## ทดสอบแสดงผมข้อมูลบนหน้าเว็บ

1. ทดสอบเปลี่ยน link url ดังต่อไปนี้  
> http://localhost:4001/users  
> http://localhost:4001/wallets  
> http://localhost:4001/cryptos  
> http://localhost:4001/transactions  

นี้คือตัวอย่างข้อมูลที่ได้  
 ![เริ่ม Project](public/change_link_information.jpg)  

## ต่อจากนี้จะเป็นการทดสอบเพิ่มข้อมูลเข้าไฟล์ json  โดยใช้ POSTMAN
1. เข้า postman หลังจากนั้น เลือก New Request สำหรับบน web  
 ![เริ่ม Project](public/start_postman.jpg)  

2. นำ link http://localhost:4001 มาใส่ที่ช่องถามภาพเพื่อทำการดึงข้อมูลมาแสดง ** กรณีที่ดึงข้แมูลบน web ไม่ได้ให้โหลด POSTMAN เข้าเครื่องและทดลอง link ใหม่อีกครั้ง  
 ![เริ่ม Project](public/GET_method.jpg)  
3. ทดลองเพิ่มข้อมูลโดยเราจะเพิ่มข้อมูลที่ http://localhost:4001/transactions  
 ![เริ่ม Project](public/get_data_transactions.jpg)  
4. เปลี่ยนจาก GET เป็น POST หลังจากนั้นให้ใส่รายละเอียดข้อมูลและกด send ดังภาพ
 ![เริ่ม Project](public/before_send.jpg)  
5. หลังจากกด send แล้วสามาถจะได้ผลดังนี้ และสามารถไปตรวจสอบที่ไฟล์transactions.json ได้ด้วย  
 ![เริ่ม Project](public/after_send.jpg) 



   
### จบ section 

