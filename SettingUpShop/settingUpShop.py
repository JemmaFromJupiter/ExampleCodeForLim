from __future__ import annotations

## CS20 EXAMPLE CODE ##

# CONSTANTS #
SHOP_INVENTORY = {
    "apples": 3.99,
    "oranges": 2.58,
    "frozen pizza": 10.87,
    "soda": 7.97,
    "candy": 3.59
} # Dict variable for shop items

# Changed Variables #
userBasket = [] # List variable for shopping basket
totalBeforeTax = 0.0
shopping = True
payment = False

# Functions #

# Adds items to the 'userBasket' list.
def add_item_to_basket(item):
    if item in SHOP_INVENTORY:
        userBasket.append((item, SHOP_INVENTORY[item]))
        return
    else:
        print("That isn't an item in the store!")
      
# Calculates the total before tax.  
def total_before_tax():
    total = 0.0
    for item in userBasket:
        total += item[1]
    return total

# Adds tax to the final price
def add_tax(price):
    return price + price * 0.05

# If the user pays more than the price, they get change back
def get_change_given(price, paid):
    if paid >= price:
        return paid - price
    else:
        print("That is not enough money")
        return None
    
# def verify_payment_input(userInput):
#     try:
#         userInput = float(userInput)
        
#         return userInput
#     except:
#         print("That is not a float!")

## DRIVER CODE ##
if __name__ == "__main__":
    while shopping:
        print("Input the name of an item you would like to buy. Type \"done\" if you are finished.")
        
        for name, price in SHOP_INVENTORY.items():
            print("%s: $ %.2f" % (name.title(), price))
        
        if len(userBasket) > 0:
            totalBeforeTax = total_before_tax()
            
        print("\nTotal Before Tax: $ %.2f" % totalBeforeTax)

        userInput = input(": ").lower()
        if userInput != "done":
            add_item_to_basket(userInput)
        
        else:
            shopping = False
            payment = True
    
    while payment:
        withTax = add_tax(totalBeforeTax)
        print("Subtotal: $ %.2f" % totalBeforeTax)
        print("Total + Tax: $ %.2f" % withTax)
        
        print("How much would you like to pay?")
        userInput = float(input(": "))
        
        changeGiven = get_change_given(withTax, userInput)
        
        if changeGiven is not None:
            print("Change Back: $ %.2f" % changeGiven)
        
            print("Thank you for shopping with us!")
        
            payment = False