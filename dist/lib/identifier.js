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
        return array.join('/');
    }
    get dotName() {
        const array = [this.rank.toDotString(), ...this.childs];
        return array.join('.');
    }
}
exports.Identifier = Identifier;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpZmllci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9pZGVudGlmaWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQXFDO0FBRXJDLFNBQVMsT0FBTyxDQUFDLENBQVM7SUFDeEIsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEQsQ0FBQztBQUVELFNBQVMsUUFBUSxDQUFDLENBQVc7SUFDM0IsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUMxRCxDQUFDO0FBRUQsTUFBYSxVQUFVO0lBR3JCLFlBQVksQ0FBUTtRQUZaLFdBQU0sR0FBYSxJQUFJLEtBQUssRUFBRSxDQUFDO1FBR3JDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVNLEtBQUssQ0FBQyxLQUFxQjtRQUNoQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDN0IsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDL0IsT0FBTyxFQUFFLENBQUM7U0FDWDthQUFNO1lBQ0wsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQzFCLE1BQU0sSUFBSSxLQUFLLENBQUMsK0VBQStFLENBQUMsQ0FBQzthQUNsRztZQUNELEVBQUUsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDOUIsT0FBTyxFQUFFLENBQUM7U0FDWDtJQUNILENBQUM7SUFFTSxJQUFJO1FBQ1QsTUFBTSxFQUFFLEdBQUcsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEMsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRU0sS0FBSyxDQUFDLFFBQWtDO1FBQzdDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsSUFBVyxhQUFhO1FBQ3RCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2xDLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNoQixNQUFNLElBQUksS0FBSyxDQUFDLDZEQUE2RCxDQUFDLENBQUM7U0FDaEY7UUFDRCxnRkFBZ0Y7UUFDaEYsa0hBQWtIO1FBQ2xILE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25DLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxVQUFVLENBQUMsQ0FBUztRQUN6QixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUM1QixPQUFPLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztTQUNqQztRQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELElBQVcsU0FBUztRQUNsQixNQUFNLEtBQUssR0FBRyxDQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0QsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxJQUFXLE9BQU87UUFDaEIsTUFBTSxLQUFLLEdBQUcsQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0NBRUY7QUFuRUQsZ0NBbUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVJhbmssIFJhbmsgfSBmcm9tICcuL3JhbmsnO1xuXG5mdW5jdGlvbiB0b0NhbWVsKHM6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcy5zbGljZSgxKTtcbn1cblxuZnVuY3Rpb24gdG9DYW1lbHMoczogc3RyaW5nW10pOiBzdHJpbmcge1xuICByZXR1cm4gcy5yZWR1Y2UoKGFjYywgd29yZCkgPT4gYWNjICsgdG9DYW1lbCh3b3JkKSwgJycpO1xufVxuXG5leHBvcnQgY2xhc3MgSWRlbnRpZmllciB7XG4gIHByaXZhdGUgY2hpbGRzOiBzdHJpbmdbXSA9IG5ldyBBcnJheSgpO1xuICBwdWJsaWMgcmFuazogUmFuaztcbiAgY29uc3RydWN0b3IocjogSVJhbmspIHtcbiAgICB0aGlzLnJhbmsgPSBuZXcgUmFuayhyKTtcbiAgfVxuXG4gIHB1YmxpYyBjaGlsZCh2YWx1ZTogc3RyaW5nIHwgSVJhbmspOiBJZGVudGlmaWVyIHtcbiAgICBjb25zdCBpZCA9IHRoaXMuY29weSgpO1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZC5jaGlsZHMucHVzaCh0b0NhbWVsKHZhbHVlKSk7XG4gICAgICByZXR1cm4gaWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpZC5jaGlsZHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3I6IEl0IGlzIGZvcmJpZGRlbiB0byBjYWxsICdjaGlsZChJUmFuayknIGZ1bmN0aW9ucywgYWZ0ZXIgJ2NoaWxkKHN0cmluZylgKTtcbiAgICAgIH1cbiAgICAgIGlkLnJhbmsgPSBpZC5yYW5rLmNvcHkodmFsdWUpO1xuICAgICAgcmV0dXJuIGlkO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjb3B5KCk6IElkZW50aWZpZXIge1xuICAgIGNvbnN0IGlkID0gbmV3IElkZW50aWZpZXIodGhpcy5yYW5rKTtcbiAgICBpZC5jaGlsZHMgPSBBcnJheS5mcm9tKHRoaXMuY2hpbGRzKTtcbiAgICByZXR1cm4gaWQ7XG4gIH1cblxuICBwdWJsaWMgc2NvcGUoY2FsbGJhY2s6IChpZDogSWRlbnRpZmllcikgPT4gdm9pZCkge1xuICAgIGNhbGxiYWNrKHRoaXMuY29weSgpKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc3RhY2tOYW1lKCk6IHN0cmluZ3tcbiAgICByZXR1cm4gdGhpcy5yYW5rLnRvQ2FtZWxTdHJpbmcoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgY29uc3RydWN0TmFtZSgpOiBzdHJpbmd7XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5jaGlsZHMubGVuZ3RoO1xuICAgIGlmIChsZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3I6IERvZXMgbm90IGhhdmUgYW55IGNoaWxkLiBQbGVhc2UgY2FsbCAnY2hpbGQoc3RyaW5nKSdgKTtcbiAgICB9XG4gICAgLy8gVGhlIGNkay5Db25zdHJ1Y3QgbmFtZXMgYExvZ2ljYWxJZGAgdXNpbmcgYHNjb3BlYChhcmdzWzBdKSBhbmQgYGlkYChhcmdzWzFdKS5cbiAgICAvLyBUaGUgc2NvcGUgdGhhdCBuZXN0ZWQgZnVuY3Rpb24gYWxyZWFkeSBzZXQgYGlkYCB0byBgc2NvcGVgLCBzbyBjb25zdHJ1Y3ROYW1lKCkgb25seSByZXR1cm4gbGFzdCB2YWx1ZSBvZiBhcnJheS5cbiAgICBjb25zdCB3b3JkID0gdGhpcy5jaGlsZHNbbGVuZ3RoLTFdO1xuICAgIHJldHVybiB0b0NhbWVsKHdvcmQpO1xuICB9XG5cbiAgcHVibGljIGV4cG9ydE5hbWUoczogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5jaGlsZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGFja05hbWUgKyAnOicgKyBzO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zdGFja05hbWUgKyAnOicgKyB0b0NhbWVscyh0aGlzLmNoaWxkcykgICsgJzonICsgdG9DYW1lbChzKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgY2FtZWxOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc3RhY2tOYW1lICsgdG9DYW1lbHModGhpcy5jaGlsZHMpO1xuICB9XG5cbiAgcHVibGljIGdldCBzbGFzaE5hbWUoKTogc3RyaW5nIHtcbiAgICBjb25zdCBhcnJheSA9IFsgdGhpcy5yYW5rLnRvU2xhc2hTdHJpbmcoKSwgLi4udGhpcy5jaGlsZHNdO1xuICAgIHJldHVybiBhcnJheS5qb2luKCcvJyk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRvdE5hbWUoKTogc3RyaW5nIHtcbiAgICBjb25zdCBhcnJheSA9IFsgdGhpcy5yYW5rLnRvRG90U3RyaW5nKCksIC4uLnRoaXMuY2hpbGRzXTtcbiAgICByZXR1cm4gYXJyYXkuam9pbignLicpO1xuICB9XG5cbn1cbiJdfQ==