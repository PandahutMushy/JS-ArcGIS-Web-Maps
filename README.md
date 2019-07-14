# JS ArcGIS Web Maps

## About the Project

JS ArcGIS Web Maps is a single page Web Map application that displays NASA PMM Precipitation data loaded using RESTful endpoints and the ArcGIS JavaScript API. Satellite imagery is loaded dynamically and dislpayed via an ArcGIS feature layer that adjusts to location and zoom level. Current version by default displays spatial data from July 12 2019. App still under construction.

### Problem Statement

A simple, minimalistic single page web map application built to visualize weather data from the NASA Precipitation Measurement Missions database.

### Expected Usage

Minimum viable product:

- Select a location, zoom level and time to visualize weather data
- Select between different types of basemap styles
- Display spatial data from NASA PMM as a feature layer on the map
- Search for an address or location

- Stretch:
  - Select from various weather data types, such as mean, minimum and maxumim temperature, dewpoint and vapour pressure deficit
  - Display real-time satellite data
  - Select different dates from which to view data

## Getting Started

- Extract package contents and open index.html.

### Dependencies

- ArcGIS API (CDN)

## Media

!["Screenshot of index page"](https://github.com/ferrazf/JS-ArcGIS-Web-Maps/blob/master/resources/screenshot1.jpg)

## Known Issues

- Cannot select a different date
- Under construction, might have a few quirks

## To be implemented

- Select from various weather data types, such as mean, minimum and maxumim temperature, dewpoint and vapour pressure deficit
- Display real-time satellite data
