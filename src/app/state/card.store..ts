import { Injectable } from '@angular/core'
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita'
import { Card } from './card.model'

export interface CardState extends EntityState<Card> {}

@Injectable({
  providedIn: 'root'
})

@StoreConfig({ name: 'card' })

export class CardStore extends EntityStore<CardState, Card> {
  constructor() {
    super();
  }
}