import re

string = "at what time?"
match = re.findall('at',string)
print (match)


import re

string = "at what time?"
match = re.search('hat',string)
if (match):
    print("String found hat: " ,match.start())
else:
    print("String not found!")

import re

string = "at what time?"
match = re.split('a',string)
print (match)


import re

string = "at what time?"
match = re.sub("\s","!!!",string)
print (match)


#f = open('output.txt', 'w')
#for i in range(10):
  #  f.write("this is line: %i\n"%i)
#f.close()

# Same as
#with open('output.txt', 'w') as f:
   # for i in range(10):
    #   f.write("this is line: %i\n"%i)
#for line in open('secrets.txt'):
   # print(line)

#with open("example.txt", "r") as f:
   # print(f.tell())   # 0 (start of file)
   # f.read(5)         # read 5 characters
   # print(f.tell())   # cursor moved forward
#    f.seek(0)         # move back to start

with open("nameslist.txt", "r") as f:
    lines = f.readlines()
    for line in lines:
        print(line.strip())
    f.seek(0)
    if len(lines) > 5:
        print(lines[4].strip())
    i = 0
    print('AAA')
    first5 = ''.join(lines)[:5]
    print(first5)
    print('bbb')
    for line in lines:
        print(list(line.strip())) 
    count = sum(1 for line in lines if "Lea" in line)
    print(count)
with open("nameslist.txt", "a") as f:
    f.write("\nOr")
    