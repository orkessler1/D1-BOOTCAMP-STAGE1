import random
from exercise22 import Dog

class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False  # default: not trained

    def train(self):
        # Print the bark, then mark as trained
        print(self.bark())
        self.trained = True

    def play(self, *args):
        """
        *args can be Dog/PetDog instances OR strings.
        Prints: "<names> all play together"
        """
        names = [self.name]
        for other in args:
            # accept Dog instances or plain strings (like in the prompt example)
            names.append(other.name if isinstance(other, Dog) else str(other))

        # nice human-readable join
        if len(names) == 1:
            group = names[0]
        elif len(names) == 2:
            group = f"{names[0]} and {names[1]}"
        else:
            group = ", ".join(names[:-1]) + f" and {names[-1]}"

        print(f"{group} all play together")

    def do_a_trick(self):
        if self.trained:
            tricks = [
                "does a barrel roll",
                "stands on his back legs",
                "shakes your hand",
                "plays dead",
            ]
            print(f"{self.name} {random.choice(tricks)}")
        else:
            print(f"{self.name} isn't trained yet — try calling train() first.")


# ---- Quick tests (you can delete this block if you import elsewhere) ----
if __name__ == "__main__":
    my_dog = PetDog("Fido", 2, 10)
    buddy = PetDog("Buddy", 4, 18)
    maxy  = PetDog("Max", 3, 12)

    # Train and trick
    my_dog.train()
    my_dog.do_a_trick()

    # Play using instances
    my_dog.play(buddy, maxy)

    # Play like in the prompt example (strings also work)
    my_dog.play("Buddy", "Max")

    # Show behavior when untrained vs trained
    buddy.do_a_trick()   # not trained yet
    buddy.train()
    buddy.do_a_trick()
