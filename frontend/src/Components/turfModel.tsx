import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X, MapPin, Users, Star, Calendar } from 'lucide-react';
import { TurfField } from '../types';
import BookingForm from './bookingForm';

interface TurfModalProps {
  turf: TurfField | null;
  isOpen: boolean;
  onClose: () => void;
}

const TurfModal: React.FC<TurfModalProps> = ({ turf, isOpen, onClose }) => {
  const [showBookingForm, setShowBookingForm] = React.useState(false);

  if (!turf) return null;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="div"
                  className="flex justify-between items-start mb-4"
                >
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {turf.name}
                  </h3>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </Dialog.Title>

                {!showBookingForm ? (
                  <>
                    <div className="relative h-64 mb-6">
                      <img
                        src={turf.image}
                        alt={turf.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {turf.price}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-600">
                          <MapPin className="w-5 h-5 mr-2" />
                          <span>{turf.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="w-5 h-5 text-yellow-400 fill-current" />
                          <span className="ml-1 font-medium">{turf.rating}</span>
                        </div>
                      </div>

                      <div className="flex items-center text-gray-600">
                        <Users className="w-5 h-5 mr-2" />
                        <span>Capacity: {turf.capacity}</span>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {turf.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6">
                        <h4 className="font-semibold text-lg mb-2">Description</h4>
                        <p className="text-gray-600">
                          Experience premium sports facilities at {turf.name}. 
                          Our well-maintained turf field offers professional-grade 
                          playing conditions suitable for various sports and skill levels.
                        </p>
                      </div>

                      <div className="mt-6 flex justify-end">
                        <button
                          onClick={() => setShowBookingForm(true)}
                          className="flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors duration-200"
                        >
                          <Calendar className="w-5 h-5 mr-2" />
                          Book Now
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <BookingForm
                    turf={turf}
                    onBack={() => setShowBookingForm(false)}
                    onComplete={onClose}
                  />
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default TurfModal;