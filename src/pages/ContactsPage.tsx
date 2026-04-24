import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { PageHeader } from '../components/layout/PageHeader';
import { useTranslation } from '../i18n/useTranslation';
import './ContactsPage.css';

// Leaflet marker default icon fix (bundler).
const markerIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const center: [number, number] = [55.7558, 37.6173];

export function ContactsPage() {
  const { t } = useTranslation();

  return (
    <>
      <PageHeader icon="🗺️" title={t('contacts.title')} subtitle={t('contacts.subtitle')} />

      <div className="contacts-grid">
        <div className="contacts-info">
          <InfoRow icon="📍" label={t('contacts.address')} value={t('contacts.addressValue')} />
          <InfoRow icon="📞" label={t('contacts.phone')} value="+7 (495) 123-45-67" />
          <InfoRow icon="✉️" label={t('contacts.email')} value="hello@gelato.ru" />
          <InfoRow icon="🕒" label={t('contacts.hours')} value={t('contacts.hoursValue')} />
        </div>

        <div className="contacts-map">
          <MapContainer center={center} zoom={14} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              attribution='&copy; OpenStreetMap contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={center} icon={markerIcon}>
              <Popup>❄️ SnowdropSHOP — {t('contacts.addressValue')}</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </>
  );
}

function InfoRow({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="contact-row">
      <div className="contact-icon" aria-hidden>
        {icon}
      </div>
      <div>
        <div className="contact-label">{label}</div>
        <div className="contact-value">{value}</div>
      </div>
    </div>
  );
}
