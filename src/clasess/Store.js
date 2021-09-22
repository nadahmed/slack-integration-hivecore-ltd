export class LocalWebStorage{

    getItem(key) {
        return localStorage.getItem(key);
    }

    setItem(key, value){
        localStorage.setItem(key, value);
    }

    removeItem(key){
        localStorage.removeItem(key);
    }

    get length() {
        return localStorage.length;
    }

    key(index) {
        return localStorage.key(index);
    }
}
