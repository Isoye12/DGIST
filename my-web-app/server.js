const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 5500; // 포트 번호

// 미들웨어 설정
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// HTML 폼을 렌더링하는 라우트
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'ruinses', '1.html'));
});

app.post('/submit', (req, res) => {
  const { name, phone, email } = req.body;
  const data = `Name: ${name}, Phone: ${phone}, Email: ${email}\n`;

  // 데이터 저장
  fs.appendFile('data.txt', data, (err) => {
    if (err) {
      return res.status(500).send('Error writing to file');
    }
    res.send('<p>Data saved successfully!</p><a href="/">Go back</a>');
  });
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

const cors = require('cors');
app.use(cors()); // CORS 설정 추가