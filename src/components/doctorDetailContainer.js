import { connect } from 'react-redux';

import DoctorDetail from './doctorDetail';
import { fetchDoctor } from '../actions/doctorsActions';

const mapStateToProps = (state, ownProps) => ({
  doctor: state.doctors
});

const mapDispatchToProps = dispatch => ({
  fetchDoctor: doctorId => dispatch(fetchDoctor(doctorId))
});

export default connect(mapStateToProps, mapDispatchToProps)(DoctorDetail);