a = int(input())
b = int(input())
c = int(input())

x = list(str(a * b * c))
for i in range(10):
    print(x.count(str(i)))


