{
    "firstName": "Jane",
    "lastName": "Doe",
    "hobbies": ["running", "sky diving", "singing"],
    "age": 35,
    "children": [
        {
            "firstName": "Alice",
            "age": 6
        },
        {
            "firstName": "Bob",
            "age": 8
        }
    ]
}

import json

my_family = {
    "parents":['Beth', 'Jerry'],
    "children":['Summer', 'Morty']
}

json_file = "my_file.json"

with open(json_file, 'w') as file_obj:
    json.dump(my_family, file_obj)
   #json.dump(obj2save , destination_file)



import json

my_family = {
    "parents" :['Beth', 'Jerry'],
    "children" :['Summer', 'Morty']
}

json_file = "index.json"

with open(json_file, 'w') as file_obj:
    json.dump(my_family, file_obj, indent = 2, sort_keys=True)