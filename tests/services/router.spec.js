const request = require('supertest');
const express = require('express');

const app = express();

app.get('/user', function (req, res) {
  res.status(200).json({ name: 'john' });
});

//axios fecth请求你得目标接口
describe('Node自动化测试', function () {
  it('获取首页数据', function (done) {
    request(app)
      .get('/user')
      .expect('Content-Type', /json/)
      .expect('Content-Length', '15')
      .expect(200)
      .end(function (err, res) {
        if (err) {
          done(err);
        } else {
          //   if (res.body == 'john') {
          //   }
          done();
        }
      });
  });
  it('404测试', function (done) {
    request(app)
      .get('/xx')
      .expect(200)
      .end(function (err, res) {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});
