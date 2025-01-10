var APP_DATA = {
  "scenes": [
    {
      "id": "0-lago-y-salon-comunal-1",
      "name": "LAGO Y SALON COMUNAL-1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.935165649200779,
          "pitch": 0.023755368903245255,
          "rotation": 0,
          "target": "1-lago-y-zona-de-hamacas"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-lago-y-zona-de-hamacas",
      "name": "LAGO Y ZONA DE HAMACAS",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 2.778339683742977,
        "pitch": 0.13498602460291664,
        "fov": 1.3649120070492948
      },
      "linkHotspots": [
        {
          "yaw": 1.9042799066424028,
          "pitch": -0.04275957931571739,
          "rotation": 0,
          "target": "1-lago-y-zona-de-hamacas"
        },
        {
          "yaw": -2.662646212018654,
          "pitch": 0.06596727480885889,
          "rotation": 0,
          "target": "0-lago-y-salon-comunal-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
