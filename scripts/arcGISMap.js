require([
    "esri/Map",
    "esri/views/MapView",
    "esri/widgets/BasemapToggle",
    "esri/widgets/BasemapGallery",
    "esri/layers/FeatureLayer"
], function (Map, MapView, BasemapToggle, BasemapGallery, FeatureLayer) {

    var map = new Map({
        basemap: "satellite"
    });

    var view = new MapView({
        container: "viewDiv",
        map: map,
        center: [-79.3850, 43.6480], // longitude, latitude
        zoom: 15
    });

    var basemapToggle = new BasemapToggle({
        view: view,
        nextBasemap: "hybrid"
    });

    var basemapGallery = new BasemapGallery({
        view: view,
        source: {
            portal: {
                url: "https://www.arcgis.com",
                useVectorBasemaps: false // Load vector tile basemaps
            }
        }
    });

    // Trailheads feature layer (points)
    var trailheadsLayer = new FeatureLayer({
        url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads/FeatureServer/0"
    });

    map.add(trailheadsLayer);
    //view.ui.add(basemapToggle, "bottom-right");
    view.ui.add(basemapGallery, "top-right")
});