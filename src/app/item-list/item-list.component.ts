import { Component, OnInit } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { ShopService } from "../shop.service"

interface Item {
  name: string
  image: string
  price: number
  addedToCart: boolean
  desc: string
}

@Component({
  selector: "app-item-list",
  templateUrl: "./item-list.component.html",
  styleUrls: ["./item-list.component.css"],
})
export class ItemListComponent implements OnInit {
  items: Item[] = []
  addedToCartItems: Item[] = []

  constructor(private shoppingCartService: ShopService) {}

  ngOnInit(): void {
    this.shoppingCartService.fetchItems()
    this.shoppingCartService.items$.subscribe((items) => {
      this.items = items
    })
    this.shoppingCartService.addedToCartItems$.subscribe((addedToCartItems) => {
      this.addedToCartItems = addedToCartItems
    })
  }

  addToCart(item: Item): void {
    this.shoppingCartService.addToCart(item)
  }

  getTotalPrice(): number {
    return this.shoppingCartService.getTotalPrice()
  }

  buy(): void {
    this.shoppingCartService.buy()
  }
}
