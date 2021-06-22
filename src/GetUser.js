function GetUser(cb) {

   // EN FUNKTION SOM HÄMTAR DATA FRÅN RANDOM USER OCH RETURNERAR DET SOM SIN CALLBACK (CB)

    setTimeout(() => {
        fetch("https://randomuser.me/api/")
        .then(res => res.json())
        .then(data => {
            cb(data.results[0].name.first + " " + data.results[0].name.last)
        })
    },2000)

}

export default GetUser;