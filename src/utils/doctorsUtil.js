import $ from 'jquery';

export const fetchDoctors = () => (
  $.ajax({
    url: `http://localhost:3004/doctors`,
    method: 'GET'
  })
);