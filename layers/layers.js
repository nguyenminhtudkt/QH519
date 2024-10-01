var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_QH519Tuyen_1 = new ol.format.GeoJSON();
var features_QH519Tuyen_1 = format_QH519Tuyen_1.readFeatures(json_QH519Tuyen_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH519Tuyen_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH519Tuyen_1.addFeatures(features_QH519Tuyen_1);
var lyr_QH519Tuyen_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH519Tuyen_1, 
                style: style_QH519Tuyen_1,
                popuplayertitle: "QH519-Tuyen",
                interactive: true,
    title: 'QH519-Tuyen<br />\
    <img src="styles/legend/QH519Tuyen_1_0.png" /> 1<br />\
    <img src="styles/legend/QH519Tuyen_1_1.png" /> 2<br />\
    <img src="styles/legend/QH519Tuyen_1_2.png" /> 2A<br />\
    <img src="styles/legend/QH519Tuyen_1_3.png" /> 3<br />\
    <img src="styles/legend/QH519Tuyen_1_4.png" /> 4<br />\
    <img src="styles/legend/QH519Tuyen_1_5.png" /> 5<br />\
    <img src="styles/legend/QH519Tuyen_1_6.png" /> 6<br />\
    <img src="styles/legend/QH519Tuyen_1_7.png" /> 7<br />\
    <img src="styles/legend/QH519Tuyen_1_8.png" /> 8<br />\
    <img src="styles/legend/QH519Tuyen_1_9.png" /> M1<br />\
    <img src="styles/legend/QH519Tuyen_1_10.png" /> M2<br />\
    <img src="styles/legend/QH519Tuyen_1_11.png" /> M3<br />\
    <img src="styles/legend/QH519Tuyen_1_12.png" /> VT<br />'
        });
var format_QH519Depot_2 = new ol.format.GeoJSON();
var features_QH519Depot_2 = format_QH519Depot_2.readFeatures(json_QH519Depot_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QH519Depot_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QH519Depot_2.addFeatures(features_QH519Depot_2);
var lyr_QH519Depot_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QH519Depot_2, 
                style: style_QH519Depot_2,
                popuplayertitle: "QH519-Depot",
                interactive: false,
                title: '<img src="styles/legend/QH519Depot_2.png" /> QH519-Depot'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_QH519Tuyen_1.setVisible(true);lyr_QH519Depot_2.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_QH519Tuyen_1,lyr_QH519Depot_2];
lyr_QH519Tuyen_1.set('fieldAliases', {'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'quanhuyen': 'quanhuyen', 'phuongxa': 'phuongxa', 'tmdt': 'tmdt', 'nguonvon': 'nguonvon', 'chudautu': 'chudautu', 'thoigianth': 'thoigianth', 'chieudai': 'chieudai', 'cao': 'cao', 'matdat': 'matdat', 'ngam': 'ngam', 'soga': 'soga', 'gacao': 'gacao', 'gamatdat': 'gamatdat', 'gangam': 'gangam', 'sodepot': 'sodepot', 'sodoantau': 'sodoantau', 'capdien': 'capdien', 'tocdotk': 'tocdotk', 'tocdovanha': 'tocdovanha', 'tggiancach': 'tggiancach', 'giomo': 'giomo', 'giodong': 'giodong', 'luotkhach': 'luotkhach', 'giaveluot': 'giaveluot', 'giavethang': 'giavethang', 'thcbdt': 'thcbdt', 'ththdt': 'ththdt', });
lyr_QH519Depot_2.set('fieldAliases', {'fid': 'fid', });
lyr_QH519Tuyen_1.set('fieldImages', {'fid': '', 'tuyen': '', 'doantuyen': '', 'huongtuyen': '', 'quanhuyen': '', 'phuongxa': '', 'tmdt': '', 'nguonvon': '', 'chudautu': '', 'thoigianth': '', 'chieudai': '', 'cao': '', 'matdat': '', 'ngam': '', 'soga': '', 'gacao': '', 'gamatdat': '', 'gangam': '', 'sodepot': '', 'sodoantau': '', 'capdien': '', 'tocdotk': '', 'tocdovanha': '', 'tggiancach': '', 'giomo': '', 'giodong': '', 'luotkhach': '', 'giaveluot': '', 'giavethang': '', 'thcbdt': '', 'ththdt': '', });
lyr_QH519Depot_2.set('fieldImages', {'fid': '', });
lyr_QH519Tuyen_1.set('fieldLabels', {'fid': 'no label', 'tuyen': 'header label - visible with data', 'doantuyen': 'inline label - visible with data', 'huongtuyen': 'inline label - visible with data', 'quanhuyen': 'inline label - visible with data', 'phuongxa': 'inline label - visible with data', 'tmdt': 'inline label - visible with data', 'nguonvon': 'inline label - visible with data', 'chudautu': 'inline label - visible with data', 'thoigianth': 'inline label - visible with data', 'chieudai': 'inline label - visible with data', 'cao': 'inline label - visible with data', 'matdat': 'inline label - visible with data', 'ngam': 'inline label - visible with data', 'soga': 'inline label - visible with data', 'gacao': 'inline label - visible with data', 'gamatdat': 'inline label - visible with data', 'gangam': 'inline label - visible with data', 'sodepot': 'inline label - visible with data', 'sodoantau': 'inline label - visible with data', 'capdien': 'inline label - visible with data', 'tocdotk': 'inline label - visible with data', 'tocdovanha': 'inline label - visible with data', 'tggiancach': 'inline label - visible with data', 'giomo': 'inline label - visible with data', 'giodong': 'inline label - visible with data', 'luotkhach': 'inline label - visible with data', 'giaveluot': 'inline label - visible with data', 'giavethang': 'inline label - visible with data', 'thcbdt': 'inline label - visible with data', 'ththdt': 'inline label - visible with data', });
lyr_QH519Depot_2.set('fieldLabels', {'fid': 'no label', });
lyr_QH519Depot_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});