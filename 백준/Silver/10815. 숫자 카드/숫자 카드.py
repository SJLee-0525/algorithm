import sys

my_n = int(sys.stdin.readline())
my_list = list(map(int, sys.stdin.readline().split()))

target_m = int(sys.stdin.readline())
target_list = list(map(int, sys.stdin.readline().split()))

card_dict = {}
for my_card in my_list:
    card_dict[my_card] = 1

for target_card in target_list:
    print(card_dict.get(target_card, 0), end = ' ')
