const images = [
    { id: 3, src: "https://fakeimg.pl/1920x960/?text=LOL", alt: "Third slide" },
    { id: 2, src: "https://fakeimg.pl/1920x960/?text=GG", alt: "Second slide" },
    { id: 1, src:"https://fakeimg.pl/1920x960/?text=Home", alt: "First slide" },
]

function Carousel(){
    return <>
    <div id="carouselHomeInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            {images.map((image) => (
                <button type="button" data-bs-target="#carouselHomeInterval" data-bs-slide-to={image.id} aria-label={`Slide ${image.id}`}></button>
            ))}
        </div>
        <div class="carousel-inner">
            {images.map(image => (
                <div className="carousel-item active" data-bs-interval="1000">
                    <img src={image.src} className="d-block" alt={image.alt}></img>
                </div>
            ))}
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
    </div>
    </>
}