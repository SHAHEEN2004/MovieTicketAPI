const repo = require("../repos/movieRepo");


module.exports.get = (req, res)=>{
    repo.get((movies)=>{
        return res.status(200).send(movies);
    })
}

module.exports.getById = (req, res)=>{
    repo.getByID(req.params.id,(movie)=>{
        return res.status(200).send(movie);
    });
}

module.exports.getCinemas = (req, res)=>{
    repo.getCinemas(req.params.id,(movies)=>{
        movies.forEach(movie => {
            let timings = movie.timings.filter(t=>t.movie_id==req.params.id);
            movie.timings=timings;
        });
        return res.status(200).send(movies);
    });
}