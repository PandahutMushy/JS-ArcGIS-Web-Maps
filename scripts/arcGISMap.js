require([
    "esri/Map",
    "esri/views/MapView",
    "esri/widgets/BasemapToggle",
    "esri/widgets/BasemapGallery",
    "esri/layers/FeatureLayer",
    "esri/layers/GraphicsLayer",
    "esri/Graphic",
    "esri/widgets/Search"
], function (Map, MapView, BasemapToggle, BasemapGallery, FeatureLayer, GraphicsLayer, Graphic, Search) {

    var map = new Map({
        basemap: "satellite"
    });

    var view = new MapView({
        container: "viewDiv",
        map: map,
        center: [-79.3850, 43.6480], // longitude, latitude
        zoom: 6
    });

    //Map style toggle
    var basemapToggle = new BasemapToggle({
        view: view,
        nextBasemap: "topo-vector"
    });

    //Map style gallery
    var basemapGallery = new BasemapGallery({
        view: view,
        source: {
            portal: {
                url: "https://www.arcgis.com",
                useVectorBasemaps: true // Load vector tile basemaps
            }
        }
    });

    // Search widget
    var search = new Search({
        view: view
    });

    view.ui.add(search, "top-right");

    // Reference the feature layer to query
    var featureLayer = new FeatureLayer({
        url: "https://services9.arcgis.com/1U6CnmlrcjUh1LpT/arcgis/rest/services/gpm_1d20190712/FeatureServer"
    });

    // Layer used to draw graphics returned
    var graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);

    map.add(featureLayer, 0);

    //view.ui.add(basemapToggle, "bottom-right");
    view.ui.add(basemapGallery, "bottom-left");
});