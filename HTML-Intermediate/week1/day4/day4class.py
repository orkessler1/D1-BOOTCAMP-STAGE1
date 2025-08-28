def say_hello(username, language="EN"):
    if language == "EN":
        print("Hello "+username)
    elif language == "FR":
        print("Bonjour "+username)
    else:
        print("This language is not supported: " + language)

say_hello("Rick")
# OR
say_hello(username="Rick")



def get_formatted_name(first_name, last_name):
    """Return a full name, neatly formatted."""
    full_name = first_name + ' ' + last_name
    return full_name.title()

musician = get_formatted_name('jimi', 'hendrix') 
print(musician)



def divide_by_three(number):
  return number / 3

first_number = 12
first_number_computed = divide_by_three(first_number)
print(first_number_computed)
#4.0

second_number = 27
second_number_computed = divide_by_three(second_number)
print(second_number_computed)
#9.0



def format_name(first_name, last_name):
    return (first_name.title(), last_name.title())

first, last = format_name("RICk", "mORTY")
print(first)
print(last)



def calculation(a, b):
    return(a + b , a - b)
res = calculation(40, 10)
print(res)



def greet_users(users):             # users should be a list
    for user in users:              # Because it's a list, we can loop through it
        print("Hello " + user.title() + " !")       # For each user, print "hello" and then his name

usernames = ["steve", "stan", "debbie"]
greet_users(usernames)



def print_models(unprinted_designs, completed_models):
    """    
    Simulate printing each design until none are left.    
    Move each design to completed_models after printing.    
    """

    while unprinted_designs:        
        current_design = unprinted_designs.pop()            

        # Simulate creating a 3D print from the design.        
        print("Printing model: " + current_design)        
        completed_models.append(current_design)        

def show_completed_models(completed_models):    
    """
    Show all the models that were printed.
    """    
    print("\nThe following models have been printed:")   
    for completed_model in completed_models:        
        print(completed_model)        

unprinted_designs = ['iphone case', 'robot pendant', 'dodecahedron'] 
completed_models = []

print_models(unprinted_designs, completed_models)
show_completed_models(completed_models)



def check_arguments_keywordedarguments (required_arg, *args, **kwargs):
    print(required_arg)
    if args:
        print(args)
    if kwargs:
        print(kwargs)

check_arguments_keywordedarguments("required argument")
check_arguments_keywordedarguments("required argument", 1, 2, 'hey')
check_arguments_keywordedarguments("required argument", 1, 2, 'hey', name="Sarah", age=24)



def check_arguments_keywordedarguments(*args,**kwargs):
    print('*args', args)
    print('**kwargs', kwargs)

check_arguments_keywordedarguments(10,20,30,name='John',surname='Doe')




def check(a, *numbers, **person):
    print('Greetings : ', a)

    #iterate through all the items in tuple
    for num in numbers:
        print('num - ', num)

    #iterate through all the items in dictionary    
    for key, value in person.items():
        print(key + ': ' + value)


check("hello", 1,2,3,name="John",surname="Doe")




def check(a, b, c):
    print(a, b, c)
a = {'a':'Sarah', 'b':24, 'c': 180}
check(**a)


def upper_string(s):
    return s.upper()

fruit = ["Apple", "Banana", "Pear", "Apricot", "Orange"]
map_object = map(upper_string, fruit)

print(list(map_object))

def starts_with_A(s):
    return s[0] == "A"

fruit = ["Apple", "Banana", "Pear", "Apricot", "Orange"]
filtered_object = filter(starts_with_A, fruit)

print(list(filtered_object))

from functools import reduce

def sum_numbers(first, second):
    return first+second

my_list = [1, 3, 5, 7]
reduced_list = reduce(sum_numbers, my_list)

print(reduced_list)



def lessthenfour(a) :
    return len(a) < 5
people = ["Rick", "Morty", "Beth", "Jerry", "Snowball"]
newpeople = list(filter(lessthenfour, people))
print(newpeople)

def hello_yall(b) :
    return 'hello' + b 
hellonew = list(map(hello_yall, newpeople))
print(hellonew)