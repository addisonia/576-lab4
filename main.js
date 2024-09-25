require(["esri/Map", "esri/views/MapView", "esri/config", "esri/Graphic", "esri/geometry/Point"], function (Map, MapView, esriConfig, Graphic, Point) {

    esriConfig.apiKey = "AAPTxy8BH1VEsoebNVZXo8HurIMrpomeP09wA2mwDUzsv0qeG0ISCTpeTdFxzbJ-cyUaRzZiVWMfhA1kKt8Ld-lqOocwQ90a-XIdRYu0XC7yriNIJ5oARShjJXzEmI0Pitehhwyu5W5MpM1zVqbDs1DO7ap28dMDTZxQDDVSUxbYe_GbKf0cIjesja0Lmii7U_7hppWmgXRshLk3T-xecYWiXkfh9h86k_LNogM8cSzFPBYlEpGnG0dHS6hKqnf27LCcAT1_shz7Rhzm";
  
    const map = new Map({
      basemap: "satellite",
    });
  
    const view = new MapView({
      container: "viewDiv",
      map: map,
      zoom: 15  // Set a default zoom level
    });
  
    // Get the user's current location
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
  
        // Center the map on the user's location
        view.center = [lon, lat];
  
        // Add a point graphic to represent the user's location
        const point = new Point({
          longitude: lon,
          latitude: lat
        });
  
        const graphic = new Graphic({
          geometry: point,
          symbol: {
            type: "simple-marker",
            color: "blue",
            size: "12px"
          }
        });
  
        view.graphics.add(graphic);
      }, function(error) {
        console.error("Error getting location: ", error);
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  
  });