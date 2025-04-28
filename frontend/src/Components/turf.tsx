import React, { useState } from 'react';
import { Star, MapPin, Users, Calendar } from 'lucide-react';
import { TurfField } from '../types';
import TurfModal from './turfModel';
import b1 from '/assets/b1.jpeg';
import b2 from '/assets/b2.webp';
import c1 from '/assets/c1.webp';
import c2 from '/assets/c2.jpg';
import f1 from '/assets/f1.webp';
import f2 from '/assets/f2.jpg';
const Turf: React.FC = () => {
  const [selectedTurf, setSelectedTurf] = useState<TurfField | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample data - in a real app, this would come from an API
  const turfFields: TurfField[] = [
    {
      id: 1,
      name: "SportSpot Football Arena",
      location: "Downtown Sportsville",
      image: f1,
      rating: 4.8,
      capacity: "5v5, 7v7, 11v11",
      price: "₹750/hr",
      tags: ["Lights", "Locker Rooms", "Parking"]
    },
    {
      id: 2,
      name: "SportSpot Cricket Stadium",
      location: "East Sports Hub",
      image: c1,
      rating: 4.9,
      capacity: "International Standard",
      price: "₹150/hr",
      tags: ["Floodlights", "Practice Nets", "Electronic Scoreboard"]
    },
    {
      id: 3,
      name: "SportSpot SmashPoint ",
      location: "North Sports Center",
      image: b1,
      rating: 4.7,
      capacity: "6 Professional Courts",
      price: "₹300/hr",
      tags: ["Air Conditioned", "Pro Shop", "Training Programs"]
    },
    {
      id: 4,
      name: "SportSpot Cricket Ground",
      location: "South Valley",
      image: c2,
      rating: 4.8,
      capacity: "County Standard",
      price: "₹120/hr",
      tags: ["Practice Nets", "Pavilion", "Club House"]
    },
    {
      id: 5,
      name: "SportSpot 7s",
      location: "West Athletics Park",
      image: f2,
      rating: 4.5,
      capacity: "7v7",
      price: "₹850/hr",
      tags: ["Covered", "Parking", "Pro Grade"]
    },
    {
      id: 6,
      name: "SportSpot AceZone",
      location: "Central Sports Complex",
      image: b2,
      rating: 4.6,
      capacity: "8 Synthetic Courts",
      price: "₹250/hr",
      tags: ["Wood Flooring", "Equipment Rental", "Coaching"]
    }
   ];

  const handleTurfClick = (turf: TurfField) => {
    setSelectedTurf(turf);
    setIsModalOpen(true);
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Premier Facilities</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our selection of world-class sports facilities.
            From cricket stadiums to badminton courts, we have it all.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {turfFields.map((field) => (
            <div 
              key={field.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => handleTurfClick(field)}
            >
              {/* Field Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={field.image} 
                  alt={field.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-2 py-1 m-2 rounded text-sm font-semibold">
                  {field.price}
                </div>
              </div>

              {/* Field Content */}
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-gray-800">{field.name}</h3>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="ml-1 text-sm font-medium text-gray-700">{field.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center mt-2 text-gray-600">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{field.location}</span>
                </div>
                
                <div className="flex items-center mt-2 text-gray-600">
                  <Users className="w-4 h-4 mr-1" />
                  <span className="text-sm">{field.capacity}</span>
                </div>
                
                <div className="mt-3 flex flex-wrap gap-2">
                  {field.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="mt-4 w-full bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-md transition-colors duration-200 flex items-center justify-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

     
      </div>

      <TurfModal
        turf={selectedTurf}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Turf;