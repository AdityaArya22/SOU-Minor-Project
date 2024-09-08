import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Star } from 'lucide-react';

const NearbyHospitals = () => {
  const [hospitals, setHospitals] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
          fetchNearbyHospitals(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          setError("Error getting your location. Please enable location services.");
          setLoading(false);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
      setLoading(false);
    }
  }, []);

  const fetchNearbyHospitals = async (latitude, longitude) => {
    // In a real application, you would make an API call here to fetch nearby hospitals
    // For this example, we'll simulate it with a timeout and dummy data
    setTimeout(() => {
      const dummyHospitals = [
        {
          id: 1,
          name: "City General Hospital",
          address: "123 Main St, Cityville, ST 12345",
          phone: "+1 (555) 123-4567",
          hours: "24/7",
          rating: 4.5,
          distance: "2.3 miles",
          services: ["Emergency", "Surgery", "Pediatrics"]
        },
        {
          id: 2,
          name: "Sunshine Medical Center",
          address: "456 Oak Ave, Townsburg, ST 67890",
          phone: "+1 (555) 987-6543",
          hours: "Mon-Sat: 8AM-8PM",
          rating: 4.2,
          distance: "3.7 miles",
          services: ["Cardiology", "Orthopedics", "Neurology"]
        },
        // Add more hospital data as needed
      ];
      setHospitals(dummyHospitals);
      setLoading(false);
    }, 1000);
  };

  const handleCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleDirections = (address) => {
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  if (loading) {
    return <div className="min-h-screen bg-gray-100 flex items-center justify-center">Loading...</div>;
  }

  if (error) {
    return <div className="min-h-screen bg-gray-100 flex items-center justify-center text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 font-sans">
      <h1 className="text-3xl font-bold mb-6 text-center">Nearby Hospitals</h1>
      {userLocation && (
        <p className="text-center mb-4">
          Your location: {userLocation.latitude.toFixed(4)}, {userLocation.longitude.toFixed(4)}
        </p>
      )}
      <div className="max-w-4xl mx-auto">
        {hospitals.map((hospital) => (
          <div key={hospital.id} className="bg-white rounded-lg shadow-md mb-6 p-6">
            <h2 className="text-2xl font-semibold mb-2">{hospital.name}</h2>
            <div className="flex items-center mb-2">
              <MapPin className="text-gray-500 mr-2" size={18} />
              <span>{hospital.address}</span>
            </div>
            <div className="flex items-center mb-2">
              <Clock className="text-gray-500 mr-2" size={18} />
              <span>{hospital.hours}</span>
            </div>
            <div className="flex items-center mb-2">
              <Star className="text-yellow-500 mr-2" size={18} />
              <span>{hospital.rating} stars</span>
            </div>
            <p className="mb-2">Distance: {hospital.distance}</p>
            <div className="mb-4">
              <strong>Services:</strong> {hospital.services.join(", ")}
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleCall(hospital.phone)}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center"
              >
                <Phone size={18} className="mr-2" />
                Call
              </button>
              <button
                onClick={() => handleDirections(hospital.address)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center"
              >
                <MapPin size={18} className="mr-2" />
                Directions
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NearbyHospitals;