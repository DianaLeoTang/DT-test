report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default__0__0_iphone.png",
        "test": "../bitmaps_test/20251016-203326/backstop_default__0__0_iphone.png",
        "selector": "",
        "fileName": "backstop_default__0__0_iphone.png",
        "label": "寄件信息页面",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://10.59.207.193:10086/#/chooseAddress",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "iphone",
        "engineErrorMsg": "net::ERR_CONNECTION_REFUSED at http://10.59.207.193:10087/#/chooseAddress",
        "error": "Reference file not found /Users/tc031338/DTCode/DT-test/backstop_data/bitmaps_reference/backstop_default__0__0_iphone.png"
      },
      "status": "fail"
    }
  ],
  "id": "backstop_default"
});