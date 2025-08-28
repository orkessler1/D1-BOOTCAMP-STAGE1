def display_message():
    print("I am learning about functions in Python.")

display_message()


def favorite_book(title):
    return f"One of my favorite books is {title}."
message = favorite_book("Alice in Wonderland")
print(message)


def describe_city(city, country="Unknown"):
    return f"{city} is in {country}."
msg1 = describe_city("Reykjavik", "Iceland")
msg2 = describe_city("Paris")
msg3 = describe_city("Tel Aviv", "Israel")

print(msg1)
print(msg2)
print(msg3)


import random

def guess_number(user_number):
    random_number = random.randint(1, 100)
    if user_number == random_number:
        return "Success! 🎉"
    else:
        return f"Fail! Your number: {user_number}, Random number: {random_number}"

# שימוש
result = guess_number(50)
print(result)



def make_shirt(size = 'large', text = 'i love pyton') :
    return f"the size is {size} and the text is {text}"
shirt1 = make_shirt('M', 'I am good')
shirt2 = make_shirt()
shirt3 = make_shirt(text='hey')
print(shirt1)
print(shirt2)
print(shirt3)


# Step 1: רשימת קוסמים
magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

# Step 2: פונקציה שמחזירה מחרוזות עם שמות הקוסמים
def show_magicians(names):
    return [name for name in names]

# Step 3: פונקציה שמחזירה רשימה עם "the Great" לכל שם
def make_great(names):
    return [f"{name} the Great" for name in names]

# Step 4: שימוש
great_magicians = make_great(magician_names)   # מוסיפים "the Great"
result = show_magicians(great_magicians)       # מכינים להצגה

# הדפסה
for magician in result:
    print(magician)



import random
def get_random_temp():
    return random.randint(-10, 40)

result = get_random_temp()
print(result)
if result < 10 :
    print('cold')
elif result < 25 :
    print('cool')
else :
    print('hot')