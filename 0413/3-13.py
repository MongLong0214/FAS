def ABSum4():
    result = []
    while True:  
        try:
            A, B = map(int, input().split())
            result.append(A+B)
        except:
            break
    print('\n'.join(map(str,result)))

ABSum4()