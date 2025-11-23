import random
import string
from datetime import datetime
from faker import Faker


class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __repr__(self):
        name = self.currency
        if self.amount == 1:
            text = name
        else:
            text = name if name.endswith("s") else name + "s"
        return f"{self.amount} {text}"

    __str__ = __repr__

    def __int__(self):
        return self.amount

    def _require_same_currency(self, other):
        if isinstance(other, Currency) and other.currency != self.currency:
            raise TypeError(
                f"Cannot add between Currency type <{self.currency}> "
                f"and <{other.currency}>"
            )

    def __add__(self, other):
        if isinstance(other, int):
            return self.amount + other
        if isinstance(other, Currency):
            self._require_same_currency(other)
            return self.amount + other.amount
        return NotImplemented

    def __radd__(self, other):
        return self.__add__(other)

    def __iadd__(self, other):
        if isinstance(other, int):
            self.amount += other
            return self
        if isinstance(other, Currency):
            self._require_same_currency(other)
            self.amount += other.amount
            return self
        return NotImplemented


def random_string(length=5):
    letters = string.ascii_letters
    return "".join(random.choice(letters) for _ in range(length))


def current_date():
    return datetime.today().date()


def time_until_january_first():
    now = datetime.now()
    next_year = now.year + 1
    jan_first = datetime(next_year, 1, 1)
    return jan_first - now


faker = Faker()


def generate_users(num_users):
    users = []
    for _ in range(num_users):
        user = {
            "name": faker.name(),
            "address": faker.address(),
            "language_code": faker.language_code(),
        }
        users.append(user)
    return users


if __name__ == "__main__":
    pass
