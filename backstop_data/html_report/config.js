report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default__0_document_0_iphone.png",
        "test": "../bitmaps_test/20251020-175146/backstop_default__0_document_0_iphone.png",
        "selector": "document",
        "fileName": "backstop_default__0_document_0_iphone.png",
        "label": "寄件信息页面",
        "requireSameDimensions": true,
        "misMatchThreshold": 5,
        "url": "http://10.59.207.193:10086/#/chooseAddress",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "iphone",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -163,
            "height": -490
          },
          "rawMisMatchPercentage": 5.852123418118396,
          "misMatchPercentage": "5.85",
          "analysisTime": 13
        },
        "diffImage": "../bitmaps_test/20251020-175146/failed_diff_backstop_default__0_document_0_iphone.png"
      },
      "status": "fail"
    }
  ],
  "id": "backstop_default"
});