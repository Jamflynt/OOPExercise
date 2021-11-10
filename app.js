// 1a
const mulan = {
    title: `Mulan`,
    main: `Fa Mulan`,
    // 1b
    quote: () => `Dishonor! Dishonor on your whole family`,
    // 1c
    // storyline: () => {
    //     return `The movie ${this.title} is about ${this.main}`  // This does not return the quote
    // }

    storyline: function() {
        return `The movie ${this.title} is about ${this.main}`
    }
}

// 2a
const tangled = {
    title: `Tangled`,
    main: `Rapunzel`,
    // 2b 
    // quote: () => {
    //     return `I can't believe I did this! I can't believe I did this! I have to go home! I am never going back! I'm a horrible daughter! BEST DAY EVER!`
    // }, 
    // // 2c
    // storyline: () => {
    //     return `The movie ${this.title} is about ${this.main}` 
    // }
    // Need to use declaration functions for all these
}

// 3a 
function DisneyMovie(t, m){
    this.title = t;
    this.main = m;   
}

// 3b
// disneyMovie.prototype.storyline = () => `The movie ${this.title} is about ${this.main}`;
// Have to use a declaration function again here 
DisneyMovie.prototype.storyline = function() {
    return `The movie ${this.title} is about ${this.main}`;
}

// 3c
const mulan1 = new DisneyMovie(`Mulan`, `Fa Mulan`);

// 3d 
const tangled1 = new DisneyMovie(`Tangled`, `Rapunzel`);

// 4a 
class DM {
    constructor(t, m){
        this.title = t;
        this.main = m;
    }
    // 4b
    // storyline = () => {
    // return `The movie ${this.title} is about ${this.main}`;
    // }
    // Need to use a declaration function 

    // 4e
    static loveDisneyMovies(){
        return `I love Disney Movies!`;
    }
}

// 4c
const mulan2 = new DM(`Mulan`, `Fa Mulan`);

// 4d 
const tangled2 = new DM(`Tangled`, `Rapunzel`);

// 4f
console.log(DM.loveDisneyMovies());

// 5a
class DMCast extends DM {
    // 5b
    constructor(t, m, c){
        // 5c
        super(t, m);
        this.cast = c;
    }
    // 6a (Bonus)
    static create(t, m, c){
        return new DMCast(t, m, c); 
        // Can also use the "this" keyword
        // return new this.(t, m, c);
    }
}
// 5d
const mulan3 = new DMCast (`Mulan`, `Fa Mulan`, 
    {
        mulan: `Ming-Na Wen`, 
        mushu: `Eddie Murphy`, 
        shang: `BD Wong`, 
        theEmperor: `Pat Morita`
    });

// 5e
const tangled3 = new DMCast (`Tangled`, `Rapunzel`,
    {
        rapunzel: `Mandy Moore`, 
        flynnRider: `Zachary Levi`, 
        motherGothel: `Donna Murphy`
    });

// Bonus
// 6b
const moana = DMCast.create(`Moana`, `Moana of Motunui`, 
    {
        moana: `Auli'i Cravalho`, 
        maui: `Dwayne Johnson`, 
        grammaTala: `Rachel House`, 
        chiefTui: `Temuera Morrison`
    });

// 6c 
console.log(moana);