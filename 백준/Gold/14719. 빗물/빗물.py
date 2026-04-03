import sys

H, W = map(int, sys.stdin.readline().split())
ground = list(map(int, sys.stdin.readline().split()))

left_point, right_point = 0, W - 1
left_max, right_max = ground[left_point], ground[right_point]
rain = 0
while left_point < right_point:
    if left_max < right_max:
        left_point += 1
        left_max = max(left_max, ground[left_point])
        if left_max > ground[left_point]:
            rain += left_max - ground[left_point]

    else:
        right_point -= 1
        right_max = max(right_max, ground[right_point])
        if right_max > ground[right_point]:
            rain += right_max - ground[right_point]

print(rain)