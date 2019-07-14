require([
    "esri/Map",
    "esri/views/MapView",
    "esri/widgets/BasemapToggle",
    "esri/widgets/BasemapGallery",
    "esri/layers/FeatureLayer",
    "esri/layers/GraphicsLayer",
    "esri/Graphic"
], function (Map, MapView, BasemapToggle, BasemapGallery, FeatureLayer, GraphicsLayer, Graphic) {

    var map = new Map({
        basemap: "satellite"
    });

    var view = new MapView({
        container: "viewDiv",
        map: map,
        center: [-79.3850, 43.6480], // longitude, latitude
        zoom: 6
    });

    var basemapToggle = new BasemapToggle({
        view: view,
        nextBasemap: "topo-vector"
    });

    var basemapGallery = new BasemapGallery({
        view: view,
        source: {
            portal: {
                url: "https://www.arcgis.com",
                useVectorBasemaps: true // Load vector tile basemaps
            }
        }
    });


    // Reference the feature layer to query
    var featureLayer = new FeatureLayer({
        url: "https://services9.arcgis.com/1U6CnmlrcjUh1LpT/arcgis/rest/services/gpm_1d20190712/FeatureServer"
    });

    // Layer used to draw graphics returned
    var graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);

    map.add(featureLayer, 0);
    //view.ui.add(basemapToggle, "bottom-right");
    view.ui.add(basemapGallery, "top-right");

    function addGraphics(result) {
        graphicsLayer.removeAll();
        result.features.forEach(function (feature) {
            var g = new Graphic({
                geometry: feature.geometry,
                attributes: feature.attributes,
                symbol: {
                    type: "simple-marker",
                    color: [0, 0, 0],
                    outline: {
                        width: 2,
                        color: [0, 255, 255],
                    },
                    size: "20px"
                },
                popupTemplate: {
                    title: "{TRL_NAME}",
                    content: "This a {PARK_NAME} trail located in {CITY_JUR}."
                }
            });
            graphicsLayer.add(g);
        });
    }
});