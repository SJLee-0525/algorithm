import sys

n = int(sys.stdin.readline())
my_card_list = list(map(int, sys.stdin.readline().split()))

m = int(sys.stdin.readline())
target_card_list = list(map(int, sys.stdin.readline().split()))

card_dict = {}
for index, card_num in enumerate(my_card_list):
    if card_num not in card_dict:
        card_dict[card_num] = [index]
    else:
        card_dict[card_num].append(index)

for target in target_card_list:
    print(len(card_dict.get(target, [])), end = ' ')