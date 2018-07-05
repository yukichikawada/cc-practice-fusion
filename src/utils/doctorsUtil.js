import $ from 'jquery';

export const fetchDoctors = () => (
  $.ajax({
    url: `http://localhost:3004/doctors`,
    method: 'GET'
  })
);

export const fetchDoctor = doctorId => (
  $.ajax({
    url: `http://localhost:3004/doctors/${doctorId}`,
    method: 'GET'
  })
);