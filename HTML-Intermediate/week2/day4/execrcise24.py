import random
with open("nameslist.txt", "r") as f: 
    lines = f.readlines()
    for line in lines:
        print(line.strip())
    random_names = random.sample(lines, 3)

# נחבר למשפט אחד
    print(f"The random names are: {', '.join(random_names)}")

def main() :
    leng = int(input("who long you want"))
    new_random_names = random.sample(lines, leng)
    print(f"The new random names are: {', '.join(new_random_names)}")
main()


import json
sampleJson = '''{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}'''
data = json.loads(sampleJson)
print(data["company"]["employee"]["payable"]["salary"])
data["company"]["employee"]["birth_date"] = "28.07.2007"

# הדפסה יפה כדי לוודא שהשדה נוסף
print(json.dumps(data, indent=2))
json_file = "file.json"
with open(json_file, 'w') as file_obj:
    json.dump(data, file_obj, indent=4)  # indent=4 עושה רווחים יפים

print("Data saved back to file.json")
