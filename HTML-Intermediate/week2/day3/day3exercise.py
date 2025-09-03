class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __repr__(self):
        # ריבוי פשוט עם 's'
        name = self.currency
        text = name if self.amount == 1 else (name if name.endswith('s') else name + 's')
        return f"{self.amount} {text}"

    __str__ = __repr__  # שיהיה אותו דבר גם ב-print

    def __int__(self):
        return self.amount

    # עזר: בדיקת מטבע זהה
    def _require_same_currency(self, other):
        if isinstance(other, Currency) and other.currency != self.currency:
            raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")

    # זה הדבר שהיה חסר: חיבור "רגיל" מצד שמאל (c1 + ...)
    def __add__(self, other):
        if isinstance(other, int):
            return self.amount + other
        if isinstance(other, Currency):
            self._require_same_currency(other)
            return self.amount + other.amount
        return NotImplemented

    # מאפשר גם 5 + c1
    def __radd__(self, other):
        return self.__add__(other)

    # חיבור במקום (c1 += ...)
    def __iadd__(self, other):
        if isinstance(other, int):
            self.amount += other
            return self
        if isinstance(other, Currency):
            self._require_same_currency(other)
            self.amount += other.amount
            return self
        return NotImplemented

if __name__ == "__main__":
    c1 = Currency("dollar", 5)
    c2 = Currency("dollar", 10)

    print(c1)          # אמור להדפיס "5 dollar"
    print(c1 + c2)     # אמור להחזיר סכום ביחד
    print(int(c1))     # אמור להחזיר 5

print("good")


import random
import string
# שלב 1: כל האותיות באנגלית (גדולות וקטנות)
letters = string.ascii_letters  
# שלב 2: רשימה ריקה לאותיות שנבחר
result = []
# שלב 3: לולאה 5 פעמים
for i in range(5):
    result.append(random.choice(letters))
# שלב 4: לחבר לרצף אחד
random_string = ''.join(result)
print(random_string)



import datetime
noww = datetime.datetime.now()
print(noww)
next_year = datetime.datetime(2026, 1, 1, 00, 00) 
delta = next_year - noww 
print(delta)

from faker import Faker

# יצירת אובייקט faker
faker = Faker()

# רשימת משתמשים ריקה
users = []

# פונקציה להוספת משתמשים מזויפים
def generate_users(num_users):
    for _ in range(num_users):
        user = {
            "name": faker.name(),
            "address": faker.address(),
            "language_code": faker.language_code()
        }
        users.append(user)

# קריאה לפונקציה
generate_users(5)

# הדפסת המשתמשים
for user in users:
    print(user)
