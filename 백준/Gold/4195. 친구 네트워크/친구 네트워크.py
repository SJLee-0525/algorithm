import sys

def find(x):
    if x == parents[x]:
        return x
    parents[x] = find(parents[x])
    return parents[x]

def union(x, y):
    root_x = find(x)
    root_y = find(y)

    if root_x != root_y:                # 둘이 부모가 다르다면
        parents[root_y] = root_x        # root_y를 root_x로 통합
        ranks[root_x] += ranks[root_y]  # root_x의 rank를 root_y의 rank만큼 더함 (rank는 바라보는 요소가 가진 친구 수와 같음)

##########################################

T = int(sys.stdin.readline())
for tc in range(T):
    friend_dict = {}

    F = int(sys.stdin.readline()) # 친구 관계의 수
    parents = [0] # 부모 정보 담을 리스트, 친구 수가 주어지지 않았기 때문에, 필요할 때마다 추가할 거임
    ranks = [1]   # 랭크 정보(해당 부모 정보가 가진 관계 수) 담을 것, 마찬가지로 필요할 때마다 추가할 거임
    num = 0       # parents, ranks 배열에서 사용할 인덱스 번호 > 딕셔너리에 value로 담을 거임

    for _ in range(F):
        name_A, name_B = sys.stdin.readline().rstrip().split()

        if friend_dict.get(name_A) is None: # 만약 딕셔너리에 해당 이름이 없다면
            num += 1            # 인덱스 증가
            parents.append(num) # 해당 번호 parents에 추가 (자기 자신)
            ranks.append(1)     # ranks에도 추가
            friend_dict.setdefault(name_A, num) # 딕셔너리에 할당

        if friend_dict.get(name_B) is None:
            num += 1
            parents.append(num)
            ranks.append(1)
            friend_dict.setdefault(name_B, num)

        union(friend_dict[name_A], friend_dict[name_B]) # 받은 두 친구의 집합을 통합
        # print(parents)
        # print(ranks)
        print(ranks[parents[friend_dict[name_A]]])