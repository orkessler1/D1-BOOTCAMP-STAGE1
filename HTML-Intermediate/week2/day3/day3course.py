class Dog():
    number_of_dogs = 0
    dogs_king = "Bernie IV"

    # Initializer / Instance Attributes
    def __init__(self, name_of_the_dog):
        print("A new dog has been initialized !")
        print("His name is", name_of_the_dog)
        self.name = name_of_the_dog
        # Increment the number of dogs
        Dog.number_of_dogs += 1

    def bark(self):
        print(f"{self.name} barks ! WAF")

    def walk(self, number_of_meters):
        print(f"{self.name} walked {number_of_meters} meters")

    def rename(self, new_name):
        self.name = new_name

my_dog = Dog("Rex")
my_dog2 = Dog("Bernie V")
print(f"Curently, there are {Dog.number_of_dogs} dogs")

str

class Circle:
    color = "red"

    def __init__(self, diameter):
        self.diameter = diameter

    def grow(self, factor=2):
        self.diameter = self.diameter * factor

    def get_color(self):
       return Circle.color

circle1 = Circle(2)
print(circle1.color)
print(Circle.color)
print(circle1.get_color())
circle1.grow(3)
print(circle1.diameter)


class MyClass:
  @staticmethod
  def add(a, b): 
    return a + b

print(MyClass.add(3, 6))
# >> 9



class MyClass:
  __counter = 0

  @classmethod
  def add(cls,a): 
    return cls.__counter + a

my_class_add = MyClass.add(3)
print(my_class_add)
# >> 3

new_class = MyClass()
new_class.__counter = 1

print(new_class.add(3))
# >> 3

# The output is still three because the method add refers to the class definition, not the counter of the new_class instance

class MyClass:
  def __init__(self, first_name, last_name):
    self.__first_name = first_name
    self.__last_name = last_name

  @property
  def email(self): 
    return f"{self.__first_name}.{self.__last_name}@gmail.com"

newClass = MyClass("John", "Doe")


print(newClass.email)
# >> John.Doe@gmail.com


class MyClass:
  def __init__(self, first_name, last_name):
    self.__first_name = first_name
    self.__last_name = last_name

  @property
  def email(self): 
    return f"{self.__first_name}.{self.__last_name}@gmail.com"

  @email.setter
  def email(self, name): 
    self.__first_name = name

newClass = MyClass("John", "Doe")
newClass.email = "Sarah"
print(newClass.email)
# >> Sarah.Doe@gmail.com


class Person:

    used_names = set()

    def __init__(self, name, age):
        if name in self.used_names:
            name = input("That name is taken. Enter another name: ")

        self.name = name
        self.age = age
        self.used_names.add(name)

    @classmethod
    def fromYear(cls, name, birth_year):
        THIS_YEAR = 2020
        return cls(name, THIS_YEAR - birth_year)

    @property
    def professional_name(self):
        return "Mr " + self.name


class MyClass(object):
    count = 0

    def __init__(self, val):
        self.val = val
        MyClass.count += 1

    def set_val(self, newval):
        self.val = newval

    def get_val(self):
        return self.val

    @classmethod
    def get_count(cls):
        return cls.count

object_1 = MyClass(10)
print("\nValue of object : %s" % object_1.get_val())
print(MyClass.get_count())

object_2 = MyClass(20)
print("\nValue of object : %s" % object_2.get_val())
print(MyClass.get_count())


class MyClass(object):
    count = 0

    def __init__(self, val):
        self.val = self.filterint(val)
        MyClass.count += 1

    @staticmethod
    def filterint(value):
        if not isinstance(value, int):
            print("Entered value is not an INT, value set to 0")
            return 0
        else:
            return value


a = MyClass(5)
b = MyClass(10)
c = MyClass(15)

print(a.val)
print(b.val)
print(c.val)
print(a.filterint(100))



class Person:
  def __init__(self, name, lastName):
      self.name = name
      self.lastName = lastName


#Here we overloaded the method by redefining '__repr__ 'using 'def' and passed the argument '(self)'

  def __repr__(self):

# We can write whatever we want inside this method, but we have to return an object.

      return f"{self.__class__.__name__} : {self.name} {self.lastName}"

  def __add__(self,other):
      name = self.name[0] + other.name[1:]
      lastname = other.lastName
      return Person(name,lastname)

father = Person('John', 'Snow')
mother = Person('Kaleesi', 'MotherOfDragons')
# using the __add__() method
dragonChild = father + mother 

print(dragonChild)
# >>Person : Jaleesi MotherOfDragons


class PrintList(object):

    def __init__(self, my_list):
        self.mylist = my_list

    def __repr__(self):
        return str(self.mylist)


printlist = PrintList(["a", "b", "c"])
print(printlist.__repr__())




# מייבאים את הספריות שנצטרך
from faker import Faker
from tabulate import tabulate
import sys
import typing

# יוצרים אובייקט faker ליצירת נתונים מזויפים
fake = Faker()

# פונקציה שיוצרת קובץ עם 100 תאריכים מזויפים
def create_file(num):
    f = open("datefile" + num + ".txt", "w")   # פותח קובץ לכתיבה בשם datefile<num>.txt
    for _ in range(100):                       # רץ 100 פעמים
        f.write(f"{fake.date()}\n")            # כותב תאריך מזויף בכל שורה
    f.close()                                  # סוגר את הקובץ

# פונקציה לקרוא תוכן מקובץ
def extract_file_contents(file_path: str) -> typing.List[str]:
    with open(file_path, 'r') as f:            # פותח את הקובץ לקריאה
        file_contents = f.readlines()          # קורא את כל השורות
    new_file_contents = []                     
    for date_data_record in file_contents:     
        date_data_record = date_data_record.strip()   # מוריד רווחים/מעברי שורה
        if date_data_record:                           # אם השורה לא ריקה
            new_file_contents.append(date_data_record) # מוסיף לרשימה
    return new_file_contents

# פונקציה להצגת שני הקבצים בטבלה
def display_files(file1_contents, file2_contents):
    table = {
        'file1': file1_contents,   # עמודה 1: תאריכים מהקובץ הראשון
        'file2': file2_contents    # עמודה 2: תאריכים מהקובץ השני
    }
    print(tabulate(table))          # מציג טבלה יפה

# הפונקציה הראשית
def main(file1, file2):
    file1_contents = extract_file_contents(file1)  # קורא את תוכן הקובץ הראשון
    file2_contents = extract_file_contents(file2)  # קורא את תוכן הקובץ השני

    display_files(file1_contents, file2_contents)  # מציג את שניהם בטבלה

    dates = sorted(set(file1_contents).union(file2_contents))  # מאחד וממיין את כל התאריכים
    print(dates[len(dates) // 2])                              # מוצא את האמצעי (median)

# יצירת שני קבצים של תאריכים
create_file('1')
create_file('2')

# אם מריצים את הקובץ הזה דרך הטרמינל
if __name__ == '__main__':
    args = sys.argv[1:]
    if len(args) != 2:
        # ברירת מחדל נוחה כשלא העברת כלום
        args = ['datefile1.txt', 'datefile2.txt']
    main(*args)


import time

before = time.time()
long_number = 1000**1000
after = time.time()

print(f"It took {after - before} seconds to execute 1000**1000")


import datetime

today_date = datetime.date.today()
actual_datetime = datetime.datetime.now()

in_15_hours = actual_datetime + datetime.timedelta(hours=22, minutes=10)

print(f"Today is the {today_date.day}/{today_date.month}")
print(f"In 22 hours and 10 minutes it will be the {in_15_hours.day}/{in_15_hours.month}")



from datetime import datetime, timedelta
import time

BIRTHDAY_DAY = 28
BIRTHDAY_MONTH = 7
BIRTHDAY_HOUR = 0   # אפשר לשנות לשעה מדויקת (0=חצות)
BIRTHDAY_MIN = 0
BIRTHDAY_SEC = 0

def next_birthday(now: datetime) -> datetime:
    target = datetime(now.year, BIRTHDAY_MONTH, BIRTHDAY_DAY,
                      BIRTHDAY_HOUR, BIRTHDAY_MIN, BIRTHDAY_SEC)
    if target <= now:
        target = datetime(now.year + 1, BIRTHDAY_MONTH, BIRTHDAY_DAY,
                          BIRTHDAY_HOUR, BIRTHDAY_MIN, BIRTHDAY_SEC)
    return target

# הדפסה חד-פעמית
now = datetime.now()
target = next_birthday(now)
delta = target - now
days = delta.days
h, rem = divmod(delta.seconds, 3600)
m, s = divmod(rem, 60)
print(f"My birthday is in {days} days, and {h:02}:{m:02}:{s:02}")

# (אופציונלי) ספירה חיה שמתעדכנת כל שנייה במסוף
