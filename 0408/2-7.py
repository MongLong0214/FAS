a, b, c = map(int, input().split())
box = a, b, c

if a == b == c:
    print(10000 + a * 1000)
elif a == b or a == c:
    print(1000 + a * 100)
elif b == c:
    print(1000 + b * 100)
elif a != b != c:
    box = sorted(box)
    print(box[-1] * 100)