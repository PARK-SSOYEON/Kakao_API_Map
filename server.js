// server.js
const express = require('express');
const app = express();
const path = require('path');

// 포트 설정
const PORT = 8080;

// 정적 파일을 제공하는 폴더 설정
app.use(express.static(__dirname));

// 루트 라우트 설정
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`Server is running at http://127.0.0.1:${PORT}`);
});
