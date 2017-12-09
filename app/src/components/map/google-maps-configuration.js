export default (overwrite) => {
  return {
    center: overwrite.center,
    zoom: overwrite.zoom || 16,
    fullscreenControl: overwrite.fullscreenControl || false,
    mapTypeControl: overwrite.mapTypeControl || false,
    navigationControlOptions: overwrite.navigationControlOptions || {
        style: google.maps.NavigationControlStyle.SMALL
    },
    zoomControlOptions: overwrite.zoomControlOptions || {
        position: google.maps.ControlPosition.RIGHT_CENTER
    },
    streetViewControl: overwrite.streetViewControl || false,
    mapTypeId: overwrite.mapTypeId || google.maps.MapTypeId.ROADMAP,
    styles: overwrite.styles || [
        {
            featureType: "poi",
            elementType: "labels",
            stylers: [
                { visibility: "off" }
            ]
        },
        {
            featureType: "road",
            elementType: "labels",
            stylers: [
                { visibility: "simplified" }
            ]
        },
        {
            featureType: "transit.station",
            elementType: "all",
            stylers: [
                { visibility: "off" }
            ]
        },
        {
            featureType: "landscape.man_made",
            elementType: "all",
            stylers: [
                { visibility: "off" }
            ]
        }
    ]
  };
}