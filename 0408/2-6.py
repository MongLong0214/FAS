H, M = map(int, input().split())
later = int(input())

def time(H, M, later):
    if M + later >= 60: 
        plusHour = M + later 
        newHour = H + plusHour // 60
        if newHour >= 24:
            print(newHour - 24, plusHour % 60)
        else:
            print(newHour, plusHour % 60)
    else:
        print(H, M + later)

time(H, M, later)