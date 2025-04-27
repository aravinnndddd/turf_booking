import React, { useState } from 'react';
import { format } from 'date-fns';
import { ArrowLeft, Calendar, Clock, Users, CheckCircle } from 'lucide-react';
import { TurfField } from '../types';

interface BookingFormProps {
  turf: TurfField;
  onBack: () => void;
  onComplete: () => void;
}

type Step = 1 | 2 | 3;

const BookingForm: React.FC<BookingFormProps> = ({ turf, onBack, onComplete }) => {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    duration: '60',
    players: '10',
    name: '',
    email: '',
    phone: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    setCurrentStep(prev => (prev === 3 ? 3 : (prev + 1) as Step));
  };

  const handleBack = () => {
    if (currentStep === 1) {
      onBack();
    } else {
      setCurrentStep(prev => (prev - 1) as Step);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically submit the booking to your backend
    console.log('Booking submitted:', formData);
    handleNext();
  };

  const renderStepIndicator = () => (
    <div className="flex justify-center mb-8">
      {[1, 2, 3].map((step) => (
        <div
          key={step}
          className={`w-3 h-3 rounded-full mx-2 ${
            step === currentStep
              ? 'bg-green-500'
              : step < currentStep
              ? 'bg-green-200'
              : 'bg-gray-200'
          }`}
        />
      ))}
    </div>
  );

  const renderStep1 = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Date
        </label>
        <div className="relative">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            min={format(new Date(), 'yyyy-MM-dd')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            required
          />
          <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Time
        </label>
        <div className="relative">
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            required
          />
          <Clock className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Duration (minutes)
        </label>
        <select
          name="duration"
          value={formData.duration}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
        >
          <option value="60">60 minutes</option>
          <option value="90">90 minutes</option>
          <option value="120">120 minutes</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Number of Players
        </label>
        <div className="relative">
          <input
            type="number"
            name="players"
            value={formData.players}
            onChange={handleInputChange}
            min="2"
            max="22"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            required
          />
          <Users className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
          required
        />
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="text-center space-y-6">
      <div className="flex justify-center">
        <CheckCircle className="w-16 h-16 text-green-500" />
      </div>
      <h3 className="text-2xl font-semibold text-gray-900">Booking Confirmed!</h3>
      <div className="bg-gray-50 p-6 rounded-lg">
        <h4 className="font-medium text-lg mb-4">Booking Summary</h4>
        <div className="space-y-2 text-left">
          <p><span className="font-medium">Venue:</span> {turf.name}</p>
          <p><span className="font-medium">Date:</span> {formData.date}</p>
          <p><span className="font-medium">Time:</span> {formData.time}</p>
          <p><span className="font-medium">Duration:</span> {formData.duration} minutes</p>
          <p><span className="font-medium">Players:</span> {formData.players}</p>
          <p><span className="font-medium">Total:</span> {turf.price}</p>
        </div>
      </div>
      <p className="text-sm text-gray-600">
        Your booking is confirmed. Cancel for free up to 24 hours before your booking time.
      </p>
      <button
        onClick={onComplete}
        className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-200"
      >
        Done
      </button>
    </div>
  );

  return (
    <div className="space-y-6">
      {renderStepIndicator()}
      
      <div className="flex items-center mb-6">
        <button
          onClick={handleBack}
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          {currentStep === 1 ? 'Back to Details' : 'Previous Step'}
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        {currentStep === 1 && renderStep1()}
        {currentStep === 2 && renderStep2()}
        {currentStep === 3 && renderStep3()}

        {currentStep !== 3 && (
          <div className="mt-8">
            <button
              type={currentStep === 2 ? 'submit' : 'button'}
              onClick={currentStep === 1 ? handleNext : undefined}
              className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-200"
            >
              {currentStep === 2 ? 'Confirm Booking' : 'Next Step'}
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default BookingForm;