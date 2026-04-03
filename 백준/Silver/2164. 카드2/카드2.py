from collections import deque

n = int(input())

card = list(range(1, n + 1))
card= deque(card)

while len(card) > 1:
    del card[0]
    card.append(card.popleft())

print(* card)