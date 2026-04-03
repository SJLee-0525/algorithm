import sys

T = int(sys.stdin.readline()) # 테케

for tc in range(T):
    N = int(sys.stdin.readline()) # 가진 의상의 수

    cloth_dict = {}
    for _ in range(N):
        wear, category = sys.stdin.readline().rstrip().split()
        if category not in cloth_dict:
            cloth_dict[category] = [wear]
        else:
            cloth_dict[category].append(wear)
        # print(cloth_dict) {'headgear': ['hat', 'turban'], 'eyewear': ['sunglasses']}
    
    # 조합식: 각 종류의 의상의 수에 1씩 더한 다음, 서로 곱하고 마지막에 다시 1을 빼면 됨
    # 알몸도 옷이라고 생각해서 1을 추가한다고 생각하라고 함
    cnt = 1
    for key in cloth_dict.keys():
        cnt *= (len(cloth_dict[key]) + 1)

    # 마지막에 -1 하는 이유는, 알몸인 경우를 제외하기 위해서임
    print(cnt - 1)