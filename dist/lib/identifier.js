"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rank_1 = require("./rank");
function toCamel(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
function toCamels(s) {
    return s.reduce((acc, word) => acc + toCamel(word), '');
}
class Identifier {
    constructor(r) {
        this.childs = new Array();
        this.rank = new rank_1.Rank(r);
    }
    child(value) {
        const id = this.copy();
        if (typeof value === 'string') {
            id.childs.push(toCamel(value));
            return id;
        }
        else {
            if (id.childs.length !== 0) {
                throw new Error(`Error: It is forbidden to call 'child(IRank)' functions, after 'child(string)`);
            }
            id.rank = id.rank.copy(value);
            return id;
        }
    }
    copy() {
        const id = new Identifier(this.rank);
        id.childs = Array.from(this.childs);
        return id;
    }
    get parent() {
        const id = this.copy();
        id.childs.pop();
        return id;
    }
    scope(callback) {
        callback(this.copy());
    }
    get stackName() {
        return this.rank.toCamelString();
    }
    get constructName() {
        const length = this.childs.length;
        if (length === 0) {
            throw new Error(`Error: Does not have any child. Please call 'child(string)'`);
        }
        // The cdk.Construct names `LogicalId` using `scope`(args[0]) and `id`(args[1]).
        // The scope that nested function already set `id` to `scope`, so constructName() only return last value of array.
        const word = this.childs[length - 1];
        return toCamel(word);
    }
    exportName(s) {
        if (this.childs.length === 0) {
            return this.stackName + ':' + s;
        }
        return this.stackName + ':' + toCamels(this.childs) + ':' + toCamel(s);
    }
    get camelName() {
        return this.stackName + toCamels(this.childs);
    }
    get slashName() {
        const array = [this.rank.toSlashString(), ...this.childs];
        return array.join('/').toLowerCase();
    }
    get dotName() {
        const array = [this.rank.toDotString(), ...this.childs];
        return array.join('.').toLowerCase();
    }
    get dashName() {
        const array = [this.rank.toDashString(), ...this.childs];
        return array.join('-').toLowerCase();
    }
}
exports.Identifier = Identifier;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpZmllci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9pZGVudGlmaWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQXFDO0FBRXJDLFNBQVMsT0FBTyxDQUFDLENBQVM7SUFDeEIsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEQsQ0FBQztBQUVELFNBQVMsUUFBUSxDQUFDLENBQVc7SUFDM0IsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUMxRCxDQUFDO0FBRUQsTUFBYSxVQUFVO0lBR3JCLFlBQVksQ0FBUTtRQUZaLFdBQU0sR0FBYSxJQUFJLEtBQUssRUFBRSxDQUFDO1FBR3JDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVNLEtBQUssQ0FBQyxLQUFxQjtRQUNoQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDN0IsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDL0IsT0FBTyxFQUFFLENBQUM7U0FDWDthQUFNO1lBQ0wsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQzFCLE1BQU0sSUFBSSxLQUFLLENBQUMsK0VBQStFLENBQUMsQ0FBQzthQUNsRztZQUNELEVBQUUsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDOUIsT0FBTyxFQUFFLENBQUM7U0FDWDtJQUNILENBQUM7SUFFTSxJQUFJO1FBQ1QsTUFBTSxFQUFFLEdBQUcsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEMsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQsSUFBVyxNQUFNO1FBQ2YsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3ZCLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDaEIsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRU0sS0FBSyxDQUFDLFFBQWtDO1FBQzdDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsSUFBVyxhQUFhO1FBQ3RCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2xDLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNoQixNQUFNLElBQUksS0FBSyxDQUFDLDZEQUE2RCxDQUFDLENBQUM7U0FDaEY7UUFDRCxnRkFBZ0Y7UUFDaEYsa0hBQWtIO1FBQ2xILE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25DLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxVQUFVLENBQUMsQ0FBUztRQUN6QixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUM1QixPQUFPLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztTQUNqQztRQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELElBQVcsU0FBUztRQUNsQixNQUFNLEtBQUssR0FBRyxDQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0QsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxJQUFXLE9BQU87UUFDaEIsTUFBTSxLQUFLLEdBQUcsQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRUQsSUFBVyxRQUFRO1FBQ2pCLE1BQU0sS0FBSyxHQUFHLENBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxRCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkMsQ0FBQztDQUNGO0FBN0VELGdDQTZFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElSYW5rLCBSYW5rIH0gZnJvbSAnLi9yYW5rJztcblxuZnVuY3Rpb24gdG9DYW1lbChzOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHMuc2xpY2UoMSk7XG59XG5cbmZ1bmN0aW9uIHRvQ2FtZWxzKHM6IHN0cmluZ1tdKTogc3RyaW5nIHtcbiAgcmV0dXJuIHMucmVkdWNlKChhY2MsIHdvcmQpID0+IGFjYyArIHRvQ2FtZWwod29yZCksICcnKTtcbn1cblxuZXhwb3J0IGNsYXNzIElkZW50aWZpZXIge1xuICBwcml2YXRlIGNoaWxkczogc3RyaW5nW10gPSBuZXcgQXJyYXkoKTtcbiAgcHVibGljIHJhbms6IFJhbms7XG4gIGNvbnN0cnVjdG9yKHI6IElSYW5rKSB7XG4gICAgdGhpcy5yYW5rID0gbmV3IFJhbmsocik7XG4gIH1cblxuICBwdWJsaWMgY2hpbGQodmFsdWU6IHN0cmluZyB8IElSYW5rKTogSWRlbnRpZmllciB7XG4gICAgY29uc3QgaWQgPSB0aGlzLmNvcHkoKTtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgaWQuY2hpbGRzLnB1c2godG9DYW1lbCh2YWx1ZSkpO1xuICAgICAgcmV0dXJuIGlkO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaWQuY2hpbGRzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yOiBJdCBpcyBmb3JiaWRkZW4gdG8gY2FsbCAnY2hpbGQoSVJhbmspJyBmdW5jdGlvbnMsIGFmdGVyICdjaGlsZChzdHJpbmcpYCk7XG4gICAgICB9XG4gICAgICBpZC5yYW5rID0gaWQucmFuay5jb3B5KHZhbHVlKTtcbiAgICAgIHJldHVybiBpZDtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY29weSgpOiBJZGVudGlmaWVyIHtcbiAgICBjb25zdCBpZCA9IG5ldyBJZGVudGlmaWVyKHRoaXMucmFuayk7XG4gICAgaWQuY2hpbGRzID0gQXJyYXkuZnJvbSh0aGlzLmNoaWxkcyk7XG4gICAgcmV0dXJuIGlkO1xuICB9XG5cbiAgcHVibGljIGdldCBwYXJlbnQoKTogSWRlbnRpZmllciB7XG4gICAgY29uc3QgaWQgPSB0aGlzLmNvcHkoKTtcbiAgICBpZC5jaGlsZHMucG9wKCk7XG4gICAgcmV0dXJuIGlkO1xuICB9XG5cbiAgcHVibGljIHNjb3BlKGNhbGxiYWNrOiAoaWQ6IElkZW50aWZpZXIpID0+IHZvaWQpIHtcbiAgICBjYWxsYmFjayh0aGlzLmNvcHkoKSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHN0YWNrTmFtZSgpOiBzdHJpbmd7XG4gICAgcmV0dXJuIHRoaXMucmFuay50b0NhbWVsU3RyaW5nKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNvbnN0cnVjdE5hbWUoKTogc3RyaW5ne1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuY2hpbGRzLmxlbmd0aDtcbiAgICBpZiAobGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yOiBEb2VzIG5vdCBoYXZlIGFueSBjaGlsZC4gUGxlYXNlIGNhbGwgJ2NoaWxkKHN0cmluZyknYCk7XG4gICAgfVxuICAgIC8vIFRoZSBjZGsuQ29uc3RydWN0IG5hbWVzIGBMb2dpY2FsSWRgIHVzaW5nIGBzY29wZWAoYXJnc1swXSkgYW5kIGBpZGAoYXJnc1sxXSkuXG4gICAgLy8gVGhlIHNjb3BlIHRoYXQgbmVzdGVkIGZ1bmN0aW9uIGFscmVhZHkgc2V0IGBpZGAgdG8gYHNjb3BlYCwgc28gY29uc3RydWN0TmFtZSgpIG9ubHkgcmV0dXJuIGxhc3QgdmFsdWUgb2YgYXJyYXkuXG4gICAgY29uc3Qgd29yZCA9IHRoaXMuY2hpbGRzW2xlbmd0aC0xXTtcbiAgICByZXR1cm4gdG9DYW1lbCh3b3JkKTtcbiAgfVxuXG4gIHB1YmxpYyBleHBvcnROYW1lKHM6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuY2hpbGRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhY2tOYW1lICsgJzonICsgcztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc3RhY2tOYW1lICsgJzonICsgdG9DYW1lbHModGhpcy5jaGlsZHMpICArICc6JyArIHRvQ2FtZWwocyk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNhbWVsTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnN0YWNrTmFtZSArIHRvQ2FtZWxzKHRoaXMuY2hpbGRzKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2xhc2hOYW1lKCk6IHN0cmluZyB7XG4gICAgY29uc3QgYXJyYXkgPSBbIHRoaXMucmFuay50b1NsYXNoU3RyaW5nKCksIC4uLnRoaXMuY2hpbGRzXTtcbiAgICByZXR1cm4gYXJyYXkuam9pbignLycpLnRvTG93ZXJDYXNlKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRvdE5hbWUoKTogc3RyaW5nIHtcbiAgICBjb25zdCBhcnJheSA9IFsgdGhpcy5yYW5rLnRvRG90U3RyaW5nKCksIC4uLnRoaXMuY2hpbGRzXTtcbiAgICByZXR1cm4gYXJyYXkuam9pbignLicpLnRvTG93ZXJDYXNlKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRhc2hOYW1lKCk6IHN0cmluZyB7XG4gICAgY29uc3QgYXJyYXkgPSBbIHRoaXMucmFuay50b0Rhc2hTdHJpbmcoKSwgLi4udGhpcy5jaGlsZHNdO1xuICAgIHJldHVybiBhcnJheS5qb2luKCctJykudG9Mb3dlckNhc2UoKTtcbiAgfVxufVxuIl19