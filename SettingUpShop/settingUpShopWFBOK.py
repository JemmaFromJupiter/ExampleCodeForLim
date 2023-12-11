from __future__ import annotations

## ADVANCED CS EXAMPLE CODE ##

import os
import time

from dataclasses import dataclass

# Classes #
@dataclass
class Item():
    name: str
    price: float
    
    def add_to_basket(self, basket: Basket):
        basket.append(self)
        
@dataclass
class Inventory():
    itemList: list[Item]
    
    def keys(self) -> list[str]:
        for item in self.itemList:
            yield item.name
        
    def values(self) -> list[float]:
        for item in self.itemList:
            yield item.price
    
    def items(self) -> list[tuple]:
        for item in self.itemList:
            yield (item.name, item.price)
    
    def __str__(self):
        returnString = ""
        for item in self.itemList:
            returnString += "%s: $ %.2f\n" % (item.name.title(), item.price)
        
        return returnString

class Basket(list[Item]):
    def __new__(cls) -> Basket:
        return super().__new__(cls)
    
    def __init__(self):
        self.subTotal = 0.0
        self.total = 0.0
    
    def subtotal(self):
        self.subTotal = 0.0
        for item in self:
            self.subTotal += item.price
            
    def calculate_total(self):
        self.total = self.subTotal + (self.subTotal * 0.05)
    
    def check_out(self, price: float) -> float | None:
        if self.total <= price:
            return price - self.total
        else:
            print("Please pay the rest.")
            self.total -= price
            return None
    
def verify_input[T](message: str, dataType: type) -> T:
    userInput = input("%s\n: " % message)
    
    try:
        userInput = dataType(userInput)
        
        return userInput
    except:
        print("Invalid Input Type.")
        return None
    
STORE_INVENTORY = Inventory([
    Item("apples", 3.99),
    Item("oranges", 2.78),
    Item("frozen pizza", 12.57),
    Item("frozen pizza bundle", 34.69),
    Item("soda", 2.99),
    Item("candy", 1.29),
    Item("chocolate", 1.50)
    ])

STORE_INVENTORY_KEYS = list(STORE_INVENTORY.keys())

USER_BASKET = Basket()

shopping = True
checkOut = False

if __name__ == "__main__":
    while shopping:
        os.system("cls")
        
        print(STORE_INVENTORY_KEYS)
        userInput = verify_input("Select Item to Buy :: Type \"done\" to finish.\n%s\nSubtotal: $ %.2f" % (STORE_INVENTORY, USER_BASKET.subTotal), str).lower()
        
        if userInput in STORE_INVENTORY_KEYS:
            STORE_INVENTORY.itemList[STORE_INVENTORY_KEYS.index(userInput)].add_to_basket(USER_BASKET)
            USER_BASKET.subtotal()
        elif userInput in ("done", ""):
            
            shopping = False
            checkOut = True

        else:
            print("Item not in store!")
            
        time.sleep(0.5)
    
    USER_BASKET.calculate_total()
    while checkOut:
        os.system("cls")
        
        print("You have %i items in your basket." % len(USER_BASKET))
        print("Subtotal: $ %.2f\nTotal: $ %.2f" % (USER_BASKET.subTotal, USER_BASKET.total))
        
        userInput = verify_input("How much would you like to pay?", float)
        
        if userInput is not None:
            changeBack = USER_BASKET.check_out(userInput)
            
            if changeBack is not None:
                print("Change Back: $ %.2f" % changeBack)
                
                print("Thank you for shopping with us.")
                
                checkOut = False
        time.sleep(0.5)