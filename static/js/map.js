function initMap () {
  let lat = 55.7067838
  let lng = 37.6888278
  let zoom = 17
  let windowWidth = $(window).width()
  if (windowWidth <= 576) {
    lat = 55.7067838
    lng = 37.6888278
    zoom = 16
  }
  if (windowWidth <= 350) {
    lat = 55.7067838
    lng = 37.6868278
    zoom = 16
  }

  // Styles a map in night mode.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: lat, lng: lng },
    zoom: zoom,
    styles: [
      {
        elementType: 'geometry',
        stylers: [
          {
            color: '#f5f5f5'
          }
        ]
      },
      {
        elementType: 'labels.icon',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#616161'
          }
        ]
      },
      {
        elementType: 'labels.text.stroke',
        stylers: [
          {
            color: '#f5f5f5'
          }
        ]
      },
      {
        featureType: 'administrative',
        elementType: 'geometry',
        stylers: [
          {
            visibility: 'on'
          }
        ]
      },
      {
        featureType: 'administrative.land_parcel',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#bdbdbd'
          }
        ]
      },
      {
        featureType: 'landscape.man_made',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#CC0000'
          }
        ]
      },
      {
        featureType: 'poi',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [
          {
            color: '#CC0000'
          }
        ]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#757575'
          }
        ]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [
          {
            color: '#CC0000'
          }
        ]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#9e9e9e'
          }
        ]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [
          {
            color: '#ffffff'
          }
        ]
      },
      {
        featureType: 'road',
        elementType: 'labels.icon',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'road.arterial',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#757575'
          }
        ]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [
          {
            color: '#dadada'
          }
        ]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#616161'
          }
        ]
      },
      {
        featureType: 'road.local',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#9e9e9e'
          }
        ]
      },
      {
        featureType: 'transit',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'transit.line',
        elementType: 'geometry',
        stylers: [
          {
            color: '#e5e5e5'
          }
        ]
      },
      {
        featureType: 'transit.station',
        elementType: 'geometry',
        stylers: [
          {
            color: '#eeeeee'
          }
        ]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
          {
            color: '#c9c9c9'
          }
        ]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#9e9e9e'
          }
        ]
      }
    ]
  })

  var image = '/images/index/s9/Placeholder_dark_grey.png'
  var beachMarker = new google.maps.Marker({
    position: { lat: 55.70784412551903, lng: 37.68859863281251 },
    map: map,
    icon: image
  })
  beachMarker.addListener('click', function () {
    $('#fullpage_welcome .section.s9 .full .r ul.info').addClass('open')
  })

  image = '/images/index/s9/Parking_green.png'
  beachMarker = new google.maps.Marker({
    map: map,
    icon: image
  })

  beachMarker = new google.maps.Marker({
    position: { lat: 55.77501158, lng: 37.6835796 },
    map: map,
    icon: image
  })

  image = '/images/index/s9/Underground_grey.png'
  beachMarker = new google.maps.Marker({
    position: { lat: 55.7062038, lng: 37.6848278 },
    map: map,
    icon: image
  })
  var flightPlanCoordinates = [
    { lat: 55.77827, lng: 37.67624395 },
    { lat: 55.777191, lng: 37.6793 }
  ]
  var flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: '#00B800',
    strokeOpacity: 1.0,
    strokeWeight: 2
  })

  flightPath.setMap(map)

  flightPlanCoordinates = [
    { lat: 55.77530839, lng: 37.68359504 },
    { lat: 55.77492747, lng: 37.68413416 },
    { lat: 55.77469666, lng: 37.68361918 },
    { lat: 55.77473211, lng: 37.68345288 },
    { lat: 55.77484299, lng: 37.68322221 },
    { lat: 55.77503307, lng: 37.68294192 },
    { lat: 55.77530839, lng: 37.68359504 }
  ]
  flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: '#00B800',
    strokeOpacity: 1.0,
    strokeWeight: 2
  })

  flightPath.setMap(map)
}
