num = []

for i in range(10) :
    n = int(input())
    m = n % 42
    num.append(m)

num = set(num)

print(len(num))