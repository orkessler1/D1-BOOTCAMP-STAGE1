my_name = "Jack"
hello = "Hello World"
my_age = 27
my_list = [my_name, my_age, hello]
my_tuple = (1+3, 2.7, 'Thursday') 
print(my_list[0])
my_tuple1 = (1, 2, 3, 4, 5, 6, 7, 8, 9)
print(my_tuple1[-2]) 
my_list2 = [10, 20, 30, 40, 50, 60, 70, 80, 90]
print(my_list2[0:4])  # The result gives us [10, 20, 30, 40]
print(my_name[-1])
my_hobbies = ["Eat", "Sleep", "Code"]
print(my_hobbies)
my_hobbies[1] = "Meditate"
print(my_hobbies)
my_hobbies.append("Baseball")
print(my_hobbies)
my_hobbies.remove("Meditate")
print(my_hobbies)
my_hobbies.pop(0) #מוציא את האיבר במקום הזה
print(my_hobbies)
additional_hobbies = ["Sport", "More code"]
my_hobbies + additional_hobbies 
print(len(my_hobbies))
numbers = [3, 12, 1, -4]
print(sum(numbers))
print(sorted(numbers))
letters = ['d', 'a', 'g', 'b']
print(sorted(letters))
my_hobbies.insert(0, 'beans')
print(my_hobbies)
my_hobbies.extend(['bread', 'water'])
print(my_hobbies)
fruits = ['apple', 'banana', 'kiwi', 'pear']

for fruit in fruits:
  print(fruit)


numbers2 = range(4, 19)

for number in numbers2:
  print(number)
numbers = list(range(1,6))
print(numbers)