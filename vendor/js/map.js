$(function () {

  'use strict';

  function initializeMap(latitude, longitude, zoom, companyname, description, el) {

    var MapStyle = [{
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [{"color": "#444444"}]
      }, {"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#f2f2f2"}]}, {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [{"visibility": "off"}]
      }, {
        "featureType": "road",
        "elementType": "all",
        "stylers": [{"saturation": -100}, {"lightness": 45}]
      }, {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [{"visibility": "simplified"}]
      }, {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [{"visibility": "off"}]
      }, {"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"}]}, {
        "featureType": "water",
        "elementType": "all",
        "stylers": [{"color": "#8200a9"}, {"visibility": "on"}]
      }],
      styledMap = new google.maps.StyledMapType(MapStyle, {
        name: "Styled Map"
      }),
      mapOptions = {
        scaleControl: true,
        scrollwheel: false,
        zoomControl: false,
        mapTypeControl: false,
        center: new google.maps.LatLng(latitude, longitude),
        zoom: zoom,
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }
      },
      map = new google.maps.Map(el, mapOptions),
      marker = new google.maps.Marker({
        map: map,
        position: map.getCenter()
      }),
      infowindow = new google.maps.InfoWindow();

    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

    if (companyname != "") {
      companyname = '<h4>' + companyname + '</h4>';
    }
    description = '<p>' + description + '</p>';

    infowindow.setContent("<div class='map-description'>" + companyname + " " + description + "</div>");

    google.maps.event.addListener(marker, 'click', function () {
      infowindow.open(map, marker);
    });
  }

  if ($('.google-map').length) {
    $('.google-map').each(function(i, obj) {
      map_setting(this);
    });
  }
  function map_setting(el) {
    if ($(el).length > 0) {
      var latitude = $(el).data('latitude'),
          longitude = $(el).data('longitude'),
          zoom = $(el).data('zoom'),
          companyname = $(el).data('companyname'),
          imagepath = $(el).data('imagepath'),
          description = $(el).data('decription');
      google.maps.event.addDomListener(window, 'load', initializeMap(latitude, longitude, zoom, companyname, description, el));
    };
  }
});