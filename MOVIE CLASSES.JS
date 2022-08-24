class Movie {
    constructor(title,actor,studio,director,rating){
        this.title=title;
        this.actor=actor;
        this.studio=studio;
        this.director=director;
        this.rating=rating;
    }

getDetailsofTheMovie(){
    return(`${this.title} movie directed by director ${this.director}, production by ${this.studio} and It's rating is ${this.rating}`)
}

getActorName(){
    return `Hero is ${this.actor} `
}

getPGDetails(){
    return`${this.title} is ${this.rating} rated`
}

getPG(){
   if (this.rating === "PG 13"){return `${this.title} is PG 13 certified`} else{return`This movie is not a PG 13 certified`}

}







}

let movieName = new Movie ("2.0","Rajini","LYCA","Shankar","PG 13");
let movieName1 = new Movie ("Enthiran","Rajini","LYCA","Shankar","PG 3");
let movieName2 = new Movie ("Don","Siva Karthikeyan","Red Gaint","Shankar","PG 13");
let movieName3 = new Movie ("Casino Royale","(yet to decide !)","Eon Production","(yet to decide !)","PG 13")

console.log(movieName.getDetailsofTheMovie());
console.log(movieName.getActorName());
console.log(movieName.getPGDetails());
console.log(movieName.getPG());



console.log(movieName1.getDetailsofTheMovie());
console.log(movieName1.getActorName());
console.log(movieName1.getPGDetails());
console.log(movieName1.getPG()); 


console.log(movieName2.getDetailsofTheMovie());
console.log(movieName2.getActorName());
console.log(movieName2.getPGDetails());
console.log(movieName2.getPG());

console.log(movieName3.getDetailsofTheMovie());
console.log(movieName3.getActorName());
console.log(movieName3.getPGDetails());
console.log(movieName3.getPG());
