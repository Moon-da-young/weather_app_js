const defaultLocation = '#/weather?lat=37.55585&lan=126.9198'; //어메이징농카이 위치

window.navigator.geolocation.getCurrentPosition((position) => {
  const { latitude, longitude } = position.coords;

  console.log(latitude, longitude);
});
