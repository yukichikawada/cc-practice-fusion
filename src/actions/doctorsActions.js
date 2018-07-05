import * as DoctorAPIUtil from '../utils/doctorsUtil';

export const RECEIVE_DOCTORS = 'RECEIVE_DOCTORS';
export const RECEIVE_DOCTOR  = 'RECEIVE_DOCTOR';

const receiveDoctors = doctors => ({
  type: RECEIVE_DOCTORS,
  doctors
});

const receiveDoctor = doctor => ({
  type: RECEIVE_DOCTOR,
  doctor
})

export const fetchDoctors = () => dispatch => (
  DoctorAPIUtil.fetchDoctors()
    .then(doctors => dispatch(receiveDoctors(doctors)))
);

export const fetchDoctor = doctorId => dispatch => (
  DoctorAPIUtil.fetchDoctor(doctorId)
    .then(doctor => dispatch(receiveDoctor(doctor)))
);