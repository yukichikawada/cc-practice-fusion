import * as DoctorAPIUtil from '../utils/doctorsUtil';

export const RECEIVE_DOCTORS = 'RECEIVE_DOCTORS';

const receiveDoctors = doctors => ({
  type: RECEIVE_DOCTORS,
  doctors
});

export const fetchDoctors = () => dispatch => (
  DoctorAPIUtil.fetchDoctors()
    .then(doctors => dispatch(receiveDoctors(doctors)))
);