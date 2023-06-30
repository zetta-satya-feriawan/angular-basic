import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs"

interface Item {
  name: string
  image: string
  price: number
  addedToCart: boolean
  desc: string
}

@Injectable({
  providedIn: "root",
})
export class ShopService {
  public items$ = new BehaviorSubject<Item[]>([])
  public addedToCartItems$ = new BehaviorSubject<Item[]>([])
  public totalPrice$ = new BehaviorSubject<number>(0)

  private items: Item[] = []
  private addedToCartItems: Item[] = []

  constructor(private http: HttpClient) {}

  public fetchItems(): void {
    this.http.get<Item[]>("assets/junior-data.json").subscribe(
      (data) => {
        this.items = data
        this.items$.next(this.items)
      },
      (error) => {
        console.error("Error fetching items:", error)
      }
    )
  }

  public addToCart(item: Item): void {
    if (!item.addedToCart) {
      item.addedToCart = true
      this.addedToCartItems.push(item)
    } else {
      item.addedToCart = false
      const index = this.addedToCartItems.indexOf(item)
      if (index > -1) {
        this.addedToCartItems.splice(index, 1)
      }
    }
    this.addedToCartItems$.next(this.addedToCartItems)
    this.calculateTotalPrice()
  }

  public getTotalPrice(): number {
    return this.addedToCartItems.reduce((total, item) => total + item.price, 0)
  }

  public buy(): void {
    const totalPrice = this.getTotalPrice()
    if (totalPrice === 0) {
      alert("Please buy something")
    } else if (totalPrice > 1000) {
      alert("You don't have enough gold!")
    } else {
      alert("Transaction Success!")
    }
  }

  private calculateTotalPrice(): void {
    const totalPrice = this.getTotalPrice()
    this.totalPrice$.next(totalPrice)
  }
}
