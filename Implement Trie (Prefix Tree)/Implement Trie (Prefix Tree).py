class Node():
    def __init__(self):
        self.str = ""
        self.children = []

test_node = Node()
test_node.str = "test"
# print(test_node.str)

test_node_2 = Node()
test_node_2.str = "test2"

class Trie:
    def __init__(self):
        self.str = ""
        self.children = []

    # def insert(self, word: str) -> None:
        

    def search(self, word: str) -> bool:
        
        found = False
        def r_search(node):
            print(f"\t{node.str}\n\t{[n.str for n in node.children]}")
            nonlocal word
            nonlocal found
            # base case(s)
            if found:
                return
            elif node.str == word:
                print(f"\t{node.str} == {word}")
                found = True
                return


            if not node.children:
                print(f"no children:")
                print(node.children)
                return

            # recursive call(s)|
            elif node.children:
                print(f"\tdiving into children\n\t{[n.str for n in node.children]}")
                for child in node.children:
                    print(f"\t\t{child.str} == {word[0:len(child.str)]}")
                    if child.str == word[0:len(child.str)]:
                        r_search(child)
            
            else:
                print("?!")

        r_search(self)
        return found
        

    def startsWith(self, prefix: str) -> bool:
        # print("startsWith() called! prefix: ", prefix)
        # print(self.children)
        def sW_recursion(node):
            # base case(s)
            nonlocal prefix
            if len(node.str) < len(prefix):
                pass
            elif node.str[0:len(prefix)+1] == prefix: 
                return True

            if not node.children:
                return False

            # recursive call(s)
            children_results = []
            for child in node.children:
                children_results.append( sW_recursion(child) )

            # return
            return True in children_results

        return sW_recursion(self) 
        
test_trie = Trie()
test_trie.children.append(test_node)
test_trie.children[0].children.append(test_node_2)
# print([node.str for node in test_trie.nodes])

# print([node.str for node in test_trie.children])
# print([test_trie.children[0].str])
# print([test_trie.children[0].children[0].str])
# print(test_trie.startsWith("rndm"))
# print(test_trie.startsWith("test"))
print(test_trie.search("n"))
print(test_trie.search("test"))
print(test_trie.search("test2"))


# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)

#                  [a]
#       [app]               [art]
#  [apple] [apply]             [artistic]
#[apples]

# insert() will 
    # use search() to check if str already exists
    # make the tree insertion in between nodes

# search() will be be a precursor to insert()
    # traverse prefix tree until str diff is found

# startsWith() will be a precursor to search
