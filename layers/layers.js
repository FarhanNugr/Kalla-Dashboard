var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoad_1 = new ol.layer.Tile({
            'title': 'Google Road',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_2 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_3 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_CadanganMigasperWilayah_4 = new ol.format.GeoJSON();
var features_CadanganMigasperWilayah_4 = format_CadanganMigasperWilayah_4.readFeatures(json_CadanganMigasperWilayah_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CadanganMigasperWilayah_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CadanganMigasperWilayah_4.addFeatures(features_CadanganMigasperWilayah_4);
var lyr_CadanganMigasperWilayah_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CadanganMigasperWilayah_4, 
                style: style_CadanganMigasperWilayah_4,
                popuplayertitle: 'Cadangan Migas per Wilayah',
                interactive: true,
    title: 'Cadangan Migas per Wilayah<br />\
    <img src="styles/legend/CadanganMigasperWilayah_4_0.png" /> ACEH<br />\
    <img src="styles/legend/CadanganMigasperWilayah_4_1.png" /> JAWA BAGIAN BARAT<br />\
    <img src="styles/legend/CadanganMigasperWilayah_4_2.png" /> JAWA BAGIAN TIMUR<br />\
    <img src="styles/legend/CadanganMigasperWilayah_4_3.png" /> KALIMANTAN<br />\
    <img src="styles/legend/CadanganMigasperWilayah_4_4.png" /> MALUKU<br />\
    <img src="styles/legend/CadanganMigasperWilayah_4_5.png" /> NATUNA<br />\
    <img src="styles/legend/CadanganMigasperWilayah_4_6.png" /> PAPUA<br />\
    <img src="styles/legend/CadanganMigasperWilayah_4_7.png" /> SULAWESI<br />\
    <img src="styles/legend/CadanganMigasperWilayah_4_8.png" /> SUMATRA BAGIAN SELATAN<br />\
    <img src="styles/legend/CadanganMigasperWilayah_4_9.png" /> SUMATRA BAGIAN TENGAH<br />\
    <img src="styles/legend/CadanganMigasperWilayah_4_10.png" /> SUMATRA UTARA<br />'
        });
var format_WilayahKerjaMigas_5 = new ol.format.GeoJSON();
var features_WilayahKerjaMigas_5 = format_WilayahKerjaMigas_5.readFeatures(json_WilayahKerjaMigas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WilayahKerjaMigas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WilayahKerjaMigas_5.addFeatures(features_WilayahKerjaMigas_5);
var lyr_WilayahKerjaMigas_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WilayahKerjaMigas_5, 
                style: style_WilayahKerjaMigas_5,
                popuplayertitle: 'Wilayah Kerja Migas',
                interactive: true,
    title: 'Wilayah Kerja Migas<br />\
    <img src="styles/legend/WilayahKerjaMigas_5_0.png" /> DEVELOPMENT<br />\
    <img src="styles/legend/WilayahKerjaMigas_5_1.png" /> EXPLORATION<br />\
    <img src="styles/legend/WilayahKerjaMigas_5_2.png" /> PRODUCTION<br />'
        });
var format_WIUPTambang_6 = new ol.format.GeoJSON();
var features_WIUPTambang_6 = format_WIUPTambang_6.readFeatures(json_WIUPTambang_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WIUPTambang_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WIUPTambang_6.addFeatures(features_WIUPTambang_6);
var lyr_WIUPTambang_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WIUPTambang_6, 
                style: style_WIUPTambang_6,
                popuplayertitle: 'WIUP Tambang',
                interactive: true,
    title: 'WIUP Tambang<br />\
    <img src="styles/legend/WIUPTambang_6_0.png" /> Aspal<br />\
    <img src="styles/legend/WIUPTambang_6_1.png" /> Batu Bara<br />\
    <img src="styles/legend/WIUPTambang_6_2.png" /> Batuan<br />\
    <img src="styles/legend/WIUPTambang_6_3.png" /> Batuan Lainnya<br />\
    <img src="styles/legend/WIUPTambang_6_4.png" /> Emas<br />\
    <img src="styles/legend/WIUPTambang_6_5.png" /> Logam Lainnya<br />\
    <img src="styles/legend/WIUPTambang_6_6.png" /> Mineral<br />\
    <img src="styles/legend/WIUPTambang_6_7.png" /> Mineral Logam<br />\
    <img src="styles/legend/WIUPTambang_6_8.png" /> Nickel<br />\
    <img src="styles/legend/WIUPTambang_6_9.png" /> Tembaga<br />\
    <img src="styles/legend/WIUPTambang_6_10.png" /> Timah<br />'
        });
var format_TerminalGasLNG_7 = new ol.format.GeoJSON();
var features_TerminalGasLNG_7 = format_TerminalGasLNG_7.readFeatures(json_TerminalGasLNG_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TerminalGasLNG_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerminalGasLNG_7.addFeatures(features_TerminalGasLNG_7);
var lyr_TerminalGasLNG_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerminalGasLNG_7, 
                style: style_TerminalGasLNG_7,
                popuplayertitle: 'Terminal Gas LNG',
                interactive: true,
    title: 'Terminal Gas LNG<br />\
    <img src="styles/legend/TerminalGasLNG_7_0.png" /> FSRU Jawa 1<br />\
    <img src="styles/legend/TerminalGasLNG_7_1.png" /> FSRU Lampung<br />\
    <img src="styles/legend/TerminalGasLNG_7_2.png" /> LNG Arun<br />\
    <img src="styles/legend/TerminalGasLNG_7_3.png" /> LNG Bontang Badak<br />\
    <img src="styles/legend/TerminalGasLNG_7_4.png" /> Terminal LNG 1<br />'
        });
var format_TerminalCNG_8 = new ol.format.GeoJSON();
var features_TerminalCNG_8 = format_TerminalCNG_8.readFeatures(json_TerminalCNG_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TerminalCNG_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerminalCNG_8.addFeatures(features_TerminalCNG_8);
var lyr_TerminalCNG_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerminalCNG_8, 
                style: style_TerminalCNG_8,
                popuplayertitle: 'Terminal CNG',
                interactive: true,
                title: '<img src="styles/legend/TerminalCNG_8.png" /> Terminal CNG'
            });
var format_PipaDistribusi_9 = new ol.format.GeoJSON();
var features_PipaDistribusi_9 = format_PipaDistribusi_9.readFeatures(json_PipaDistribusi_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PipaDistribusi_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PipaDistribusi_9.addFeatures(features_PipaDistribusi_9);
var lyr_PipaDistribusi_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PipaDistribusi_9, 
                style: style_PipaDistribusi_9,
                popuplayertitle: 'Pipa Distribusi',
                interactive: true,
                title: '<img src="styles/legend/PipaDistribusi_9.png" /> Pipa Distribusi'
            });
var format_PipaTransmisiGasBumi_10 = new ol.format.GeoJSON();
var features_PipaTransmisiGasBumi_10 = format_PipaTransmisiGasBumi_10.readFeatures(json_PipaTransmisiGasBumi_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PipaTransmisiGasBumi_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PipaTransmisiGasBumi_10.addFeatures(features_PipaTransmisiGasBumi_10);
var lyr_PipaTransmisiGasBumi_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PipaTransmisiGasBumi_10, 
                style: style_PipaTransmisiGasBumi_10,
                popuplayertitle: 'Pipa Transmisi Gas Bumi',
                interactive: true,
                title: '<img src="styles/legend/PipaTransmisiGasBumi_10.png" /> Pipa Transmisi Gas Bumi'
            });
var format_TerminalGasPuloampel_11 = new ol.format.GeoJSON();
var features_TerminalGasPuloampel_11 = format_TerminalGasPuloampel_11.readFeatures(json_TerminalGasPuloampel_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TerminalGasPuloampel_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerminalGasPuloampel_11.addFeatures(features_TerminalGasPuloampel_11);
var lyr_TerminalGasPuloampel_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerminalGasPuloampel_11, 
                style: style_TerminalGasPuloampel_11,
                popuplayertitle: 'Terminal Gas Puloampel',
                interactive: true,
                title: '<img src="styles/legend/TerminalGasPuloampel_11.png" /> Terminal Gas Puloampel'
            });
var format_Smelter_12 = new ol.format.GeoJSON();
var features_Smelter_12 = format_Smelter_12.readFeatures(json_Smelter_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Smelter_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Smelter_12.addFeatures(features_Smelter_12);
var lyr_Smelter_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Smelter_12, 
                style: style_Smelter_12,
                popuplayertitle: 'Smelter',
                interactive: true,
    title: 'Smelter<br />\
    <img src="styles/legend/Smelter_12_0.png" /> Bumi Mineral Sulawesi Unit 1<br />\
    <img src="styles/legend/Smelter_12_1.png" /> Bumi Mineral Sulawesi Unit 2<br />'
        });
var format_SHPKawasanIndustriKalla_13 = new ol.format.GeoJSON();
var features_SHPKawasanIndustriKalla_13 = format_SHPKawasanIndustriKalla_13.readFeatures(json_SHPKawasanIndustriKalla_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SHPKawasanIndustriKalla_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SHPKawasanIndustriKalla_13.addFeatures(features_SHPKawasanIndustriKalla_13);
var lyr_SHPKawasanIndustriKalla_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SHPKawasanIndustriKalla_13, 
                style: style_SHPKawasanIndustriKalla_13,
                popuplayertitle: 'SHP Kawasan Industri Kalla',
                interactive: true,
    title: 'SHP Kawasan Industri Kalla<br />\
    <img src="styles/legend/SHPKawasanIndustriKalla_13_0.png" /> Blok Kawasan Industri Belang-Belang<br />\
    <img src="styles/legend/SHPKawasanIndustriKalla_13_1.png" /> Blok Kawasan Industri Suppa<br />\
    <img src="styles/legend/SHPKawasanIndustriKalla_13_2.png" /> Blok Lahan Lampia<br />\
    <img src="styles/legend/SHPKawasanIndustriKalla_13_3.png" /> Blok Pulauampel<br />'
        });
var format_TitikLahan_14 = new ol.format.GeoJSON();
var features_TitikLahan_14 = format_TitikLahan_14.readFeatures(json_TitikLahan_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikLahan_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikLahan_14.addFeatures(features_TitikLahan_14);
var lyr_TitikLahan_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikLahan_14, 
                style: style_TitikLahan_14,
                popuplayertitle: 'Titik Lahan',
                interactive: true,
                title: '<img src="styles/legend/TitikLahan_14.png" /> Titik Lahan'
            });
var format_PembangkitListrik_15 = new ol.format.GeoJSON();
var features_PembangkitListrik_15 = format_PembangkitListrik_15.readFeatures(json_PembangkitListrik_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PembangkitListrik_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PembangkitListrik_15.addFeatures(features_PembangkitListrik_15);
var lyr_PembangkitListrik_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PembangkitListrik_15, 
                style: style_PembangkitListrik_15,
                popuplayertitle: 'Pembangkit Listrik',
                interactive: true,
    title: 'Pembangkit Listrik<br />\
    <img src="styles/legend/PembangkitListrik_15_0.png" /> Mamuju Tumbuan Energy Atas<br />\
    <img src="styles/legend/PembangkitListrik_15_1.png" /> PLTA Bumi Mineral Sulawesi<br />\
    <img src="styles/legend/PembangkitListrik_15_2.png" /> PLTA Kerinci Merangin Hidro<br />\
    <img src="styles/legend/PembangkitListrik_15_3.png" /> PLTA Malea<br />\
    <img src="styles/legend/PembangkitListrik_15_4.png" /> PLTA Mamuju Tumbuan Energy Bawah<br />\
    <img src="styles/legend/PembangkitListrik_15_5.png" /> PLTA Poso<br />\
    <img src="styles/legend/PembangkitListrik_15_6.png" /> PLTA Poso 3<br />\
    <img src="styles/legend/PembangkitListrik_15_7.png" /> PLTGU Puloampel<br />'
        });
var format_TitikPembangkitListrik_16 = new ol.format.GeoJSON();
var features_TitikPembangkitListrik_16 = format_TitikPembangkitListrik_16.readFeatures(json_TitikPembangkitListrik_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikPembangkitListrik_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikPembangkitListrik_16.addFeatures(features_TitikPembangkitListrik_16);
var lyr_TitikPembangkitListrik_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikPembangkitListrik_16, 
                style: style_TitikPembangkitListrik_16,
                popuplayertitle: 'Titik Pembangkit Listrik',
                interactive: true,
                title: '<img src="styles/legend/TitikPembangkitListrik_16.png" /> Titik Pembangkit Listrik'
            });
var format_JaringanListrik_17 = new ol.format.GeoJSON();
var features_JaringanListrik_17 = format_JaringanListrik_17.readFeatures(json_JaringanListrik_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanListrik_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanListrik_17.addFeatures(features_JaringanListrik_17);
var lyr_JaringanListrik_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanListrik_17, 
                style: style_JaringanListrik_17,
                popuplayertitle: 'Jaringan Listrik',
                interactive: true,
    title: 'Jaringan Listrik<br />\
    <img src="styles/legend/JaringanListrik_17_0.png" /> Jaringan Listrik PLN PLTM Malea - BMS<br />\
    <img src="styles/legend/JaringanListrik_17_1.png" /> Jaringan Listrik PLTA Mamuju - BMS<br />'
        });
var format_SHPTambang_18 = new ol.format.GeoJSON();
var features_SHPTambang_18 = format_SHPTambang_18.readFeatures(json_SHPTambang_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SHPTambang_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SHPTambang_18.addFeatures(features_SHPTambang_18);
var lyr_SHPTambang_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SHPTambang_18, 
                style: style_SHPTambang_18,
                popuplayertitle: 'SHP Tambang',
                interactive: true,
    title: 'SHP Tambang<br />\
    <img src="styles/legend/SHPTambang_18_0.png" /> Blok Assigment Licence<br />\
    <img src="styles/legend/SHPTambang_18_1.png" /> Blok Bulubalang<br />\
    <img src="styles/legend/SHPTambang_18_2.png" /> Blok Lingke<br />\
    <img src="styles/legend/SHPTambang_18_3.png" /> Blok Pongkeru<br />\
    <img src="styles/legend/SHPTambang_18_4.png" /> Blok Warga Alam Bagus<br />'
        });
var format_TitikTambang_19 = new ol.format.GeoJSON();
var features_TitikTambang_19 = format_TitikTambang_19.readFeatures(json_TitikTambang_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikTambang_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikTambang_19.addFeatures(features_TitikTambang_19);
var lyr_TitikTambang_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikTambang_19, 
                style: style_TitikTambang_19,
                popuplayertitle: 'Titik Tambang',
                interactive: true,
                title: '<img src="styles/legend/TitikTambang_19.png" /> Titik Tambang'
            });
var format_RuteTambang_20 = new ol.format.GeoJSON();
var features_RuteTambang_20 = format_RuteTambang_20.readFeatures(json_RuteTambang_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteTambang_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteTambang_20.addFeatures(features_RuteTambang_20);
var lyr_RuteTambang_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteTambang_20, 
                style: style_RuteTambang_20,
                popuplayertitle: 'Rute Tambang',
                interactive: true,
    title: 'Rute Tambang<br />\
    <img src="styles/legend/RuteTambang_20_0.png" /> Rute Jetty - BMS<br />\
    <img src="styles/legend/RuteTambang_20_1.png" /> Rute Tambang Pongkeru - Jetty CLM<br />\
    <img src="styles/legend/RuteTambang_20_2.png" /> Rute Tambang WAB - Jetty CLM<br />'
        });
var group_KALLAPertambangan = new ol.layer.Group({
                                layers: [lyr_SHPTambang_18,lyr_TitikTambang_19,lyr_RuteTambang_20,],
                                fold: "open",
                                title: 'KALLA | Pertambangan'});
var group_KALLAPembangkitListrik = new ol.layer.Group({
                                layers: [lyr_PembangkitListrik_15,lyr_TitikPembangkitListrik_16,lyr_JaringanListrik_17,],
                                fold: "open",
                                title: 'KALLA | Pembangkit Listrik'});
var group_KALLAAsetKawasanIndustri = new ol.layer.Group({
                                layers: [lyr_SHPKawasanIndustriKalla_13,lyr_TitikLahan_14,],
                                fold: "open",
                                title: 'KALLA | Aset Kawasan Industri'});
var group_KALLASmelter = new ol.layer.Group({
                                layers: [lyr_Smelter_12,],
                                fold: "open",
                                title: 'KALLA | Smelter'});
var group_KALLATerminalGas = new ol.layer.Group({
                                layers: [lyr_TerminalGasPuloampel_11,],
                                fold: "open",
                                title: 'KALLA | Terminal Gas'});
var group_INFRASTRUKTURINDONESIA = new ol.layer.Group({
                                layers: [lyr_CadanganMigasperWilayah_4,lyr_WilayahKerjaMigas_5,lyr_WIUPTambang_6,lyr_TerminalGasLNG_7,lyr_TerminalCNG_8,lyr_PipaDistribusi_9,lyr_PipaTransmisiGasBumi_10,],
                                fold: "open",
                                title: 'INFRASTRUKTUR INDONESIA'});

lyr_GoogleTerrain_0.setVisible(false);lyr_GoogleRoad_1.setVisible(false);lyr_GoogleHybrid_2.setVisible(false);lyr_GoogleSatellite_3.setVisible(false);lyr_CadanganMigasperWilayah_4.setVisible(false);lyr_WilayahKerjaMigas_5.setVisible(false);lyr_WIUPTambang_6.setVisible(false);lyr_TerminalGasLNG_7.setVisible(false);lyr_TerminalCNG_8.setVisible(false);lyr_PipaDistribusi_9.setVisible(true);lyr_PipaTransmisiGasBumi_10.setVisible(true);lyr_TerminalGasPuloampel_11.setVisible(false);lyr_Smelter_12.setVisible(false);lyr_SHPKawasanIndustriKalla_13.setVisible(false);lyr_TitikLahan_14.setVisible(false);lyr_PembangkitListrik_15.setVisible(false);lyr_TitikPembangkitListrik_16.setVisible(false);lyr_JaringanListrik_17.setVisible(false);lyr_SHPTambang_18.setVisible(false);lyr_TitikTambang_19.setVisible(false);lyr_RuteTambang_20.setVisible(false);
var layersList = [lyr_GoogleTerrain_0,lyr_GoogleRoad_1,lyr_GoogleHybrid_2,lyr_GoogleSatellite_3,group_INFRASTRUKTURINDONESIA,group_KALLATerminalGas,group_KALLASmelter,group_KALLAAsetKawasanIndustri,group_KALLAPembangkitListrik,group_KALLAPertambangan];
lyr_CadanganMigasperWilayah_4.set('fieldAliases', {'objectid': 'objectid', 'basin_name': 'basin_name', 'p1_mikon': 'p1_mikon', 'p2_mikon': 'p2_mikon', 'p3_mikon': 'p3_mikon', 'p1_gas': 'p1_gas', 'p2_gas': 'p2_gas', 'p3_gas': 'p3_gas', 'wilayah': 'wilayah', 'id_wil': 'id_wil', 'st_area(sh': 'st_area(sh', 'st_perimet': 'st_perimet', });
lyr_WilayahKerjaMigas_5.set('fieldAliases', {'objectid': 'objectid', 'namobj': 'namobj', 'oprblk': 'oprblk', 'effdat': 'effdat', 'expdat': 'expdat', 'status': 'status', 'srs_id': 'srs_id', 'metadata': 'metadata', });
lyr_WIUPTambang_6.set('fieldAliases', {'fid_': 'fid_', 'objectid': 'objectid', 'pulau': 'pulau', 'pejabat': 'pejabat', 'id_prov': 'id_prov', 'nama_prov': 'nama_prov', 'id_kab': 'id_kab', 'nama_kab': 'nama_kab', 'jenis_izin': 'jenis_izin', 'badan_usah': 'badan_usah', 'nama_usaha': 'nama_usaha', 'kode_wiup': 'kode_wiup', 'sk_iup': 'sk_iup', 'tgl_berlak': 'tgl_berlak', 'tgl_akhir': 'tgl_akhir', 'kegiatan': 'kegiatan', 'luas_sk': 'luas_sk', 'komoditas': 'komoditas', 'kode_golon': 'kode_golon', 'kode_jnsko': 'kode_jnsko', 'cnc': 'cnc', 'generasi': 'generasi', 'kode_wil': 'kode_wil', 'lokasi': 'lokasi', 'SHAPE__Len': 'SHAPE__Len', 'SHAPE__Are': 'SHAPE__Are', 'KomoditasB': 'KomoditasB', });
lyr_TerminalGasLNG_7.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_TerminalCNG_8.set('fieldAliases', {'provinsi': 'provinsi', 'lokasi': 'lokasi', 'x': 'x', 'y': 'y', 'alamat': 'alamat', 'kapasitas': 'kapasitas', 'objectid': 'objectid', 'longitude': 'longitude', 'latitude': 'latitude', });
lyr_PipaDistribusi_9.set('fieldAliases', {'objectid_1': 'objectid_1', 'shape_leng': 'shape_leng', 'objectid': 'objectid', 'bu_name': 'bu_name', 'bu_initial': 'bu_initial', 'rn_initial': 'rn_initial', 'rn_name': 'rn_name', 'tipe_pipa': 'tipe_pipa', 'bph.bph_pp': 'bph.bph_pp', 'diameter': 'diameter', 'length': 'length', 'st_length(': 'st_length(', });
lyr_PipaTransmisiGasBumi_10.set('fieldAliases', {'objectid_1': 'objectid_1', 'shape_leng': 'shape_leng', 'objectid_2': 'objectid_2', 'objectid_3': 'objectid_3', 'objectid': 'objectid', 'tipe_pipa': 'tipe_pipa', 'bu_name': 'bu_name', 'bu_initial': 'bu_initial', 'ra_name': 'ra_name', 'ra_initial': 'ra_initial', 'diameter': 'diameter', 'length': 'length', 'tariff': 'tariff', 'kap_desain': 'kap_desain', 'kapoperasi': 'kapoperasi', 'bph.bph_pp': 'bph.bph_pp', 'propinsi': 'propinsi', 'detail': 'detail', 'koorawal': 'koorawal', 'koorakhir': 'koorakhir', 'kkkssumber': 'kkkssumber', 'namalapang': 'namalapang', 'lokterima': 'lokterima', 'koorterima': 'koorterima', 'lokserah1': 'lokserah1', 'lokserah2': 'lokserah2', 'lokserah3': 'lokserah3', 'korterima1': 'korterima1', 'korterima2': 'korterima2', 'korterima3': 'korterima3', 'shape_le_1': 'shape_le_1', 'st_length(': 'st_length(', });
lyr_TerminalGasPuloampel_11.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Smelter_12.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Kapasitas': 'Kapasitas', });
lyr_SHPKawasanIndustriKalla_13.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'Luas_Ha': 'Luas_Ha', });
lyr_TitikLahan_14.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_PembangkitListrik_15.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'Kap_MW': 'Kap_MW', 'COD': 'COD', 'Jen_Pem': 'Jen_Pem', });
lyr_TitikPembangkitListrik_16.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', });
lyr_JaringanListrik_17.set('fieldAliases', {'Name': 'Name', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'Jarak_km': 'Jarak_km', });
lyr_SHPTambang_18.set('fieldAliases', {'Id': 'Id', 'Nama': 'Nama', 'Luas_Ha': 'Luas_Ha', 'Ore_Ton': 'Ore_Ton', });
lyr_TitikTambang_19.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_RuteTambang_20.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Jarak_km': 'Jarak_km', });
lyr_CadanganMigasperWilayah_4.set('fieldImages', {'objectid': 'TextEdit', 'basin_name': 'TextEdit', 'p1_mikon': 'TextEdit', 'p2_mikon': 'TextEdit', 'p3_mikon': 'TextEdit', 'p1_gas': 'TextEdit', 'p2_gas': 'TextEdit', 'p3_gas': 'TextEdit', 'wilayah': 'TextEdit', 'id_wil': 'TextEdit', 'st_area(sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_WilayahKerjaMigas_5.set('fieldImages', {'objectid': '', 'namobj': '', 'oprblk': '', 'effdat': '', 'expdat': '', 'status': '', 'srs_id': '', 'metadata': '', });
lyr_WIUPTambang_6.set('fieldImages', {'fid_': 'TextEdit', 'objectid': 'TextEdit', 'pulau': 'TextEdit', 'pejabat': 'TextEdit', 'id_prov': 'TextEdit', 'nama_prov': 'TextEdit', 'id_kab': 'TextEdit', 'nama_kab': 'TextEdit', 'jenis_izin': 'TextEdit', 'badan_usah': 'TextEdit', 'nama_usaha': 'TextEdit', 'kode_wiup': 'TextEdit', 'sk_iup': 'TextEdit', 'tgl_berlak': 'TextEdit', 'tgl_akhir': 'TextEdit', 'kegiatan': 'TextEdit', 'luas_sk': 'TextEdit', 'komoditas': 'TextEdit', 'kode_golon': 'TextEdit', 'kode_jnsko': 'TextEdit', 'cnc': 'TextEdit', 'generasi': 'TextEdit', 'kode_wil': 'TextEdit', 'lokasi': 'TextEdit', 'SHAPE__Len': 'TextEdit', 'SHAPE__Are': 'TextEdit', 'KomoditasB': 'TextEdit', });
lyr_TerminalGasLNG_7.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_TerminalCNG_8.set('fieldImages', {'provinsi': '', 'lokasi': '', 'x': '', 'y': '', 'alamat': '', 'kapasitas': '', 'objectid': '', 'longitude': '', 'latitude': '', });
lyr_PipaDistribusi_9.set('fieldImages', {'objectid_1': 'TextEdit', 'shape_leng': 'TextEdit', 'objectid': 'TextEdit', 'bu_name': 'TextEdit', 'bu_initial': 'TextEdit', 'rn_initial': 'TextEdit', 'rn_name': 'TextEdit', 'tipe_pipa': 'TextEdit', 'bph.bph_pp': 'TextEdit', 'diameter': 'TextEdit', 'length': 'TextEdit', 'st_length(': 'TextEdit', });
lyr_PipaTransmisiGasBumi_10.set('fieldImages', {'objectid_1': 'TextEdit', 'shape_leng': 'TextEdit', 'objectid_2': 'TextEdit', 'objectid_3': 'TextEdit', 'objectid': 'TextEdit', 'tipe_pipa': 'TextEdit', 'bu_name': 'TextEdit', 'bu_initial': 'TextEdit', 'ra_name': 'TextEdit', 'ra_initial': 'TextEdit', 'diameter': 'TextEdit', 'length': 'TextEdit', 'tariff': 'TextEdit', 'kap_desain': 'TextEdit', 'kapoperasi': 'TextEdit', 'bph.bph_pp': 'TextEdit', 'propinsi': 'TextEdit', 'detail': 'TextEdit', 'koorawal': 'TextEdit', 'koorakhir': 'TextEdit', 'kkkssumber': 'TextEdit', 'namalapang': 'TextEdit', 'lokterima': 'TextEdit', 'koorterima': 'TextEdit', 'lokserah1': 'TextEdit', 'lokserah2': 'TextEdit', 'lokserah3': 'TextEdit', 'korterima1': 'TextEdit', 'korterima2': 'TextEdit', 'korterima3': 'TextEdit', 'shape_le_1': 'TextEdit', 'st_length(': 'TextEdit', });
lyr_TerminalGasPuloampel_11.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Smelter_12.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Kapasitas': '', });
lyr_SHPKawasanIndustriKalla_13.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'Luas_Ha': 'Range', });
lyr_TitikLahan_14.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_PembangkitListrik_15.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'Kap_MW': '', 'COD': '', 'Jen_Pem': '', });
lyr_TitikPembangkitListrik_16.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', });
lyr_JaringanListrik_17.set('fieldImages', {'Name': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'Jarak_km': 'TextEdit', });
lyr_SHPTambang_18.set('fieldImages', {'Id': 'Range', 'Nama': 'TextEdit', 'Luas_Ha': 'TextEdit', 'Ore_Ton': 'TextEdit', });
lyr_TitikTambang_19.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_RuteTambang_20.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Jarak_km': '', });
lyr_CadanganMigasperWilayah_4.set('fieldLabels', {'objectid': 'no label', 'basin_name': 'no label', 'p1_mikon': 'no label', 'p2_mikon': 'no label', 'p3_mikon': 'no label', 'p1_gas': 'no label', 'p2_gas': 'no label', 'p3_gas': 'no label', 'wilayah': 'no label', 'id_wil': 'no label', 'st_area(sh': 'no label', 'st_perimet': 'no label', });
lyr_WilayahKerjaMigas_5.set('fieldLabels', {'objectid': 'no label', 'namobj': 'no label', 'oprblk': 'no label', 'effdat': 'no label', 'expdat': 'no label', 'status': 'no label', 'srs_id': 'no label', 'metadata': 'no label', });
lyr_WIUPTambang_6.set('fieldLabels', {'fid_': 'no label', 'objectid': 'no label', 'pulau': 'no label', 'pejabat': 'no label', 'id_prov': 'no label', 'nama_prov': 'no label', 'id_kab': 'no label', 'nama_kab': 'no label', 'jenis_izin': 'no label', 'badan_usah': 'no label', 'nama_usaha': 'no label', 'kode_wiup': 'no label', 'sk_iup': 'no label', 'tgl_berlak': 'no label', 'tgl_akhir': 'no label', 'kegiatan': 'no label', 'luas_sk': 'no label', 'komoditas': 'no label', 'kode_golon': 'no label', 'kode_jnsko': 'no label', 'cnc': 'no label', 'generasi': 'no label', 'kode_wil': 'no label', 'lokasi': 'no label', 'SHAPE__Len': 'no label', 'SHAPE__Are': 'no label', 'KomoditasB': 'inline label - always visible', });
lyr_TerminalGasLNG_7.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_TerminalCNG_8.set('fieldLabels', {'provinsi': 'no label', 'lokasi': 'no label', 'x': 'no label', 'y': 'no label', 'alamat': 'no label', 'kapasitas': 'no label', 'objectid': 'no label', 'longitude': 'no label', 'latitude': 'no label', });
lyr_PipaDistribusi_9.set('fieldLabels', {'objectid_1': 'no label', 'shape_leng': 'no label', 'objectid': 'no label', 'bu_name': 'no label', 'bu_initial': 'no label', 'rn_initial': 'no label', 'rn_name': 'no label', 'tipe_pipa': 'no label', 'bph.bph_pp': 'no label', 'diameter': 'no label', 'length': 'no label', 'st_length(': 'no label', });
lyr_PipaTransmisiGasBumi_10.set('fieldLabels', {'objectid_1': 'no label', 'shape_leng': 'no label', 'objectid_2': 'no label', 'objectid_3': 'no label', 'objectid': 'no label', 'tipe_pipa': 'no label', 'bu_name': 'no label', 'bu_initial': 'no label', 'ra_name': 'no label', 'ra_initial': 'no label', 'diameter': 'no label', 'length': 'no label', 'tariff': 'no label', 'kap_desain': 'no label', 'kapoperasi': 'no label', 'bph.bph_pp': 'no label', 'propinsi': 'no label', 'detail': 'no label', 'koorawal': 'no label', 'koorakhir': 'no label', 'kkkssumber': 'no label', 'namalapang': 'no label', 'lokterima': 'no label', 'koorterima': 'no label', 'lokserah1': 'no label', 'lokserah2': 'no label', 'lokserah3': 'no label', 'korterima1': 'no label', 'korterima2': 'no label', 'korterima3': 'no label', 'shape_le_1': 'no label', 'st_length(': 'no label', });
lyr_TerminalGasPuloampel_11.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Smelter_12.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Kapasitas': 'no label', });
lyr_SHPKawasanIndustriKalla_13.set('fieldLabels', {'Name': 'header label - always visible', 'descriptio': 'no label', 'Luas_Ha': 'header label - always visible', });
lyr_TitikLahan_14.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_PembangkitListrik_15.set('fieldLabels', {'Name': 'header label - always visible', 'descriptio': 'header label - always visible', 'Kap_MW': 'header label - always visible', 'COD': 'header label - always visible', 'Jen_Pem': 'header label - always visible', });
lyr_TitikPembangkitListrik_16.set('fieldLabels', {'Name': 'header label - always visible', 'descriptio': 'header label - always visible', });
lyr_JaringanListrik_17.set('fieldLabels', {'Name': 'header label - always visible', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'Jarak_km': 'header label - always visible', });
lyr_SHPTambang_18.set('fieldLabels', {'Id': 'no label', 'Nama': 'header label - visible with data', 'Luas_Ha': 'header label - always visible', 'Ore_Ton': 'header label - always visible', });
lyr_TitikTambang_19.set('fieldLabels', {'Name': 'header label - always visible', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_RuteTambang_20.set('fieldLabels', {'Name': 'header label - always visible', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Jarak_km': 'header label - always visible', });
lyr_RuteTambang_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});