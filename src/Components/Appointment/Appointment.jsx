import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Star, Loader2 } from 'lucide-react';

const NearbyHospitals = () => {
  const [hospitals, setHospitals] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const LOCATIONIQ_API_KEY = 'pk.8a84112523c9b5edbac20087ae490f31'; // Replace with your actual API key

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

  const formatAddress = (addressObj) => {
    if (typeof addressObj === 'string') return addressObj;
    const parts = [
      addressObj.name,
      addressObj.suburb,
      addressObj.county,
      addressObj.state,
      addressObj.postcode,
      addressObj.country
    ].filter(Boolean);
    return parts.join(', ');
  };

  const fetchNearbyHospitals = async (latitude, longitude) => {
    try {
      const response = await fetch(`https://us1.locationiq.com/v1/nearby.php?key=${LOCATIONIQ_API_KEY}&lat=${latitude}&lon=${longitude}&tag=hospital&radius=5000&format=json`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch nearby hospitals');
      }

      const data = await response.json();
      const formattedHospitals = data.map((hospital, index) => ({
        id: index + 1,
        name: hospital.name || 'Unknown Hospital',
        address: formatAddress(hospital.address),
        phone: hospital.phone || 'Phone not available',
        hours: hospital.opening_hours || 'Hours not available',
        rating: (Math.random() * 2 + 3).toFixed(1), // Random rating between 3.0 and 5.0
        distance: (hospital.distance / 1609.34).toFixed(2) + ' miles', // Convert meters to miles
        services: ['Emergency', 'General Care'], // You might need to adjust this based on available data
        latitude: hospital.lat,
        longitude: hospital.lon
      }));

      setHospitals(formattedHospitals);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching nearby hospitals:', error);
      setError('Failed to fetch nearby hospitals. Please try again later.');
      setLoading(false);
    }
  };

  const handleCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleDirections = (latitude, longitude) => {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`, '_blank');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <Alert variant="destructive" className="max-w-md">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800">Nearby Hospitals</h1>
        {userLocation && (
          <p className="text-center mb-4 text-gray-600">
            Your location: {userLocation.latitude.toFixed(4)}, {userLocation.longitude.toFixed(4)}
          </p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hospitals.map((hospital) => (
            <div key={hospital.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">{hospital.name}</h2>
                <div className="flex items-center mb-2 text-gray-600">
                  <MapPin className="flex-shrink-0 text-gray-500 mr-2" size={18} />
                  <span className="text-sm">{hospital.address}</span>
                </div>
                <div className="flex items-center mb-2 text-gray-600">
                  <Clock className="flex-shrink-0 text-gray-500 mr-2" size={18} />
                  <span className="text-sm">{hospital.hours}</span>
                </div>
                <div className="flex items-center mb-2">
                  <Star className="flex-shrink-0 text-yellow-500 mr-2" size={18} />
                  <span className="text-sm font-medium">{hospital.rating} stars</span>
                </div>
                <p className="mb-2 text-sm text-gray-600">Distance: {hospital.distance}</p>
                <div className="mb-4 text-sm text-gray-600">
                  <strong>Services:</strong> {hospital.services.join(", ")}
                </div>
              </div>
              <div className="bg-gray-50 px-6 py-4">
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handleCall(hospital.phone)}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <Phone size={18} className="mr-2" />
                    Call
                  </button>
                  <button
                    onClick={() => handleDirections(hospital.latitude, hospital.longitude)}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <MapPin size={18} className="mr-2" />
                    Directions
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NearbyHospitals;