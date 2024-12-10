# NC solution
class TrieNode:
    def __init__(self):
        self.children = {}
        self.word_end = False


class Trie:

    def __init__(self):
        self.root = TrieNode()
        # print(self.root, self.root.children, self.root.word_end)

    def insert(self, word: str) -> None:
        curr_node = self.root
        for ch in word:
            if ch not in curr_node.children.keys():
                curr_node.children[ch] = TrieNode()
            curr_node = curr_node.children[ch]
        curr_node.word_end = True

    def search(self, word: str) -> bool:
        curr_node = self.root
        for ch in word:
            if ch not in curr_node.children.keys():
                return False
            curr_node = curr_node.children[ch]
        return curr_node.word_end        

    def startsWith(self, prefix: str) -> bool:
        curr_node = self.root
        for ch in prefix:
            if ch not in curr_node.children:
                return False
            curr_node = curr_node.children[ch]
        return True


# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)