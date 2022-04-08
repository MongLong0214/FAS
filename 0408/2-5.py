H, M = map(int, input().split())

def time(H, M):
    if M < 45 and H != 0:
        print(int(H - 1), int(M + 15))
    elif H == 0 and M < 45:
        print(int(23), int(M + 15))
    else:
        print(int(H), int(M - 45))
        
time(H, M)