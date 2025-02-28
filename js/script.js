document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    console.log({ firstname, lastname, email, message });

    const response = await axios.post(
      "https://site--formulaire-back--fc7nwyvb2r4r.code.run/form",
      {
        firstname,
        lastname,
        email,
        message,
      }
    );

    console.log(response.data);
  });
});
