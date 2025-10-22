report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/ui_restoration_test__0_document_0_mobile.png",
        "test": "../bitmaps_test/20251022-144435/ui_restoration_test__0_document_0_mobile.png",
        "selector": "document",
        "fileName": "ui_restoration_test__0_document_0_mobile.png",
        "label": "收件信息页面",
        "requireSameDimensions": true,
        "misMatchThreshold": 5,
        "url": "http://10.59.207.193:10086/#/chooseAddress",
        "expect": 0,
        "viewportLabel": "mobile",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -188,
            "height": -406
          },
          "rawMisMatchPercentage": 6.864031825751677,
          "misMatchPercentage": "6.86",
          "analysisTime": 13
        },
        "diffImage": "../bitmaps_test/20251022-144435/failed_diff_ui_restoration_test__0_document_0_mobile.png"
      },
      "status": "fail"
    }
  ],
  "id": "ui_restoration_test"
});