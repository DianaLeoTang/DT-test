report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/ui_restoration_test__0_document_0_mobile.png",
        "test": "../bitmaps_test/20251022-114814/ui_restoration_test__0_document_0_mobile.png",
        "selector": "document",
        "fileName": "ui_restoration_test__0_document_0_mobile.png",
        "label": "收件信息页面",
        "requireSameDimensions": false,
        "misMatchThreshold": 10,
        "url": "http://10.59.207.193:10086/#/chooseAddress",
        "expect": 0,
        "viewportLabel": "mobile",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -188,
            "height": -406
          },
          "rawMisMatchPercentage": 4.407394120752361,
          "misMatchPercentage": "4.41",
          "analysisTime": 21
        }
      },
      "status": "pass"
    }
  ],
  "id": "ui_restoration_test"
});