require([
    "esri/Map",
    "esri/views/SceneView",
    "esri/layers/FeatureLayer",
    "esri/layers/GraphicsLayer",
    "esri/Graphic"
], function (Map, SceneView) {

    var map = new Map({
        basemap: "topo-vector",
        ground: "world-elevation" // show elevation
    });

    var view = new SceneView({
        container: "viewDiv",
        map: map,
        camera: {
            position: { // observation point
                x: -79.3850,
                y: 43.6480,
                z: 25000 // altitude in meters
            },
            tilt: 45 // perspective in degrees
        }
    });

    // Layer used to draw graphics returned
    var graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);

    map.add(featureLayer, 0);

    // Reference the feature layer to query
    var featureLayer = new FeatureLayer({
        url: "https://services9.arcgis.com/1U6CnmlrcjUh1LpT/arcgis/rest/services/gpm_1d20190712/FeatureServer"
    });
});