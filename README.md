# BringX-Assignment2

可以直接透過此 API Endpoint 呼叫： 

POST `https://bring-x-assignment2-9c4wvtca9-leos-projects-3c6c81e5.vercel.app/mail`

payload:
```json
{
  "to": "leo604leo604@gmail.com",
  "subject": "hi",
  "body": "Hello World!"
}
```

另外，發送後有可能會被送至垃圾桶，因此若寄出後沒在收件夾的話，可以到垃圾桶查找。

該專案直接透過 `npm install` 安裝 SendGrid套件即可。
另外為了隱私安全，因此 SendGrid的 API KEY 將存到 Vercel Server 中。
