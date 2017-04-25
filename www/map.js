var element = document.getElementById("map");
var mapTypeIds = [];
for (var type in google.maps.MapTypeId) {
    mapTypeIds.push(google.maps.MapTypeId[type]);
}

mapTypeIds.push("OSM");
mapTypeIds.push("MyGmap");
mapTypeIds.push("LocalGmap");
mapTypeIds.push("WebStorageGmap");
mapTypeIds.push("LocalMyGmap");
mapTypeIds.push("WebStorageMyGmap");

var map = new google.maps.Map(element, {

    center: new google.maps.LatLng(28.394857, 84.124008),
    zoom: 8,
    mapTypeId: "MyGmap",
    mapTypeControlOptions: {
        mapTypeIds: mapTypeIds,
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
    }
});

map.mapTypes.set("OSM", new google.maps.ImageMapType({
    getTileUrl: getOsmTileImgSrc,
    tileSize: new google.maps.Size(256, 256),
    name: "OSM",
    maxZoom: 15
}));

map.mapTypes.set("MyGmap", new google.maps.ImageMapType({
    getTileUrl: getGmapTileImgSrc,
    tileSize: new google.maps.Size(256, 256),
    name: "MyGmap",
    maxZoom: 15
}));

map.mapTypes.set("LocalGmap", new google.maps.ImageMapType({
    getTileUrl: getLocalTileImgSrc,
    tileSize: new google.maps.Size(256, 256),
    name: "LocalGmap",
    maxZoom: 15
}));

map.mapTypes.set("WebStorageGmap", new google.maps.ImageMapType({
    getTileUrl: getWebStorageTileImgSrc,
    tileSize: new google.maps.Size(256, 256),
    name: "WebStorageGmap",
    maxZoom: 15
}));

map.mapTypes.set("LocalMyGmap", new google.maps.ImageMapType({
    getTileUrl: function(coord, zoom) {
        return checkTileInSprites(coord, zoom) ?
            getLocalTileImgSrc(coord, zoom) :
            getGmapTileImgSrc(coord, zoom);
    },
    tileSize: new google.maps.Size(256, 256),
    name: "LocalMyGmap",
    maxZoom: 15
}));

map.mapTypes.set("WebStorageMyGmap", new google.maps.ImageMapType({
    getTileUrl: function(coord, zoom) {
        var image = getWebStorageTileImgSrc(coord, zoom);
        return image ? image : getGmapTileImgSrc(coord, zoom);
    },
    tileSize: new google.maps.Size(256, 256),
    name: "WebStorageMyGmap",
    maxZoom: 15
}));


 var locations = [
  ['Dhaulagiri',28.698465, 83.487350, 3],
  ['Manaslu', 28.549711, 84.559677, 2],
  ['Bharatpur', 27.216981,  77.489515, 1],
  ['Kathmandu', 27.717245,  85.323960, 4],

];

var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 8,
  center: new google.maps.LatLng(28.394857, 84.124008),
  mapTypeId: google.maps.MapTypeId.ROADMAP
});

var infowindow = new google.maps.InfoWindow();

var marker, i;

for (i = 0; i < locations.length; i++) { 
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
    map: map
  });

  google.maps.event.addListener(marker, 'click', (function(marker, i) {
    return function() {
      infowindow.setContent(locations[i][0]);
      infowindow.open(map, marker);
    }
  })(marker, i));
}


google.maps.event.addListener(map, 'click', function(point) {
    var marker = new google.maps.Marker({
        position: point.latLng,
        map: map
    });
    google.maps.event.addListener(marker, 'dblclick', function() {
        marker.setMap(null);
    });
    google.maps.event.addListener(marker, 'click', function() {
        new google.maps.InfoWindow({
            content: 'lat: ' + point.latLng.lat() + '<br>lng:' + point.latLng.lng()
        }).open(map, marker);
    });
});

function CustomControl(controlDiv, map, title, handler) {
    controlDiv.style.padding = '5px';

    var controlUI = document.createElement('DIV');
    controlUI.style.backgroundColor = 'white';
    controlUI.style.borderStyle = 'solid';
    controlUI.style.borderWidth = '2px';
    controlUI.style.cursor = 'pointer';
    controlUI.style.textAlign = 'center';
    controlUI.title = title;
    controlDiv.appendChild(controlUI);

    var controlText = document.createElement('DIV');
    controlText.style.fontFamily = 'Arial,sans-serif';
    controlText.style.fontSize = '12px';
    controlText.style.paddingLeft = '4px';
    controlText.style.paddingRight = '4px';
    controlText.innerHTML = title;
    controlUI.appendChild(controlText);

    google.maps.event.addDomListener(controlUI, 'click', handler);
}

var clearWebStorageDiv = document.createElement('DIV');

var clearWebStorageButton = new CustomControl(clearWebStorageDiv, map,
    '', clearWebStorage);

var prepareWebStorageDiv = document.createElement('DIV');

var prepareWebStorageButton = new CustomControl(prepareWebStorageDiv, map,
    '', prepareWebStorage);

clearWebStorageDiv.index = 1;
prepareWebStorageDiv.index = 1;
map.controls[google.maps.ControlPosition.TOP_RIGHT].push(clearWebStorageDiv);
map.controls[google.maps.ControlPosition.TOP_RIGHT].push(prepareWebStorageDiv);