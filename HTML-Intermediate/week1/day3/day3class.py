sample_dict = { 
   "class":{ 
      "student":{ 
         "name":"Mike",
         "marks":{ 
            "physics":70,
            "history":80
         }
      }
   }
}
print(sample_dict["class"]["student"]["marks"]["history"])

sample_dict1 = {
  "name": "Kelly",
  "age":25,
  "salary": 8000,
  "city": "New york"

}

del sample_dict1['name']
print(sample_dict1)
my_books = {
  "title": "Harry Potter",
  "author": "JK Rowling",
}

for x, y in my_books.items():
    print("the" + x + "is" + y)


