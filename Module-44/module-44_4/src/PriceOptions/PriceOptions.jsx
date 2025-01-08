import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {
    const plans =     [
        {
          "id": 1,
          "name": "Basic Gym Plan",
          "price": 20,
          "features": [
            "Access to gym equipment",
            "Locker facilities",
            "Free Wi-Fi",
            "Water station access"
          ]
        },
        {
          "id": 2,
          "name": "Standard Gym Plan",
          "price": 40,
          "features": [
            "Access to gym equipment",
            "Locker facilities",
            "Free Wi-Fi",
            "Group fitness classes",
            "Personalized workout plan"
          ]
        },
        {
          "id": 3,
          "name": "Premium Gym Plan",
          "price": 60,
          "features": [
            "Access to gym equipment",
            "Locker facilities",
            "Free Wi-Fi",
            "Group fitness classes",
            "Personal trainer sessions",
            "Sauna and steam room access",
            "Nutritional guidance"
          ]
        },
        {
          "id": 4,
          "name": "VIP Gym Plan",
          "price": 100,
          "features": [
            "24/7 gym access",
            "Private training area",
            "Personal trainer sessions",
            "Unlimited group classes",
            "Sauna, steam room, and jacuzzi",
            "Nutritionist consultations",
            "Massage therapy"
          ]
        }
      ]
      
    return (
        <div>
            <h2 className='text-5xl'>Best Price Option in town</h2>
            {
                plans.map(plan => {
                    return (
                        <PriceOption key={plan.id} plan={plan} />
                    )
                })
            }
        </div>
    );
};

export default PriceOptions;