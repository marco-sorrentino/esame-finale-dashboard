import { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useMap } from "react-leaflet";
import { BsFillCarFrontFill } from "react-icons/bs";

export const RoutingMachine = () => {
  const map = useMap();
  let icon = L.icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/0/619.png",
    iconSize: [30, 30],
  });
  useEffect(() => {
    let marker1 = L.marker([45.464203, 9.189982], { icon: icon }).addTo(map);

    L.Routing.control({
      waypoints: [L.latLng(), L.latLng()],
      lineOptions: {
        styles: [
          {
            color: "blue",
            weight: 6,
          },
        ],
      },
      routeWhileDragging: false,
      geocoder: L.Control.Geocoder.nominatim(),
      addWaypoints: true,
      draggableWaypoints: false,
      fitSelectedRoutes: true,
      showAlternatives: true,
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
