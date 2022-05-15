for i in range(int(input())):
    a = input()
    score = 0
    sumscore = 0
    for j in a:
        if j == "O":
            score += 1
            sumscore += score
        else:
            score = 0
    print(sumscore)

