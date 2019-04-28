import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import WMTSTileGrid from 'ol/tilegrid/WMTS.js';
import * as ole from '../ole/index.js';

declare var ol: any;

@Component({
    selector: 'app-openlayers-editor',
    templateUrl: './openlayers-editor.component.html',
    styleUrls: [
        './openlayers-editor.component.css',
        '../ole/style/ole.css'
    ],
    encapsulation: ViewEncapsulation.None,
})
export class OpenlayersEditorComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        //http://www.gisandbeers.com/servidores-wms-libres-datos-e-imagenes-satelite/

        const editLayer = new ol.layer.Vector({
            source: new ol.source.Vector(),
        });

        const map = new ol.Map({
            layers: [
                new ol.layer.Tile({
                    title: 'OpenStreetMap',
                    type: 'base',
                    source: new ol.source.TileImage({
                        url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png',
                    })
                }),
                new ol.layer.Tile({
                    title: 'Google Satellite',
                    visible: false,
                    source: new ol.source.TileImage({
                        url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
                    })
                }),
                new ol.layer.Tile({
                    title: 'Google Hybrid',
                    visible: false,
                    source: new ol.source.TileImage({
                        url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}',
                    })
                }),
                // new ol.layer.Tile({
                //     title: 'Global Imagery',
                //     source: new ol.source.TileWMS({
                //         url: 'https://ahocevar.com/geoserver/wms',
                //         params: {LAYERS: 'nasa:bluemarble', TILED: true}
                //     })
                // }),

                editLayer
            ],
            target: 'map',
            view: new ol.View({
                center: [873708.375917, 6105425.847789],
                zoom: 15
            })
        });

        // Create a LayerSwitcher instance and add it to the map
        const layerSwitcher = new ol.control.LayerSwitcher();

        map.addControl(layerSwitcher);

        const editor = new ole.Editor(map);

        const cad = new ole.control.CAD({
            source: editLayer.getSource()
        });

        const draw = new ole.control.Draw({
            source: editLayer.getSource()
        });

        const drawLine = new ole.control.Draw({
            type: 'LineString',
            source: editLayer.getSource()
        });

        const rotate = new ole.control.Rotate({
            source: editLayer.getSource()
        });

        const drawPoly = new ole.control.Draw({
            type: 'Polygon',
            source: editLayer.getSource()
        });

        const move = new ole.control.Move({
            type: 'Polygon',
            source: editLayer.getSource()
        });
        const fill = new ol.style.Fill({
            color: 'rgba(255,255,255,0.4)'
        });

        const stroke = new ol.style.Stroke({
            color: '#3399CC',
            width: 1.25
        });
        const style = new ol.style.Style({
            image: new ol.style.Circle({
                fill: fill,
                stroke: stroke,
                radius: 5
            }),
            fill: fill,
            stroke: stroke
        });

        const modify = new ole.control.Modify({
            source: editLayer.getSource(),
            style: style
        });

        const deleteC = new ole.control.Delete({
            source: editLayer.getSource()
        });

        const buffer = new ole.control.Buffer({
            source: editLayer.getSource()
        });

        const union = new ole.control.Union({
            source: editLayer.getSource()
        });

        const intersection = new ole.control.Intersection({
            source: editLayer.getSource()
        });

        const difference = new ole.control.Difference({
            source: editLayer.getSource()
        });

        editor.addControls([
            cad,
            draw,
            drawLine,
            drawPoly,
            modify,
            move,
            rotate,
            deleteC,
            buffer,
            union,
            intersection,
            difference
        ]);

        const ls = new ole.service.LocalStorage();

        editor.addService(ls);
    }

}
