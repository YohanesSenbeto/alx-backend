#!/usr/bin/python3
""" LIFO Cache module """

from base_caching import BaseCaching


class LIFOCache(BaseCaching):
    """Defines a caching system using LIFO algorithm"""

    def __init__(self):
        """Initializes the LIFOCache instance"""
        super().__init__()
        self.stack = []

    def put(self, key, item):
        """Add an item in the cache"""
        if key is not None and item is not None:
            if key in self.cache_data:
                self.cache_data[key] = item
            else:
                if len(self.cache_data) >= BaseCaching.MAX_ITEMS:
                    discarded_key = self.stack.pop()
                    del self.cache_data[discarded_key]
                    print("DISCARD:", discarded_key)
                self.cache_data[key] = item
                self.stack.append(key)

    def get(self, key):
        """Get an item by key"""
        if key is not None and key in self.cache_data:
            return self.cache_data[key]
        return None

