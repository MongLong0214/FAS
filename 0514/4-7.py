student = int(input()) 
for i in range(student):
    score = list(map(int, input().split()))
    length = score[0]
    scores = score[1:]
    mean = sum(scores) / len(scores)

    result = 0

    for i in scores:
        if i > mean:
            result += 1
            rate = result / length * 100
    # print("%.3f"%rate + "%")
    print(f'{rate:.3f}%')



