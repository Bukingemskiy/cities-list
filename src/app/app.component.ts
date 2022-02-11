import { Component } from '@angular/core';

export interface Card {
  id: number
  title: string
  description: string
  image: string
  liked: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  table = false
  cell = true

  initialCards = [
    { title: "Shironeko", description: "Самый счастливый и сонный кот в мире", image: "../../assets/Shironeko.jpg" },
    { title: "Garfi", description: "Самый злой кот в мире", image: "../../assets/Garfi.jpg" },
    { title: "Sam", description: "У кота Сэма есть потрясающие брови", image: "../../assets/Sam.jpg" },
    { title: "Snoopy", description: "Самый очаровательный котик", image: "../../assets/Snoopy.jpg" },
    { title: "Venus", description: "Кошка с двумя лицами", image: "../../assets/Venus.jpg" },
    { title: "Maru", description: "Повелитель коробок", image: "../../assets/Maru.jpg" },
    { title: "Lil Bub", description: "Вечный котёнок", image: "../../assets/Lil_Bub.jpg" },
    { title: "Banye", description: "Всегда удивлённый кот", image: "../../assets/Banye.jpg" },
    { title: "Grumpy Cat", description: "Сердитый котик", image: "../../assets/Grumpy_Cat.jpg" },
    { title: "Hamilton", description: "Кот-хипстер", image: "../../assets/Hamilton.jpg" },
    { title: "Nala", description: "Кошка, которая всегда в шоке", image: "../../assets/Nala.jpg" },
    { title: "Colonel Meow", description: "Кот с самой длинной шерстью", image: "../../assets/Colonel_Meow.jpg" }
  ]

  newCards: Card[] =
    this.initialCards.map((obj, i) => ({ ...obj, liked: false, id: i + 1 }))

  cellCards() {
    this.cell = true
    this.table = false
  }

  tableCards() {
    this.cell = false
    this.table = true
  }
}
