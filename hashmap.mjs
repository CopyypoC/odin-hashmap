import { LinkedList } from "./linked-list.mjs";

export function Hashmap() {
  const capacity = 16;
  const loadFactor = 0.75;
  return {
    capacity,
    loadFactor,
    hashmap: [],
    entries: 0,

    hash(key) {
      let hashCode = 0;

      const primeNumber = 31;
      for (let i = 0; i < key.length; i++) {
        hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
      }

      return hashCode;
    },

    set(key, value) {
      const hashCode = this.hash(key);

      // Create new list as needed
      if (this.hashmap[hashCode] === undefined) {
        const bucket = new LinkedList();
        bucket.append(key, value);
        this.hashmap[hashCode] = bucket;
      } else {
        const bucket = this.hashmap[hashCode];
        // If matching key, update value
        if (bucket.containsKey(key)) {
          bucket.updateExisting(key, value);
        } else {
          // End of list means no match, append to end
          bucket.append(key, value);
          this.entries++;
        }

        if (this.entries > capacity * loadFactor) {
          capacity *= 2;
          // rehash
        }
      }
    },

    get(key) {
      const hashCode = this.hash(key);
      const bucket = this.hashmap[hashCode];

      return bucket.getValue(key);
    },

    has(key) {
      const hashCode = this.hash(key);
      const bucket = this.hashmap[hashCode];

      return bucket.containsKey(key);
    },

    remove(key) {
      const hashCode = this.hash(key);
      const bucket = this.hashmap[hashCode];

      return bucket ? bucket.removeExisting(key) : false;
    },

    length() {
      let length = 0;
      for (const bucket of this.hashmap) {
        if (bucket) {
          length += bucket.size();
        }
      }
      return length;
    },

    clear() {
      this.hashmap.length = 0;
    },

    keys() {
      const keys = [];
      for (const bucket of this.hashmap) {
        if (bucket) {
          keys.push(...bucket.getKeys());
        }
      }
      return keys;
    },
  };
}
