import React from "react";
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "bootstrap/dist/css/bootstrap.min.css";
// eslint-disable-next-line no-unused-vars
import "./App.css";
import NavbarPro from "./NavbarPro";
import GalleryPro from "./GalleryPro";
import CarouselPro from "./carousel/CarouselPro";

function App() {
  return (
    <div className="App">
      <NavbarPro />
      <CarouselPro />
      <a class="btn btn-info fs-1 fw-bolder opacity-50" href="https://drive.google.com/file/d/1GWwiyROIJthovi7XQpI27AKfI5y1HKtF/view?usp=drivesdk" role="button">
        CV 
      Scarlett</a>
      <GalleryPro />
      <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div class="col-md-4 d-flex align-items-center">
            <a
              href="/"
              class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
            >
              <img
                alt=""
                src="https://i.ibb.co/98Rk7Np/Ilustraci-n-sin-t-tulo.png"
                width="43"
                height="30"
                className="d-inline-block align-center "
              />
            </a>
            <span class="mb-3 mb-md-0 text-white">© 2023 Siderea, Inc</span>
          </div>

          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3">
              <a class="text-muted" href="#">
                <img
                  class="bi"
                  width="24"
                  height="24"
                  src="https://eltallerdehector.com/wp-content/uploads/2022/06/6a198-instagram-logo-png.png"
                  alt=""
                />
              </a>
            </li>
            <li class="ms-3">
              <a class="text-muted" href="#">
                <img
                  class="bi"
                  width="24"
                  height="24"
                  src="https://static.vecteezy.com/system/resources/previews/012/493/083/original/instagram-logo-3d-illustration-free-png.png"
                  alt=""
                />
              </a>
            </li>
            <li class="ms-3">
              <a class="text-muted" href="#">
                <img
                  class="bi"
                  width="24"
                  height="24"
                  src="https://eltallerdehector.com/wp-content/uploads/2022/06/6a198-instagram-logo-png.png"
                  alt=""
                />
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default App;
