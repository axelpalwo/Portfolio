let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');

function changeSlide(direction) {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + direction + images.length) % images.length;
    images[currentIndex].classList.add('active');
}

const Project_Container = document.getElementById('projects-container');

const Kanthus_Carousel = `<div id="carouselExample" class="carousel slide">
                <h3 class="project-title">Kanthus Project</h3>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="./img/kanthus.png" class="d-block w-100" alt="Kanthus 1">
                    </div>
                    <div class="carousel-item">
                        <img src="./img/kanthus2.png" class="d-block w-100" alt="Kanthus 2">
                    </div>
                    <div class="carousel-item">
                        <img src="./img/kanthus3.png" class="d-block w-100" alt="Kanthus 3">
                    </div>
                    <div class="carousel-item">
                        <img src="./img/kanthus4.png" class="d-block w-100" alt="Kanthus 4">
                    </div>
                </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
</button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
</button>
            </div>
            <div class="project-buttons">
                <button id="prev-project" class="btn btn-primary" onclick="AirBnBGo()">Anterior</button>
                <button id="next-project" class="btn btn-primary" onclick="IrisAIGo()">Siguiente</button>
            </div>`

const Iris_Carousel = `<div id="carouselExample" class="carousel slide">
                <h3 class="project-title">Iris AI</h3>
                <div class="carousel-inner">
                    <!-- Video 1 -->
                    <div class="carousel-item active">
                        <video class="d-block w-100" controls autoplay loop muted>
                            <source src="./img/iris1.mp4" type="video/mp4">
                            Tu navegador no soporta el elemento de video.
                        </video>
                    </div>
                    <!-- Video 2 -->
                    <div class="carousel-item">
                        <video class="d-block w-100" controls autoplay loop muted>
                            <source src="./img/iris2.mp4" type="video/mp4">
                            Tu navegador no soporta el elemento de video.
                        </video>
                    </div>
                    <!-- Video 3 -->
                    <div class="carousel-item">
                        <video class="d-block w-100" controls autoplay loop muted>
                            <source src="./img/iris3.mp4" type="video/mp4">
                            Tu navegador no soporta el elemento de video.
                        </video>
                    </div>
                    <!-- Video 4 -->
                    <div class="carousel-item">
                        <iframe class="d-block w-100" 
            src="https://www.youtube.com/embed/uG_KVuqsIYQ?si=BQliaaX1c5AelOof" 
            title="Demo Day Iris" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen 
            style="height: 500px;">
    </iframe>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div class="project-buttons">
                <button id="prev-project" class="btn btn-primary" onclick="KanthusGo()">Anterior</button>
                <button id="next-project" class="btn btn-primary" onclick="AirBnBGo()">Siguiente</button>
            </div>`

const Airbnb_Carousel = `<div id="carouselExample" class="carousel slide">
                <h3 class="project-title">Clon Airbnb</h3>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="./img/airbnb1.png" class="d-block w-100" alt="Kanthus 1">
                    </div>
                    <div class="carousel-item">
                        <img src="./img/airbnb2.png" class="d-block w-100" alt="Kanthus 2">
                    </div>
                </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
</button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
</button>
            </div>
            <div class="project-buttons">
                <button id="prev-project" class="btn btn-primary" onclick="IrisAIGo()">Anterior</button>
                <button id="next-project" class="btn btn-primary" onclick="KanthusGo()">Siguiente</button>
            </div>`

const KanthusGo = () => {
    Project_Container.innerHTML = Kanthus_Carousel;
}

const IrisAIGo = () => {
    Project_Container.innerHTML = Iris_Carousel;
}

const AirBnBGo = () => {
    Project_Container.innerHTML = Airbnb_Carousel;
}