print("Running:", __file__)
class Cat:
    def __init__(self, name, age):
        self.name = name
        self.age = age
def describe_and_oldest(*cats):
    for c in cats:
        print(f"{c.name} is {c.age} years old.")
    oldest_cat = cats[0]
    for c in cats[1:]:
        if c.age > oldest_cat.age:
            oldest_cat = c
    print(f"The oldest is {oldest_cat.name} ({oldest_cat.age}).")
    return oldest_cat
cat1 = Cat("Whiskers", 3)
cat2 = Cat("Luna", 5)
cat3 = Cat("Simba", 1)

describe_and_oldest(cat1, cat2, cat3)


###########################


class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height

    def bark(self):
        print(f"{self.name} goes woof!")

    def jump(self):
        print(f"{self.name} jumps {self.height * 2} cm high!")

if __name__ == "__main__":
    print("Running:", __file__)  # שורת בדיקה — תראה איזה קובץ באמת רץ
    davids_dog = Dog("Simba", 45)
    sarahs_dog = Dog("Bot", 25)

    print(f"{davids_dog.name} is {davids_dog.height} cm tall")
    davids_dog.bark()
    davids_dog.jump()

    print(f"{sarahs_dog.name} is {sarahs_dog.height} cm tall")
    sarahs_dog.bark()
    sarahs_dog.jump()


class Song:
    def __init__(self, lyrics: list[str]):
        # store the list of lyric lines on the instance
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)

# Example
stairway = Song([
    "There’s a lady who's sure",
    "all that glitters is gold",
    "and she’s buying a stairway to heaven"
])

stairway.sing_me_a_song()







class Zoo:
    def __init__(self, zoo_name):
        self.zoo_name = zoo_name
        self.animals = []  # מתחילים ריק

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)

    def get_animals(self):
        for animal in self.animals:
            print(animal)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)  # מוחק לפי ערך
        else:
            print(f"{animal_sold} not found")

if __name__ == "__main__":
    print("Running:", __file__)  # בדיקה שזה הקובץ שרץ

    firstzoo = Zoo("Tanaci")
    firstzoo.add_animal("bee")
    firstzoo.add_animal("cow")
    firstzoo.add_animal("monkey")
    firstzoo.add_animal("bear")  # לא יתווסף שוב

    print("Before sale:")
    firstzoo.get_animals()

    firstzoo.sell_animal("bee")

    print("After sale:")
    firstzoo.get_animals()
