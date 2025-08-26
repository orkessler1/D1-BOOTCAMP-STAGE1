list1 = [5, 10, 15, 20, 25, 50, 20]
x = 0
while 20 in list1:                 # כל עוד יש 20 ברשימה
    index_20 = list1.index(20)     # מוצא את המיקום של ה־20 הראשון
    list1[index_20] = 200          # מחליף אותו ב־200
print(list1)

num = int(input('put a number'))
x = 1
while x < 10 :
   x = x + 1 

num = int(input('put a number'))
x = 1
for x in range(1,10) :
    print(x * num)
     
# יוצרים סט עם המספרים האהובים עליי
my_fav_numbers = {7, 13, 42}
print("My favorite numbers:", my_fav_numbers)

# מוסיפים שני מספרים חדשים
my_fav_numbers.add(99)
my_fav_numbers.add(21)
print("After adding two numbers:", my_fav_numbers)

# מסירים את "האחרון" שהוספנו – אבל שים לב:# ב- set אין סדר, לכן נבחר ידנית את המספר להסרה (21 במקרה הזה)
my_fav_numbers.remove(21)
print("After removing one number:", my_fav_numbers)

# יוצרים סט חדש עם המספרים האהובים על החבר
friend_fav_numbers = {3, 7, 50}
print("Friend's favorite numbers:", friend_fav_numbers)

# מאחדים את שני הסטים
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print("Our favorite numbers:", our_fav_numbers)


numbers3 = (1, 2, 3)
new_numbers = numbers3 + (4, 5)

print(new_numbers)

basket = ["Banana", "Apples", "Oranges", "Blueberries"]

# 1. הסרת "Banana"
basket.remove("Banana")

 #2. הסרת "Blueberries"
basket.remove("Blueberries")

 #3. הוספת "Kiwi" לסוף הרשימה
basket.append("Kiwi")

 #4. הוספת "Apples" לתחילת הרשימה
basket.insert(0, "Apples")

 #5. ספירה כמה פעמים "Apples" מופיע
count_apples = basket.count("Apples")
print("Apples appears:", count_apples, "times")
print(basket)
 #6. ריקון הרשימה
basket.clear()

 #. הדפסת המצב הסופי
print("Final basket:", basket)

numbers4 = []
for i in range(3, 11):
    numbers4.append(i / 2)
print(numbers4)

numbers5 = []
i = 1
while i < 21 :
    numbers5.append(i)
    i += 1
print(numbers5)

numbers6 = []
for i in range(1, 21, 2):
    numbers6.append(i)
print(numbers6)

myname = 'orkessler'
name = input("whay your name")
while name != myname :
    name = input("whay your name")
print('w')


favorite_fruits = []   # מתחילים רשימה ריקה

while True:
    fruit = input("Enter a favorite fruit (or just press Enter to finish): ")
    if fruit == "":   # אם המשתמש לחץ Enter בלי לכתוב כלום → עצירה
        break
    favorite_fruits.append(fruit)   # מוסיפים פרי לרשימה

print("Your favorite fruits are:", favorite_fruits)
chosen = input("Enter the name of a fruit: ")

if chosen in favorite_fruits:
    print("You chose one of your favorite fruits! Enjoy!")
    
else:
    print("You chose a new fruit. I hope you enjoy it!")


toppings = []
while True :
    topping = input('put topping ')
    if topping == ' ':
        break
    else:
        toppings.append(topping)
    print(toppings)
print('total' , 10 + len(toppings)* 2.5)


sum = 0 
while True :
    age = int(input('put your age'))
    if age == -1 :
        break
    if age < 3 :
        sum = sum
    elif age < 12 :
        sum = sum + 10
    else :
        sum = sum + 15
print(sum)


sandwich_orders = ["Tuna", "Pastrami", "Avocado", "Pastrami", "Egg", "Chicken", "Pastrami"]
finished_sandwiches = []

print("Sorry, we have run out of Pastrami!\n")

# מסירים את כל ה-"Pastrami" מהרשימה
while "Pastrami" in sandwich_orders:
    sandwich_orders.remove("Pastrami")

# מכינים כל סנדוויץ' אחד־אחד
while sandwich_orders:
    current_sandwich = sandwich_orders.pop(0)   # לוקח את הראשון ברשימה
    print(f"I made your {current_sandwich} sandwich.")
    finished_sandwiches.append(current_sandwich)

# מציגים את הרשימה הסופית
print("\nFinished sandwiches:", finished_sandwiches)
