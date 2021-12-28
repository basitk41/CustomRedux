const Navbar = () => {
  const main = () => {
    const home = document.getElementById("home-tab");
    const users = document.getElementById("users-tab");
    const laptops = document.getElementById("laptops-tab");
    const home_tab = () => {
      home.classList.add("active");
      users.classList.remove("active");
      laptops.classList.remove("active");
      document.getElementById("home").classList.add("show", "active");
      document.getElementById("users").classList.remove("show", "active");
      document.getElementById("laptops").classList.remove("show", "active");
    };
    const users_tab = () => {
      home.classList.remove("active");
      users.classList.add("active");
      laptops.classList.remove("active");
      document.getElementById("home").classList.remove("show", "active");
      document.getElementById("users").classList.add("show", "active");
      document.getElementById("laptops").classList.remove("show", "active");
    };
    const laptops_tab = () => {
      home.classList.remove("active");
      users.classList.remove("active");
      laptops.classList.add("active");
      document.getElementById("home").classList.remove("show", "active");
      document.getElementById("users").classList.remove("show", "active");
      document.getElementById("laptops").classList.add("show", "active");
    };
    const hash = window.location.hash;
    if (hash === "#home") home_tab();
    else if (hash === "#users") users_tab();
    else if (hash === "#laptops") laptops_tab();
    home.onclick = () => {
      home_tab();
    };
    users.onclick = () => {
      users_tab();
    };
    laptops.onclick = () => {
      laptops_tab();
    };
  };

  const html = `
    <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item">
          <a
            class="nav-link active"
            id="home-tab"
            data-toggle="tab"
            href="#home"
            role="tab"
            aria-controls="home"
            aria-selected="true"
            >Home</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="users-tab"
            data-toggle="tab"
            href="#users"
            role="tab"
            aria-controls="users"
            aria-selected="false"
            >Users</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="laptops-tab"
            data-toggle="tab"
            href="#laptops"
            role="tab"
            aria-controls="laptops"
            aria-selected="false"
            >Laptops</a
          >
        </li>
      </ul>
    `;
  document.getElementById("navbar").innerHTML = html;
  main();
};

export default Navbar;
