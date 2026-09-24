import { Link } from 'react-router-dom';
import { Button } from '../../../../components/ui/Button/Button';
import { PageContainer } from '../../../../components/layout/PageContainer/PageContainer';
import './Hero.css';

export function Hero() {
  return (
    <section className="hero">
      <PageContainer>
        <div className="hero__content">
          <div className="hero__text">
            <span className="hero__eyebrow">
              Smart Tech & Lifestyle
            </span>

            <h1>
              Discover technology
              <span> made for your life.</span>
            </h1>

            <p>
              Explore modern technology, smart devices,
              and lifestyle essentials — all in one place.
            </p>

            <div className="hero__actions">
              <Button size="lg">
                <Link to="/products">
                  Shop Now
                </Link>
              </Button>

              <Button variant="outline" size="lg">
                <Link to="/products">
                  Explore Products
                </Link>
              </Button>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__visual-card">
              <span>VELORA</span>
              <strong>Future starts here.</strong>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}