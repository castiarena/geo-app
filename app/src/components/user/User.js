export default class User {
  constructor(map, position, 
    point = { 
      fillColor: '#3483fa',
      scale: 10.5
    }, 
    shadow = {
      fillColor: '#333333',      
      fillOpacity: .1,
      scale: 27      
    }
  ){
    this.point = point;
    this.shadow = shadow;
    this.position = position;
    this.draw(map);
  }

  draw(map){
    this.shadow = new google.maps.Marker({
      map,
      position: this.position,
      icon: {          
        path: google.maps.SymbolPath.CIRCLE,
        fillOpacity: this.shadow.fillOpacity,
        fillColor: this.shadow.fillColor,
        strokeOpacity: 0,
        scale: 27
      }
    });

    this.marker = new google.maps.Marker({
      map,
      position: this.position,
      icon: {  
        path: google.maps.SymbolPath.CIRCLE,
        fillOpacity: 1,
        fillColor: this.point.fillColor,
        strokeOpacity: 0,
        scale: this.point.scale
      }
    });
  }
}