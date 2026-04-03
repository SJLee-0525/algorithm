import sys

def move(D):
    new_D = {}
    split_needed = False
    
    for k, v in D.items():
        if not v:
            continue
        for mv in v:
            ti = (k[0] + di[mv[2]] * mv[1]) % N
            tj = (k[1] + dj[mv[2]] * mv[1]) % N
            if (ti, tj) not in new_D:
                new_D[(ti, tj)] = [mv]
            else:
                split_needed = True
                for idx in range(len(mv)):
                    new_D[(ti, tj)][0][idx] += mv[idx]
    
    if not split_needed:
        return new_D
    return ball_split(new_D)

def ball_split(D):
    new_D = {}
    for k, vv in D.items():
        if not vv:
            continue
        temp = []
        for v in vv:
            if v[3] >= 2:
                m = v[0] // 5
                if m == 0:
                    continue
                s = v[1] // v[3]
                if v[4] == 0 or v[4] == v[3]:
                    for j in [0, 2, 4, 6]:
                        temp.append([m, s, j, 1, 0])
                else:
                    for j2 in [1, 3, 5, 7]:
                        temp.append([m, s, j2, 1, 1])
                new_D[k] = temp
            else:
                new_D[k] = vv
    return new_D

# Grid and ball parameters
N, M, K = map(int, sys.stdin.readline().split())
D = {}

di = [-1, -1, 0, 1, 1, 1, 0, -1]
dj = [0, 1, 1, 1, 0, -1, -1, -1]

# Reading ball data
for _ in range(M):
    r, c, m, s, d = map(int, sys.stdin.readline().split())
    r, c = r - 1, c - 1
    b = 0 if d % 2 == 0 else 1
    D[(r, c)] = [[m, s, d, 1, b]]

# Processing moves
for _ in range(K):
    D = move(D)

# Final mass summation
cnt = 0
for value in D.values():
    if value:
        for v in value:
            cnt += v[0]

print(cnt)
