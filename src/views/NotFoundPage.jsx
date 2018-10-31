import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <section className="section-requests container">
    <div className="row">
      <h1 className="section-heading">
        Oops!!!, You might want to
        <Link to="/" className="not-found"> Click me</Link>
      </h1>
    </div>
    404!!!
  </section>
);

export default NotFoundPage;
