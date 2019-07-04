var inicial=true;

const Featured = props => (
    <div>
        <div class="col-md-12 bg-secondary" align="center">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                {props.shows && props.shows.map(show => {
                    let className = ('carousel-item' + ((inicial) ? ' active' : ''));
                    inicial=false;
                    return (
                        <div className={className}>
                            <img src={show.image} class="d-block"/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>{show.title}</h5>
                            </div>
                        </div>
                    )
                })}
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>

            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                
            </div>
        </div>
    </div>
)


Featured.constructor = function(){
    this.state = {
        inicial:true
    };
}


export default Featured;