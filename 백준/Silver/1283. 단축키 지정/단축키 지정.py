import sys

N = int(sys.stdin.readline())

asciiList = [0] * 26

result = ''
for _ in range(N):
    inputFunc = list(sys.stdin.readline().rstrip().split())
    for i, word in enumerate(inputFunc):
        isSaved, keyIndex = False, -1
        wordIndex = ord(word[0].upper()) - 65
        if not asciiList[wordIndex]:
            asciiList[wordIndex] = 1
            isSaved = True
            keyIndex = i

        if isSaved:
            for i2, word2 in enumerate(inputFunc):
                if i2 != keyIndex:
                    result += word2 + ' '
                else:
                    for j, char in enumerate(word2):
                        if j == 0:
                            result += f'[{char}]'
                        else:
                            result += char
                    result += ' '
            break

    else:
        isComplete = False
        for i, word in enumerate(inputFunc):
            if isComplete:
                break
            for j, char in enumerate(word):
                isSaved, keyIndex = False, -1
                wordIndex = ord(word[j].upper()) - 65
                if not asciiList[wordIndex]:
                    asciiList[wordIndex] = 1
                    isSaved = True
                    keyIndex = j

                if isSaved:
                    isComplete = True
                    for i2, word2 in enumerate(inputFunc):
                        if i != i2:
                            result += inputFunc[i2] + ' '
                        else:
                            for j2, char2 in enumerate(word2):
                                if j2 == keyIndex:
                                    result += f'[{char2}]'
                                else:
                                    result += char2
                            result += ' '
                    break

        if not isComplete:
            result += ' '.join(inputFunc)

    result += '\n'

print(result)

