// Refactor made this a Standalone map app.
/* We only accept objects with the shape of Mappable in our map function. 
  This way we restrict the type of classes that can be accepted, additionally we do not narrow the function to use only User and Company model as more classes Model can be accepted.
 */
export interface Mappable {
    location: {
        latitude: number,
        longitude: number;
    };
    markerContent: () => string;
}

export class CustomMap {
    // This make this property private and properties cannot be access outside this class.
    private googleMap: google.maps.Map;
    constructor( tagId: string ) {
        this.googleMap = new google.maps.Map( document.getElementById( tagId )!, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        } );
    }

    addMarker( mappable: Mappable ): void {
        const marker = new google.maps.Marker( {
            map: this.googleMap,
            position: {
                lat: mappable.location.latitude,
                lng: mappable.location.longitude
            }
        } );
        // Popup window.
        marker.addListener( 'click', () => {
            const infoWindow = new google.maps.InfoWindow( {
                content: mappable.markerContent()
            } );
            infoWindow.open( this.googleMap, marker );
        } );
    }
}