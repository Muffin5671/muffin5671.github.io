onload = (event) => {
  document.querySelector("#errorText")[0].innerText = `The requested URL (${location.pathname}) does not exist. (404)`;
};
