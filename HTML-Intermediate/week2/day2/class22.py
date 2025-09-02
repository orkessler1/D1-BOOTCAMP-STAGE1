class Animal():
    def __init__(self, type, number_legs, sound):
        self.type = type
        self.number_legs = number_legs
        self.sound = sound

    def make_sound(self):
        print(f"I am an animal, and I love saying {self.sound}")

class Dog(Animal):
    def fetch_ball(self):
        print("I am a dog, and I love fetching balls")

rex = Dog('dog', 4, "Wouaf")
print('This animal is a:', rex.type)
# >> This animal is a dog

rex.fetch_ball()
# >> I am a dog, and I love fetching balls
####

class Circle:
    color = "red"

class NewCircle(Circle):
    color = "blue"

nc = NewCircle
print(nc.color)
# >> What will be the output ?


class Circle:
    def __init__(self, diameter):
      self.diameter = diameter

    def grow(self, factor=2):
        """grows the circle's diameter by factor"""
        self.diameter = self.diameter * factor

class NewCircle(Circle):
    def grow(self, factor=2):
        """grows the area by factor..."""
        self.diameter = (self.diameter * factor * 2)

nc = NewCircle(1)
print(nc.diameter)

nc.grow()

print(nc.diameter)
# >> What will be the out

######

class Parrot():

    def fly(self):
        print("Parrot can fly")

    def swim(self):
        print("Parrot can't swim")

class Penguin():

    def fly(self):
        print("Penguin can't fly")

    def swim(self):
        print("Penguin can swim")

# common interface
def flying_test(bird):
    bird.fly()

#instantiate objects
blu = Parrot()
peggy = Penguin()

# passing the object
flying_test(blu)
# >> Parrot can fly

flying_test(peggy)


class A():

    def dothis(self):
        print("doing this in A")


class B(A):
    pass


class C():
    def dothis(self):
        print("doing this in C")


class D(B, C):
    pass

d_instance = D()
d_instance.dothis() 



class Book():
    def __init__(self, title, author, publication_date, price):
        self.title = title
        self.author = author
        self.publication = publication_date
        self.price = price

    def present(self):
        print(f'Title: {self.title}')

class Fiction(Book):
    def __init__(self, title, author, publication_date, price, is_awesome):
        super().__init__(title, author, publication_date, price)
        self.genre = 'Fiction'
        self.is_awesome = is_awesome
        if self.is_awesome:
            self.bored = False
            print('Woow this is an awesome book')
        else:
            self.bored = True
            print('I am very bored')

if __name__ == '__main__':
    foundation = Fiction('Asimov', 'Foundation', '1966', '5£', True)
    foundation.present()
    print(foundation.price)
    print(foundation.bored)
    boring_book = Fiction('boring_guy', 'boring_title', 'boring_date', '9000£', False)
    print(boring_book.bored)

def calc_sum(items):
    """מחזיר את סכום כל הערכים שניתן להמיר למספר שלם."""
    total = 0
    for x in items:
        try:
            total += int(x)   # לתמיכה בעשרוניים אפשר להחליף ל: float(x)
        except (ValueError, TypeError):
            pass
    return total

# דוגמה:
my_list = [2, 3, 1, 2, "four", 42, 1, 5, 3, "imanumber"]
print(calc_sum(my_list))  # 59
