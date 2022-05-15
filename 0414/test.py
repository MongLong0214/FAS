
def sum(a, b):
    sum = 0
    for i in range(a, b+1):
        sum = i + sum
    print(sum)
sum(3,6)