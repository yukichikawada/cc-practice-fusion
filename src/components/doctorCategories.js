import React from 'react';
import { Link } from 'react-router-dom';

class DoctorCategories extends React.Component {
  specialtyLinks() {
    const specialties = [
      'Generalist', 
      'Emergency', 
      'Naturopathist', 
      'Oncologist', 
      'Surgeon'
    ];

    return (
      specialties.map(specialty => (
        <li>
          <Link to={`/categories/doctors?specialty=${specialty}`} >{specialty}</Link>
        </li>
      ))
    )
  }

  areaLinks() {
    const areas = [
      'Endocrinology', 
      'Podiatry', 
      'Cardiology', 
      'Pediatrics', 
      'Gastroenterology'
    ];

    return (
      areas.map(area => (
        <li>
          <Link to={`/categories/doctors?area=${area}`} >{area}</Link>
        </li>
      ))
    )
  }

  scoreLinks() {
    const scores = [
      'gtl=50&score_lte=60', 
      'gtl=60&score_lte=70', 
      'gtl=70&score_lte=80', 
      'gtl=80&score_lte=90', 
      'gtl=90&score_lte=100'
    ];

    return (
      scores.map(score => (
        <li>
          <Link to={`/categories/doctors?score_${score}`} >{score}</Link>
        </li>
      ))
    )
  }

  allLinks() {
    return (
      <ul>
        {this.areaLinks()}
        {this.specialtyLinks()}
        {this.scoreLinks()}
      </ul>
    )
  }

  render() {
    return (
      <div>
        {this.allLinks()}
      </div>
    )
  }
}

export default DoctorCategories;