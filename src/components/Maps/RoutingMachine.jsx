import { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useMap } from "react-leaflet";

export const RoutingMachine = () => {
  const map = useMap();
  let icon = L.icon({
    iconUrl:
      "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1596627972/assets/e7/e861a8-30ec-4d57-8045-7186f6c5ec35/original/comfort.png",
    iconSize: [80, 50],
  });
  useEffect(() => {
    let marker1 = L.marker([0, 0], { icon: icon }).addTo(map);

    L.Routing.control({
      waypoints: [L.latLng(), L.latLng()],
      lineOptions: {
        styles: [
          {
            color: "#1bb954",
            weight: 6,
          },
        ],
      },
      routeWhileDragging: false,
      geocoder: L.Control.Geocoder.nominatim(),
      addWaypoints: true,
      draggableWaypoints: false,
      fitSelectedRoutes: true,
      showAlternatives: false,
    })
      .on("routesfound", function (e) {
        e.routes[0].coordinates.forEach((el, i) => {
          setTimeout(() => {
            marker1.setLatLng([el.lat, el.lng]);
          }, 100 * i);
        });
      })
      .addTo(map);
  }, []);
  return <></>;
};
