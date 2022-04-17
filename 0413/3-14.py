# 주어진 수가 10보다 작다면 앞에 0을 붙여 두 자리 수로 만들고, 각 자리의 숫자를 더한다
# 주어진 수의 가장 오른쪽 자리 수와 앞에서 구한 합의 가장 오른쪽 자리 수를 이어 붙이면 새로운 수를 만들 수 있다
# 26부터 시작한다. 2+6 = 8이다. 새로운 수는 68이다. 6+8 = 14이다. 새로운 수는 84이다. 8+4 = 12이다. 새로운 수는 42이다. 4+2 = 6이다. 새로운 수는 26이다.
# 위의 예는 4번만에 원래 수로 돌아올 수 있다. 따라서 26의 사이클의 길이는 4이다.

# 26 2+6=8 
# 68 6+8=14
# 84 8+4=12
# 42 4+2=6
# 26 

# a = b = input()

# cnt = 0

# # print(a[-1] + str(int(a[0]) + int(a[1]))[-1])

# while True:
#     b = a[-1] + str(int(a[0]) + int(a[1]))[-1]
#     cnt += 1

#     if a == b:
#         break

# print(cnt)


result = x = int(input())
cnt = 0

while True:
    a = result // 10 #2
    b = result % 10 #6
    c = a + b #8
    cnt += 1
    result = int(str(result % 10) + str(c % 10))
    if x == result:
        break
print(cnt)


