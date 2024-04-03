#!/usr/bin/python3
""" MRU Cache module """

from base_caching import BaseCaching


class MRUCache(BaseCaching):
    """Defines a caching system using MRU algorithm"""

    def __init__(self):
        """Initializes the MRUCache instance"""
        super().__init__()

    def put(self, key, item):
        """Add an item in the cache"""
        if key is not None and item is not None:
            if key in self.cache_data:
                del self.cache_data[key]
            elif len(self.cache_data) >= BaseCaching.MAX_ITEMS:
                mru_key = next(iter(self.cache_data))
                del self.cache_data[mru_key]
                print("DISCARD:", mru_key)
            self.cache_data[key] = item

    def get(self, key):
        """Get an item by key"""
        if key is not None and key in self.cache_data:
            value = self.cache_data.pop(key)
            self.cache_data[key] = value
            return value
        return None
