word = input('give me string 10 letters long')
if len(word) > 10 :
    print('that is to long')
elif len(word) < 10 :
   print('that is too short')
else :
    print('that is perfect')

print(word [0])
print(word [9])
x = 0
for x in range(len(word)):
    print(word[0:x])
    x = x+1

random.shuffle(word[])
print(word)