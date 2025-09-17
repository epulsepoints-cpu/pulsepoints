import React, { useState, useEffect } from 'react';
import { ShippingAddress } from '../services/OrderManagementService';
import { COUNTRIES, getCountryByCode, validatePostalCode, formatPhoneNumber } from '../utils/countries';

interface InternationalAddressFormProps {
  onSubmit: (address: ShippingAddress) => void;
  onCancel: () => void;
  isLoading?: boolean;
}

export const InternationalAddressForm: React.FC<InternationalAddressFormProps> = ({
  onSubmit,
  onCancel,
  isLoading = false
}) => {
  const [address, setAddress] = useState<ShippingAddress>({
    name: '',
    email: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    landmark: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [selectedCountry, setSelectedCountry] = useState<string>('');

  // Get states for selected country
  const countryData = getCountryByCode(selectedCountry);
  const hasStates = countryData && countryData.states && countryData.states.length > 0;

  // Real-time validation
  useEffect(() => {
    const newErrors: { [key: string]: string } = {};

    if (address.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (address.email && !emailRegex.test(address.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (address.phone && address.phone.length < 10) {
      newErrors.phone = 'Phone number must be at least 10 digits';
    }

    if (address.addressLine1.trim().length < 5) {
      newErrors.addressLine1 = 'Address must be at least 5 characters';
    }

    if (address.city.trim().length < 2) {
      newErrors.city = 'City must be at least 2 characters';
    }

    if (selectedCountry && hasStates && !address.state) {
      newErrors.state = 'Please select a state/province';
    }

    if (selectedCountry && address.postalCode && !validatePostalCode(address.postalCode, selectedCountry)) {
      const format = countryData?.postalFormat || 'valid format';
      newErrors.postalCode = `Please enter postal code in format: ${format}`;
    }

    if (!selectedCountry) {
      newErrors.country = 'Please select a country';
    }

    setErrors(newErrors);
  }, [address, selectedCountry, hasStates, countryData]);

  const handleCountryChange = (countryCode: string) => {
    setSelectedCountry(countryCode);
    setAddress(prev => ({
      ...prev,
      country: getCountryByCode(countryCode)?.name || '',
      state: '', // Reset state when country changes
      phone: prev.phone ? formatPhoneNumber(prev.phone, countryCode) : ''
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (Object.keys(errors).length === 0 && address.name && address.email && address.phone && 
        address.addressLine1 && address.city && selectedCountry && address.postalCode &&
        (!hasStates || address.state)) {
      
      // Format phone number before submitting
      const formattedAddress = {
        ...address,
        phone: formatPhoneNumber(address.phone, selectedCountry)
      };
      
      onSubmit(formattedAddress);
    }
  };

  const isFormValid = Object.keys(errors).length === 0 && 
    address.name && address.email && address.phone && 
    address.addressLine1 && address.city && selectedCountry && 
    address.postalCode && (!hasStates || address.state);

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
          <span className="text-blue-600 text-lg">🌍</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">Shipping Address</h3>
          <p className="text-gray-600">We ship worldwide! Enter your delivery address</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              value={address.name}
              onChange={(e) => setAddress(prev => ({ ...prev, name: e.target.value }))}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                errors.name ? 'border-red-300' : 'border-gray-300'
              }`}
              placeholder="Enter your full name"
              required
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              value={address.email}
              onChange={(e) => setAddress(prev => ({ ...prev, email: e.target.value }))}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                errors.email ? 'border-red-300' : 'border-gray-300'
              }`}
              placeholder="your@email.com"
              required
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
        </div>

        {/* Country Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Country *
          </label>
          <select
            value={selectedCountry}
            onChange={(e) => handleCountryChange(e.target.value)}
            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              errors.country ? 'border-red-300' : 'border-gray-300'
            }`}
            required
          >
            <option value="">Select your country</option>
            {COUNTRIES.map(country => (
              <option key={country.code} value={country.code}>
                {country.name} ({country.phonePrefix})
              </option>
            ))}
          </select>
          {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number *
            {countryData && (
              <span className="text-gray-500 text-xs ml-1">
                (Format: {countryData.phonePrefix} XXXXXXXXX)
              </span>
            )}
          </label>
          <input
            type="tel"
            value={address.phone}
            onChange={(e) => setAddress(prev => ({ ...prev, phone: e.target.value }))}
            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              errors.phone ? 'border-red-300' : 'border-gray-300'
            }`}
            placeholder={countryData ? `${countryData.phonePrefix} 1234567890` : "Enter phone number"}
            required
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>

        {/* Address Lines */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Address Line 1 *
          </label>
          <input
            type="text"
            value={address.addressLine1}
            onChange={(e) => setAddress(prev => ({ ...prev, addressLine1: e.target.value }))}
            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              errors.addressLine1 ? 'border-red-300' : 'border-gray-300'
            }`}
            placeholder="Street address, house number"
            required
          />
          {errors.addressLine1 && <p className="text-red-500 text-xs mt-1">{errors.addressLine1}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Address Line 2 (Optional)
          </label>
          <input
            type="text"
            value={address.addressLine2}
            onChange={(e) => setAddress(prev => ({ ...prev, addressLine2: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Apartment, suite, unit, building, floor, etc."
          />
        </div>

        {/* City, State, Postal Code */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City *
            </label>
            <input
              type="text"
              value={address.city}
              onChange={(e) => setAddress(prev => ({ ...prev, city: e.target.value }))}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                errors.city ? 'border-red-300' : 'border-gray-300'
              }`}
              placeholder="City name"
              required
            />
            {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
          </div>

          {hasStates ? (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                State/Province *
              </label>
              <select
                value={address.state}
                onChange={(e) => setAddress(prev => ({ ...prev, state: e.target.value }))}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  errors.state ? 'border-red-300' : 'border-gray-300'
                }`}
                required
              >
                <option value="">Select state</option>
                {countryData.states!.map(state => (
                  <option key={state.code} value={state.name}>
                    {state.name}
                  </option>
                ))}
              </select>
              {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
            </div>
          ) : (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                State/Province
              </label>
              <input
                type="text"
                value={address.state}
                onChange={(e) => setAddress(prev => ({ ...prev, state: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="State/Province (if applicable)"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Postal Code *
              {countryData?.postalFormat && (
                <span className="text-gray-500 text-xs ml-1">
                  ({countryData.postalFormat})
                </span>
              )}
            </label>
            <input
              type="text"
              value={address.postalCode}
              onChange={(e) => setAddress(prev => ({ ...prev, postalCode: e.target.value }))}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                errors.postalCode ? 'border-red-300' : 'border-gray-300'
              }`}
              placeholder={countryData?.postalFormat || "Postal code"}
              required
            />
            {errors.postalCode && <p className="text-red-500 text-xs mt-1">{errors.postalCode}</p>}
          </div>
        </div>

        {/* Landmark */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Landmark (Optional)
          </label>
          <input
            type="text"
            value={address.landmark}
            onChange={(e) => setAddress(prev => ({ ...prev, landmark: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Near famous place, building, etc."
          />
        </div>

        {/* Submit Buttons */}
        <div className="flex gap-3 pt-4">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            disabled={isLoading}
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={!isFormValid || isLoading}
            className={`flex-1 px-4 py-2 rounded-lg transition-colors ${
              isFormValid && !isLoading
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Processing...
              </div>
            ) : (
              '📦 Confirm Shipping Address'
            )}
          </button>
        </div>
      </form>

      {/* Shipping Info */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-medium text-blue-900 mb-2">🚀 Worldwide Shipping Available!</h4>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Free shipping on orders over $50 USD</li>
          <li>• Express delivery available in major cities</li>
          <li>• Estimated delivery: 7-14 business days worldwide</li>
          <li>• Package tracking provided</li>
        </ul>
      </div>
    </div>
  );
};

export default InternationalAddressForm;
