report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/qq_map_0_document_0_iphone.png",
        "test": "../bitmaps_test/20210625-211404/qq_map_0_document_0_iphone.png",
        "selector": "document",
        "fileName": "qq_map_0_document_0_iphone.png",
        "label": "map",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://map.qq.com/m/",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "iphone",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 2.6574712643678158,
          "misMatchPercentage": "2.66",
          "analysisTime": 21
        },
        "diffImage": "../bitmaps_test/20210625-211404/failed_diff_qq_map_0_document_0_iphone.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/qq_map_0_document_1_tablet.png",
        "test": "../bitmaps_test/20210625-211404/qq_map_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "qq_map_0_document_1_tablet.png",
        "label": "map",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://map.qq.com/m/",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "tablet",
        "error": "Reference file not found /Users/yuanzhijia/Desktop/yd-tests/backstop_data/bitmaps_reference/qq_map_0_document_1_tablet.png"
      },
      "status": "fail"
    }
  ],
  "id": "qq"
});