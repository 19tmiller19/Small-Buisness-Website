import React from 'react';
import './Services.css';
import { assets } from '../../assets/assets';


const Services = () => {
  const services = [
    { title: 'Air Quality', image: assets.Dryer_vent  , alt: 'Dryer-Vent-Cleaning', description: 'Dryer Vent Cleaning' },
    { title: 'Air Quality', image: assets.Chimney_sweep, alt: 'chimney-sweeping', description: 'Chimney Sweeping' },
    { title: 'Exterior', image: assets.fences, alt: 'fences', description: 'Fence Installation and Maintenance' },
    { title: 'Exterior', image: assets.powerwasher, alt: 'powerwashing', description: 'Power Washing' },
    { title: 'Exterior', image: assets.Sauna, alt: 'suana-build', description: 'Custom Saunas' },
    { title: 'Holiday', image: assets.Holiday_lights, alt: 'holiday-lights', description: 'Holiday Decorations/Lights' },
    { title: 'Seasonal', image: assets.seasonal_pots, alt: 'seasonal-plants', description: 'Seasonal Flower Pot Planting' },
    { title: 'Seasonal', image: assets.vegetable_garden, alt: 'Vegetable-gardens', description: 'Custom Vegetable Gardens' },
    // Add more services as needed
  ];

  return (
    <div className='services-container' id='services'>
      <h1>Services</h1>
      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.title}>
            <img className='services-img' src={service.image} alt={service.alt} />
            <h4>{service.title}</h4>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;