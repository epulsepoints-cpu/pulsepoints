// 🌍 International Countries and States Database
// Play Store Safe - No external API dependencies

export interface Country {
  code: string;
  name: string;
  states?: State[];
  phonePrefix: string;
  postalFormat?: string;
}

export interface State {
  code: string;
  name: string;
}

// Major countries with their states/provinces
export const COUNTRIES: Country[] = [
  {
    code: 'US',
    name: 'United States',
    phonePrefix: '+1',
    postalFormat: '12345 or 12345-6789',
    states: [
      { code: 'AL', name: 'Alabama' },
      { code: 'AK', name: 'Alaska' },
      { code: 'AZ', name: 'Arizona' },
      { code: 'AR', name: 'Arkansas' },
      { code: 'CA', name: 'California' },
      { code: 'CO', name: 'Colorado' },
      { code: 'CT', name: 'Connecticut' },
      { code: 'DE', name: 'Delaware' },
      { code: 'FL', name: 'Florida' },
      { code: 'GA', name: 'Georgia' },
      { code: 'HI', name: 'Hawaii' },
      { code: 'ID', name: 'Idaho' },
      { code: 'IL', name: 'Illinois' },
      { code: 'IN', name: 'Indiana' },
      { code: 'IA', name: 'Iowa' },
      { code: 'KS', name: 'Kansas' },
      { code: 'KY', name: 'Kentucky' },
      { code: 'LA', name: 'Louisiana' },
      { code: 'ME', name: 'Maine' },
      { code: 'MD', name: 'Maryland' },
      { code: 'MA', name: 'Massachusetts' },
      { code: 'MI', name: 'Michigan' },
      { code: 'MN', name: 'Minnesota' },
      { code: 'MS', name: 'Mississippi' },
      { code: 'MO', name: 'Missouri' },
      { code: 'MT', name: 'Montana' },
      { code: 'NE', name: 'Nebraska' },
      { code: 'NV', name: 'Nevada' },
      { code: 'NH', name: 'New Hampshire' },
      { code: 'NJ', name: 'New Jersey' },
      { code: 'NM', name: 'New Mexico' },
      { code: 'NY', name: 'New York' },
      { code: 'NC', name: 'North Carolina' },
      { code: 'ND', name: 'North Dakota' },
      { code: 'OH', name: 'Ohio' },
      { code: 'OK', name: 'Oklahoma' },
      { code: 'OR', name: 'Oregon' },
      { code: 'PA', name: 'Pennsylvania' },
      { code: 'RI', name: 'Rhode Island' },
      { code: 'SC', name: 'South Carolina' },
      { code: 'SD', name: 'South Dakota' },
      { code: 'TN', name: 'Tennessee' },
      { code: 'TX', name: 'Texas' },
      { code: 'UT', name: 'Utah' },
      { code: 'VT', name: 'Vermont' },
      { code: 'VA', name: 'Virginia' },
      { code: 'WA', name: 'Washington' },
      { code: 'WV', name: 'West Virginia' },
      { code: 'WI', name: 'Wisconsin' },
      { code: 'WY', name: 'Wyoming' }
    ]
  },
  {
    code: 'CA',
    name: 'Canada',
    phonePrefix: '+1',
    postalFormat: 'A1A 1A1',
    states: [
      { code: 'AB', name: 'Alberta' },
      { code: 'BC', name: 'British Columbia' },
      { code: 'MB', name: 'Manitoba' },
      { code: 'NB', name: 'New Brunswick' },
      { code: 'NL', name: 'Newfoundland and Labrador' },
      { code: 'NS', name: 'Nova Scotia' },
      { code: 'ON', name: 'Ontario' },
      { code: 'PE', name: 'Prince Edward Island' },
      { code: 'QC', name: 'Quebec' },
      { code: 'SK', name: 'Saskatchewan' },
      { code: 'NT', name: 'Northwest Territories' },
      { code: 'NU', name: 'Nunavut' },
      { code: 'YT', name: 'Yukon' }
    ]
  },
  {
    code: 'IN',
    name: 'India',
    phonePrefix: '+91',
    postalFormat: '123456',
    states: [
      { code: 'AP', name: 'Andhra Pradesh' },
      { code: 'AR', name: 'Arunachal Pradesh' },
      { code: 'AS', name: 'Assam' },
      { code: 'BR', name: 'Bihar' },
      { code: 'CT', name: 'Chhattisgarh' },
      { code: 'GA', name: 'Goa' },
      { code: 'GJ', name: 'Gujarat' },
      { code: 'HR', name: 'Haryana' },
      { code: 'HP', name: 'Himachal Pradesh' },
      { code: 'JH', name: 'Jharkhand' },
      { code: 'KA', name: 'Karnataka' },
      { code: 'KL', name: 'Kerala' },
      { code: 'MP', name: 'Madhya Pradesh' },
      { code: 'MH', name: 'Maharashtra' },
      { code: 'MN', name: 'Manipur' },
      { code: 'ML', name: 'Meghalaya' },
      { code: 'MZ', name: 'Mizoram' },
      { code: 'NL', name: 'Nagaland' },
      { code: 'OR', name: 'Odisha' },
      { code: 'PB', name: 'Punjab' },
      { code: 'RJ', name: 'Rajasthan' },
      { code: 'SK', name: 'Sikkim' },
      { code: 'TN', name: 'Tamil Nadu' },
      { code: 'TG', name: 'Telangana' },
      { code: 'TR', name: 'Tripura' },
      { code: 'UP', name: 'Uttar Pradesh' },
      { code: 'UT', name: 'Uttarakhand' },
      { code: 'WB', name: 'West Bengal' },
      { code: 'AN', name: 'Andaman and Nicobar Islands' },
      { code: 'CH', name: 'Chandigarh' },
      { code: 'DN', name: 'Dadra and Nagar Haveli and Daman and Diu' },
      { code: 'DL', name: 'Delhi' },
      { code: 'JK', name: 'Jammu and Kashmir' },
      { code: 'LA', name: 'Ladakh' },
      { code: 'LD', name: 'Lakshadweep' },
      { code: 'PY', name: 'Puducherry' }
    ]
  },
  {
    code: 'GB',
    name: 'United Kingdom',
    phonePrefix: '+44',
    postalFormat: 'SW1A 1AA',
    states: [
      { code: 'ENG', name: 'England' },
      { code: 'SCT', name: 'Scotland' },
      { code: 'WLS', name: 'Wales' },
      { code: 'NIR', name: 'Northern Ireland' }
    ]
  },
  {
    code: 'AU',
    name: 'Australia',
    phonePrefix: '+61',
    postalFormat: '1234',
    states: [
      { code: 'NSW', name: 'New South Wales' },
      { code: 'QLD', name: 'Queensland' },
      { code: 'SA', name: 'South Australia' },
      { code: 'TAS', name: 'Tasmania' },
      { code: 'VIC', name: 'Victoria' },
      { code: 'WA', name: 'Western Australia' },
      { code: 'ACT', name: 'Australian Capital Territory' },
      { code: 'NT', name: 'Northern Territory' }
    ]
  },
  {
    code: 'DE',
    name: 'Germany',
    phonePrefix: '+49',
    postalFormat: '12345',
    states: [
      { code: 'BW', name: 'Baden-Württemberg' },
      { code: 'BY', name: 'Bavaria' },
      { code: 'BE', name: 'Berlin' },
      { code: 'BB', name: 'Brandenburg' },
      { code: 'HB', name: 'Bremen' },
      { code: 'HH', name: 'Hamburg' },
      { code: 'HE', name: 'Hesse' },
      { code: 'MV', name: 'Mecklenburg-Vorpommern' },
      { code: 'NI', name: 'Lower Saxony' },
      { code: 'NW', name: 'North Rhine-Westphalia' },
      { code: 'RP', name: 'Rhineland-Palatinate' },
      { code: 'SL', name: 'Saarland' },
      { code: 'SN', name: 'Saxony' },
      { code: 'ST', name: 'Saxony-Anhalt' },
      { code: 'SH', name: 'Schleswig-Holstein' },
      { code: 'TH', name: 'Thuringia' }
    ]
  },
  // Countries without states/provinces
  { code: 'FR', name: 'France', phonePrefix: '+33', postalFormat: '12345' },
  { code: 'IT', name: 'Italy', phonePrefix: '+39', postalFormat: '12345' },
  { code: 'ES', name: 'Spain', phonePrefix: '+34', postalFormat: '12345' },
  { code: 'NL', name: 'Netherlands', phonePrefix: '+31', postalFormat: '1234 AB' },
  { code: 'BE', name: 'Belgium', phonePrefix: '+32', postalFormat: '1234' },
  { code: 'CH', name: 'Switzerland', phonePrefix: '+41', postalFormat: '1234' },
  { code: 'AT', name: 'Austria', phonePrefix: '+43', postalFormat: '1234' },
  { code: 'SE', name: 'Sweden', phonePrefix: '+46', postalFormat: '123 45' },
  { code: 'NO', name: 'Norway', phonePrefix: '+47', postalFormat: '1234' },
  { code: 'DK', name: 'Denmark', phonePrefix: '+45', postalFormat: '1234' },
  { code: 'FI', name: 'Finland', phonePrefix: '+358', postalFormat: '12345' },
  { code: 'BR', name: 'Brazil', phonePrefix: '+55', postalFormat: '12345-678' },
  { code: 'MX', name: 'Mexico', phonePrefix: '+52', postalFormat: '12345' },
  { code: 'JP', name: 'Japan', phonePrefix: '+81', postalFormat: '123-4567' },
  { code: 'KR', name: 'South Korea', phonePrefix: '+82', postalFormat: '12345' },
  { code: 'CN', name: 'China', phonePrefix: '+86', postalFormat: '123456' },
  { code: 'SG', name: 'Singapore', phonePrefix: '+65', postalFormat: '123456' },
  { code: 'MY', name: 'Malaysia', phonePrefix: '+60', postalFormat: '12345' },
  { code: 'TH', name: 'Thailand', phonePrefix: '+66', postalFormat: '12345' },
  { code: 'ID', name: 'Indonesia', phonePrefix: '+62', postalFormat: '12345' },
  { code: 'PH', name: 'Philippines', phonePrefix: '+63', postalFormat: '1234' },
  { code: 'VN', name: 'Vietnam', phonePrefix: '+84', postalFormat: '123456' },
  { code: 'AE', name: 'United Arab Emirates', phonePrefix: '+971', postalFormat: '12345' },
  { code: 'SA', name: 'Saudi Arabia', phonePrefix: '+966', postalFormat: '12345' },
  { code: 'ZA', name: 'South Africa', phonePrefix: '+27', postalFormat: '1234' },
  { code: 'EG', name: 'Egypt', phonePrefix: '+20', postalFormat: '12345' },
  { code: 'NG', name: 'Nigeria', phonePrefix: '+234', postalFormat: '123456' },
  { code: 'KE', name: 'Kenya', phonePrefix: '+254', postalFormat: '12345' },
  { code: 'AR', name: 'Argentina', phonePrefix: '+54', postalFormat: '1234' },
  { code: 'CL', name: 'Chile', phonePrefix: '+56', postalFormat: '1234567' },
  { code: 'CO', name: 'Colombia', phonePrefix: '+57', postalFormat: '123456' },
  { code: 'PE', name: 'Peru', phonePrefix: '+51', postalFormat: '12345' },
  { code: 'NZ', name: 'New Zealand', phonePrefix: '+64', postalFormat: '1234' },
  { code: 'RU', name: 'Russia', phonePrefix: '+7', postalFormat: '123456' },
  { code: 'TR', name: 'Turkey', phonePrefix: '+90', postalFormat: '12345' },
  { code: 'IL', name: 'Israel', phonePrefix: '+972', postalFormat: '1234567' },
  { code: 'PL', name: 'Poland', phonePrefix: '+48', postalFormat: '12-345' },
  { code: 'CZ', name: 'Czech Republic', phonePrefix: '+420', postalFormat: '123 45' },
  { code: 'HU', name: 'Hungary', phonePrefix: '+36', postalFormat: '1234' },
  { code: 'GR', name: 'Greece', phonePrefix: '+30', postalFormat: '123 45' },
  { code: 'PT', name: 'Portugal', phonePrefix: '+351', postalFormat: '1234-567' },
  { code: 'IE', name: 'Ireland', phonePrefix: '+353', postalFormat: 'A12 B3C4' },
  { code: 'RO', name: 'Romania', phonePrefix: '+40', postalFormat: '123456' },
  { code: 'BG', name: 'Bulgaria', phonePrefix: '+359', postalFormat: '1234' },
  { code: 'HR', name: 'Croatia', phonePrefix: '+385', postalFormat: '12345' },
  { code: 'SI', name: 'Slovenia', phonePrefix: '+386', postalFormat: '1234' },
  { code: 'SK', name: 'Slovakia', phonePrefix: '+421', postalFormat: '123 45' },
  { code: 'LT', name: 'Lithuania', phonePrefix: '+370', postalFormat: 'LT-12345' },
  { code: 'LV', name: 'Latvia', phonePrefix: '+371', postalFormat: 'LV-1234' },
  { code: 'EE', name: 'Estonia', phonePrefix: '+372', postalFormat: '12345' }
];

// Utility functions
export const getCountryByCode = (code: string): Country | undefined => {
  return COUNTRIES.find(country => country.code === code);
};

export const getCountryByName = (name: string): Country | undefined => {
  return COUNTRIES.find(country => 
    country.name.toLowerCase() === name.toLowerCase()
  );
};

export const validatePostalCode = (postalCode: string, countryCode: string): boolean => {
  const country = getCountryByCode(countryCode);
  if (!country) return true; // Allow if country not found
  
  // Basic validation patterns for common countries
  const patterns: { [key: string]: RegExp } = {
    'US': /^\d{5}(-\d{4})?$/,
    'CA': /^[A-Z]\d[A-Z] \d[A-Z]\d$/,
    'GB': /^[A-Z]{1,2}\d[A-Z\d]? \d[A-Z]{2}$/i,
    'IN': /^\d{6}$/,
    'DE': /^\d{5}$/,
    'FR': /^\d{5}$/,
    'AU': /^\d{4}$/,
    'JP': /^\d{3}-\d{4}$/,
    'BR': /^\d{5}-\d{3}$/
  };
  
  const pattern = patterns[countryCode];
  return pattern ? pattern.test(postalCode) : true;
};

export const formatPhoneNumber = (phone: string, countryCode: string): string => {
  const country = getCountryByCode(countryCode);
  if (!country) return phone;
  
  // Remove all non-digit characters
  const cleanPhone = phone.replace(/\D/g, '');
  
  // Add country prefix if not present
  if (!phone.startsWith('+') && !phone.startsWith(country.phonePrefix)) {
    return `${country.phonePrefix} ${cleanPhone}`;
  }
  
  return phone;
};

export default COUNTRIES;
