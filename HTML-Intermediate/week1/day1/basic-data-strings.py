description = "strings are"
print(description.upper())
description2 = description.replace('are','is')
print(description2)
print(description [0:7])
my_string = "hello world " 
python = 'python is fun'
print(my_string + python)
print('my_string\n' * 5)

#user_name = input('what is your name ')
#print('welcome ' + user_name )
#print(f'welcome {user_name}')
#first_name = input("what is your first name ")
#last_name =  input('what is your last name ')
#print(first_name + ' ' + last_name)

if 5 > 3:
    print('hello')


#name = input('what is tour name ')
#if len(name) < 5:
   # print('you have a short name')
#else :
  #  print('ok')


my_hobbies = "food, sleep, game"
if 'food' in my_hobbies or 'soccer' in my_hobbies:
    print ('yes')

num = int(input('give a number from 1-100 '))
if num % 3 == 0 :
    print('fizz')
if num % 5 == 0:
    print ('buzz')
if num % 3 == 0 and num % 5 == 0 :
    print('fizzbuzz')