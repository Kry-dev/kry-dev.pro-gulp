function initMap() {
    var reutov = {lat: 49.2327205, lng: 28.4657373};
    var center = {lat: 49.2327205, lng: 28.4657373};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        disableDefaultUI: true,
        center: center
    });
    var marker = new google.maps.Marker({
        position: reutov,
        map: map
    });
}
export {initMap};
