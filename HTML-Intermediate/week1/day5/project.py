# 🎮 Tic Tac Toe פשוט לשני שחקנים
# מתאים למי שלמד את יסודות פייתון (if, while, input, רשימות, פונקציות)

# יוצרים לוח ריק (רשימה של רשימות)
board = [[" " for _ in range(3)] for _ in range(3)]

def print_board():
    """מדפיס את הלוח"""
    for row in board:
        print("|".join(row))
        print("-" * 5)

def check_win(player):
    """בודק אם השחקן ניצח"""
    # שורות
    for row in board:
        if row.count(player) == 3:
            return True

    # עמודות
    for c in range(3):
        if board[0][c] == board[1][c] == board[2][c] == player:
            return True

    # אלכסונים
    if board[0][0] == board[1][1] == board[2][2] == player:
        return True
    if board[0][2] == board[1][1] == board[2][0] == player:
        return True

    return False

def check_tie():
    """בודק אם יש תיקו"""
    for row in board:
        if " " in row:
            return False
    return True

def play():
    """לולאת המשחק"""
    current = "X"
    print("ברוך הבא למשחק איקס עיגול!")
    print_board()

    while True:
        print(f"\nתור של שחקן {current}")
        row = int(input("בחר שורה (1-3): ")) - 1
        col = int(input("בחר עמודה (1-3): ")) - 1

        # בדיקת קלט תקין
        if row not in range(3) or col not in range(3):
            print("מספרים לא חוקיים, נסה שוב!")
            continue

        if board[row][col] != " ":
            print("התא תפוס! נסה מקום אחר.")
            continue

        # עדכון הלוח
        board[row][col] = current
        print_board()

        # בדיקת ניצחון
        if check_win(current):
            print(f"🎉 שחקן {current} ניצח!")
            break

        # בדיקת תיקו
        if check_tie():
            print("🤝 המשחק הסתיים בתיקו!")
            break

        # החלפת תור
        if current == "X":
            current = "O"
        else:
            current = "X"

# הפעלת המשחק
play()
