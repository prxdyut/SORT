// import Wowjs from "../lib/wow/wow.min.js";
// import Easing from "../lib/easing/easing.min.js";
// import OwlCar from "../lib/owlcarousel/owl.carousel.min.js";
// import WayP from "../lib/waypoints/waypoints.min.js";
// import Main from "../js/main.js";



const homeJsLibs = () => {
  return (
    <>
      {/* <!-- Back to Top --> */}
      <a href="#" className="btn btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up"></i>
      </a>

      {/* <!-- JavaScript Libraries --> */}
      <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
      {/* <script src={Wowjs}></script>
      <script src={Easing}></script>
      <script src={WayP}></script>
      <script src={OwlCar}></script> */}

      {/* <!-- Template Javascript --> */}
      {/* <script src={Main}></script> */}
    </>
  );
};

export default homeJsLibs;
