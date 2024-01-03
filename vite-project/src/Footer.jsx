
function Footer(){ 
  return <footer className="page-footer mt-4 font-small blue pt-4 bg-dark text-white">
    <div className="container mt-5">
        <div className="row mt-5">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Daxone</h5>
                <p>Here you can use Lorem ipsum dolor sit <br /> amet consectetur. rows and columns to or <br />ganize your footer content.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase text-white">ABOUT US</h5>
                <ul className="list-unstyled p-2">
                    <li><a href="#!">About</a></li>
                    <li><a href="#!">Products</a></li>
                    <li><a href="#!">Terms and conditions</a></li>
                    <li><a href="#!">Help Center</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">USEFUL LINK</h5>
                <ul className="list-unstyled p-2">
                    <li><a href="#!">Support</a></li>
                    <li><a href="#!">Shopping Cat</a></li>
                    <li><a href="#!">WIshlist</a></li>
                    <li><a href="#!">Chekout</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">
    Copyright © Daxone. All Right Reserved
    </div>

</footer>
}
export default Footer
