import json

json_file = 'file.json'
with open(json_file, 'r') as file_obj:
    family = json.load(file_obj)
    for child in family["children"]:
        print(f"{child['firstName']} is {child['age']} years old")
    favorite_color = []
    for child in family["children"]:
        favorite_color.append(child)


# מוסיפים מפתח חדש לכל ילד
for child in family["children"]:
    child["favorite_color"] = "blue"   # אפשר לשים צבע קבוע או שונה לכל ילד

# עכשיו נבדוק שהתווסף
print("\nChildren with favorite colors:")
for child in family["children"]:
    print(f"{child['firstName']} - favorite color: {child['favorite_color']}")

with open(json_file, 'w') as file_obj:
    json.dump(family, file_obj, indent=4)  # indent=4 עושה רווחים יפים

print("Data saved back to file.json")



import requests

def get_chuck_joke(category: str) -> None:
    """
    מביא בדיחה רנדומלית לפי קטגוריה מה-API של Chuck Norris
    ומדגים את כל המושגים: params, status_code, headers, text/json, request.inspect
    """
    base_url = "https://api.chucknorris.io/jokes/random"
    params = {"category": category}  # זה ה-query string שלנו

    # שליחת בקשת GET עם פרמטרים
    response = requests.get(base_url, params=params)

    # 1) לבדוק סטטוס
    print("Status code:", response.status_code)

    # 2) לבדוק את כתובת הבקשה הסופית (כולל פרמטרים)
    print("Request URL:", response.request.url)

    # 3) אין גוף לבקשת GET, אז body יהיה None
    print("Request body:", response.request.body)

    # 4) כותרות (Headers) של התשובה
    print("Response headers:", dict(response.headers))

    # 5) תוכן גולמי (טקסט JSON)
    print("Raw text:", response.text)

    # 6) להפוך ל-dict פייתוני
    data = response.json()
    print("Parsed JSON (dict):", data)

    # 7) להדפיס רק את הבדיחה (key בשם "value")
    print("\nJoke:", data["value"])
    # קריאה לפונקציה עם קטגוריה מסוימת
get_chuck_joke("animal")


