from queue import LifoQueue


my_list = ['apple', 'orange', 'banana', 'mango']
my_dict = {1: 'apple', 2: 'orange', 3: 'banana', 4: 'mango'}

for i in range(len(my_list)):
    print(my_list[i])

print('--------------------------------')

for i, el in enumerate(my_list):
    print(i, el)
    
print('--------------------------------')

for i in reversed(range(len(my_list))): 
    print(i, my_list[i])

print('--------------------------------')

# some comment here

for i in range(len(my_list)-1, -1, -1):
    print(i, my_list[i])

print('--------------------------------')

for index, value in enumerate(my_dict):
    print(index, value)


print('--------------------------------')
print('--------------------------------')
print('--------------------------------')
print('--------------------------------')

