class HashTable {
    constructor(size=4) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let PRIME = 31;

        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        let index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push({key, value});
    }

    get(key) {
        let index = this._hash(key);
        let value;
        if (!this.keyMap[index]) return undefined;

        for (let i = 0; i < this.keyMap[index].length; i++) {
            if (this.keyMap[index][i].key === key) {
                value = this.keyMap[index][i];
            }
        }
        return value;
    }

    keys() {
        
        if (!this.keyMap.length) return undefined;

        let keys = [];
        for (let i = 1; i < this.keyMap.length; i++) {
            for (let j = 0; j < this.keyMap[i].length; j++) {
                if (!values.includes(this.keyMap[i][j].key)) {
                    keys.push(this.keyMap[i][j].key);
                }
            }
        }
        return keys;
    }

    values() {
        
        if (!this.keyMap.length) return undefined;

        let values = [];
        for (let i = 1; i < this.keyMap.length; i++) {
            for (let j = 0; j < this.keyMap[i].length; j++) {
                if (!values.includes(this.keyMap[i][j].value)) {
                    values.push(this.keyMap[i][j].value);
                }
            }
        }
        return values;
    }
}

let hashTable = new HashTable();
hashTable.set('rishi', 07);
hashTable.set('iti', 18);
hashTable.set('kriti', 31);
hashTable.set('shresth', 29);
hashTable.set('rishi', 0);