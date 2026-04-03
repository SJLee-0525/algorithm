n = 5

word_lists = []
new_words = []

for i in range(n):
    word_list = list(input())
    word_lists.append(word_list)

for i in range(15):
    for a in range(5):
        try:
            new_words.append(word_lists[a][i])
        except IndexError:
            pass
        a += 1

for i in range(len(new_words)):
    print(new_words[i], end = '')