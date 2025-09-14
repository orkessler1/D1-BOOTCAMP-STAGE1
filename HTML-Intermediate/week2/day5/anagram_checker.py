# anagram_checker.py
from pathlib import Path

class AnagramChecker:
    def __init__(self, wordlist_file: str = "word.txt"):
        # נטען את word.txt שנמצא באותה תיקייה של הקובץ הזה
        path = Path(__file__).with_name(wordlist_file)

        # דיבוג: נדפיס את הנתיב שממנו אנחנו קוראים כדי לוודא
        print("[DEBUG] reading word list from:", path)

        with path.open("r", encoding="utf-8") as f:
            self.wordlist = [line.strip().lower() for line in f if line.strip()]

    def is_valid_word(self, word: str) -> bool:
        w = word.strip().lower()
        return w.isalpha() and w in self.wordlist


if __name__ == "__main__":
    checker = AnagramChecker()
    print("has 'world'?", checker.is_valid_word("world"))
