import { connect } from 'react-redux';

import DoctorsIndex from './doctorsIndex';
import { fetchDoctors } from '../actions/doctorsActions';

const mapStateToProps = state => ({
  doctors: Object.keys(state.doctors).map(doc => state.doctors[doc])
});

const mapDispatchToProps = dispatch => ({
  fetchDoctors: () => dispatch(fetchDoctors())
});

export default connect(mapStateToProps, mapDispatchToProps)(DoctorsIndex);