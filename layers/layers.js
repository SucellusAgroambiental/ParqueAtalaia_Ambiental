var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 0.900000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_MDTAlosPalsar_1 = new ol.format.GeoJSON();
var features_MDTAlosPalsar_1 = format_MDTAlosPalsar_1.readFeatures(json_MDTAlosPalsar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MDTAlosPalsar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MDTAlosPalsar_1.addFeatures(features_MDTAlosPalsar_1);
var lyr_MDTAlosPalsar_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MDTAlosPalsar_1, 
                style: style_MDTAlosPalsar_1,
                popuplayertitle: "MDT - Alos Palsar",
                interactive: true,
    title: 'MDT - Alos Palsar<br />\
    <img src="styles/legend/MDTAlosPalsar_1_0.png" /> 20<br />\
    <img src="styles/legend/MDTAlosPalsar_1_1.png" /> 170<br />\
    <img src="styles/legend/MDTAlosPalsar_1_2.png" /> 340<br />\
    <img src="styles/legend/MDTAlosPalsar_1_3.png" /> 510<br />\
    <img src="styles/legend/MDTAlosPalsar_1_4.png" /> 680<br />'
        });
var format_CurvasdeNvel20mAlosPalsar_2 = new ol.format.GeoJSON();
var features_CurvasdeNvel20mAlosPalsar_2 = format_CurvasdeNvel20mAlosPalsar_2.readFeatures(json_CurvasdeNvel20mAlosPalsar_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CurvasdeNvel20mAlosPalsar_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CurvasdeNvel20mAlosPalsar_2.addFeatures(features_CurvasdeNvel20mAlosPalsar_2);
var lyr_CurvasdeNvel20mAlosPalsar_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CurvasdeNvel20mAlosPalsar_2, 
                style: style_CurvasdeNvel20mAlosPalsar_2,
                popuplayertitle: "Curvas de Nível 20m - Alos Palsar",
                interactive: true,
                title: '<img src="styles/legend/CurvasdeNvel20mAlosPalsar_2.png" /> Curvas de Nível 20m - Alos Palsar'
            });
var format_LimitesParqueAtalaia_3 = new ol.format.GeoJSON();
var features_LimitesParqueAtalaia_3 = format_LimitesParqueAtalaia_3.readFeatures(json_LimitesParqueAtalaia_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitesParqueAtalaia_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesParqueAtalaia_3.addFeatures(features_LimitesParqueAtalaia_3);
var lyr_LimitesParqueAtalaia_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitesParqueAtalaia_3, 
                style: style_LimitesParqueAtalaia_3,
                popuplayertitle: "Limites Parque Atalaia",
                interactive: true,
                title: '<img src="styles/legend/LimitesParqueAtalaia_3.png" /> Limites Parque Atalaia'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_MDTAlosPalsar_1.setVisible(false);lyr_CurvasdeNvel20mAlosPalsar_2.setVisible(false);lyr_LimitesParqueAtalaia_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_MDTAlosPalsar_1,lyr_CurvasdeNvel20mAlosPalsar_2,lyr_LimitesParqueAtalaia_3];
lyr_MDTAlosPalsar_1.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_CurvasdeNvel20mAlosPalsar_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_LimitesParqueAtalaia_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'descri____o': 'descri____o', 'fid': 'fid', 'Area_ha_': 'Area_ha_', 'Area_km2_': 'Area_km2_', 'Perimetro__km_': 'Perimetro__km_', });
lyr_MDTAlosPalsar_1.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_CurvasdeNvel20mAlosPalsar_2.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_LimitesParqueAtalaia_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'descri____o': 'TextEdit', 'fid': 'TextEdit', 'Area_ha_': 'TextEdit', 'Area_km2_': 'TextEdit', 'Perimetro__km_': 'TextEdit', });
lyr_MDTAlosPalsar_1.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_CurvasdeNvel20mAlosPalsar_2.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'inline label - always visible', });
lyr_LimitesParqueAtalaia_3.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'descri____o': 'no label', 'fid': 'no label', 'Area_ha_': 'no label', 'Area_km2_': 'no label', 'Perimetro__km_': 'no label', });
lyr_LimitesParqueAtalaia_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});