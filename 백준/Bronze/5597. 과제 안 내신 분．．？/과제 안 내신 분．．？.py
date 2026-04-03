student_list = list(range(1, 31))
post_list = []

for _ in range(28):
    i = int(input())
    post_list.append(i)


who = set(student_list) - set(post_list)
who = list(who)

print(min(who))
print(max(who))