
import {
  Truck,
  ShieldCheck,
  RefreshCcw,
  Headphones,
} from 'lucide-react';

import './Benefits.css';

const benefits = [
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Get your orders delivered quickly and safely.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Payment',
    description: 'Shop confidently with secure checkout.',
  },
  {
    icon: RefreshCcw,
    title: 'Easy Returns',
    description: 'Enjoy a simple and convenient return process.',
  },
  {
    icon: Headphones,
    title: 'Customer Support',
    description: 'We are here to help whenever you need us.',
  },
];

export function Benefits() {
  return (
    <section className="benefits">
      <div className="benefits__container">
        {benefits.map(({ icon: Icon, title, description }) => (
          <article className="benefits__item" key={title}>
            <div className="benefits__icon">
              <Icon size={24} strokeWidth={1.7} />
            </div>

            <div className="benefits__content">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
