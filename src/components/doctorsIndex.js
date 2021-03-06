import React from 'react';
import { Link } from 'react-router-dom';

class DoctorsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchDoctors();
  }

  render() {
    const doctors = this.props.doctors.map((doc, idx) => {
      return (
        <li key={idx}>
          <Link to={`/doctors/${doc.id}`} >
            Dr. {doc.first_name} {doc.last_name} Specialty: {doc.specialty}, Area: {doc.area}, Score: {doc.score}
          </Link>
        </li>
      );
    });

    return (
      <div>
        <ol>
          {doctors}
        </ol>
      </div>
    );
  }
}

export default DoctorsIndex;