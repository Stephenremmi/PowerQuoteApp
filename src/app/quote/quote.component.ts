import { Component, OnInit } from '@angular/core';
import{Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]=[
    new Quote(1,'If you treat this disease(Covid19)normally,it will treat you abnormally','Yuku The Great','-Mutahi Kagwe-',new Date(2020,2,27)),
    new Quote(2 ,'If knowledge is Power then knowledge is dead- and this is no cliche','Jaro_Jeshi_Boy', '-Stephen Remmi-',new Date(2020,5,8)),
    new Quote(3 ,'Every child is an artist the problem is staying an artist when you grow up','Escobar', '-Pablo Picasso-',new Date(2020,2,14)),
    new Quote(4 ,'Dont judge each day by the harvest you reap but by the seeds that you plant  ',' Tyrion_Lannister', '-Shellyshelly-',new Date(2020,2,15)),
    new Quote(5 ,'The two important days of your life is the day you are born and the day you find out why ','Mzee manyasi','-Stanley William-',new Date(2020,3,14)),
    new Quote(6 ,'Everybody is a genius.But if you judge a fish by its ability to climb a tree,it will live its whole life believing that it is stupid','sungura_mjanjez', '-Albert Enstein-',new Date(2020,1,10)),
    new Quote(6 ,'Trust your instict.Your mistakes might as well be your own,instead of someones elses  ','Thomas fooking shelby', '-Billy Wilder-',new Date(2020,1,15)),
    new Quote(7 ,'If plan A does not work, the alphabet has 25 more letters -204 if you are in Japan ','Mrs.Leo', '-Claire Cook-',new Date(2020,4,17)),
    new Quote(8 ,'A lie gets halfway around the world before the truth has a chance to gets its parts on ','wakiritho', '-Sir Winston Churchill-',new Date(2020,4,31)),
    new Quote(9 ,'Love is a serious mental disease ','Maggie Mhenga ', 'Plato',new Date(2020,2,14)),
    new Quote(10 ,'One thing about music,when it hits you, you feel no pain','Swat mtoto wa Eunice', '-Bob marley-',new Date(2020,3,14)),
    
  ]

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.postDate = new Date(quote.postDate)
    this.quotes.push(quote)
  }

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
