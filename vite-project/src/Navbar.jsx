  function Navbar() {
    return <div className="navbar bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand">Daxone</a>


          <form className="d-flex mt-1" role="search">
            <button className="btn btn-outline-success mx-2 " type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
            <button className="btn btn-outline-danger  mx-1" type="submit"><i className="fa-regular fa-heart"></i></button>
            <button className="btn btn-outline-primary mx-1" type="submit"><i className="fa-solid fa-cart-shopping"></i></button>

          </form>
</div>
    </div>
}
export default Navbar