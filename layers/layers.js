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
var format_SebaranPelabuhanUmum_4 = new ol.format.GeoJSON();
var features_SebaranPelabuhanUmum_4 = format_SebaranPelabuhanUmum_4.readFeatures(json_SebaranPelabuhanUmum_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SebaranPelabuhanUmum_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SebaranPelabuhanUmum_4.addFeatures(features_SebaranPelabuhanUmum_4);
var lyr_SebaranPelabuhanUmum_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SebaranPelabuhanUmum_4, 
                style: style_SebaranPelabuhanUmum_4,
                popuplayertitle: 'Sebaran Pelabuhan Umum',
                interactive: true,
                title: '<img src="styles/legend/SebaranPelabuhanUmum_4.png" /> Sebaran Pelabuhan Umum'
            });
var format_SebaranTerminalKhusus_5 = new ol.format.GeoJSON();
var features_SebaranTerminalKhusus_5 = format_SebaranTerminalKhusus_5.readFeatures(json_SebaranTerminalKhusus_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SebaranTerminalKhusus_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SebaranTerminalKhusus_5.addFeatures(features_SebaranTerminalKhusus_5);
var lyr_SebaranTerminalKhusus_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SebaranTerminalKhusus_5, 
                style: style_SebaranTerminalKhusus_5,
                popuplayertitle: 'Sebaran Terminal Khusus',
                interactive: true,
                title: '<img src="styles/legend/SebaranTerminalKhusus_5.png" /> Sebaran Terminal Khusus'
            });
var format_SebaranPembangkitListrik_6 = new ol.format.GeoJSON();
var features_SebaranPembangkitListrik_6 = format_SebaranPembangkitListrik_6.readFeatures(json_SebaranPembangkitListrik_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SebaranPembangkitListrik_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SebaranPembangkitListrik_6.addFeatures(features_SebaranPembangkitListrik_6);
var lyr_SebaranPembangkitListrik_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SebaranPembangkitListrik_6, 
                style: style_SebaranPembangkitListrik_6,
                popuplayertitle: 'Sebaran Pembangkit Listrik',
                interactive: true,
                title: '<img src="styles/legend/SebaranPembangkitListrik_6.png" /> Sebaran Pembangkit Listrik'
            });
var format_PetaJaringanListrik_7 = new ol.format.GeoJSON();
var features_PetaJaringanListrik_7 = format_PetaJaringanListrik_7.readFeatures(json_PetaJaringanListrik_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PetaJaringanListrik_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PetaJaringanListrik_7.addFeatures(features_PetaJaringanListrik_7);
var lyr_PetaJaringanListrik_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PetaJaringanListrik_7, 
                style: style_PetaJaringanListrik_7,
                popuplayertitle: 'Peta Jaringan Listrik',
                interactive: true,
                title: '<img src="styles/legend/PetaJaringanListrik_7.png" /> Peta Jaringan Listrik'
            });
var format_PetaSebaranLokasiGarduInduk_8 = new ol.format.GeoJSON();
var features_PetaSebaranLokasiGarduInduk_8 = format_PetaSebaranLokasiGarduInduk_8.readFeatures(json_PetaSebaranLokasiGarduInduk_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PetaSebaranLokasiGarduInduk_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PetaSebaranLokasiGarduInduk_8.addFeatures(features_PetaSebaranLokasiGarduInduk_8);
var lyr_PetaSebaranLokasiGarduInduk_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PetaSebaranLokasiGarduInduk_8, 
                style: style_PetaSebaranLokasiGarduInduk_8,
                popuplayertitle: 'Peta Sebaran Lokasi Gardu Induk',
                interactive: true,
                title: '<img src="styles/legend/PetaSebaranLokasiGarduInduk_8.png" /> Peta Sebaran Lokasi Gardu Induk'
            });
var format_CadanganMigasperWilayah_9 = new ol.format.GeoJSON();
var features_CadanganMigasperWilayah_9 = format_CadanganMigasperWilayah_9.readFeatures(json_CadanganMigasperWilayah_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CadanganMigasperWilayah_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CadanganMigasperWilayah_9.addFeatures(features_CadanganMigasperWilayah_9);
var lyr_CadanganMigasperWilayah_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CadanganMigasperWilayah_9, 
                style: style_CadanganMigasperWilayah_9,
                popuplayertitle: 'Cadangan Migas per Wilayah',
                interactive: true,
    title: 'Cadangan Migas per Wilayah<br />\
    <img src="styles/legend/CadanganMigasperWilayah_9_0.png" /> ACEH<br />\
    <img src="styles/legend/CadanganMigasperWilayah_9_1.png" /> JAWA BAGIAN BARAT<br />\
    <img src="styles/legend/CadanganMigasperWilayah_9_2.png" /> JAWA BAGIAN TIMUR<br />\
    <img src="styles/legend/CadanganMigasperWilayah_9_3.png" /> KALIMANTAN<br />\
    <img src="styles/legend/CadanganMigasperWilayah_9_4.png" /> MALUKU<br />\
    <img src="styles/legend/CadanganMigasperWilayah_9_5.png" /> NATUNA<br />\
    <img src="styles/legend/CadanganMigasperWilayah_9_6.png" /> PAPUA<br />\
    <img src="styles/legend/CadanganMigasperWilayah_9_7.png" /> SULAWESI<br />\
    <img src="styles/legend/CadanganMigasperWilayah_9_8.png" /> SUMATRA BAGIAN SELATAN<br />\
    <img src="styles/legend/CadanganMigasperWilayah_9_9.png" /> SUMATRA BAGIAN TENGAH<br />\
    <img src="styles/legend/CadanganMigasperWilayah_9_10.png" /> SUMATRA UTARA<br />'
        });
var format_WilayahKerjaMigas_10 = new ol.format.GeoJSON();
var features_WilayahKerjaMigas_10 = format_WilayahKerjaMigas_10.readFeatures(json_WilayahKerjaMigas_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WilayahKerjaMigas_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WilayahKerjaMigas_10.addFeatures(features_WilayahKerjaMigas_10);
var lyr_WilayahKerjaMigas_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WilayahKerjaMigas_10, 
                style: style_WilayahKerjaMigas_10,
                popuplayertitle: 'Wilayah Kerja Migas',
                interactive: true,
    title: 'Wilayah Kerja Migas<br />\
    <img src="styles/legend/WilayahKerjaMigas_10_0.png" /> DEVELOPMENT<br />\
    <img src="styles/legend/WilayahKerjaMigas_10_1.png" /> EXPLORATION<br />\
    <img src="styles/legend/WilayahKerjaMigas_10_2.png" /> PRODUCTION<br />'
        });
var format_WIUPTambang_11 = new ol.format.GeoJSON();
var features_WIUPTambang_11 = format_WIUPTambang_11.readFeatures(json_WIUPTambang_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WIUPTambang_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WIUPTambang_11.addFeatures(features_WIUPTambang_11);
var lyr_WIUPTambang_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WIUPTambang_11, 
                style: style_WIUPTambang_11,
                popuplayertitle: 'WIUP Tambang',
                interactive: true,
    title: 'WIUP Tambang<br />\
    <img src="styles/legend/WIUPTambang_11_0.png" /> Aspal<br />\
    <img src="styles/legend/WIUPTambang_11_1.png" /> Batu Bara<br />\
    <img src="styles/legend/WIUPTambang_11_2.png" /> Batuan<br />\
    <img src="styles/legend/WIUPTambang_11_3.png" /> Batuan Lainnya<br />\
    <img src="styles/legend/WIUPTambang_11_4.png" /> Emas<br />\
    <img src="styles/legend/WIUPTambang_11_5.png" /> Logam Lainnya<br />\
    <img src="styles/legend/WIUPTambang_11_6.png" /> Mineral<br />\
    <img src="styles/legend/WIUPTambang_11_7.png" /> Mineral Logam<br />\
    <img src="styles/legend/WIUPTambang_11_8.png" /> Nickel<br />\
    <img src="styles/legend/WIUPTambang_11_9.png" /> Tembaga<br />\
    <img src="styles/legend/WIUPTambang_11_10.png" /> Timah<br />'
        });
var format_TerminalGasLNG_12 = new ol.format.GeoJSON();
var features_TerminalGasLNG_12 = format_TerminalGasLNG_12.readFeatures(json_TerminalGasLNG_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TerminalGasLNG_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerminalGasLNG_12.addFeatures(features_TerminalGasLNG_12);
var lyr_TerminalGasLNG_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerminalGasLNG_12, 
                style: style_TerminalGasLNG_12,
                popuplayertitle: 'Terminal Gas LNG',
                interactive: true,
    title: 'Terminal Gas LNG<br />\
    <img src="styles/legend/TerminalGasLNG_12_0.png" /> FSRU Jawa 1<br />\
    <img src="styles/legend/TerminalGasLNG_12_1.png" /> FSRU Lampung<br />\
    <img src="styles/legend/TerminalGasLNG_12_2.png" /> LNG Arun<br />\
    <img src="styles/legend/TerminalGasLNG_12_3.png" /> LNG Bontang Badak<br />\
    <img src="styles/legend/TerminalGasLNG_12_4.png" /> Terminal LNG 1<br />'
        });
var format_TerminalCNG_13 = new ol.format.GeoJSON();
var features_TerminalCNG_13 = format_TerminalCNG_13.readFeatures(json_TerminalCNG_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TerminalCNG_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerminalCNG_13.addFeatures(features_TerminalCNG_13);
var lyr_TerminalCNG_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerminalCNG_13, 
                style: style_TerminalCNG_13,
                popuplayertitle: 'Terminal CNG',
                interactive: true,
                title: '<img src="styles/legend/TerminalCNG_13.png" /> Terminal CNG'
            });
var format_PipaDistribusiGasBumi_14 = new ol.format.GeoJSON();
var features_PipaDistribusiGasBumi_14 = format_PipaDistribusiGasBumi_14.readFeatures(json_PipaDistribusiGasBumi_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PipaDistribusiGasBumi_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PipaDistribusiGasBumi_14.addFeatures(features_PipaDistribusiGasBumi_14);
var lyr_PipaDistribusiGasBumi_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PipaDistribusiGasBumi_14, 
                style: style_PipaDistribusiGasBumi_14,
                popuplayertitle: 'Pipa Distribusi Gas Bumi',
                interactive: true,
                title: '<img src="styles/legend/PipaDistribusiGasBumi_14.png" /> Pipa Distribusi Gas Bumi'
            });
var format_PipaTransmisiGasBumi_15 = new ol.format.GeoJSON();
var features_PipaTransmisiGasBumi_15 = format_PipaTransmisiGasBumi_15.readFeatures(json_PipaTransmisiGasBumi_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PipaTransmisiGasBumi_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PipaTransmisiGasBumi_15.addFeatures(features_PipaTransmisiGasBumi_15);
var lyr_PipaTransmisiGasBumi_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PipaTransmisiGasBumi_15, 
                style: style_PipaTransmisiGasBumi_15,
                popuplayertitle: 'Pipa Transmisi Gas Bumi',
                interactive: true,
                title: '<img src="styles/legend/PipaTransmisiGasBumi_15.png" /> Pipa Transmisi Gas Bumi'
            });
var format_TerminalGasPuloampel_16 = new ol.format.GeoJSON();
var features_TerminalGasPuloampel_16 = format_TerminalGasPuloampel_16.readFeatures(json_TerminalGasPuloampel_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TerminalGasPuloampel_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerminalGasPuloampel_16.addFeatures(features_TerminalGasPuloampel_16);
var lyr_TerminalGasPuloampel_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerminalGasPuloampel_16, 
                style: style_TerminalGasPuloampel_16,
                popuplayertitle: 'Terminal Gas Puloampel',
                interactive: true,
                title: '<img src="styles/legend/TerminalGasPuloampel_16.png" /> Terminal Gas Puloampel'
            });
var format_Smelter_17 = new ol.format.GeoJSON();
var features_Smelter_17 = format_Smelter_17.readFeatures(json_Smelter_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Smelter_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Smelter_17.addFeatures(features_Smelter_17);
var lyr_Smelter_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Smelter_17, 
                style: style_Smelter_17,
                popuplayertitle: 'Smelter',
                interactive: true,
    title: 'Smelter<br />\
    <img src="styles/legend/Smelter_17_0.png" /> Bumi Mineral Sulawesi Unit 1<br />\
    <img src="styles/legend/Smelter_17_1.png" /> Bumi Mineral Sulawesi Unit 2<br />'
        });
var format_SHPKawasanIndustriKalla_18 = new ol.format.GeoJSON();
var features_SHPKawasanIndustriKalla_18 = format_SHPKawasanIndustriKalla_18.readFeatures(json_SHPKawasanIndustriKalla_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SHPKawasanIndustriKalla_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SHPKawasanIndustriKalla_18.addFeatures(features_SHPKawasanIndustriKalla_18);
var lyr_SHPKawasanIndustriKalla_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SHPKawasanIndustriKalla_18, 
                style: style_SHPKawasanIndustriKalla_18,
                popuplayertitle: 'SHP Kawasan Industri Kalla',
                interactive: true,
    title: 'SHP Kawasan Industri Kalla<br />\
    <img src="styles/legend/SHPKawasanIndustriKalla_18_0.png" /> Kawasan Industri Belang-Belang<br />\
    <img src="styles/legend/SHPKawasanIndustriKalla_18_1.png" /> Kawasan Industri Lampia<br />\
    <img src="styles/legend/SHPKawasanIndustriKalla_18_2.png" /> Kawasan Industri Pulauampel<br />\
    <img src="styles/legend/SHPKawasanIndustriKalla_18_3.png" /> Kawasan Industri Suppa<br />'
        });
var format_TitikLahan_19 = new ol.format.GeoJSON();
var features_TitikLahan_19 = format_TitikLahan_19.readFeatures(json_TitikLahan_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikLahan_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikLahan_19.addFeatures(features_TitikLahan_19);
var lyr_TitikLahan_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikLahan_19, 
                style: style_TitikLahan_19,
                popuplayertitle: 'Titik Lahan',
                interactive: true,
                title: '<img src="styles/legend/TitikLahan_19.png" /> Titik Lahan'
            });
var format_PembangkitListrik_20 = new ol.format.GeoJSON();
var features_PembangkitListrik_20 = format_PembangkitListrik_20.readFeatures(json_PembangkitListrik_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PembangkitListrik_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PembangkitListrik_20.addFeatures(features_PembangkitListrik_20);
var lyr_PembangkitListrik_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PembangkitListrik_20, 
                style: style_PembangkitListrik_20,
                popuplayertitle: 'Pembangkit Listrik',
                interactive: true,
    title: 'Pembangkit Listrik<br />\
    <img src="styles/legend/PembangkitListrik_20_0.png" /> Mamuju Tumbuan Energy Atas<br />\
    <img src="styles/legend/PembangkitListrik_20_1.png" /> PLTA Bumi Mineral Sulawesi<br />\
    <img src="styles/legend/PembangkitListrik_20_2.png" /> PLTA Kerinci Merangin Hidro<br />\
    <img src="styles/legend/PembangkitListrik_20_3.png" /> PLTA Malea<br />\
    <img src="styles/legend/PembangkitListrik_20_4.png" /> PLTA Mamuju Tumbuan Energy Bawah<br />\
    <img src="styles/legend/PembangkitListrik_20_5.png" /> PLTA Poso<br />\
    <img src="styles/legend/PembangkitListrik_20_6.png" /> PLTA Poso 3<br />\
    <img src="styles/legend/PembangkitListrik_20_7.png" /> PLTGU Puloampel<br />'
        });
var format_TitikPembangkitListrik_21 = new ol.format.GeoJSON();
var features_TitikPembangkitListrik_21 = format_TitikPembangkitListrik_21.readFeatures(json_TitikPembangkitListrik_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikPembangkitListrik_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikPembangkitListrik_21.addFeatures(features_TitikPembangkitListrik_21);
var lyr_TitikPembangkitListrik_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikPembangkitListrik_21, 
                style: style_TitikPembangkitListrik_21,
                popuplayertitle: 'Titik Pembangkit Listrik',
                interactive: true,
                title: '<img src="styles/legend/TitikPembangkitListrik_21.png" /> Titik Pembangkit Listrik'
            });
var format_JaringanListrik_22 = new ol.format.GeoJSON();
var features_JaringanListrik_22 = format_JaringanListrik_22.readFeatures(json_JaringanListrik_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanListrik_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanListrik_22.addFeatures(features_JaringanListrik_22);
var lyr_JaringanListrik_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanListrik_22, 
                style: style_JaringanListrik_22,
                popuplayertitle: 'Jaringan Listrik',
                interactive: true,
    title: 'Jaringan Listrik<br />\
    <img src="styles/legend/JaringanListrik_22_0.png" /> Jaringan Listrik PLN PLTM Malea - BMS<br />\
    <img src="styles/legend/JaringanListrik_22_1.png" /> Jaringan Listrik PLTA Mamuju - BMS<br />'
        });
var format_SHPTambang_23 = new ol.format.GeoJSON();
var features_SHPTambang_23 = format_SHPTambang_23.readFeatures(json_SHPTambang_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SHPTambang_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SHPTambang_23.addFeatures(features_SHPTambang_23);
var lyr_SHPTambang_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SHPTambang_23, 
                style: style_SHPTambang_23,
                popuplayertitle: 'SHP Tambang',
                interactive: true,
    title: 'SHP Tambang<br />\
    <img src="styles/legend/SHPTambang_23_0.png" /> Blok Assigment Licence<br />\
    <img src="styles/legend/SHPTambang_23_1.png" /> Blok Bulubalang<br />\
    <img src="styles/legend/SHPTambang_23_2.png" /> Blok Lingke<br />\
    <img src="styles/legend/SHPTambang_23_3.png" /> Blok Pongkeru<br />\
    <img src="styles/legend/SHPTambang_23_4.png" /> Blok Warga Alam Bagus<br />'
        });
var format_TitikTambang_24 = new ol.format.GeoJSON();
var features_TitikTambang_24 = format_TitikTambang_24.readFeatures(json_TitikTambang_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikTambang_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikTambang_24.addFeatures(features_TitikTambang_24);
var lyr_TitikTambang_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikTambang_24, 
                style: style_TitikTambang_24,
                popuplayertitle: 'Titik Tambang',
                interactive: true,
                title: '<img src="styles/legend/TitikTambang_24.png" /> Titik Tambang'
            });
var format_RuteTambang_25 = new ol.format.GeoJSON();
var features_RuteTambang_25 = format_RuteTambang_25.readFeatures(json_RuteTambang_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteTambang_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteTambang_25.addFeatures(features_RuteTambang_25);
var lyr_RuteTambang_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteTambang_25, 
                style: style_RuteTambang_25,
                popuplayertitle: 'Rute Tambang',
                interactive: true,
    title: 'Rute Tambang<br />\
    <img src="styles/legend/RuteTambang_25_0.png" /> Rute Jetty - BMS<br />\
    <img src="styles/legend/RuteTambang_25_1.png" /> Rute Tambang Pongkeru - Jetty CLM<br />\
    <img src="styles/legend/RuteTambang_25_2.png" /> Rute Tambang WAB - Jetty CLM<br />'
        });
var group_KALLAPertambangan = new ol.layer.Group({
                                layers: [lyr_SHPTambang_23,lyr_TitikTambang_24,lyr_RuteTambang_25,],
                                fold: "open",
                                title: 'KALLA | Pertambangan'});
var group_KALLAPembangkitListrik = new ol.layer.Group({
                                layers: [lyr_PembangkitListrik_20,lyr_TitikPembangkitListrik_21,lyr_JaringanListrik_22,],
                                fold: "open",
                                title: 'KALLA | Pembangkit Listrik'});
var group_KALLAAsetKawasanIndustri = new ol.layer.Group({
                                layers: [lyr_SHPKawasanIndustriKalla_18,lyr_TitikLahan_19,],
                                fold: "open",
                                title: 'KALLA | Aset Kawasan Industri'});
var group_KALLASmelter = new ol.layer.Group({
                                layers: [lyr_Smelter_17,],
                                fold: "open",
                                title: 'KALLA | Smelter'});
var group_KALLATerminalGas = new ol.layer.Group({
                                layers: [lyr_TerminalGasPuloampel_16,],
                                fold: "open",
                                title: 'KALLA | Terminal Gas'});
var group_INFRASTRUKTURMIGASTAMBANG = new ol.layer.Group({
                                layers: [lyr_CadanganMigasperWilayah_9,lyr_WilayahKerjaMigas_10,lyr_WIUPTambang_11,lyr_TerminalGasLNG_12,lyr_TerminalCNG_13,lyr_PipaDistribusiGasBumi_14,lyr_PipaTransmisiGasBumi_15,],
                                fold: "open",
                                title: 'INFRASTRUKTUR MIGAS & TAMBANG'});
var group_INFRASTRUKTURLISTRIK = new ol.layer.Group({
                                layers: [lyr_SebaranPembangkitListrik_6,lyr_PetaJaringanListrik_7,lyr_PetaSebaranLokasiGarduInduk_8,],
                                fold: "open",
                                title: 'INFRASTRUKTUR LISTRIK'});
var group_INFRASTRUKTURPELABUHANTERMINAL = new ol.layer.Group({
                                layers: [lyr_SebaranPelabuhanUmum_4,lyr_SebaranTerminalKhusus_5,],
                                fold: "open",
                                title: 'INFRASTRUKTUR PELABUHAN & TERMINAL'});

lyr_GoogleTerrain_0.setVisible(false);lyr_GoogleRoad_1.setVisible(false);lyr_GoogleHybrid_2.setVisible(false);lyr_GoogleSatellite_3.setVisible(true);lyr_SebaranPelabuhanUmum_4.setVisible(false);lyr_SebaranTerminalKhusus_5.setVisible(false);lyr_SebaranPembangkitListrik_6.setVisible(false);lyr_PetaJaringanListrik_7.setVisible(false);lyr_PetaSebaranLokasiGarduInduk_8.setVisible(false);lyr_CadanganMigasperWilayah_9.setVisible(false);lyr_WilayahKerjaMigas_10.setVisible(false);lyr_WIUPTambang_11.setVisible(false);lyr_TerminalGasLNG_12.setVisible(false);lyr_TerminalCNG_13.setVisible(false);lyr_PipaDistribusiGasBumi_14.setVisible(false);lyr_PipaTransmisiGasBumi_15.setVisible(false);lyr_TerminalGasPuloampel_16.setVisible(true);lyr_Smelter_17.setVisible(true);lyr_SHPKawasanIndustriKalla_18.setVisible(true);lyr_TitikLahan_19.setVisible(true);lyr_PembangkitListrik_20.setVisible(true);lyr_TitikPembangkitListrik_21.setVisible(true);lyr_JaringanListrik_22.setVisible(true);lyr_SHPTambang_23.setVisible(true);lyr_TitikTambang_24.setVisible(true);lyr_RuteTambang_25.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_GoogleRoad_1,lyr_GoogleHybrid_2,lyr_GoogleSatellite_3,group_INFRASTRUKTURPELABUHANTERMINAL,group_INFRASTRUKTURLISTRIK,group_INFRASTRUKTURMIGASTAMBANG,group_KALLATerminalGas,group_KALLASmelter,group_KALLAAsetKawasanIndustri,group_KALLAPembangkitListrik,group_KALLAPertambangan];
lyr_SebaranPelabuhanUmum_4.set('fieldAliases', {'objectid': 'objectid', 'namobj': 'namobj', 'fcode': 'fcode', 'remark': 'remark', 'klspel': 'klspel', 'srs_id': 'srs_id', 'lcode': 'lcode', 'metadata': 'metadata', 'lat': 'lat', 'lon': 'lon', 'kode': 'kode', 'tipe_pp': 'tipe_pp', 'nama_pp': 'nama_pp', 'alamat': 'alamat', 'kodepos': 'kodepos', 'notelp': 'notelp', 'surel': 'surel', 'sk_tap_rip': 'sk_tap_rip', 'sk_tap_lok': 'sk_tap_lok', 'izin_bng': 'izin_bng', 'thn_bng': 'thn_bng', 'izin_kmb': 'izin_kmb', 'thn_kmb': 'thn_kmb', 'izin_ops': 'izin_ops', 'thn_ops': 'thn_ops', 'aset': 'aset', 'nilai_aset': 'nilai_aset', 'stat_ops': 'stat_ops', 'stat_jln': 'stat_jln', 'kls_jln': 'kls_jln', 'pnj_jln': 'pnj_jln', 'stat_rel': 'stat_rel', 'jml_pns': 'jml_pns', 'tipe_opera': 'tipe_opera', 'operator': 'operator', 'lintas': 'lintas', 'jns_kpl': 'jns_kpl', 'hirrki': 'hirrki', 'jml_dmg': 'jml_dmg', 'pnj_dmg': 'pnj_dmg', 'dlm_klm': 'dlm_klm', 'bbt_kapal': 'bbt_kapal', 'ls_lap_pmp': 'ls_lap_pmp', 'term_pnp': 'term_pnp', 'ls_trm_pnp': 'ls_trm_pnp', 'term_ptk': 'term_ptk', 'ls_trm_ptk': 'ls_trm_ptk', 'term_crhc': 'term_crhc', 'ls_crhc': 'ls_crhc', 'term_crhk': 'term_crhk', 'ls_crhk': 'ls_crhk', 'kap_lay_br': 'kap_lay_br', 'ls_gdng_l1': 'ls_gdng_l1', 'ls_gdng_gp': 'ls_gdng_gp', 'ls_gdng_sc': 'ls_gdng_sc', 'ls_gdng_fd': 'ls_gdng_fd', 'ls_gdng_bd': 'ls_gdng_bd', 'ls_gdng_cd': 'ls_gdng_cd', 'ls_gdng_b3': 'ls_gdng_b3', 'ls_gdng_en': 'ls_gdng_en', 'jml_bunker': 'jml_bunker', 'kap_bunker': 'kap_bunker', 'ls_kantor': 'ls_kantor', 'ls_dag': 'ls_dag', 'kap_park': 'kap_park', 'ls_park': 'ls_park', 'ls_drh_krj': 'ls_drh_krj', 'ls_bng': 'ls_bng', 'ls_drh_k_1': 'ls_drh_k_1', 'ls_drh_kep': 'ls_drh_kep', 'wadmpr': 'wadmpr', 'wadmkk': 'wadmkk', 'kdppum': 'kdppum', 'kdpkab': 'kdpkab', });
lyr_SebaranTerminalKhusus_5.set('fieldAliases', {'namobj': 'namobj', 'fcode': 'fcode', 'luas': 'luas', 'remark': 'remark', 'srs_id': 'srs_id', 'lcode': 'lcode', 'metadata': 'metadata', 'objectid_1': 'objectid_1', 'objectid': 'objectid', 'kode': 'kode', 'lat': 'lat', 'lon': 'lon', 'tipe_pp': 'tipe_pp', 'nama_pp': 'nama_pp', 'alamat': 'alamat', 'prov': 'prov', 'kabkot': 'kabkot', 'kd_prov': 'kd_prov', 'kd_kabkot': 'kd_kabkot', 'alamat_pgl': 'alamat_pgl', 'prov_pgl': 'prov_pgl', 'kabkot_pgl': 'kabkot_pgl', 'kodepos': 'kodepos', 'notelp': 'notelp', 'surel': 'surel', 'sk_tap_lok': 'sk_tap_lok', 'izin_bng': 'izin_bng', 'thn_bng': 'thn_bng', 'izin_kmb': 'izin_kmb', 'thn_kmb': 'thn_kmb', 'izin_ops': 'izin_ops', 'thn_ops': 'thn_ops', 'status': 'status', 'stat_ops': 'stat_ops', 'bdg_keg': 'bdg_keg', 'stat_jln': 'stat_jln', 'kls_jln': 'kls_jln', 'pnj_jln': 'pnj_jln', 'stat_rel': 'stat_rel', 'jml_dmg': 'jml_dmg', 'pnj_dmg': 'pnj_dmg', 'dlm_klm': 'dlm_klm', 'bbt_kapal': 'bbt_kapal', 'pnbp': 'pnbp', 'tersus_tuk': 'tersus_tuk', });
lyr_SebaranPembangkitListrik_6.set('fieldAliases', {'namobj': 'namobj', 'daya': 'daya', 'enrgprmr': 'enrgprmr', 'alamat': 'alamat', 'objectid_1': 'objectid_1', 'objectid': 'objectid', 'regpln': 'regpln', 'thnopr': 'thnopr', });
lyr_PetaJaringanListrik_7.set('fieldAliases', {'objectid_1': 'objectid_1', 'objectid': 'objectid', 'namobj': 'namobj', 'pjgjar': 'pjgjar', 'regpln': 'regpln', });
lyr_PetaSebaranLokasiGarduInduk_8.set('fieldAliases', {'teggi': 'teggi', 'thnopr': 'thnopr', 'alamat': 'alamat', 'fcode': 'fcode', 'remark': 'remark', 'objectid_1': 'objectid_1', 'objectid': 'objectid', 'namaobj': 'namaobj', 'kapgi': 'kapgi', 'statmlk': 'statmlk', 'statopr': 'statopr', 'regpln': 'regpln', 'srs_id': 'srs_id', });
lyr_CadanganMigasperWilayah_9.set('fieldAliases', {'objectid': 'objectid', 'basin_name': 'basin_name', 'p1_mikon': 'p1_mikon', 'p2_mikon': 'p2_mikon', 'p3_mikon': 'p3_mikon', 'p1_gas': 'p1_gas', 'p2_gas': 'p2_gas', 'p3_gas': 'p3_gas', 'wilayah': 'wilayah', 'id_wil': 'id_wil', 'st_area(sh': 'st_area(sh', 'st_perimet': 'st_perimet', });
lyr_WilayahKerjaMigas_10.set('fieldAliases', {'objectid': 'objectid', 'namobj': 'namobj', 'oprblk': 'oprblk', 'effdat': 'effdat', 'expdat': 'expdat', 'status': 'status', 'srs_id': 'srs_id', 'metadata': 'metadata', });
lyr_WIUPTambang_11.set('fieldAliases', {'fid_': 'fid_', 'objectid': 'objectid', 'pulau': 'pulau', 'pejabat': 'pejabat', 'id_prov': 'id_prov', 'nama_prov': 'nama_prov', 'id_kab': 'id_kab', 'nama_kab': 'nama_kab', 'jenis_izin': 'jenis_izin', 'badan_usah': 'badan_usah', 'nama_usaha': 'nama_usaha', 'kode_wiup': 'kode_wiup', 'sk_iup': 'sk_iup', 'tgl_berlak': 'tgl_berlak', 'tgl_akhir': 'tgl_akhir', 'kegiatan': 'kegiatan', 'luas_sk': 'luas_sk', 'komoditas': 'komoditas', 'kode_golon': 'kode_golon', 'kode_jnsko': 'kode_jnsko', 'cnc': 'cnc', 'generasi': 'generasi', 'kode_wil': 'kode_wil', 'lokasi': 'lokasi', 'SHAPE__Len': 'SHAPE__Len', 'SHAPE__Are': 'SHAPE__Are', 'KomoditasB': 'KomoditasB', 'Shape_Ha': 'Shape_Ha', });
lyr_TerminalGasLNG_12.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_TerminalCNG_13.set('fieldAliases', {'provinsi': 'provinsi', 'lokasi': 'lokasi', 'x': 'x', 'y': 'y', 'alamat': 'alamat', 'kapasitas': 'kapasitas', 'objectid': 'objectid', 'longitude': 'longitude', 'latitude': 'latitude', });
lyr_PipaDistribusiGasBumi_14.set('fieldAliases', {'objectid_1': 'objectid_1', 'shape_leng': 'shape_leng', 'objectid': 'objectid', 'bu_name': 'bu_name', 'bu_initial': 'bu_initial', 'rn_initial': 'rn_initial', 'rn_name': 'rn_name', 'tipe_pipa': 'tipe_pipa', 'bph.bph_pp': 'bph.bph_pp', 'diameter': 'diameter', 'length': 'length', 'st_length(': 'st_length(', });
lyr_PipaTransmisiGasBumi_15.set('fieldAliases', {'objectid_1': 'objectid_1', 'shape_leng': 'shape_leng', 'objectid_2': 'objectid_2', 'objectid_3': 'objectid_3', 'objectid': 'objectid', 'tipe_pipa': 'tipe_pipa', 'bu_name': 'bu_name', 'bu_initial': 'bu_initial', 'ra_name': 'ra_name', 'ra_initial': 'ra_initial', 'diameter': 'diameter', 'length': 'length', 'tariff': 'tariff', 'kap_desain': 'kap_desain', 'kapoperasi': 'kapoperasi', 'bph.bph_pp': 'bph.bph_pp', 'propinsi': 'propinsi', 'detail': 'detail', 'koorawal': 'koorawal', 'koorakhir': 'koorakhir', 'kkkssumber': 'kkkssumber', 'namalapang': 'namalapang', 'lokterima': 'lokterima', 'koorterima': 'koorterima', 'lokserah1': 'lokserah1', 'lokserah2': 'lokserah2', 'lokserah3': 'lokserah3', 'korterima1': 'korterima1', 'korterima2': 'korterima2', 'korterima3': 'korterima3', 'shape_le_1': 'shape_le_1', 'st_length(': 'st_length(', });
lyr_TerminalGasPuloampel_16.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Smelter_17.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SHPKawasanIndustriKalla_18.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'Luas_Ha': 'Luas_Ha', });
lyr_TitikLahan_19.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_PembangkitListrik_20.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'Kap_MW': 'Kap_MW', 'COD': 'COD', 'Jen_Pem': 'Jen_Pem', });
lyr_TitikPembangkitListrik_21.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'Kap_MW': 'Kap_MW', 'COD': 'COD', 'Jen_Pem': 'Jen_Pem', });
lyr_JaringanListrik_22.set('fieldAliases', {'Name': 'Name', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'Jarak_km': 'Jarak_km', });
lyr_SHPTambang_23.set('fieldAliases', {'Id': 'Id', 'Nama': 'Nama', 'Luas_Ha': 'Luas_Ha', 'Ore_Ton': 'Ore_Ton', });
lyr_TitikTambang_24.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_RuteTambang_25.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Jarak_km': 'Jarak_km', });
lyr_SebaranPelabuhanUmum_4.set('fieldImages', {'objectid': 'TextEdit', 'namobj': 'TextEdit', 'fcode': 'TextEdit', 'remark': 'TextEdit', 'klspel': 'TextEdit', 'srs_id': 'TextEdit', 'lcode': 'TextEdit', 'metadata': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'kode': 'TextEdit', 'tipe_pp': 'TextEdit', 'nama_pp': 'TextEdit', 'alamat': 'TextEdit', 'kodepos': 'TextEdit', 'notelp': 'TextEdit', 'surel': 'TextEdit', 'sk_tap_rip': 'TextEdit', 'sk_tap_lok': 'TextEdit', 'izin_bng': 'TextEdit', 'thn_bng': 'TextEdit', 'izin_kmb': 'TextEdit', 'thn_kmb': 'TextEdit', 'izin_ops': 'TextEdit', 'thn_ops': 'TextEdit', 'aset': 'TextEdit', 'nilai_aset': 'TextEdit', 'stat_ops': 'TextEdit', 'stat_jln': 'TextEdit', 'kls_jln': 'TextEdit', 'pnj_jln': 'TextEdit', 'stat_rel': 'TextEdit', 'jml_pns': 'TextEdit', 'tipe_opera': 'TextEdit', 'operator': 'TextEdit', 'lintas': 'TextEdit', 'jns_kpl': 'TextEdit', 'hirrki': 'TextEdit', 'jml_dmg': 'TextEdit', 'pnj_dmg': 'TextEdit', 'dlm_klm': 'TextEdit', 'bbt_kapal': 'TextEdit', 'ls_lap_pmp': 'TextEdit', 'term_pnp': 'TextEdit', 'ls_trm_pnp': 'TextEdit', 'term_ptk': 'TextEdit', 'ls_trm_ptk': 'TextEdit', 'term_crhc': 'TextEdit', 'ls_crhc': 'TextEdit', 'term_crhk': 'TextEdit', 'ls_crhk': 'TextEdit', 'kap_lay_br': 'TextEdit', 'ls_gdng_l1': 'TextEdit', 'ls_gdng_gp': 'TextEdit', 'ls_gdng_sc': 'TextEdit', 'ls_gdng_fd': 'TextEdit', 'ls_gdng_bd': 'TextEdit', 'ls_gdng_cd': 'TextEdit', 'ls_gdng_b3': 'TextEdit', 'ls_gdng_en': 'TextEdit', 'jml_bunker': 'TextEdit', 'kap_bunker': 'TextEdit', 'ls_kantor': 'TextEdit', 'ls_dag': 'TextEdit', 'kap_park': 'TextEdit', 'ls_park': 'TextEdit', 'ls_drh_krj': 'TextEdit', 'ls_bng': 'TextEdit', 'ls_drh_k_1': 'TextEdit', 'ls_drh_kep': 'TextEdit', 'wadmpr': 'TextEdit', 'wadmkk': 'TextEdit', 'kdppum': 'TextEdit', 'kdpkab': 'TextEdit', });
lyr_SebaranTerminalKhusus_5.set('fieldImages', {'namobj': 'TextEdit', 'fcode': 'TextEdit', 'luas': 'TextEdit', 'remark': 'TextEdit', 'srs_id': 'TextEdit', 'lcode': 'TextEdit', 'metadata': 'TextEdit', 'objectid_1': 'TextEdit', 'objectid': 'TextEdit', 'kode': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'tipe_pp': 'TextEdit', 'nama_pp': 'TextEdit', 'alamat': 'TextEdit', 'prov': 'TextEdit', 'kabkot': 'TextEdit', 'kd_prov': 'TextEdit', 'kd_kabkot': 'TextEdit', 'alamat_pgl': 'TextEdit', 'prov_pgl': 'TextEdit', 'kabkot_pgl': 'TextEdit', 'kodepos': 'TextEdit', 'notelp': 'TextEdit', 'surel': 'TextEdit', 'sk_tap_lok': 'TextEdit', 'izin_bng': 'TextEdit', 'thn_bng': 'TextEdit', 'izin_kmb': 'TextEdit', 'thn_kmb': 'TextEdit', 'izin_ops': 'TextEdit', 'thn_ops': 'TextEdit', 'status': 'TextEdit', 'stat_ops': 'TextEdit', 'bdg_keg': 'TextEdit', 'stat_jln': 'TextEdit', 'kls_jln': 'TextEdit', 'pnj_jln': 'TextEdit', 'stat_rel': 'TextEdit', 'jml_dmg': 'TextEdit', 'pnj_dmg': 'TextEdit', 'dlm_klm': 'TextEdit', 'bbt_kapal': 'TextEdit', 'pnbp': 'TextEdit', 'tersus_tuk': 'TextEdit', });
lyr_SebaranPembangkitListrik_6.set('fieldImages', {'namobj': 'TextEdit', 'daya': 'TextEdit', 'enrgprmr': 'TextEdit', 'alamat': 'TextEdit', 'objectid_1': 'TextEdit', 'objectid': 'TextEdit', 'regpln': 'TextEdit', 'thnopr': 'TextEdit', });
lyr_PetaJaringanListrik_7.set('fieldImages', {'objectid_1': 'TextEdit', 'objectid': 'TextEdit', 'namobj': 'TextEdit', 'pjgjar': 'TextEdit', 'regpln': 'TextEdit', });
lyr_PetaSebaranLokasiGarduInduk_8.set('fieldImages', {'teggi': 'TextEdit', 'thnopr': 'TextEdit', 'alamat': 'TextEdit', 'fcode': 'TextEdit', 'remark': 'TextEdit', 'objectid_1': 'TextEdit', 'objectid': 'TextEdit', 'namaobj': 'TextEdit', 'kapgi': 'TextEdit', 'statmlk': 'TextEdit', 'statopr': 'TextEdit', 'regpln': 'TextEdit', 'srs_id': 'TextEdit', });
lyr_CadanganMigasperWilayah_9.set('fieldImages', {'objectid': 'TextEdit', 'basin_name': 'TextEdit', 'p1_mikon': 'TextEdit', 'p2_mikon': 'TextEdit', 'p3_mikon': 'TextEdit', 'p1_gas': 'TextEdit', 'p2_gas': 'TextEdit', 'p3_gas': 'TextEdit', 'wilayah': 'TextEdit', 'id_wil': 'TextEdit', 'st_area(sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_WilayahKerjaMigas_10.set('fieldImages', {'objectid': '', 'namobj': '', 'oprblk': '', 'effdat': '', 'expdat': '', 'status': '', 'srs_id': '', 'metadata': '', });
lyr_WIUPTambang_11.set('fieldImages', {'fid_': 'TextEdit', 'objectid': 'TextEdit', 'pulau': 'TextEdit', 'pejabat': 'TextEdit', 'id_prov': 'TextEdit', 'nama_prov': 'TextEdit', 'id_kab': 'TextEdit', 'nama_kab': 'TextEdit', 'jenis_izin': 'TextEdit', 'badan_usah': 'TextEdit', 'nama_usaha': 'TextEdit', 'kode_wiup': 'TextEdit', 'sk_iup': 'TextEdit', 'tgl_berlak': 'TextEdit', 'tgl_akhir': 'TextEdit', 'kegiatan': 'TextEdit', 'luas_sk': 'TextEdit', 'komoditas': 'TextEdit', 'kode_golon': 'TextEdit', 'kode_jnsko': 'TextEdit', 'cnc': 'TextEdit', 'generasi': 'TextEdit', 'kode_wil': 'TextEdit', 'lokasi': 'TextEdit', 'SHAPE__Len': 'TextEdit', 'SHAPE__Are': 'TextEdit', 'KomoditasB': 'TextEdit', 'Shape_Ha': '', });
lyr_TerminalGasLNG_12.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_TerminalCNG_13.set('fieldImages', {'provinsi': '', 'lokasi': '', 'x': '', 'y': '', 'alamat': '', 'kapasitas': '', 'objectid': '', 'longitude': '', 'latitude': '', });
lyr_PipaDistribusiGasBumi_14.set('fieldImages', {'objectid_1': 'TextEdit', 'shape_leng': 'TextEdit', 'objectid': 'TextEdit', 'bu_name': 'TextEdit', 'bu_initial': 'TextEdit', 'rn_initial': 'TextEdit', 'rn_name': 'TextEdit', 'tipe_pipa': 'TextEdit', 'bph.bph_pp': 'TextEdit', 'diameter': 'TextEdit', 'length': 'TextEdit', 'st_length(': 'TextEdit', });
lyr_PipaTransmisiGasBumi_15.set('fieldImages', {'objectid_1': 'TextEdit', 'shape_leng': 'TextEdit', 'objectid_2': 'TextEdit', 'objectid_3': 'TextEdit', 'objectid': 'TextEdit', 'tipe_pipa': 'TextEdit', 'bu_name': 'TextEdit', 'bu_initial': 'TextEdit', 'ra_name': 'TextEdit', 'ra_initial': 'TextEdit', 'diameter': 'TextEdit', 'length': 'TextEdit', 'tariff': 'TextEdit', 'kap_desain': 'TextEdit', 'kapoperasi': 'TextEdit', 'bph.bph_pp': 'TextEdit', 'propinsi': 'TextEdit', 'detail': 'TextEdit', 'koorawal': 'TextEdit', 'koorakhir': 'TextEdit', 'kkkssumber': 'TextEdit', 'namalapang': 'TextEdit', 'lokterima': 'TextEdit', 'koorterima': 'TextEdit', 'lokserah1': 'TextEdit', 'lokserah2': 'TextEdit', 'lokserah3': 'TextEdit', 'korterima1': 'TextEdit', 'korterima2': 'TextEdit', 'korterima3': 'TextEdit', 'shape_le_1': 'TextEdit', 'st_length(': 'TextEdit', });
lyr_TerminalGasPuloampel_16.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Smelter_17.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_SHPKawasanIndustriKalla_18.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'Luas_Ha': 'Range', });
lyr_TitikLahan_19.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_PembangkitListrik_20.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'Kap_MW': '', 'COD': '', 'Jen_Pem': '', });
lyr_TitikPembangkitListrik_21.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'Kap_MW': '', 'COD': '', 'Jen_Pem': '', });
lyr_JaringanListrik_22.set('fieldImages', {'Name': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'Jarak_km': 'TextEdit', });
lyr_SHPTambang_23.set('fieldImages', {'Id': 'Range', 'Nama': 'TextEdit', 'Luas_Ha': 'TextEdit', 'Ore_Ton': 'TextEdit', });
lyr_TitikTambang_24.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_RuteTambang_25.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Jarak_km': '', });
lyr_SebaranPelabuhanUmum_4.set('fieldLabels', {'objectid': 'hidden field', 'namobj': 'hidden field', 'fcode': 'hidden field', 'remark': 'hidden field', 'klspel': 'hidden field', 'srs_id': 'hidden field', 'lcode': 'hidden field', 'metadata': 'hidden field', 'lat': 'hidden field', 'lon': 'hidden field', 'kode': 'hidden field', 'tipe_pp': 'hidden field', 'nama_pp': 'header label - always visible', 'alamat': 'header label - always visible', 'kodepos': 'hidden field', 'notelp': 'no label', 'surel': 'hidden field', 'sk_tap_rip': 'hidden field', 'sk_tap_lok': 'hidden field', 'izin_bng': 'hidden field', 'thn_bng': 'hidden field', 'izin_kmb': 'hidden field', 'thn_kmb': 'hidden field', 'izin_ops': 'hidden field', 'thn_ops': 'hidden field', 'aset': 'hidden field', 'nilai_aset': 'hidden field', 'stat_ops': 'hidden field', 'stat_jln': 'hidden field', 'kls_jln': 'hidden field', 'pnj_jln': 'hidden field', 'stat_rel': 'hidden field', 'jml_pns': 'hidden field', 'tipe_opera': 'hidden field', 'operator': 'header label - always visible', 'lintas': 'hidden field', 'jns_kpl': 'hidden field', 'hirrki': 'hidden field', 'jml_dmg': 'hidden field', 'pnj_dmg': 'hidden field', 'dlm_klm': 'hidden field', 'bbt_kapal': 'hidden field', 'ls_lap_pmp': 'hidden field', 'term_pnp': 'hidden field', 'ls_trm_pnp': 'hidden field', 'term_ptk': 'hidden field', 'ls_trm_ptk': 'hidden field', 'term_crhc': 'hidden field', 'ls_crhc': 'hidden field', 'term_crhk': 'hidden field', 'ls_crhk': 'hidden field', 'kap_lay_br': 'hidden field', 'ls_gdng_l1': 'hidden field', 'ls_gdng_gp': 'hidden field', 'ls_gdng_sc': 'hidden field', 'ls_gdng_fd': 'hidden field', 'ls_gdng_bd': 'hidden field', 'ls_gdng_cd': 'hidden field', 'ls_gdng_b3': 'hidden field', 'ls_gdng_en': 'hidden field', 'jml_bunker': 'hidden field', 'kap_bunker': 'hidden field', 'ls_kantor': 'hidden field', 'ls_dag': 'hidden field', 'kap_park': 'hidden field', 'ls_park': 'hidden field', 'ls_drh_krj': 'hidden field', 'ls_bng': 'hidden field', 'ls_drh_k_1': 'hidden field', 'ls_drh_kep': 'hidden field', 'wadmpr': 'header label - always visible', 'wadmkk': 'header label - always visible', 'kdppum': 'hidden field', 'kdpkab': 'hidden field', });
lyr_SebaranTerminalKhusus_5.set('fieldLabels', {'namobj': 'header label - always visible', 'fcode': 'hidden field', 'luas': 'hidden field', 'remark': 'hidden field', 'srs_id': 'hidden field', 'lcode': 'hidden field', 'metadata': 'hidden field', 'objectid_1': 'hidden field', 'objectid': 'hidden field', 'kode': 'hidden field', 'lat': 'hidden field', 'lon': 'hidden field', 'tipe_pp': 'hidden field', 'nama_pp': 'header label - always visible', 'alamat': 'header label - always visible', 'prov': 'header label - always visible', 'kabkot': 'header label - always visible', 'kd_prov': 'hidden field', 'kd_kabkot': 'hidden field', 'alamat_pgl': 'hidden field', 'prov_pgl': 'hidden field', 'kabkot_pgl': 'hidden field', 'kodepos': 'hidden field', 'notelp': 'hidden field', 'surel': 'hidden field', 'sk_tap_lok': 'hidden field', 'izin_bng': 'hidden field', 'thn_bng': 'hidden field', 'izin_kmb': 'hidden field', 'thn_kmb': 'hidden field', 'izin_ops': 'hidden field', 'thn_ops': 'hidden field', 'status': 'hidden field', 'stat_ops': 'hidden field', 'bdg_keg': 'header label - always visible', 'stat_jln': 'hidden field', 'kls_jln': 'hidden field', 'pnj_jln': 'hidden field', 'stat_rel': 'hidden field', 'jml_dmg': 'hidden field', 'pnj_dmg': 'hidden field', 'dlm_klm': 'hidden field', 'bbt_kapal': 'hidden field', 'pnbp': 'hidden field', 'tersus_tuk': 'header label - always visible', });
lyr_SebaranPembangkitListrik_6.set('fieldLabels', {'namobj': 'header label - always visible', 'daya': 'header label - always visible', 'enrgprmr': 'hidden field', 'alamat': 'header label - always visible', 'objectid_1': 'hidden field', 'objectid': 'hidden field', 'regpln': 'header label - always visible', 'thnopr': 'header label - always visible', });
lyr_PetaJaringanListrik_7.set('fieldLabels', {'objectid_1': 'hidden field', 'objectid': 'hidden field', 'namobj': 'header label - always visible', 'pjgjar': 'header label - always visible', 'regpln': 'header label - always visible', });
lyr_PetaSebaranLokasiGarduInduk_8.set('fieldLabels', {'teggi': 'hidden field', 'thnopr': 'header label - always visible', 'alamat': 'header label - always visible', 'fcode': 'hidden field', 'remark': 'hidden field', 'objectid_1': 'hidden field', 'objectid': 'hidden field', 'namaobj': 'header label - always visible', 'kapgi': 'hidden field', 'statmlk': 'hidden field', 'statopr': 'header label - always visible', 'regpln': 'header label - always visible', 'srs_id': 'hidden field', });
lyr_CadanganMigasperWilayah_9.set('fieldLabels', {'objectid': 'hidden field', 'basin_name': 'header label - always visible', 'p1_mikon': 'header label - always visible', 'p2_mikon': 'header label - always visible', 'p3_mikon': 'header label - always visible', 'p1_gas': 'header label - always visible', 'p2_gas': 'header label - always visible', 'p3_gas': 'header label - always visible', 'wilayah': 'header label - always visible', 'id_wil': 'hidden field', 'st_area(sh': 'hidden field', 'st_perimet': 'hidden field', });
lyr_WilayahKerjaMigas_10.set('fieldLabels', {'objectid': 'hidden field', 'namobj': 'header label - always visible', 'oprblk': 'header label - always visible', 'effdat': 'hidden field', 'expdat': 'hidden field', 'status': 'header label - always visible', 'srs_id': 'hidden field', 'metadata': 'hidden field', });
lyr_WIUPTambang_11.set('fieldLabels', {'fid_': 'hidden field', 'objectid': 'hidden field', 'pulau': 'hidden field', 'pejabat': 'hidden field', 'id_prov': 'hidden field', 'nama_prov': 'hidden field', 'id_kab': 'hidden field', 'nama_kab': 'hidden field', 'jenis_izin': 'header label - always visible', 'badan_usah': 'header label - always visible', 'nama_usaha': 'header label - always visible', 'kode_wiup': 'hidden field', 'sk_iup': 'header label - always visible', 'tgl_berlak': 'hidden field', 'tgl_akhir': 'hidden field', 'kegiatan': 'header label - always visible', 'luas_sk': 'hidden field', 'komoditas': 'header label - always visible', 'kode_golon': 'hidden field', 'kode_jnsko': 'hidden field', 'cnc': 'hidden field', 'generasi': 'hidden field', 'kode_wil': 'hidden field', 'lokasi': 'header label - always visible', 'SHAPE__Len': 'hidden field', 'SHAPE__Are': 'hidden field', 'KomoditasB': 'header label - always visible', 'Shape_Ha': 'header label - always visible', });
lyr_TerminalGasLNG_12.set('fieldLabels', {'Name': 'header label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_TerminalCNG_13.set('fieldLabels', {'provinsi': 'hidden field', 'lokasi': 'hidden field', 'x': 'hidden field', 'y': 'hidden field', 'alamat': 'header label - always visible', 'kapasitas': 'header label - always visible', 'objectid': 'hidden field', 'longitude': 'hidden field', 'latitude': 'hidden field', });
lyr_PipaDistribusiGasBumi_14.set('fieldLabels', {'objectid_1': 'hidden field', 'shape_leng': 'hidden field', 'objectid': 'hidden field', 'bu_name': 'header label - always visible', 'bu_initial': 'hidden field', 'rn_initial': 'hidden field', 'rn_name': 'header label - always visible', 'tipe_pipa': 'header label - always visible', 'bph.bph_pp': 'header label - always visible', 'diameter': 'header label - always visible', 'length': 'hidden field', 'st_length(': 'hidden field', });
lyr_PipaTransmisiGasBumi_15.set('fieldLabels', {'objectid_1': 'hidden field', 'shape_leng': 'hidden field', 'objectid_2': 'hidden field', 'objectid_3': 'hidden field', 'objectid': 'hidden field', 'tipe_pipa': 'header label - always visible', 'bu_name': 'header label - always visible', 'bu_initial': 'hidden field', 'ra_name': 'header label - always visible', 'ra_initial': 'hidden field', 'diameter': 'header label - always visible', 'length': 'header label - always visible', 'tariff': 'header label - always visible', 'kap_desain': 'hidden field', 'kapoperasi': 'hidden field', 'bph.bph_pp': 'header label - always visible', 'propinsi': 'header label - always visible', 'detail': 'hidden field', 'koorawal': 'hidden field', 'koorakhir': 'hidden field', 'kkkssumber': 'header label - always visible', 'namalapang': 'header label - always visible', 'lokterima': 'hidden field', 'koorterima': 'hidden field', 'lokserah1': 'header label - always visible', 'lokserah2': 'header label - always visible', 'lokserah3': 'header label - always visible', 'korterima1': 'hidden field', 'korterima2': 'hidden field', 'korterima3': 'hidden field', 'shape_le_1': 'hidden field', 'st_length(': 'hidden field', });
lyr_TerminalGasPuloampel_16.set('fieldLabels', {'Name': 'header label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_Smelter_17.set('fieldLabels', {'Name': 'header label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_SHPKawasanIndustriKalla_18.set('fieldLabels', {'Name': 'header label - always visible', 'descriptio': 'hidden field', 'Luas_Ha': 'header label - always visible', });
lyr_TitikLahan_19.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_PembangkitListrik_20.set('fieldLabels', {'Name': 'header label - always visible', 'descriptio': 'header label - always visible', 'Kap_MW': 'no label', 'COD': 'no label', 'Jen_Pem': 'no label', });
lyr_TitikPembangkitListrik_21.set('fieldLabels', {'Name': 'header label - always visible', 'descriptio': 'header label - always visible', 'Kap_MW': 'no label', 'COD': 'no label', 'Jen_Pem': 'no label', });
lyr_JaringanListrik_22.set('fieldLabels', {'Name': 'header label - always visible', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'Jarak_km': 'header label - always visible', });
lyr_SHPTambang_23.set('fieldLabels', {'Id': 'no label', 'Nama': 'header label - visible with data', 'Luas_Ha': 'header label - always visible', 'Ore_Ton': 'header label - always visible', });
lyr_TitikTambang_24.set('fieldLabels', {'Name': 'header label - always visible', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_RuteTambang_25.set('fieldLabels', {'Name': 'header label - always visible', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Jarak_km': 'header label - always visible', });
lyr_RuteTambang_25.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});