var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            //'type': 'base',
            'opacity': 0.800000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleLabels_2 = new ol.layer.Tile({
            'title': 'Google Labels',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });
var format_M3_3 = new ol.format.GeoJSON();
var features_M3_3 = format_M3_3.readFeatures(json_M3_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_M3_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_M3_3.addFeatures(features_M3_3);
var lyr_M3_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_M3_3, 
                style: style_M3_3,
                popuplayertitle: "M3",
                interactive: true,
                title: '<img src="styles/legend/M3_3.png" /> M3'
            });
var format_M2_4 = new ol.format.GeoJSON();
var features_M2_4 = format_M2_4.readFeatures(json_M2_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_M2_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_M2_4.addFeatures(features_M2_4);
var lyr_M2_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_M2_4, 
                style: style_M2_4,
                popuplayertitle: "M2",
                interactive: true,
                title: '<img src="styles/legend/M2_4.png" /> M2'
            });
var format_M1_5 = new ol.format.GeoJSON();
var features_M1_5 = format_M1_5.readFeatures(json_M1_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_M1_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_M1_5.addFeatures(features_M1_5);
var lyr_M1_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_M1_5, 
                style: style_M1_5,
                popuplayertitle: "M1",
                interactive: true,
                title: '<img src="styles/legend/M1_5.png" /> M1'
            });
var format_Linektniccthvtinh_6 = new ol.format.GeoJSON();
var features_Linektniccthvtinh_6 = format_Linektniccthvtinh_6.readFeatures(json_Linektniccthvtinh_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Linektniccthvtinh_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Linektniccthvtinh_6.addFeatures(features_Linektniccthvtinh_6);
var lyr_Linektniccthvtinh_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Linektniccthvtinh_6, 
                style: style_Linektniccthvtinh_6,
                popuplayertitle: "Line kết nối các đô thị vệ tinh",
                interactive: true,
                title: '<img src="styles/legend/Linektniccthvtinh_6.png" /> Line kết nối các đô thị vệ tinh'
            });
var format_Line8SnngMaiDchDngX_7 = new ol.format.GeoJSON();
var features_Line8SnngMaiDchDngX_7 = format_Line8SnngMaiDchDngX_7.readFeatures(json_Line8SnngMaiDchDngX_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line8SnngMaiDchDngX_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line8SnngMaiDchDngX_7.addFeatures(features_Line8SnngMaiDchDngX_7);
var lyr_Line8SnngMaiDchDngX_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line8SnngMaiDchDngX_7, 
                style: style_Line8SnngMaiDchDngX_7,
                popuplayertitle: "Line 8 (Sơn Đồng - Mai Dịch - Dương Xá)",
                interactive: true,
                title: '<img src="styles/legend/Line8SnngMaiDchDngX_7.png" /> Line 8 (Sơn Đồng - Mai Dịch - Dương Xá)'
            });
var format_Line7MLinhHng_8 = new ol.format.GeoJSON();
var features_Line7MLinhHng_8 = format_Line7MLinhHng_8.readFeatures(json_Line7MLinhHng_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line7MLinhHng_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line7MLinhHng_8.addFeatures(features_Line7MLinhHng_8);
var lyr_Line7MLinhHng_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line7MLinhHng_8, 
                style: style_Line7MLinhHng_8,
                popuplayertitle: "Line 7 (Mê Linh - Hà Đông)",
                interactive: true,
                title: '<img src="styles/legend/Line7MLinhHng_8.png" /> Line 7 (Mê Linh - Hà Đông)'
            });
var format_Line6NiBiNgcHi_9 = new ol.format.GeoJSON();
var features_Line6NiBiNgcHi_9 = format_Line6NiBiNgcHi_9.readFeatures(json_Line6NiBiNgcHi_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line6NiBiNgcHi_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line6NiBiNgcHi_9.addFeatures(features_Line6NiBiNgcHi_9);
var lyr_Line6NiBiNgcHi_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line6NiBiNgcHi_9, 
                style: style_Line6NiBiNgcHi_9,
                popuplayertitle: "Line 6 (Nội Bài - Ngọc Hồi)",
                interactive: true,
                title: '<img src="styles/legend/Line6NiBiNgcHi_9.png" /> Line 6 (Nội Bài - Ngọc Hồi)'
            });
var format_Line5VnCaoHaLc_10 = new ol.format.GeoJSON();
var features_Line5VnCaoHaLc_10 = format_Line5VnCaoHaLc_10.readFeatures(json_Line5VnCaoHaLc_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line5VnCaoHaLc_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line5VnCaoHaLc_10.addFeatures(features_Line5VnCaoHaLc_10);
var lyr_Line5VnCaoHaLc_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line5VnCaoHaLc_10, 
                style: style_Line5VnCaoHaLc_10,
                popuplayertitle: "Line 5 (Văn Cao - Hòa Lạc)",
                interactive: true,
                title: '<img src="styles/legend/Line5VnCaoHaLc_10.png" /> Line 5 (Văn Cao - Hòa Lạc)'
            });
var format_Line4MLinhSingLinH_11 = new ol.format.GeoJSON();
var features_Line4MLinhSingLinH_11 = format_Line4MLinhSingLinH_11.readFeatures(json_Line4MLinhSingLinH_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line4MLinhSingLinH_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line4MLinhSingLinH_11.addFeatures(features_Line4MLinhSingLinH_11);
var lyr_Line4MLinhSingLinH_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line4MLinhSingLinH_11, 
                style: style_Line4MLinhSingLinH_11,
                popuplayertitle: "Line 4 (Mê Linh - Sài Đồng - Liên Hà)",
                interactive: true,
                title: '<img src="styles/legend/Line4MLinhSingLinH_11.png" /> Line 4 (Mê Linh - Sài Đồng - Liên Hà)'
            });
var format_Line3onkodinSnTy_12 = new ol.format.GeoJSON();
var features_Line3onkodinSnTy_12 = format_Line3onkodinSnTy_12.readFeatures(json_Line3onkodinSnTy_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line3onkodinSnTy_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line3onkodinSnTy_12.addFeatures(features_Line3onkodinSnTy_12);
var lyr_Line3onkodinSnTy_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line3onkodinSnTy_12, 
                style: style_Line3onkodinSnTy_12,
                popuplayertitle: "Line 3 đoạn kéo dài đến Sơn Tây",
                interactive: true,
                title: '<img src="styles/legend/Line3onkodinSnTy_12.png" /> Line 3 đoạn kéo dài đến Sơn Tây'
            });
var format_Line3onTriNhn_13 = new ol.format.GeoJSON();
var features_Line3onTriNhn_13 = format_Line3onTriNhn_13.readFeatures(json_Line3onTriNhn_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line3onTriNhn_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line3onTriNhn_13.addFeatures(features_Line3onTriNhn_13);
var lyr_Line3onTriNhn_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line3onTriNhn_13, 
                style: style_Line3onTriNhn_13,
                popuplayertitle: "Line 3 đoạn Trôi - Nhổn",
                interactive: true,
                title: '<img src="styles/legend/Line3onTriNhn_13.png" /> Line 3 đoạn Trôi - Nhổn'
            });
var format_Line32onGaHNiYnS_14 = new ol.format.GeoJSON();
var features_Line32onGaHNiYnS_14 = format_Line32onGaHNiYnS_14.readFeatures(json_Line32onGaHNiYnS_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line32onGaHNiYnS_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line32onGaHNiYnS_14.addFeatures(features_Line32onGaHNiYnS_14);
var lyr_Line32onGaHNiYnS_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line32onGaHNiYnS_14, 
                style: style_Line32onGaHNiYnS_14,
                popuplayertitle: "Line 3.2 đoạn Ga Hà Nội - Yên Sở",
                interactive: true,
                title: '<img src="styles/legend/Line32onGaHNiYnS_14.png" /> Line 3.2 đoạn Ga Hà Nội - Yên Sở'
            });
var format_Line31onNhnGaHNi_15 = new ol.format.GeoJSON();
var features_Line31onNhnGaHNi_15 = format_Line31onNhnGaHNi_15.readFeatures(json_Line31onNhnGaHNi_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line31onNhnGaHNi_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line31onNhnGaHNi_15.addFeatures(features_Line31onNhnGaHNi_15);
var lyr_Line31onNhnGaHNi_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line31onNhnGaHNi_15, 
                style: style_Line31onNhnGaHNi_15,
                popuplayertitle: "Line 3.1 đoạn Nhổn - Ga Hà Nội",
                interactive: true,
                title: '<img src="styles/legend/Line31onNhnGaHNi_15.png" /> Line 3.1 đoạn Nhổn - Ga Hà Nội'
            });
var format_Line2AonkodinXunMai_16 = new ol.format.GeoJSON();
var features_Line2AonkodinXunMai_16 = format_Line2AonkodinXunMai_16.readFeatures(json_Line2AonkodinXunMai_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line2AonkodinXunMai_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line2AonkodinXunMai_16.addFeatures(features_Line2AonkodinXunMai_16);
var lyr_Line2AonkodinXunMai_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line2AonkodinXunMai_16, 
                style: style_Line2AonkodinXunMai_16,
                popuplayertitle: "Line 2A đoạn kéo dài đến Xuân Mai",
                interactive: true,
                title: '<img src="styles/legend/Line2AonkodinXunMai_16.png" /> Line 2A đoạn kéo dài đến Xuân Mai'
            });
var format_Line2ACtLinhHng_17 = new ol.format.GeoJSON();
var features_Line2ACtLinhHng_17 = format_Line2ACtLinhHng_17.readFeatures(json_Line2ACtLinhHng_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line2ACtLinhHng_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line2ACtLinhHng_17.addFeatures(features_Line2ACtLinhHng_17);
var lyr_Line2ACtLinhHng_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line2ACtLinhHng_17, 
                style: style_Line2ACtLinhHng_17,
                popuplayertitle: "Line 2A Cát Linh - Hà Đông",
                interactive: true,
                title: '<img src="styles/legend/Line2ACtLinhHng_17.png" /> Line 2A Cát Linh - Hà Đông'
            });
var format_Line2onkodinScSn_18 = new ol.format.GeoJSON();
var features_Line2onkodinScSn_18 = format_Line2onkodinScSn_18.readFeatures(json_Line2onkodinScSn_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line2onkodinScSn_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line2onkodinScSn_18.addFeatures(features_Line2onkodinScSn_18);
var lyr_Line2onkodinScSn_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line2onkodinScSn_18, 
                style: style_Line2onkodinScSn_18,
                popuplayertitle: "Line 2 đoạn kéo dài đến Sóc Sơn",
                interactive: true,
                title: '<img src="styles/legend/Line2onkodinScSn_18.png" /> Line 2 đoạn kéo dài đến Sóc Sơn'
            });
var format_Line2onThngnhV25Bi_19 = new ol.format.GeoJSON();
var features_Line2onThngnhV25Bi_19 = format_Line2onThngnhV25Bi_19.readFeatures(json_Line2onThngnhV25Bi_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line2onThngnhV25Bi_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line2onThngnhV25Bi_19.addFeatures(features_Line2onThngnhV25Bi_19);
var lyr_Line2onThngnhV25Bi_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line2onThngnhV25Bi_19, 
                style: style_Line2onThngnhV25Bi_19,
                popuplayertitle: "Line 2 đoạn Thượng Đình - VĐ2.5 - Bưởi",
                interactive: true,
                title: '<img src="styles/legend/Line2onThngnhV25Bi_19.png" /> Line 2 đoạn Thượng Đình - VĐ2.5 - Bưởi'
            });
var format_Line23onNiBiNamThngLong_20 = new ol.format.GeoJSON();
var features_Line23onNiBiNamThngLong_20 = format_Line23onNiBiNamThngLong_20.readFeatures(json_Line23onNiBiNamThngLong_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line23onNiBiNamThngLong_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line23onNiBiNamThngLong_20.addFeatures(features_Line23onNiBiNamThngLong_20);
var lyr_Line23onNiBiNamThngLong_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line23onNiBiNamThngLong_20, 
                style: style_Line23onNiBiNamThngLong_20,
                popuplayertitle: "Line 2.3 đoạn Nội Bài - Nam Thăng Long",
                interactive: true,
                title: '<img src="styles/legend/Line23onNiBiNamThngLong_20.png" /> Line 2.3 đoạn Nội Bài - Nam Thăng Long'
            });
var format_Line22onTrnHngoThngnh_21 = new ol.format.GeoJSON();
var features_Line22onTrnHngoThngnh_21 = format_Line22onTrnHngoThngnh_21.readFeatures(json_Line22onTrnHngoThngnh_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line22onTrnHngoThngnh_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line22onTrnHngoThngnh_21.addFeatures(features_Line22onTrnHngoThngnh_21);
var lyr_Line22onTrnHngoThngnh_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line22onTrnHngoThngnh_21, 
                style: style_Line22onTrnHngoThngnh_21,
                popuplayertitle: "Line 2.2 đoạn Trần Hưng Đạo - Thượng Đình",
                interactive: true,
                title: '<img src="styles/legend/Line22onTrnHngoThngnh_21.png" /> Line 2.2 đoạn Trần Hưng Đạo - Thượng Đình'
            });
var format_Line21onNamThngLongTrnHngo_22 = new ol.format.GeoJSON();
var features_Line21onNamThngLongTrnHngo_22 = format_Line21onNamThngLongTrnHngo_22.readFeatures(json_Line21onNamThngLongTrnHngo_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line21onNamThngLongTrnHngo_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line21onNamThngLongTrnHngo_22.addFeatures(features_Line21onNamThngLongTrnHngo_22);
var lyr_Line21onNamThngLongTrnHngo_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line21onNamThngLongTrnHngo_22, 
                style: style_Line21onNamThngLongTrnHngo_22,
                popuplayertitle: "Line 2.1 đoạn Nam Thăng Long - Trần Hưng Đạo",
                interactive: true,
                title: '<img src="styles/legend/Line21onNamThngLongTrnHngo_22.png" /> Line 2.1 đoạn Nam Thăng Long - Trần Hưng Đạo'
            });
var format_Line1onGiaLmDngX_23 = new ol.format.GeoJSON();
var features_Line1onGiaLmDngX_23 = format_Line1onGiaLmDngX_23.readFeatures(json_Line1onGiaLmDngX_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line1onGiaLmDngX_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line1onGiaLmDngX_23.addFeatures(features_Line1onGiaLmDngX_23);
var lyr_Line1onGiaLmDngX_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line1onGiaLmDngX_23, 
                style: style_Line1onGiaLmDngX_23,
                popuplayertitle: "Line 1 đoạn Gia Lâm - Dương Xá",
                interactive: true,
                title: '<img src="styles/legend/Line1onGiaLmDngX_23.png" /> Line 1 đoạn Gia Lâm - Dương Xá'
            });
var format_Line1onNgcHiYnVin_24 = new ol.format.GeoJSON();
var features_Line1onNgcHiYnVin_24 = format_Line1onNgcHiYnVin_24.readFeatures(json_Line1onNgcHiYnVin_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Line1onNgcHiYnVin_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line1onNgcHiYnVin_24.addFeatures(features_Line1onNgcHiYnVin_24);
var lyr_Line1onNgcHiYnVin_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line1onNgcHiYnVin_24, 
                style: style_Line1onNgcHiYnVin_24,
                popuplayertitle: "Line 1 đoạn Ngọc Hồi - Yên Viên",
                interactive: true,
                title: '<img src="styles/legend/Line1onNgcHiYnVin_24.png" /> Line 1 đoạn Ngọc Hồi - Yên Viên'
            });
var format_Text_25 = new ol.format.GeoJSON();
var features_Text_25 = format_Text_25.readFeatures(json_Text_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Text_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Text_25.addFeatures(features_Text_25);
var lyr_Text_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Text_25, 
                style: style_Text_25,
                popuplayertitle: "Text",
                interactive: true,
                title: 'Text'
            });
var format_VtrGAtuyn23_26 = new ol.format.GeoJSON();
var features_VtrGAtuyn23_26 = format_VtrGAtuyn23_26.readFeatures(json_VtrGAtuyn23_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VtrGAtuyn23_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VtrGAtuyn23_26.addFeatures(features_VtrGAtuyn23_26);
var lyr_VtrGAtuyn23_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VtrGAtuyn23_26, 
                style: style_VtrGAtuyn23_26,
                popuplayertitle: "Vị trí GA tuyến 2.3",
                interactive: true,
                title: '<img src="styles/legend/VtrGAtuyn23_26.png" /> Vị trí GA tuyến 2.3'
            });
var format_VtrGAtuyn21_27 = new ol.format.GeoJSON();
var features_VtrGAtuyn21_27 = format_VtrGAtuyn21_27.readFeatures(json_VtrGAtuyn21_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VtrGAtuyn21_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VtrGAtuyn21_27.addFeatures(features_VtrGAtuyn21_27);
var lyr_VtrGAtuyn21_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VtrGAtuyn21_27, 
                style: style_VtrGAtuyn21_27,
                popuplayertitle: "Vị trí GA tuyến 2.1",
                interactive: true,
                title: '<img src="styles/legend/VtrGAtuyn21_27.png" /> Vị trí GA tuyến 2.1'
            });
var format_DepotQH519_28 = new ol.format.GeoJSON();
var features_DepotQH519_28 = format_DepotQH519_28.readFeatures(json_DepotQH519_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DepotQH519_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DepotQH519_28.addFeatures(features_DepotQH519_28);
var lyr_DepotQH519_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DepotQH519_28, 
                style: style_DepotQH519_28,
                popuplayertitle: "Depot QH519",
                interactive: true,
                title: '<img src="styles/legend/DepotQH519_28.png" /> Depot QH519'
            });
var group_VtrGA = new ol.layer.Group({
                                layers: [lyr_VtrGAtuyn23_26,lyr_VtrGAtuyn21_27,lyr_DepotQH519_28,],
                                fold: "open",
                                title: "Vị trí GA"});
var group_QH519 = new ol.layer.Group({
                                layers: [lyr_Linektniccthvtinh_6,lyr_Line8SnngMaiDchDngX_7,lyr_Line7MLinhHng_8,lyr_Line6NiBiNgcHi_9,lyr_Line5VnCaoHaLc_10,lyr_Line4MLinhSingLinH_11,lyr_Line3onkodinSnTy_12,lyr_Line3onTriNhn_13,lyr_Line32onGaHNiYnS_14,lyr_Line31onNhnGaHNi_15,lyr_Line2AonkodinXunMai_16,lyr_Line2ACtLinhHng_17,lyr_Line2onkodinScSn_18,lyr_Line2onThngnhV25Bi_19,lyr_Line23onNiBiNamThngLong_20,lyr_Line22onTrnHngoThngnh_21,lyr_Line21onNamThngLongTrnHngo_22,lyr_Line1onGiaLmDngX_23,lyr_Line1onNgcHiYnVin_24,lyr_Text_25,],
                                fold: "open",
                                title: "QH519"});
var group_Monorail = new ol.layer.Group({
                                layers: [lyr_M3_3,lyr_M2_4,lyr_M1_5,],
                                fold: "open",
                                title: "Monorail"});

lyr_GoogleRoad_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleLabels_2.setVisible(true);lyr_M3_3.setVisible(true);lyr_M2_4.setVisible(true);lyr_M1_5.setVisible(true);lyr_Linektniccthvtinh_6.setVisible(true);lyr_Line8SnngMaiDchDngX_7.setVisible(true);lyr_Line7MLinhHng_8.setVisible(true);lyr_Line6NiBiNgcHi_9.setVisible(true);lyr_Line5VnCaoHaLc_10.setVisible(true);lyr_Line4MLinhSingLinH_11.setVisible(true);lyr_Line3onkodinSnTy_12.setVisible(true);lyr_Line3onTriNhn_13.setVisible(true);lyr_Line32onGaHNiYnS_14.setVisible(true);lyr_Line31onNhnGaHNi_15.setVisible(true);lyr_Line2AonkodinXunMai_16.setVisible(true);lyr_Line2ACtLinhHng_17.setVisible(true);lyr_Line2onkodinScSn_18.setVisible(true);lyr_Line2onThngnhV25Bi_19.setVisible(true);lyr_Line23onNiBiNamThngLong_20.setVisible(true);lyr_Line22onTrnHngoThngnh_21.setVisible(true);lyr_Line21onNamThngLongTrnHngo_22.setVisible(true);lyr_Line1onGiaLmDngX_23.setVisible(true);lyr_Line1onNgcHiYnVin_24.setVisible(true);lyr_Text_25.setVisible(true);lyr_VtrGAtuyn23_26.setVisible(true);lyr_VtrGAtuyn21_27.setVisible(true);lyr_DepotQH519_28.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_GoogleSatellite_1,lyr_GoogleLabels_2,group_Monorail,group_QH519,group_VtrGA];
lyr_M3_3.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', 'Tuyen': 'Tuyen', });
lyr_M2_4.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', 'Tuyen': 'Tuyen', });
lyr_M1_5.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', 'Tuyen': 'Tuyen', });
lyr_Linektniccthvtinh_6.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', 'Tuyen': 'Tuyen', });
lyr_Line8SnngMaiDchDngX_7.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', 'Tuyen': 'Tuyen', });
lyr_Line7MLinhHng_8.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', 'Tuyen': 'Tuyen', });
lyr_Line6NiBiNgcHi_9.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', 'Tuyen': 'Tuyen', });
lyr_Line5VnCaoHaLc_10.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', 'Tuyen': 'Tuyen', });
lyr_Line4MLinhSingLinH_11.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', 'Tuyen': 'Tuyen', });
lyr_Line3onkodinSnTy_12.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', 'Tuyen': 'Tuyen', });
lyr_Line3onTriNhn_13.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', 'Tuyen': 'Tuyen', });
lyr_Line32onGaHNiYnS_14.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', 'Tuyen': 'Tuyen', });
lyr_Line31onNhnGaHNi_15.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', 'Tuyen': 'Tuyen', });
lyr_Line2AonkodinXunMai_16.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', 'Tuyen': 'Tuyen', });
lyr_Line2ACtLinhHng_17.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', 'Tuyen': 'Tuyen', });
lyr_Line2onkodinScSn_18.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', 'Tuyen': 'Tuyen', });
lyr_Line2onThngnhV25Bi_19.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', 'Tuyen': 'Tuyen', });
lyr_Line23onNiBiNamThngLong_20.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', 'Tuyen': 'Tuyen', });
lyr_Line22onTrnHngoThngnh_21.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', 'Tuyen': 'Tuyen', });
lyr_Line21onNamThngLongTrnHngo_22.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', 'Tuyen': 'Tuyen', });
lyr_Line1onGiaLmDngX_23.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', 'Tuyen': 'Tuyen', });
lyr_Line1onNgcHiYnVin_24.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'width': 'width', 'thickness': 'thickness', 'ext': 'ext', 'Tuyen': 'Tuyen', });
lyr_Text_25.set('fieldAliases', {'id': 'id', 'Text': 'Text', 'Ma': 'Ma', 'Tuyen': 'Tuyen', });
lyr_VtrGAtuyn23_26.set('fieldAliases', {'Tên Tuyến': 'Tên Tuyến', 'Tên Ga': 'Tên Ga', 'Tọa độ X': 'Tọa độ X', 'Tọa độ Y': 'Tọa độ Y', });
lyr_VtrGAtuyn21_27.set('fieldAliases', {'Tên Tuyến': 'Tên Tuyến', 'Tên Ga': 'Tên Ga', 'Tọa độ X': 'Tọa độ X', 'Tọa độ Y': 'Tọa độ Y', });
lyr_DepotQH519_28.set('fieldAliases', {'Tên': 'Tên', 'Tọa đ��': 'Tọa đ��', 'Tọa đ_1': 'Tọa đ_1', 'Tuyen': 'Tuyen', });
lyr_M3_3.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', 'Tuyen': '', });
lyr_M2_4.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', 'Tuyen': '', });
lyr_M1_5.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', 'Tuyen': '', });
lyr_Linektniccthvtinh_6.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', 'Tuyen': '', });
lyr_Line8SnngMaiDchDngX_7.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', 'Tuyen': '', });
lyr_Line7MLinhHng_8.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', 'Tuyen': '', });
lyr_Line6NiBiNgcHi_9.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', 'Tuyen': '', });
lyr_Line5VnCaoHaLc_10.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', 'Tuyen': 'TextEdit', });
lyr_Line4MLinhSingLinH_11.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', 'Tuyen': '', });
lyr_Line3onkodinSnTy_12.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', 'Tuyen': '', });
lyr_Line3onTriNhn_13.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', 'Tuyen': '', });
lyr_Line32onGaHNiYnS_14.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', 'Tuyen': 'TextEdit', });
lyr_Line31onNhnGaHNi_15.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', 'Tuyen': 'TextEdit', });
lyr_Line2AonkodinXunMai_16.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', 'Tuyen': '', });
lyr_Line2ACtLinhHng_17.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', 'Tuyen': 'TextEdit', });
lyr_Line2onkodinScSn_18.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', 'Tuyen': '', });
lyr_Line2onThngnhV25Bi_19.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', 'Tuyen': '', });
lyr_Line23onNiBiNamThngLong_20.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', 'Tuyen': '', });
lyr_Line22onTrnHngoThngnh_21.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', 'Tuyen': '', });
lyr_Line21onNamThngLongTrnHngo_22.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', 'Tuyen': 'TextEdit', });
lyr_Line1onGiaLmDngX_23.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', 'Tuyen': '', });
lyr_Line1onNgcHiYnVin_24.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'width': 'TextEdit', 'thickness': 'TextEdit', 'ext': 'TextEdit', 'Tuyen': '', });
lyr_Text_25.set('fieldImages', {'id': 'TextEdit', 'Text': 'TextEdit', 'Ma': 'TextEdit', 'Tuyen': 'TextEdit', });
lyr_VtrGAtuyn23_26.set('fieldImages', {'Tên Tuyến': 'TextEdit', 'Tên Ga': 'TextEdit', 'Tọa độ X': 'TextEdit', 'Tọa độ Y': 'TextEdit', });
lyr_VtrGAtuyn21_27.set('fieldImages', {'Tên Tuyến': 'TextEdit', 'Tên Ga': 'TextEdit', 'Tọa độ X': 'TextEdit', 'Tọa độ Y': 'TextEdit', });
lyr_DepotQH519_28.set('fieldImages', {'Tên': 'TextEdit', 'Tọa đ��': 'TextEdit', 'Tọa đ_1': 'TextEdit', 'Tuyen': 'TextEdit', });
lyr_M3_3.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparency': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'width': 'no label', 'thickness': 'no label', 'ext': 'no label', 'Tuyen': 'inline label - always visible', });
lyr_M2_4.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparency': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'width': 'no label', 'thickness': 'no label', 'ext': 'no label', 'Tuyen': 'inline label - always visible', });
lyr_M1_5.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparency': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'width': 'no label', 'thickness': 'no label', 'ext': 'no label', 'Tuyen': 'inline label - always visible', });
lyr_Linektniccthvtinh_6.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparency': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'width': 'no label', 'thickness': 'no label', 'ext': 'no label', 'Tuyen': 'inline label - always visible', });
lyr_Line8SnngMaiDchDngX_7.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparency': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'width': 'no label', 'thickness': 'no label', 'ext': 'no label', 'Tuyen': 'inline label - always visible', });
lyr_Line7MLinhHng_8.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparency': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'width': 'no label', 'thickness': 'no label', 'ext': 'no label', 'Tuyen': 'inline label - always visible', });
lyr_Line6NiBiNgcHi_9.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparency': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'width': 'no label', 'thickness': 'no label', 'ext': 'no label', 'Tuyen': 'inline label - always visible', });
lyr_Line5VnCaoHaLc_10.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparency': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'width': 'no label', 'thickness': 'no label', 'ext': 'no label', 'Tuyen': 'inline label - always visible', });
lyr_Line4MLinhSingLinH_11.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparency': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'width': 'no label', 'thickness': 'no label', 'ext': 'no label', 'Tuyen': 'inline label - always visible', });
lyr_Line3onkodinSnTy_12.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparency': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'width': 'no label', 'thickness': 'no label', 'ext': 'no label', 'Tuyen': 'inline label - always visible', });
lyr_Line3onTriNhn_13.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparency': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'width': 'no label', 'thickness': 'no label', 'ext': 'no label', 'Tuyen': 'inline label - always visible', });
lyr_Line32onGaHNiYnS_14.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparency': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'width': 'no label', 'thickness': 'no label', 'ext': 'no label', 'Tuyen': 'inline label - always visible', });
lyr_Line31onNhnGaHNi_15.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparency': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'width': 'no label', 'thickness': 'no label', 'ext': 'no label', 'Tuyen': 'inline label - always visible', });
lyr_Line2AonkodinXunMai_16.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparency': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'width': 'no label', 'thickness': 'no label', 'ext': 'no label', 'Tuyen': 'inline label - always visible', });
lyr_Line2ACtLinhHng_17.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparency': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'width': 'no label', 'thickness': 'no label', 'ext': 'no label', 'Tuyen': 'inline label - always visible', });
lyr_Line2onkodinScSn_18.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparency': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'width': 'no label', 'thickness': 'no label', 'ext': 'no label', 'Tuyen': 'inline label - always visible', });
lyr_Line2onThngnhV25Bi_19.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparency': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'width': 'no label', 'thickness': 'no label', 'ext': 'no label', 'Tuyen': 'inline label - always visible', });
lyr_Line23onNiBiNamThngLong_20.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparency': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'width': 'no label', 'thickness': 'no label', 'ext': 'no label', 'Tuyen': 'inline label - always visible', });
lyr_Line22onTrnHngoThngnh_21.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparency': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'width': 'no label', 'thickness': 'no label', 'ext': 'no label', 'Tuyen': 'inline label - always visible', });
lyr_Line21onNamThngLongTrnHngo_22.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparency': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'width': 'no label', 'thickness': 'no label', 'ext': 'no label', 'Tuyen': 'inline label - always visible', });
lyr_Line1onGiaLmDngX_23.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparency': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'width': 'no label', 'thickness': 'no label', 'ext': 'no label', 'Tuyen': 'inline label - always visible', });
lyr_Line1onNgcHiYnVin_24.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparency': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'width': 'no label', 'thickness': 'no label', 'ext': 'no label', 'Tuyen': 'inline label - always visible', });
lyr_Text_25.set('fieldLabels', {'id': 'no label', 'Text': 'no label', 'Ma': 'no label', 'Tuyen': 'no label', });
lyr_VtrGAtuyn23_26.set('fieldLabels', {'Tên Tuyến': 'no label', 'Tên Ga': 'inline label - always visible', 'Tọa độ X': 'no label', 'Tọa độ Y': 'no label', });
lyr_VtrGAtuyn21_27.set('fieldLabels', {'Tên Tuyến': 'no label', 'Tên Ga': 'inline label - always visible', 'Tọa độ X': 'no label', 'Tọa độ Y': 'no label', });
lyr_DepotQH519_28.set('fieldLabels', {'Tên': 'no label', 'Tọa đ��': 'no label', 'Tọa đ_1': 'no label', 'Tuyen': 'no label', });
lyr_DepotQH519_28.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});