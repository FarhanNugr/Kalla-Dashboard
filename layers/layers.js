var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_CadanganMigasperWilayah_1 = new ol.format.GeoJSON();
var features_CadanganMigasperWilayah_1 = format_CadanganMigasperWilayah_1.readFeatures(json_CadanganMigasperWilayah_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CadanganMigasperWilayah_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CadanganMigasperWilayah_1.addFeatures(features_CadanganMigasperWilayah_1);
var lyr_CadanganMigasperWilayah_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CadanganMigasperWilayah_1, 
                style: style_CadanganMigasperWilayah_1,
                popuplayertitle: 'Cadangan Migas per Wilayah',
                interactive: true,
    title: 'Cadangan Migas per Wilayah<br />\
    <img src="styles/legend/CadanganMigasperWilayah_1_0.png" /> ACEH<br />\
    <img src="styles/legend/CadanganMigasperWilayah_1_1.png" /> JAWA BAGIAN BARAT<br />\
    <img src="styles/legend/CadanganMigasperWilayah_1_2.png" /> JAWA BAGIAN TIMUR<br />\
    <img src="styles/legend/CadanganMigasperWilayah_1_3.png" /> KALIMANTAN<br />\
    <img src="styles/legend/CadanganMigasperWilayah_1_4.png" /> MALUKU<br />\
    <img src="styles/legend/CadanganMigasperWilayah_1_5.png" /> NATUNA<br />\
    <img src="styles/legend/CadanganMigasperWilayah_1_6.png" /> PAPUA<br />\
    <img src="styles/legend/CadanganMigasperWilayah_1_7.png" /> SULAWESI<br />\
    <img src="styles/legend/CadanganMigasperWilayah_1_8.png" /> SUMATRA BAGIAN SELATAN<br />\
    <img src="styles/legend/CadanganMigasperWilayah_1_9.png" /> SUMATRA BAGIAN TENGAH<br />\
    <img src="styles/legend/CadanganMigasperWilayah_1_10.png" /> SUMATRA UTARA<br />'
        });
var format_WilayahKerjaMigas_2 = new ol.format.GeoJSON();
var features_WilayahKerjaMigas_2 = format_WilayahKerjaMigas_2.readFeatures(json_WilayahKerjaMigas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WilayahKerjaMigas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WilayahKerjaMigas_2.addFeatures(features_WilayahKerjaMigas_2);
var lyr_WilayahKerjaMigas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WilayahKerjaMigas_2, 
                style: style_WilayahKerjaMigas_2,
                popuplayertitle: 'Wilayah Kerja Migas',
                interactive: true,
    title: 'Wilayah Kerja Migas<br />\
    <img src="styles/legend/WilayahKerjaMigas_2_0.png" /> DEVELOPMENT<br />\
    <img src="styles/legend/WilayahKerjaMigas_2_1.png" /> EXPLORATION<br />\
    <img src="styles/legend/WilayahKerjaMigas_2_2.png" /> PRODUCTION<br />'
        });
var format_WIUPTambang_3 = new ol.format.GeoJSON();
var features_WIUPTambang_3 = format_WIUPTambang_3.readFeatures(json_WIUPTambang_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WIUPTambang_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WIUPTambang_3.addFeatures(features_WIUPTambang_3);
var lyr_WIUPTambang_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WIUPTambang_3, 
                style: style_WIUPTambang_3,
                popuplayertitle: 'WIUP Tambang',
                interactive: true,
    title: 'WIUP Tambang<br />\
    <img src="styles/legend/WIUPTambang_3_0.png" /> Aspal<br />\
    <img src="styles/legend/WIUPTambang_3_1.png" /> Batu Bara<br />\
    <img src="styles/legend/WIUPTambang_3_2.png" /> Batuan<br />\
    <img src="styles/legend/WIUPTambang_3_3.png" /> Batuan Lainnya<br />\
    <img src="styles/legend/WIUPTambang_3_4.png" /> Emas<br />\
    <img src="styles/legend/WIUPTambang_3_5.png" /> Logam Lainnya<br />\
    <img src="styles/legend/WIUPTambang_3_6.png" /> Mineral<br />\
    <img src="styles/legend/WIUPTambang_3_7.png" /> Mineral Logam<br />\
    <img src="styles/legend/WIUPTambang_3_8.png" /> Nickel<br />\
    <img src="styles/legend/WIUPTambang_3_9.png" /> Tembaga<br />\
    <img src="styles/legend/WIUPTambang_3_10.png" /> Timah<br />'
        });
var format_TerminalGas_4 = new ol.format.GeoJSON();
var features_TerminalGas_4 = format_TerminalGas_4.readFeatures(json_TerminalGas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TerminalGas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerminalGas_4.addFeatures(features_TerminalGas_4);
var lyr_TerminalGas_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerminalGas_4, 
                style: style_TerminalGas_4,
                popuplayertitle: 'Terminal Gas',
                interactive: true,
    title: 'Terminal Gas<br />\
    <img src="styles/legend/TerminalGas_4_0.png" /> FSRU Jawa 1<br />\
    <img src="styles/legend/TerminalGas_4_1.png" /> FSRU Lampung<br />\
    <img src="styles/legend/TerminalGas_4_2.png" /> LNG Arun<br />\
    <img src="styles/legend/TerminalGas_4_3.png" /> LNG Bontang Badak<br />\
    <img src="styles/legend/TerminalGas_4_4.png" /> Terminal LNG 1<br />'
        });
var format_TerminalCNG_5 = new ol.format.GeoJSON();
var features_TerminalCNG_5 = format_TerminalCNG_5.readFeatures(json_TerminalCNG_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TerminalCNG_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerminalCNG_5.addFeatures(features_TerminalCNG_5);
var lyr_TerminalCNG_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerminalCNG_5, 
                style: style_TerminalCNG_5,
                popuplayertitle: 'Terminal CNG',
                interactive: true,
                title: '<img src="styles/legend/TerminalCNG_5.png" /> Terminal CNG'
            });
var format_TerminalGasPuloampel_6 = new ol.format.GeoJSON();
var features_TerminalGasPuloampel_6 = format_TerminalGasPuloampel_6.readFeatures(json_TerminalGasPuloampel_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TerminalGasPuloampel_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerminalGasPuloampel_6.addFeatures(features_TerminalGasPuloampel_6);
var lyr_TerminalGasPuloampel_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerminalGasPuloampel_6, 
                style: style_TerminalGasPuloampel_6,
                popuplayertitle: 'Terminal Gas Puloampel',
                interactive: true,
                title: '<img src="styles/legend/TerminalGasPuloampel_6.png" /> Terminal Gas Puloampel'
            });
var format_Smelter_7 = new ol.format.GeoJSON();
var features_Smelter_7 = format_Smelter_7.readFeatures(json_Smelter_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Smelter_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Smelter_7.addFeatures(features_Smelter_7);
var lyr_Smelter_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Smelter_7, 
                style: style_Smelter_7,
                popuplayertitle: 'Smelter',
                interactive: true,
    title: 'Smelter<br />\
    <img src="styles/legend/Smelter_7_0.png" /> Bumi Mineral Sulawesi Unit 1<br />\
    <img src="styles/legend/Smelter_7_1.png" /> Bumi Mineral Sulawesi Unit 2<br />'
        });
var format_SHPLahanKalla_8 = new ol.format.GeoJSON();
var features_SHPLahanKalla_8 = format_SHPLahanKalla_8.readFeatures(json_SHPLahanKalla_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SHPLahanKalla_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SHPLahanKalla_8.addFeatures(features_SHPLahanKalla_8);
var lyr_SHPLahanKalla_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SHPLahanKalla_8, 
                style: style_SHPLahanKalla_8,
                popuplayertitle: 'SHP Lahan Kalla',
                interactive: true,
    title: 'SHP Lahan Kalla<br />\
    <img src="styles/legend/SHPLahanKalla_8_0.png" /> Blok Kawasan Industri Belang-Belang<br />\
    <img src="styles/legend/SHPLahanKalla_8_1.png" /> Blok Kawasan Industri Suppa<br />\
    <img src="styles/legend/SHPLahanKalla_8_2.png" /> Blok Lahan Lampia<br />\
    <img src="styles/legend/SHPLahanKalla_8_3.png" /> Blok Pulauampel<br />'
        });
var format_TitikLahan_9 = new ol.format.GeoJSON();
var features_TitikLahan_9 = format_TitikLahan_9.readFeatures(json_TitikLahan_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikLahan_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikLahan_9.addFeatures(features_TitikLahan_9);
var lyr_TitikLahan_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikLahan_9, 
                style: style_TitikLahan_9,
                popuplayertitle: 'Titik Lahan',
                interactive: true,
                title: '<img src="styles/legend/TitikLahan_9.png" /> Titik Lahan'
            });
var format_PembangkitListrik_10 = new ol.format.GeoJSON();
var features_PembangkitListrik_10 = format_PembangkitListrik_10.readFeatures(json_PembangkitListrik_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PembangkitListrik_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PembangkitListrik_10.addFeatures(features_PembangkitListrik_10);
var lyr_PembangkitListrik_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PembangkitListrik_10, 
                style: style_PembangkitListrik_10,
                popuplayertitle: 'Pembangkit Listrik',
                interactive: true,
    title: 'Pembangkit Listrik<br />\
    <img src="styles/legend/PembangkitListrik_10_0.png" /> Mamuju Tumbuan Energy Atas<br />\
    <img src="styles/legend/PembangkitListrik_10_1.png" /> PLTA Bumi Mineral Sulawesi<br />\
    <img src="styles/legend/PembangkitListrik_10_2.png" /> PLTA Kerinci Merangin Hidro<br />\
    <img src="styles/legend/PembangkitListrik_10_3.png" /> PLTA Malea<br />\
    <img src="styles/legend/PembangkitListrik_10_4.png" /> PLTA Mamuju Tumbuan Energy Bawah<br />\
    <img src="styles/legend/PembangkitListrik_10_5.png" /> PLTA Poso<br />\
    <img src="styles/legend/PembangkitListrik_10_6.png" /> PLTA Poso 3<br />\
    <img src="styles/legend/PembangkitListrik_10_7.png" /> PLTGU Puloampel<br />'
        });
var format_TitikPembangkitListrik_11 = new ol.format.GeoJSON();
var features_TitikPembangkitListrik_11 = format_TitikPembangkitListrik_11.readFeatures(json_TitikPembangkitListrik_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikPembangkitListrik_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikPembangkitListrik_11.addFeatures(features_TitikPembangkitListrik_11);
var lyr_TitikPembangkitListrik_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikPembangkitListrik_11, 
                style: style_TitikPembangkitListrik_11,
                popuplayertitle: 'Titik Pembangkit Listrik',
                interactive: true,
                title: '<img src="styles/legend/TitikPembangkitListrik_11.png" /> Titik Pembangkit Listrik'
            });
var format_SHPTambang_12 = new ol.format.GeoJSON();
var features_SHPTambang_12 = format_SHPTambang_12.readFeatures(json_SHPTambang_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SHPTambang_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SHPTambang_12.addFeatures(features_SHPTambang_12);
var lyr_SHPTambang_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SHPTambang_12, 
                style: style_SHPTambang_12,
                popuplayertitle: 'SHP Tambang',
                interactive: true,
    title: 'SHP Tambang<br />\
    <img src="styles/legend/SHPTambang_12_0.png" /> Blok Assigment Licence<br />\
    <img src="styles/legend/SHPTambang_12_1.png" /> Blok Bulubalang<br />\
    <img src="styles/legend/SHPTambang_12_2.png" /> Blok Lingke<br />\
    <img src="styles/legend/SHPTambang_12_3.png" /> Blok Pongkeru<br />\
    <img src="styles/legend/SHPTambang_12_4.png" /> Blok Warga Alam Bagus<br />'
        });
var format_TitikTambang_13 = new ol.format.GeoJSON();
var features_TitikTambang_13 = format_TitikTambang_13.readFeatures(json_TitikTambang_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikTambang_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikTambang_13.addFeatures(features_TitikTambang_13);
var lyr_TitikTambang_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikTambang_13, 
                style: style_TitikTambang_13,
                popuplayertitle: 'Titik Tambang',
                interactive: true,
                title: '<img src="styles/legend/TitikTambang_13.png" /> Titik Tambang'
            });
var group_KALLATambang = new ol.layer.Group({
                                layers: [lyr_SHPTambang_12,lyr_TitikTambang_13,],
                                fold: "open",
                                title: 'KALLA | Tambang'});
var group_KALLAPembangkitListrik = new ol.layer.Group({
                                layers: [lyr_PembangkitListrik_10,lyr_TitikPembangkitListrik_11,],
                                fold: "open",
                                title: 'KALLA | Pembangkit Listrik'});
var group_KALLAAsetLahan = new ol.layer.Group({
                                layers: [lyr_SHPLahanKalla_8,lyr_TitikLahan_9,],
                                fold: "open",
                                title: 'KALLA | Aset Lahan'});
var group_KALLASmelter = new ol.layer.Group({
                                layers: [lyr_Smelter_7,],
                                fold: "open",
                                title: 'KALLA | Smelter'});
var group_KALLATerminalGas = new ol.layer.Group({
                                layers: [lyr_TerminalGasPuloampel_6,],
                                fold: "open",
                                title: 'KALLA | Terminal Gas'});
var group_INFRASTRUKTURINDONESIA = new ol.layer.Group({
                                layers: [lyr_CadanganMigasperWilayah_1,lyr_WilayahKerjaMigas_2,lyr_WIUPTambang_3,lyr_TerminalGas_4,lyr_TerminalCNG_5,],
                                fold: "open",
                                title: 'INFRASTRUKTUR INDONESIA'});

lyr_GoogleSatellite_0.setVisible(true);lyr_CadanganMigasperWilayah_1.setVisible(true);lyr_WilayahKerjaMigas_2.setVisible(true);lyr_WIUPTambang_3.setVisible(true);lyr_TerminalGas_4.setVisible(true);lyr_TerminalCNG_5.setVisible(true);lyr_TerminalGasPuloampel_6.setVisible(true);lyr_Smelter_7.setVisible(true);lyr_SHPLahanKalla_8.setVisible(true);lyr_TitikLahan_9.setVisible(true);lyr_PembangkitListrik_10.setVisible(true);lyr_TitikPembangkitListrik_11.setVisible(true);lyr_SHPTambang_12.setVisible(true);lyr_TitikTambang_13.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_INFRASTRUKTURINDONESIA,group_KALLATerminalGas,group_KALLASmelter,group_KALLAAsetLahan,group_KALLAPembangkitListrik,group_KALLATambang];
lyr_CadanganMigasperWilayah_1.set('fieldAliases', {'objectid': 'objectid', 'basin_name': 'basin_name', 'p1_mikon': 'p1_mikon', 'p2_mikon': 'p2_mikon', 'p3_mikon': 'p3_mikon', 'p1_gas': 'p1_gas', 'p2_gas': 'p2_gas', 'p3_gas': 'p3_gas', 'wilayah': 'wilayah', 'id_wil': 'id_wil', 'st_area(sh': 'st_area(sh', 'st_perimet': 'st_perimet', });
lyr_WilayahKerjaMigas_2.set('fieldAliases', {'objectid': 'objectid', 'namobj': 'namobj', 'oprblk': 'oprblk', 'effdat': 'effdat', 'expdat': 'expdat', 'status': 'status', 'srs_id': 'srs_id', 'metadata': 'metadata', });
lyr_WIUPTambang_3.set('fieldAliases', {'fid_': 'fid_', 'objectid': 'objectid', 'pulau': 'pulau', 'pejabat': 'pejabat', 'id_prov': 'id_prov', 'nama_prov': 'nama_prov', 'id_kab': 'id_kab', 'nama_kab': 'nama_kab', 'jenis_izin': 'jenis_izin', 'badan_usah': 'badan_usah', 'nama_usaha': 'nama_usaha', 'kode_wiup': 'kode_wiup', 'sk_iup': 'sk_iup', 'tgl_berlak': 'tgl_berlak', 'tgl_akhir': 'tgl_akhir', 'kegiatan': 'kegiatan', 'luas_sk': 'luas_sk', 'komoditas': 'komoditas', 'kode_golon': 'kode_golon', 'kode_jnsko': 'kode_jnsko', 'cnc': 'cnc', 'generasi': 'generasi', 'kode_wil': 'kode_wil', 'lokasi': 'lokasi', 'SHAPE__Len': 'SHAPE__Len', 'SHAPE__Are': 'SHAPE__Are', 'KomoditasB': 'KomoditasB', });
lyr_TerminalGas_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_TerminalCNG_5.set('fieldAliases', {'provinsi': 'provinsi', 'lokasi': 'lokasi', 'x': 'x', 'y': 'y', 'alamat': 'alamat', 'kapasitas': 'kapasitas', 'objectid': 'objectid', 'longitude': 'longitude', 'latitude': 'latitude', });
lyr_TerminalGasPuloampel_6.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Smelter_7.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SHPLahanKalla_8.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'Luas_Ha': 'Luas_Ha', });
lyr_TitikLahan_9.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_PembangkitListrik_10.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', });
lyr_TitikPembangkitListrik_11.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', });
lyr_SHPTambang_12.set('fieldAliases', {'Id': 'Id', 'Nama': 'Nama', 'Luas_Ha': 'Luas_Ha', 'Ore_Ton': 'Ore_Ton', });
lyr_TitikTambang_13.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CadanganMigasperWilayah_1.set('fieldImages', {'objectid': 'TextEdit', 'basin_name': 'TextEdit', 'p1_mikon': 'TextEdit', 'p2_mikon': 'TextEdit', 'p3_mikon': 'TextEdit', 'p1_gas': 'TextEdit', 'p2_gas': 'TextEdit', 'p3_gas': 'TextEdit', 'wilayah': 'TextEdit', 'id_wil': 'TextEdit', 'st_area(sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_WilayahKerjaMigas_2.set('fieldImages', {'objectid': '', 'namobj': '', 'oprblk': '', 'effdat': '', 'expdat': '', 'status': '', 'srs_id': '', 'metadata': '', });
lyr_WIUPTambang_3.set('fieldImages', {'fid_': 'TextEdit', 'objectid': 'TextEdit', 'pulau': 'TextEdit', 'pejabat': 'TextEdit', 'id_prov': 'TextEdit', 'nama_prov': 'TextEdit', 'id_kab': 'TextEdit', 'nama_kab': 'TextEdit', 'jenis_izin': 'TextEdit', 'badan_usah': 'TextEdit', 'nama_usaha': 'TextEdit', 'kode_wiup': 'TextEdit', 'sk_iup': 'TextEdit', 'tgl_berlak': 'TextEdit', 'tgl_akhir': 'TextEdit', 'kegiatan': 'TextEdit', 'luas_sk': 'TextEdit', 'komoditas': 'TextEdit', 'kode_golon': 'TextEdit', 'kode_jnsko': 'TextEdit', 'cnc': 'TextEdit', 'generasi': 'TextEdit', 'kode_wil': 'TextEdit', 'lokasi': 'TextEdit', 'SHAPE__Len': 'TextEdit', 'SHAPE__Are': 'TextEdit', 'KomoditasB': 'TextEdit', });
lyr_TerminalGas_4.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_TerminalCNG_5.set('fieldImages', {'provinsi': '', 'lokasi': '', 'x': '', 'y': '', 'alamat': '', 'kapasitas': '', 'objectid': '', 'longitude': '', 'latitude': '', });
lyr_TerminalGasPuloampel_6.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Smelter_7.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_SHPLahanKalla_8.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'Luas_Ha': 'Range', });
lyr_TitikLahan_9.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_PembangkitListrik_10.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', });
lyr_TitikPembangkitListrik_11.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', });
lyr_SHPTambang_12.set('fieldImages', {'Id': 'Range', 'Nama': 'TextEdit', 'Luas_Ha': 'TextEdit', 'Ore_Ton': 'TextEdit', });
lyr_TitikTambang_13.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_CadanganMigasperWilayah_1.set('fieldLabels', {'objectid': 'no label', 'basin_name': 'no label', 'p1_mikon': 'no label', 'p2_mikon': 'no label', 'p3_mikon': 'no label', 'p1_gas': 'no label', 'p2_gas': 'no label', 'p3_gas': 'no label', 'wilayah': 'no label', 'id_wil': 'no label', 'st_area(sh': 'no label', 'st_perimet': 'no label', });
lyr_WilayahKerjaMigas_2.set('fieldLabels', {'objectid': 'no label', 'namobj': 'no label', 'oprblk': 'no label', 'effdat': 'no label', 'expdat': 'no label', 'status': 'no label', 'srs_id': 'no label', 'metadata': 'no label', });
lyr_WIUPTambang_3.set('fieldLabels', {'fid_': 'no label', 'objectid': 'no label', 'pulau': 'no label', 'pejabat': 'no label', 'id_prov': 'no label', 'nama_prov': 'no label', 'id_kab': 'no label', 'nama_kab': 'no label', 'jenis_izin': 'no label', 'badan_usah': 'no label', 'nama_usaha': 'no label', 'kode_wiup': 'no label', 'sk_iup': 'no label', 'tgl_berlak': 'no label', 'tgl_akhir': 'no label', 'kegiatan': 'no label', 'luas_sk': 'no label', 'komoditas': 'no label', 'kode_golon': 'no label', 'kode_jnsko': 'no label', 'cnc': 'no label', 'generasi': 'no label', 'kode_wil': 'no label', 'lokasi': 'no label', 'SHAPE__Len': 'no label', 'SHAPE__Are': 'no label', 'KomoditasB': 'inline label - always visible', });
lyr_TerminalGas_4.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_TerminalCNG_5.set('fieldLabels', {'provinsi': 'no label', 'lokasi': 'no label', 'x': 'no label', 'y': 'no label', 'alamat': 'no label', 'kapasitas': 'no label', 'objectid': 'no label', 'longitude': 'no label', 'latitude': 'no label', });
lyr_TerminalGasPuloampel_6.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Smelter_7.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_SHPLahanKalla_8.set('fieldLabels', {'Name': 'header label - always visible', 'descriptio': 'no label', 'Luas_Ha': 'header label - always visible', });
lyr_TitikLahan_9.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_PembangkitListrik_10.set('fieldLabels', {'Name': 'header label - always visible', 'descriptio': 'header label - always visible', });
lyr_TitikPembangkitListrik_11.set('fieldLabels', {'Name': 'header label - always visible', 'descriptio': 'header label - always visible', });
lyr_SHPTambang_12.set('fieldLabels', {'Id': 'no label', 'Nama': 'header label - always visible', 'Luas_Ha': 'header label - always visible', 'Ore_Ton': 'header label - always visible', });
lyr_TitikTambang_13.set('fieldLabels', {'Name': 'header label - always visible', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_TitikTambang_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});