import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  cards =[
    {
      imageUrl:'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title:'Card 1',
      text: 'Some quick example text to build on the card title and make upthe bulk of the card\'s content.'  
    },
    {
      imageUrl:'https://images.pexels.com/photos/326509/pexels-photo-326509.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      title:'Card 2',
      text: 'Some quick example text to build on the card title and make upthe bulk of the card\'s content.'  
    },
    {
      imageUrl:'https://images.pexels.com/photos/4930548/pexels-photo-4930548.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      title:'Card 3',
      text: 'Some quick example text to build on the card title and make upthe bulk of the card\'s content.'  
    },
    {
      imageUrl:'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      title:'Card 4',
      text: 'Some quick example text to build on the card title and make upthe bulk of the card\'s content.'  
    },
    {
      imageUrl:'https://images.pexels.com/photos/930530/pexels-photo-930530.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      title:'Card 5',
      text: 'Some quick example text to build on the card title and make upthe bulk of the card\'s content.'  
    },
    {
      imageUrl:'https://images.pexels.com/photos/5001886/pexels-photo-5001886.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      title:'Card 6',
      text: 'Some quick example text to build on the card title and make upthe bulk of the card\'s content.'  
    },

  ]
}
