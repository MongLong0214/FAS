num = int(input())

def sum(num):
    total = 0
    for i in range(1, num+1):
        total += i
    return total

print(sum(num))