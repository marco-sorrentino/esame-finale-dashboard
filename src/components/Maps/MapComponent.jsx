import "leaflet/dist/leaflet.css";
import "./maps.scss";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import L from "leaflet";
import { RoutingMachine } from "./RoutingMachine";
import { GeoCoderComponent } from "./GeoCoderComponent";

export const MapComponent = () => {
  const position = [45.464203, 9.189982];
  let DefaultIcon = L.icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/0/619.png",
    iconSize: [25, 25],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
  });
  L.Marker.prototype.options.icon = DefaultIcon;

  return (
    <div className="mt-3 bgAllDiv p-3">
      <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <GeoCoderComponent />
        <RoutingMachine />
      </MapContainer>
    </div>
  );
};