# Openlayers Editor

[![Greenkeeper badge](https://badges.greenkeeper.io/geops/openlayers-editor.svg)](https://greenkeeper.io/)
[![Travis badge](https://api.travis-ci.org/geops/openlayers-editor.svg?branch=master)](https://travis-ci.org/geops/openlayers-editor)

OpenLayers Editor (OLE) is based on [OpenLayers](https://openlayers.org/) and provides a set of controls for extended editing of spatial data.

Contributions are welcome! Feel free to add more controls and to extend the current functionality.
Additionally, the build process is currently very basic and could be optimized.
Translations would be nice, too.

## Features
- CAD tool for geometry alignment
- Drawing line, point and polygon features
- Moving and rotating geometries
- Modifying geometries
- Deleting geometries
- Topology operations using [JSTS](https://github.com/bjornharrtell/jsts): buffer, union, intersection, difference
- Toolbar for activating and deactivating controls

## Demo
For a demo, visit [https://openlayers-editor.geops.de](https://openlayers-editor.geops.de).

## Dependencies
- node & npm

## Getting started
- Clone this repository
- Install: `npm install`
- Run: `npm start`
- Open your browser and visit [http://localhost:5000](http://localhost:5000)

## Usage
```js
var editor = new ole.Editor(map);

var cad = new ole.control.CAD({
  source: editLayer.getSource()
});

var draw = new ole.control.Draw({
  source: editLayer.getSource()
});

editor.addControls([draw, cad]);

```

## Angular Component

```
npm install ol --save
npm install ol-layerswitcher --save
npm install jsts --save
```

index.html
``` html
<link rel="stylesheet" href="https://openlayers.org/en/v5.3.0/css/ol.css" type="text/css">
<script src="https://cdn.rawgit.com/openlayers/openlayers.github.io/master/en/v5.3.0/build/ol.js"></script>
<script src="https://unpkg.com/ol-layerswitcher@3.2.0"></script>
```

app-component.ts

``` javascript
declare var ol: any;
```


## Development
- Build: `npm run build`
- Create doc: `npm run-script doc`
