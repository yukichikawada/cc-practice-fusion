import React from 'react';

class DoctorDetail extends React.Component {
  componentDidMount() {
    // sending the right id to fetch doctor with
    this.props.fetchDoctor(this.props.match.params.id);
  }

  render() {
    const {doctor} = this.props;
    console.log(this.props);
    return (
      <div>
        <h1>Dr. {doctor.first_name} {doctor.last_name}</h1>
        <h3>{doctor.area}</h3>
        <h3>{doctor.specialty}</h3>
        <h3>{doctor.score}</h3>
        <p>Biography:</p>
      </div>
    )
  }
}

export default DoctorDetail;