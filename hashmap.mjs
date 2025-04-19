import { LinkedList } from "./linked-list.mjs";

export function HashMap() {
  return {
    capacity: 16,
    loadFactor: 0.75,
    hashmap: [],
    entryCount: 0,

    hash(key) {
      let hashCode = 0;

      const primeNumber = 31;
      for (let i = 0; i < key.length; i++) {
        hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
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
        this.entryCount++;
      } else {
        const bucket = this.hashmap[hashCode];
        // If matching key, update value
        if (bucket.containsKey(key)) {
          bucket.updateExisting(key, value);
        } else {
          // End of list means no match, append to end
          bucket.append(key, value);
          this.entryCount++;
        }

        if (this.entryCount > this.capacity * this.loadFactor) {
          this.rehash();
        }
      }
    },

    rehash() {
      const entriesArr = this.entries();
      this.hashmap.length = 0;
      this.capacity *= 2;

      for (const entry of entriesArr) {
        this.set(entry[0], entry[1]);
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

      if (bucket && bucket.removeExisting(key)) {
        this.entryCount--;
        return true;
      } else {
        return false;
      }
    },

    length() {
      return this.keys().length;
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

    values() {
      const values = [];
      for (const bucket of this.hashmap) {
        if (bucket) {
          values.push(...bucket.getValues());
        }
      }
      return values;
    },

    entries() {
      const keys = this.keys();
      const values = this.values();
      const entriesArr = [];

      for (let i = 0; i < keys.length; i++) {
        entriesArr.push([keys[i], values[i]]);
      }
      return entriesArr;
    },
  };
}
