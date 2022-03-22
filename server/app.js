const express = require('express');
const { sequelize } = require('./models')
const app = express();

sequelize.sync({ force: false })
.then(()=>{
    console.log('데이터베이스 연결성공')
})
.catch((err)=>{
    console.error(err);
})

app.listen(8080, ()=>{
    console.log('8080포트 서버가 실행되었습니다.');
});