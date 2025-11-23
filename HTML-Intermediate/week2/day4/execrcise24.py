import random
import json


# ---------- Exercise 1 : Random Sentence Generator ----------

def get_words_from_file(file_path):
    """
    Reads all words from a file and returns them as a list.
    """
    try:
        with open(file_path, "r") as f:
            text = f.read()
    except FileNotFoundError:
        print("Error: file not found.")
        return []

    # split by whitespace into words
    words = text.split()
    return words


def get_random_sentence(length, file_path="nameslist.txt"):
    """
    Returns a random sentence of 'length' words from the file.
    """
    words = get_words_from_file(file_path)
    if not words:
        return ""

    chosen_words = [random.choice(words) for _ in range(length)]
    sentence = " ".join(chosen_words).lower()
    return sentence


def main():
    """
    Main function that handles user input and prints the sentence.
    """
    print("This program generates a random sentence from a word list.")
    user_input = input("Enter sentence length (between 2 and 20): ")

    try:
        length = int(user_input)
    except ValueError:
        print("Error: you must enter an integer number.")
        return

    if length < 2 or length > 20:
        print("Error: the length must be between 2 and 20.")
        return

    sentence = get_random_sentence(length, "nameslist.txt")
    if sentence:
        print("Here is your random sentence:")
        print(sentence)


# ---------- Exercise 2 : Working with JSON ----------

sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""


def work_with_json():
    data = json.loads(sampleJson)

    # Step 2: access salary
    salary = data["company"]["employee"]["payable"]["salary"]
    print("Salary:", salary)

    # Step 3: add birth_date in format YYYY-MM-DD
    data["company"]["employee"]["birth_date"] = "2007-07-28"

    # Step 4: save to file
    with open("company.json", "w") as f:
        json.dump(data, f, indent=4)

    print("Modified JSON saved to company.json")


if __name__ == "__main__":
    main()
    work_with_json()
