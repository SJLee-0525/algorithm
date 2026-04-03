n = 20
t_sum = 0
j_sum = 0
score_d = {'A+': 4.5, 'A0': 4.0, 'B+': 3.5, 'B0': 3.0, 'C+': 2.5, 'C0': 2.0, 'D+': 1.5, 'D0': 1.0, 'F': 0}

for _ in range(n):
    i, j, k = input().split()

    if k in score_d.keys():
        j = float(j)
        j_sum += j
        score = score_d[k]
        t_sum += score * j

f_score = t_sum / j_sum
f_score = round(f_score, 6)
print(f_score)