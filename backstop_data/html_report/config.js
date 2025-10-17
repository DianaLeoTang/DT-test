report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default__0_document_0_iphone.png",
        "test": "../bitmaps_test/20251017-103818/backstop_default__0_document_0_iphone.png",
        "selector": "document",
        "fileName": "backstop_default__0_document_0_iphone.png",
        "label": "寄件信息页面",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://10.59.207.193:10086/#/chooseAddress",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "iphone",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -188,
            "height": -490
          },
          "rawMisMatchPercentage": 5.484633983439643,
          "misMatchPercentage": "5.48",
          "analysisTime": 15
        },
        "diffImage": "../bitmaps_test/20251017-103818/failed_diff_backstop_default__0_document_0_iphone.png"
      },
      "status": "fail"
    }
  ],
  "id": "backstop_default"
});