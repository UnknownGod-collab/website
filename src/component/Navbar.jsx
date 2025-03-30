function NavBar() {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/website">
            <img src="/icone.svg" alt="UnknownGod" width="38"></img>
            UnknownGod
            </a> 
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="/website">Home</a>
                <a className="nav-link" href="/game">Game</a>
                <a className="nav-link" href="/about">About</a>
              </div>
            </div>
          </div>
        </nav>
        </>
    )
}
// <a class="nav-link disabled" aria-disabled="true">Disabled</a>
export default NavBar