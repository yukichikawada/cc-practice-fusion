import React from 'react';
import { Link } from 'react-router-dom';

class DoctorCategoryResults extends React.Component {
  constructor() {
    super();
    this.state = {
      doctors: []
    };
  }

  componentDidMount() {
    const queryParams = this.props.location.search;
    const URL = `http://localhost:3004/doctors${queryParams}`;
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        Object.keys(data).forEach(obj => {
          let docs = this.state.doctors.concat(data[obj]);
          this.setState({ doctors: docs });
        });
      });
  }

  render() {
    const docs = this.state.doctors.map(doc => {
      return (
        <li key={doc.id}>
          <Link to={`/doctors/${doc.id}`}>
            Dr. {doc.first_name} {doc.last_name} of {doc.area} in {doc.specialty} - scored: {doc.score}
          </Link>
        </li>
      );
    });

    return(
      <div>
        <h1>Doctor Category Results</h1>
        <ol>
          {docs}
        </ol>
      </div>
    )
  }
}

export default DoctorCategoryResults;