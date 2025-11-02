import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const SpiceImportForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // Company Information
    companyName: '',
    contactPerson: '',
    designation: '',
    email: '',
    phone: '',
    countryOfImport: '',
    website: '',
    
    // Product Requirements
    products: [
      { spiceName: '', gradeType: '', organicConventional: '', quantity: '', packing: '', remarks: '' }
    ],
    
    // Certifications
    certifications: {
      fssai: false,
      usdaOrganic: false,
      euOrganic: false,
      iso22000: false,
      haccp: false,
      other: false,
      otherText: ''
    },
    
    // Shipment & Delivery
    portOfDelivery: '',
    deliveryTerms: '',
    shippingMethod: '',
    deliveryTimeline: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      certifications: {
        ...prev.certifications,
        [name]: checked
      }
    }));
  };

  const handleProductChange = (index: number, field: string, value: string) => {
    const updatedProducts = [...formData.products];
    updatedProducts[index] = { ...updatedProducts[index], [field]: value };
    setFormData(prev => ({
      ...prev,
      products: updatedProducts
    }));
  };

  const addProductRow = () => {
    setFormData(prev => ({
      ...prev,
      products: [...prev.products, { spiceName: '', gradeType: '', organicConventional: '', quantity: '', packing: '', remarks: '' }]
    }));
  };

  const removeProductRow = (index: number) => {
    if (formData.products.length > 1) {
      const updatedProducts = formData.products.filter((_, i) => i !== index);
      setFormData(prev => ({
        ...prev,
        products: updatedProducts
      }));
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Flatten the form data for Google Sheets
      const flattenedData = {
        companyName: formData.companyName,
        contactPerson: formData.contactPerson,
        designation: formData.designation,
        email: formData.email,
        phone: formData.phone,
        countryOfImport: formData.countryOfImport,
        website: formData.website,
        // Separate product fields
        spiceName: formData.products.map(p => p.spiceName).filter(Boolean).join(', ') || '',
        gradeType: formData.products.map(p => p.gradeType).filter(Boolean).join(', ') || '',
        organicConventional: formData.products.map(p => p.organicConventional).filter(Boolean).join(', ') || '',
        quantity: formData.products.map(p => p.quantity).filter(Boolean).join(', ') || '',
        packing: formData.products.map(p => p.packing).filter(Boolean).join(', ') || '',
        remarks: formData.products.map(p => p.remarks).filter(Boolean).join(', ') || '',
        certifications: Object.entries(formData.certifications)
          .filter(([key, value]) => value === true)
          .map(([key]) => key === 'other' ? formData.certifications.otherText : key)
          .join(', '),
        portOfDelivery: formData.portOfDelivery,
        deliveryTerms: formData.deliveryTerms,
        shippingMethod: formData.shippingMethod,
        deliveryTimeline: formData.deliveryTimeline
      };

      const response = await fetch('/api/submit-product-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(flattenedData),
      });

      if (response.ok) {
        navigate('/thank-you');
      } else {
        alert('Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#e8e9e0' }}>      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <div className="relative text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/graphical-assets/graphical-assets.webp')`
          }}
        ></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-wide mb-4">SPICE IMPORT FORM</h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Complete our detailed import requirement form for bulk orders and customized pricing.
            </p>
            <div className="mt-6">
              <a href="/" className="text-sm text-white underline mr-2">Home</a>
              <span className="text-sm text-white">›</span>
              <span className="text-sm text-white ml-2">Spice Import Form</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-12">
        {/* Spice Import Requirement Form */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-black mb-2">PANIA INTERNATIONAL PRIVATE LIMITED</h3>
                <h4 className="text-xl font-semibold text-gray-700">Spice Import Requirement Form</h4>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-8" style={{ fontFamily: 'Coolvetica, sans-serif', letterSpacing: '0.035em' }}>
                {/* 1. Company Information */}
                <div>
                  <h5 className="text-lg font-bold text-black mb-4 bg-gray-100 p-3 rounded" style={{ fontFamily: 'Coolvetica, sans-serif', letterSpacing: '0.035em' }}>1. Company Information</h5>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">Company Name</label>
                      <input
                        type="text"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-black focus:outline-none bg-transparent"
                        placeholder="Enter company name"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-black mb-2">Contact Person</label>
                        <input
                          type="text"
                          name="contactPerson"
                          required
                          value={formData.contactPerson}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-black focus:outline-none bg-transparent"
                          placeholder="Enter contact person name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-black mb-2">Designation</label>
                        <input
                          type="text"
                          name="designation"
                          required
                          value={formData.designation}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-black focus:outline-none bg-transparent"
                          placeholder="Enter designation"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-black mb-2">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-black focus:outline-none bg-transparent"
                          placeholder="Enter email address"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-black mb-2">Phone/WhatsApp</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-black focus:outline-none bg-transparent"
                          placeholder="Enter phone number"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-black mb-2">Country of Import</label>
                        <input
                          type="text"
                          name="countryOfImport"
                          required
                          value={formData.countryOfImport}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-black focus:outline-none bg-transparent"
                          placeholder="Enter country of import"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-black mb-2">Website/Social Handles</label>
                        <input
                          type="url"
                          name="website"
                          required
                          value={formData.website}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-black focus:outline-none bg-transparent"
                          placeholder="Enter website URL"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Product Requirement */}
                <div>
                  <h5 className="text-lg font-bold text-black mb-4 bg-gray-100 p-3 rounded" style={{ fontFamily: 'Coolvetica, sans-serif', letterSpacing: '0.035em' }}>2. Product Requirement</h5>
                  <div className="space-y-4">
                    {formData.products.map((product, index) => (
                      <div key={index} className="border border-gray-200 p-4 rounded">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                          <div>
                            <label className="block text-sm font-medium text-black mb-2">Spice Name</label>
                            <input
                              type="text"
                              value={product.spiceName}
                              onChange={(e) => handleProductChange(index, 'spiceName', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded focus:border-black focus:outline-none"
                              placeholder="Enter spice name"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-black mb-2">Grade/Type</label>
                            <select
                              value={product.gradeType}
                              onChange={(e) => handleProductChange(index, 'gradeType', e.target.value)}
                              className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-black focus:outline-none bg-transparent"
                            >
                              <option value="">Select type</option>
                              <option value="Whole">Whole</option>
                              <option value="Powder">Powder</option>
                              <option value="Ground">Ground</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-black mb-2">Organic/Conventional</label>
                            <select
                              value={product.organicConventional}
                              onChange={(e) => handleProductChange(index, 'organicConventional', e.target.value)}
                              className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-black focus:outline-none bg-transparent"
                            >
                              <option value="">Select type</option>
                              <option value="Organic">Organic</option>
                              <option value="Conventional">Conventional</option>
                            </select>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-black mb-2">Quantity (MT)</label>
                            <input
                              type="number"
                              value={product.quantity}
                              onChange={(e) => handleProductChange(index, 'quantity', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded focus:border-black focus:outline-none"
                              placeholder="Enter quantity in MT"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-black mb-2">Packing Required</label>
                            <input
                              type="text"
                              value={product.packing}
                              onChange={(e) => handleProductChange(index, 'packing', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded focus:border-black focus:outline-none"
                              placeholder="Enter packing details"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-black mb-2">Remarks</label>
                            <input
                              type="text"
                              value={product.remarks}
                              onChange={(e) => handleProductChange(index, 'remarks', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded focus:border-black focus:outline-none"
                              placeholder="Any additional remarks"
                            />
                          </div>
                        </div>
                        <div className="flex justify-end gap-2 mt-4">
                          {formData.products.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeProductRow(index)}
                              className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
                            >
                              Remove
                            </button>
                          )}
                          {index === formData.products.length - 1 && (
                            <button
                              type="button"
                              onClick={addProductRow}
                              className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
                            >
                              Add Product
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Certification Requirements */}
                <div>
                  <h5 className="text-lg font-bold text-black mb-4 bg-gray-100 p-3 rounded" style={{ fontFamily: 'Coolvetica, sans-serif', letterSpacing: '0.035em' }}>3. Certification Requirements (Tick all that apply)</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { key: 'fssai', label: 'FSSAI' },
                      { key: 'usdaOrganic', label: 'USDA Organic' },
                      { key: 'euOrganic', label: 'EU Organic' },
                      { key: 'iso22000', label: 'ISO 22000' },
                      { key: 'haccp', label: 'HACCP' }
                    ].map((cert) => (
                      <div key={cert.key} className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          id={cert.key}
                          name={cert.key}
                          checked={formData.certifications[cert.key as keyof typeof formData.certifications] as boolean}
                          onChange={handleCheckboxChange}
                          className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                        />
                        <label htmlFor={cert.key} className="text-black font-medium">{cert.label}</label>
                      </div>
                    ))}
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="other"
                        name="other"
                        checked={formData.certifications.other}
                        onChange={handleCheckboxChange}
                        className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                      />
                      <label htmlFor="other" className="text-black font-medium">Other:</label>
                      <input
                        type="text"
                        name="otherText"
                        value={formData.certifications.otherText}
                        onChange={(e) => setFormData(prev => ({
                          ...prev,
                          certifications: { ...prev.certifications, otherText: e.target.value }
                        }))}
                        className="flex-1 px-3 py-1 border border-gray-300 rounded focus:border-black focus:outline-none"
                        placeholder="Specify other certification"
                        disabled={!formData.certifications.other}
                      />
                    </div>
                  </div>
                </div>

                {/* 4. Shipment & Delivery Details */}
                <div>
                  <h5 className="text-lg font-bold text-black mb-4 bg-gray-100 p-3 rounded" style={{ fontFamily: 'Coolvetica, sans-serif', letterSpacing: '0.035em' }}>4. Shipment & Delivery Details</h5>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-black mb-2">Preferred Port of Delivery</label>
                        <input
                          type="text"
                          name="portOfDelivery"
                          value={formData.portOfDelivery}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-black focus:outline-none bg-transparent"
                          placeholder="Enter preferred port"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-black mb-2">Delivery Terms (FOB, CIF, etc.)</label>
                        <input
                          type="text"
                          name="deliveryTerms"
                          value={formData.deliveryTerms}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-black focus:outline-none bg-transparent"
                          placeholder="Enter delivery terms"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-black mb-2">Preferred Shipping Method (Sea/Air)</label>
                        <select
                          name="shippingMethod"
                          value={formData.shippingMethod}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-black focus:outline-none bg-transparent"
                        >
                          <option value="">Select shipping method</option>
                          <option value="Sea">Sea</option>
                          <option value="Air">Air</option>
                          <option value="Both">Both</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-black mb-2">Required Delivery Timeline</label>
                        <input
                          type="text"
                          name="deliveryTimeline"
                          value={formData.deliveryTimeline}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-black focus:outline-none bg-transparent"
                          placeholder="Enter delivery timeline"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-white py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50"
                  style={{ backgroundColor: '#2e3e27', fontFamily: 'Coolvetica, sans-serif', letterSpacing: '0.035em' }}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Requirement'}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    );
  };

export default SpiceImportForm;
