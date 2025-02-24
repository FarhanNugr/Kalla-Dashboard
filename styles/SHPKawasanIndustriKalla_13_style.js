var size = 0;
var placement = 'point';
function categories_SHPKawasanIndustriKalla_13(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Blok Kawasan Industri Belang-Belang':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(238,238,238,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Blok Kawasan Industri Suppa':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(204,233,37,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Blok Lahan Lampia':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,1,9,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Blok Pulauampel':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(20,102,203,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_SHPKawasanIndustriKalla_13 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("Name");
    var labelFont = "9.1px \'Times New Roman\', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("Name") !== null) {
        labelText = String(feature.get("Name"));
    }
    
    var style = categories_SHPKawasanIndustriKalla_13(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
