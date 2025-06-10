class Solution:
    def isValid(self, s: str) -> bool:
        
        queue = []

        for ch in s:
            match ch:
                case "(":
                    queue.append("(")

                case ")":
                    if len(queue) < 1:
                        return False
                    elif queue.pop() != "(": return False

                case "[":
                    queue.append("[")

                case "]":
                    if len(queue) < 1:
                        return False
                    elif queue.pop() != "[": return False

                case "{":
                    queue.append("{")

                case "}":
                    if len(queue) < 1:
                        return False
                    elif queue.pop() != "{": return False

        return not len(queue)