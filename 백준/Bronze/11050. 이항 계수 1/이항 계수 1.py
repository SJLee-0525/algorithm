n, k = map(int, input().split())

nn = 1
for n_ in range(1, n + 1):
    nn *= n_ 

kk = 1
for k_ in range(1, k + 1):
    kk *= k_

nn_kk = 1
for n_k in range(1, (n - k) + 1):
    nn_kk *= n_k

print(int(nn / (kk * nn_kk)))