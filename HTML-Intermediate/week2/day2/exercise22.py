# ----- Given classes -----
class Pets:
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())


class Cat:
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f"{self.name} is just walking around"


class Bengal(Cat):
    def sing(self, sounds):
        return f"{sounds}"


class Chartreux(Cat):
    def sing(self, sounds):
        return f"{sounds}"


# ----- Step 1: Create the Siamese class -----
class Siamese(Cat):
    # optional: add a breed-specific behavior
    def sing(self, sounds):
        return f"{sounds}"

    def nap(self):
        return f"{self.name} curls up for a cozy nap."


# ----- Step 2: Create a list of cat instances -----
bengal_obj = Bengal("Mango", 3)
chartreux_obj = Chartreux("Blue", 5)
siamese_obj = Siamese("Suri", 2)

all_cats = [bengal_obj, chartreux_obj, siamese_obj]

# ----- Step 3: Create a Pets instance -----
sara_pets = Pets(all_cats)

# ----- Step 4: Take cats for a walk -----
sara_pets.walk()

# Example output:
# Mango is just walking around
# Blue is just walking around
# Suri is just walking around


class Dog:
    def __init__(self, name: str, age: int, weight: float):
        if age <= 0:
            raise ValueError("age must be positive")
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self) -> str:
        return f"{self.name} is barking"

    def run_speed(self) -> float:
        # as specified: weight / age * 10
        return (self.weight / self.age) * 10

    def fight(self, other_dog: "Dog") -> str:
        # winner decided by run_speed * weight (per the instructions)
        self_score = self.run_speed() * self.weight
        other_score = other_dog.run_speed() * other_dog.weight

        if self_score > other_score:
            return f"{self.name} wins the fight against {other_dog.name}!"
        elif self_score < other_score:
            return f"{other_dog.name} wins the fight against {self.name}!"
        else:
            return f"It's a tie between {self.name} and {other_dog.name}."


# ----- Step 2: Create dog instances -----
dog1 = Dog("Rex", 5, 30)    # age=5, weight=30
dog2 = Dog("Bella", 3, 18)  # age=3, weight=18
dog3 = Dog("Titan", 7, 40)  # age=7, weight=40

# ----- Step 3: Test dog methods -----
print(dog1.bark())                  # -> "Rex is barking"
print(round(dog2.run_speed(), 2))   # run speed (rounded for display)
print(dog1.fight(dog3))             # who wins between Rex and Titan?




class Person:
    def __init__(self, first_name, age, last_name):
        self.first_name = first_name 
        self.age = age
        self.last_name = last_name

    def is_18(self):
        return self.age >= 18

class Family:
    def __init__(self, last_name):
        self.last_name = last_name
        self.members = []

    def born(self, first_name, age,):
        new_person = Person(first_name, age, self.last_name)  # יוצר Person חדש
        new_person.last_name = self.last_name
        self.members.append(new_person)
    def check_majority(self, first_name) :
        for member in self.members:
            if member.first_name == first_name:
                if member.is_18():
                    print("You are over 18, your parents Jane and John accept that you will go out with your friends")
                else:
                    print("Sorry, you are not allowed to go out with your friends.")
fam = Family("Cohen")
fam.born("Or", 17)     # מתחת ל-18
fam.born("Dana", 20)   # מעל 18
fam.born("Amit", 18)   # בדיוק 18

fam.check_majority("Or")    # צפוי: Sorry...
fam.check_majority("Dana")  # צפוי: You are over 18...
fam.check_majority("Amit")  # צפוי: You are over 18...
fam.check_majority("Noa") 