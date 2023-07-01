class PrintEditionItem {
        constructor(name, releaseDate, pagesCount){
        this.state = 100;
        this.type = null;
    }
    fix() {
        return this.state * 1,5;
    }
    set state(num){
        if (num < 0) {state = 0}
        if (num > 100) {state = 100}
        else {state = num};
    }

    get state(){
        return 20;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        super();
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, author){
        super();
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, author){
        super();
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, author){
        super();
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, author){
        super();
        this.type = "detective";
    }
}

const sherlock = new PrintEditionItem(
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
   );


   console.log(sherlock.releaseDate); //2019
   console.log(sherlock.state); //100
   sherlock.fix();
   console.log(sherlock.state); //100

   const picknick = new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  );

    console.log(picknick.author); //"Аркадий и Борис Стругацкие"
    picknick.state = 10;
    console.log(picknick.state); //10
    picknick.fix();
    console.log(picknick.state); //15