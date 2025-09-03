from collections import defaultdict  
nums = defaultdict(int)  
nums['one'] = 1  
nums['two'] = 2
nums['three'] = 3 
print(nums['four'])  
#######
from collections import Counter  
list2 = [1,2,3,4,1,2,6,7,3,8,1,2,2]  
answer = Counter(list2)  
print(answer[2])  
print(answer[4])
#######
from collections import deque  
#initialization
list1 = ["a","b","c"]  
deq = deque(list1)  
print(deq)  

#insertion
deq.append("z")  
deq.appendleft("g")  
print(deq)
#removal
deq.pop()  
deq.popleft()  
print(deq)


from collections import namedtuple
Student = namedtuple('Student', 'fname, lname, age')  
s1 = Student('Peter', 'James', '13')  
print(s1.lname)



import collections

dictionary1 = { 'a' : 1, 'b' : 2 }  
dictionary2 = { 'c' : 3, 'b' : 4 }  
chain_Map = collections.ChainMap(dictionary1, dictionary2)  
print(chain_Map.maps)  



from collections import OrderedDict  
order = OrderedDict()  
order['a'] = 1  
order['b'] = 2  
order['c'] = 3  
print(order)  

#unordered dictionary
unordered=dict()
unordered['a'] = 1  
unordered['b'] = 2  
unordered['c'] = 3 
print("Default dictionary", unordered)




import itertools

result = itertools.count(start = 0, step = 2)

for number in result:
# termination condition
    if number <9:
        print (number)
    else:
        break


    import itertools

result = itertools.cycle('good')
counter = 0

for number in result:
# termination condition
    if counter < 10 :
        print (number)
        counter = counter + 1
    else:
        break


import itertools

result = itertools.cycle('12345')
counter = 0

for number in result:
# termination condition
    if counter < 10 :
        print (number)
        counter = counter + 1
    else:
        break



    import itertools

result = itertools.repeat('hello', times = 2)

for word in result:
    print (word)
import itertools

list_one = ['a', 'b', 'c']
list_two = ['d', 'e', 'f']
list_three = ['1', '2', '3']

result = itertools.chain(list_one, list_two, list_three)

combined = list(result)     # אל תקרא למשתנה 'list'!
print(combined)             # ['a', 'b', 'c', 'd', 'e', 'f', '1', '2', '3']

for element in combined:    # אם רוצים גם לולאה אחר כך
    print(element)


#find the names of people who have the flu
import itertools

names = ['Alice', 'James', 'Matt']
have_flu = [True, True, False]

result = itertools.compress(names, have_flu)

for element in result:
  print (element)