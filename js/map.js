function initialize(id,name)
{
 
var geocoder =  new google.maps.Geocoder();
geocoder.geocode( { 'address':name}, function(results, status) {
 if (status == google.maps.GeocoderStatus.OK) {
 var myCenter=new google.maps.LatLng( results[0].geometry.location.lat() , results[0].geometry.location.lng());
 var marker;
 var mapProp = {
 scrollwheel:true,        
 center:myCenter,
 zoom:15,
 mapTypeId: google.maps.MapTypeId.ROADMAP
 };
 var map=new google.maps.Map(document.getElementById("googleMap"+id),mapProp);
  
 marker=new google.maps.Marker({
 position:myCenter,
 animation:google.maps.Animation.BOUNCE
});
marker.setMap(map);
 
var infowindow = new google.maps.InfoWindow({
      overlayImage:place,
      content:contentString
      });
        google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
      });
 }
});
}