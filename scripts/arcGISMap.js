require([
    "esri/Map",
    "esri/views/MapView"
], function (Map, MapView) {

    var map = new Map({
        basemap: "topo-vector"
    });

    var view = new MapView({
        container: "viewDiv",
        map: map,
        center: [-79.3850, 43.6480], // longitude, latitude
        zoom: 15
    });
});