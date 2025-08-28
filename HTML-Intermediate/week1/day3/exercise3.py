keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

my_dict = dict(zip(keys, values))
print(my_dict)


family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
total = 0
for name, age in family.items():
    if age < 3 :
        price = 0
    elif age < 12:
        price = 10
    else :
        price = 15
    print(f"{name} ({age}) -> ${price}")
    total = total + price
print(f"Total: ${total}")

Brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }
}
Brand['number_stores'] = 2 
Brand["country_creation"] = "Spain"
if "international_competitors" in Brand:
     Brand["international_competitors"].append("Desigual")
del Brand["creation_date"]
print(Brand["type_of_clothes"])
print(Brand["international_competitors"][-1])
print(Brand["major_color"]['US'])
print(len(Brand))
print(Brand.keys())
print(Brand)


users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]
nums = [0 , 1 ,2 ,3, 4]
new_dict = dict(zip(nums , users))
print(new_dict)
sorted_users = sorted(users)
dict3 = dict(zip(sorted_users, nums))
print(dict3)