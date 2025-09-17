import React, { useState } from 'react';
import { MapPin, Phone, Mail, User, Home, Building2, X, Check } from 'lucide-react';
import { ShippingAddress, OrderManagementService } from '@/services/OrderManagementService';

interface AddressFormProps {
  onSubmit: (address: ShippingAddress) => void;
  onCancel: () => void;
  isLoading?: boolean;
  initialAddress?: Partial<ShippingAddress>;
  title?: string;
}

const AddressForm: React.FC<AddressFormProps> = ({
  onSubmit,
  onCancel,
  isLoading = false,
  initialAddress = {},
  title = "Shipping Address"
}) => {
  const [address, setAddress] = useState<ShippingAddress>({
    name: initialAddress.name || '',
    email: initialAddress.email || '',
    phone: initialAddress.phone || '',
    addressLine1: initialAddress.addressLine1 || '',
    addressLine2: initialAddress.addressLine2 || '',
    city: initialAddress.city || '',
    state: initialAddress.state || '',
    postalCode: initialAddress.postalCode || '',
    country: initialAddress.country || 'India',
    landmark: initialAddress.landmark || ''
  });

  const [errors, setErrors] = useState<string[]>([]);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Handle input changes
  const handleChange = (field: keyof ShippingAddress, value: string) => {
    setAddress(prev => ({ ...prev, [field]: value }));
    setTouched(prev => ({ ...prev, [field]: true }));
    
    // Clear errors when user starts typing
    if (errors.length > 0) {
      setErrors([]);
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const validation = OrderManagementService.validateShippingAddress(address);
    
    if (validation.isValid) {
      onSubmit(address);
    } else {
      setErrors(validation.errors);
      // Mark all fields as touched to show errors
      const allFields = Object.keys(address) as (keyof ShippingAddress)[];
      const newTouched = allFields.reduce((acc, field) => ({ ...acc, [field]: true }), {});
      setTouched(newTouched);
    }
  };

  // Check if field has error
  const hasError = (field: keyof ShippingAddress) => {
    if (!touched[field]) return false;
    
    const value = address[field];
    if (!value || !value.trim()) return true;
    
    // Additional validations
    if (field === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return !emailRegex.test(value);
    }
    
    if (field === 'phone') {
      const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
      return !phoneRegex.test(value.replace(/\s/g, ''));
    }
    
    return false;
  };

  // Indian states for dropdown
  const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa',
    'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala',
    'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland',
    'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
    'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands',
    'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Delhi', 'Lakshadweep',
    'Puducherry'
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 rounded-full p-2">
                <MapPin className="h-5 w-5 text-blue-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">{title}</h2>
            </div>
            <button
              onClick={onCancel}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>
          
          {errors.length > 0 && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm font-medium text-red-800 mb-1">Please fix the following errors:</p>
              <ul className="text-sm text-red-600 space-y-1">
                {errors.map((error, index) => (
                  <li key={index}>• {error}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 flex items-center gap-2">
              <User className="h-4 w-4" />
              Personal Information
            </h3>
            
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                value={address.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  hasError('name') ? 'border-red-300 bg-red-50' : 'border-gray-300'
                }`}
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                <input
                  type="email"
                  value={address.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    hasError('email') ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                <input
                  type="tel"
                  value={address.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    hasError('phone') ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>
          </div>

          {/* Address Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 flex items-center gap-2">
              <Home className="h-4 w-4" />
              Address Information
            </h3>

            {/* Address Line 1 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address Line 1 *
              </label>
              <input
                type="text"
                value={address.addressLine1}
                onChange={(e) => handleChange('addressLine1', e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  hasError('addressLine1') ? 'border-red-300 bg-red-50' : 'border-gray-300'
                }`}
                placeholder="House/Flat number, Street name"
              />
            </div>

            {/* Address Line 2 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address Line 2 (Optional)
              </label>
              <input
                type="text"
                value={address.addressLine2}
                onChange={(e) => handleChange('addressLine2', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Apartment, Suite, Building"
              />
            </div>

            {/* Landmark */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Landmark (Optional)
              </label>
              <div className="relative">
                <Building2 className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  value={address.landmark}
                  onChange={(e) => handleChange('landmark', e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Near metro station, mall, etc."
                />
              </div>
            </div>

            {/* City and State */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City *
                </label>
                <input
                  type="text"
                  value={address.city}
                  onChange={(e) => handleChange('city', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    hasError('city') ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="City"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  State *
                </label>
                <select
                  value={address.state}
                  onChange={(e) => handleChange('state', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    hasError('state') ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select State</option>
                  {indianStates.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Postal Code and Country */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Postal Code *
                </label>
                <input
                  type="text"
                  value={address.postalCode}
                  onChange={(e) => handleChange('postalCode', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    hasError('postalCode') ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="110001"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Country *
                </label>
                <select
                  value={address.country}
                  onChange={(e) => handleChange('country', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="India">India</option>
                  <option value="Nepal">Nepal</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Sri Lanka">Sri Lanka</option>
                </select>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onCancel}
              disabled={isLoading}
              className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors disabled:opacity-50"
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              ) : (
                <Check className="h-4 w-4" />
              )}
              {isLoading ? 'Processing...' : 'Confirm Address'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddressForm;
