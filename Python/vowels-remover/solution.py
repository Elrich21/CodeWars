def shortcut( s ):
    vowels = ['a', 'e', 'i', 'o', 'u']
    res = ""
    
    for i in range(len(s)):
        if s[i] not in vowels:
            res += s[i]
    
    return res
