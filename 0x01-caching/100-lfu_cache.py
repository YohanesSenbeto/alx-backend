#!/usr/bin/python3
""" LFU Cache module """

from base_caching import BaseCaching


class LFUCache(BaseCaching):
    """Defines a caching system using LFU algorithm"""

    def __init__(self):
        """Initializes the LFUCache instance"""
        super().__init__()
        self.frequency = {}

    def put(self, key, item):
        """Add an item in the cache"""
        if key is not None and item is not None:
            if key in self.cache_data:
                self.cache_data[key] = item
                self.frequency[key] += 1
            else:
                if len(self.cache_data) >= BaseCaching.MAX_ITEMS:
                    min_freq = min(self.frequency.values())
                    keys_with_min_freq = min(
                        (k for k, v in self.frequency.items()
                            if v == min_freq),
                        key=lambda x: self.cache_data[x],
                    )
                    del self.cache_data[keys_with_min_freq]
                    del self.frequency[keys_with_min_freq]
                    print("DISCARD:", keys_with_min_freq)
                self.cache_data[key] = item
                self.frequency[key] = 1

    def get(self, key):
        """Get an item by key"""
        if key is not None and key in self.cache_data:
            self.frequency[key] += 1
            return self.cache_data[key]
        return None
