class TimeMap:

    def __init__(self):
        # key will be str
        # value will be t
        self.data = {}

    def set(self, key: str, value: str, timestamp: int) -> None:
        # key already exists
        if self.data.get(key):
            
            # timestamp already exists
            if self.data[key].get(timestamp):
                # print("Error: timestamp already exists:", key, value, timestamp)
                pass
            else:
                self.data[key][timestamp] = value

        # key doesn't exist
        else:
            self.data[key] = {timestamp: value}
        

    def get(self, key: str, timestamp: int) -> str:
        # check if key doesn't exist
        if not self.data.get(key):
            # print("Key doesn't exist:", key, timestamp)
            return ""
        
        # timestamp exists
        if self.data[key].get(timestamp):
            return self.data[key][timestamp]

        # timestamp doesn't exist so look for earlier time stamps
        timestamps = [ts for ts in self.data[key].keys()]

        # no earlier timestamps exist
        if timestamp < timestamps[0]:
            # print(f"No earlier timestamp exists\ntimestamp: {timestamp}, timestamps[0]: {timestamps[0]}")
            return ""
        else:
            # return earlier timestamp closest to timestamp arg
            prev = ""
            for ts in timestamps:
                if ts > timestamp:
                    return self.data[key][prev]
                prev = ts
            # print(f"No earlier time stamp found with for-loop\ntimestamp: {timestamp}, timestamps = {timestamps}")
            # print(f"\nEarlier time stamp found with for-loop\ntimestamp: {timestamp}, \nprev: {prev}, \nself.data[key]: {self.data[key]}")
            # print(f"return: {self.data[key][prev]}")
            return self.data[key][prev]



# Your TimeMap object will be instantiated and called as such:
# obj = TimeMap()
# obj.set(key,value,timestamp)
# param_2 = obj.get(key,timestamp)