"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash = require("lodash");
const _ = lodash;
var RankLoc;
(function (RankLoc) {
    RankLoc[RankLoc["Empire"] = 0] = "Empire";
    RankLoc[RankLoc["Kingdom"] = 1] = "Kingdom";
    RankLoc[RankLoc["Division"] = 2] = "Division";
    RankLoc[RankLoc["Section"] = 3] = "Section";
    RankLoc[RankLoc["Legion"] = 4] = "Legion";
    RankLoc[RankLoc["Cohort"] = 5] = "Cohort";
    RankLoc[RankLoc["Family"] = 6] = "Family";
    RankLoc[RankLoc["Tribe"] = 7] = "Tribe";
    RankLoc[RankLoc["Genus"] = 8] = "Genus";
    RankLoc[RankLoc["Series"] = 9] = "Series";
    RankLoc[RankLoc["Species"] = 10] = "Species";
})(RankLoc = exports.RankLoc || (exports.RankLoc = {}));
class Rank {
    constructor(r) {
        this.empire = '';
        this.kingdom = '';
        this.division = '';
        this.section = '';
        this.legion = '';
        this.cohort = '';
        this.family = '';
        this.tribe = '';
        this.genus = '';
        this.series = '';
        this.species = '';
        this.expands(r);
    }
    expands(r) {
        this.empire = r.empire || this.empire;
        this.kingdom = r.kingdom || this.kingdom;
        this.division = r.division || this.division;
        this.section = r.section || this.section;
        this.legion = r.legion || this.legion;
        this.cohort = r.cohort || this.cohort;
        this.family = r.family || this.family;
        this.tribe = r.tribe || this.tribe;
        this.genus = r.genus || this.genus;
        this.series = r.series || this.series;
        this.species = r.species || this.species;
    }
    copy(r) {
        const ret = _.cloneDeep(this);
        if (r) {
            ret.expands(r);
        }
        return ret;
    }
    toArray() {
        const array = new Array();
        array.push(this.empire);
        array.push(this.kingdom);
        array.push(this.division);
        array.push(this.section);
        array.push(this.legion);
        array.push(this.cohort);
        array.push(this.family);
        array.push(this.tribe);
        array.push(this.genus);
        array.push(this.series);
        array.push(this.species);
        return array;
    }
    toArrayWithLoc(start, end) {
        start = start !== undefined ? start : Rank.DEFAULT_START_LOC;
        end = end !== undefined ? end + 1 : undefined;
        const array = this.toArray().slice(start, end);
        return array.filter(Boolean);
    }
    getValue(loc) {
        return this.toArray()[loc];
    }
    capitalizeString(start, end) {
        const array = this.toArrayWithLoc(start, end);
        return array.reduce((acc, word) => acc + word.charAt(0).toUpperCase() + word.slice(1), '');
    }
    slashString(start, end) {
        const array = this.toArrayWithLoc(start, end);
        return array.join('/');
    }
    dotString(start, end) {
        const array = this.toArrayWithLoc(start, end);
        return array.join('.');
    }
}
exports.Rank = Rank;
Rank.DEFAULT_START_LOC = RankLoc.Empire;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9yYW5rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQWlDO0FBQ2pDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQztBQWdCakIsSUFBWSxPQVlYO0FBWkQsV0FBWSxPQUFPO0lBQ2pCLHlDQUFVLENBQUE7SUFDViwyQ0FBTyxDQUFBO0lBQ1AsNkNBQVEsQ0FBQTtJQUNSLDJDQUFPLENBQUE7SUFDUCx5Q0FBTSxDQUFBO0lBQ04seUNBQU0sQ0FBQTtJQUNOLHlDQUFNLENBQUE7SUFDTix1Q0FBSyxDQUFBO0lBQ0wsdUNBQUssQ0FBQTtJQUNMLHlDQUFNLENBQUE7SUFDTiw0Q0FBTyxDQUFBO0FBQ1QsQ0FBQyxFQVpXLE9BQU8sR0FBUCxlQUFPLEtBQVAsZUFBTyxRQVlsQjtBQU9ELE1BQWEsSUFBSTtJQWNmLFlBQVksQ0FBUTtRQVpiLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUNyQixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFDckIsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixXQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUcxQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFFTyxPQUFPLENBQUMsQ0FBUTtRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN0QyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxPQUFPLElBQUks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WTtRQUMxQixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRU0sZ0JBQWdCLENBQUMsS0FBZSxFQUFFLEdBQWE7UUFDcEQsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDOUMsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM3RixDQUFDO0lBRU0sV0FBVyxDQUFDLEtBQWUsRUFBRSxHQUFhO1FBQy9DLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRU0sU0FBUyxDQUFDLEtBQWUsRUFBRSxHQUFhO1FBQzdDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDOztBQWhGSCxvQkFrRkM7QUFqRmUsc0JBQWlCLEdBQVcsT0FBTyxDQUFDLE1BQU0sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGxvZGFzaCBmcm9tICdsb2Rhc2gnO1xuY29uc3QgXyA9IGxvZGFzaDtcblxuZXhwb3J0IGludGVyZmFjZSBJUmFuayB7XG4gIGVtcGlyZT86IHN0cmluZztcbiAga2luZ2RvbT86IHN0cmluZztcbiAgZGl2aXNpb24/OiBzdHJpbmc7XG4gIHNlY3Rpb24/OiBzdHJpbmc7XG4gIGxlZ2lvbj86IHN0cmluZztcbiAgY29ob3J0Pzogc3RyaW5nO1xuICBmYW1pbHk/OiBzdHJpbmc7XG4gIHRyaWJlPzogc3RyaW5nO1xuICBnZW51cz86IHN0cmluZztcbiAgc2VyaWVzPzogc3RyaW5nO1xuICBzcGVjaWVzPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZW51bSBSYW5rTG9jIHtcbiAgRW1waXJlID0gMCxcbiAgS2luZ2RvbSxcbiAgRGl2aXNpb24sXG4gIFNlY3Rpb24sXG4gIExlZ2lvbixcbiAgQ29ob3J0LFxuICBGYW1pbHksXG4gIFRyaWJlLFxuICBHZW51cyxcbiAgU2VyaWVzLFxuICBTcGVjaWVzLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJhbmtMb2NBcmdzIHtcbiAgc3RhcnQ/OiBSYW5rTG9jO1xuICBlbmQ/OiBSYW5rTG9jO1xufVxuXG5leHBvcnQgY2xhc3MgUmFuayBpbXBsZW1lbnRzIElSYW5rIHtcbiAgcHVibGljIHN0YXRpYyBERUZBVUxUX1NUQVJUX0xPQzpSYW5rTG9jID0gUmFua0xvYy5FbXBpcmU7XG4gIHB1YmxpYyBlbXBpcmU6IHN0cmluZyA9ICcnO1xuICBwdWJsaWMga2luZ2RvbTogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBkaXZpc2lvbjogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBzZWN0aW9uOiBzdHJpbmcgPSAnJztcbiAgcHVibGljIGxlZ2lvbjogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBjb2hvcnQ6IHN0cmluZyA9ICcnO1xuICBwdWJsaWMgZmFtaWx5OiBzdHJpbmcgPSAnJztcbiAgcHVibGljIHRyaWJlOiBzdHJpbmcgPSAnJztcbiAgcHVibGljIGdlbnVzOiBzdHJpbmcgPSAnJztcbiAgcHVibGljIHNlcmllczogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBzcGVjaWVzOiBzdHJpbmcgPSAnJztcblxuICBjb25zdHJ1Y3RvcihyOiBJUmFuaykge1xuICAgIHRoaXMuZXhwYW5kcyhyKTtcbiAgfVxuXG4gIHByaXZhdGUgZXhwYW5kcyhyOiBJUmFuaykge1xuICAgIHRoaXMuZW1waXJlID0gci5lbXBpcmUgfHwgdGhpcy5lbXBpcmU7XG4gICAgdGhpcy5raW5nZG9tID0gci5raW5nZG9tIHx8IHRoaXMua2luZ2RvbTtcbiAgICB0aGlzLmRpdmlzaW9uID0gci5kaXZpc2lvbiB8fCB0aGlzLmRpdmlzaW9uO1xuICAgIHRoaXMuc2VjdGlvbiA9IHIuc2VjdGlvbiB8fCB0aGlzLnNlY3Rpb247XG4gICAgdGhpcy5sZWdpb24gPSByLmxlZ2lvbiB8fCB0aGlzLmxlZ2lvbjtcbiAgICB0aGlzLmNvaG9ydCA9IHIuY29ob3J0IHx8IHRoaXMuY29ob3J0O1xuICAgIHRoaXMuZmFtaWx5ID0gci5mYW1pbHkgfHwgdGhpcy5mYW1pbHk7XG4gICAgdGhpcy50cmliZSA9IHIudHJpYmUgfHwgdGhpcy50cmliZTtcbiAgICB0aGlzLmdlbnVzID0gci5nZW51cyB8fCB0aGlzLmdlbnVzO1xuICAgIHRoaXMuc2VyaWVzID0gci5zZXJpZXMgfHwgdGhpcy5zZXJpZXM7XG4gICAgdGhpcy5zcGVjaWVzID0gci5zcGVjaWVzIHx8IHRoaXMuc3BlY2llcztcbiAgfVxuXG4gIHB1YmxpYyBjb3B5KHI/OiBJUmFuaykge1xuICAgIGNvbnN0IHJldCA9IF8uY2xvbmVEZWVwKHRoaXMpO1xuICAgIGlmIChyKSB7XG4gICAgICByZXQuZXhwYW5kcyhyKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHByaXZhdGUgdG9BcnJheSgpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgYXJyYXkgOiBzdHJpbmdbXSA9IG5ldyBBcnJheSgpO1xuICAgIGFycmF5LnB1c2godGhpcy5lbXBpcmUpO1xuICAgIGFycmF5LnB1c2godGhpcy5raW5nZG9tKTtcbiAgICBhcnJheS5wdXNoKHRoaXMuZGl2aXNpb24pO1xuICAgIGFycmF5LnB1c2godGhpcy5zZWN0aW9uKTtcbiAgICBhcnJheS5wdXNoKHRoaXMubGVnaW9uKTtcbiAgICBhcnJheS5wdXNoKHRoaXMuY29ob3J0KTtcbiAgICBhcnJheS5wdXNoKHRoaXMuZmFtaWx5KTtcbiAgICBhcnJheS5wdXNoKHRoaXMudHJpYmUpO1xuICAgIGFycmF5LnB1c2godGhpcy5nZW51cyk7XG4gICAgYXJyYXkucHVzaCh0aGlzLnNlcmllcyk7XG4gICAgYXJyYXkucHVzaCh0aGlzLnNwZWNpZXMpO1xuICAgIHJldHVybiBhcnJheTtcbiAgfVxuXG4gIHByaXZhdGUgdG9BcnJheVdpdGhMb2Moc3RhcnQ/OiBSYW5rTG9jLCBlbmQ/OiBSYW5rTG9jKTogc3RyaW5nW10ge1xuICAgIHN0YXJ0ID0gc3RhcnQgIT09IHVuZGVmaW5lZD8gc3RhcnQ6IFJhbmsuREVGQVVMVF9TVEFSVF9MT0M7XG4gICAgZW5kID0gZW5kICE9PSB1bmRlZmluZWQ/IGVuZCsxOiB1bmRlZmluZWQ7XG4gICAgY29uc3QgYXJyYXkgPSB0aGlzLnRvQXJyYXkoKS5zbGljZShzdGFydCwgZW5kKTtcbiAgICByZXR1cm4gYXJyYXkuZmlsdGVyKEJvb2xlYW4pO1xuICB9XG5cbiAgcHVibGljIGdldFZhbHVlKGxvYzogUmFua0xvYyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudG9BcnJheSgpW2xvY107XG4gIH1cblxuICBwdWJsaWMgY2FwaXRhbGl6ZVN0cmluZyhzdGFydD86IFJhbmtMb2MsIGVuZD86IFJhbmtMb2MpOiBzdHJpbmcge1xuICAgIGNvbnN0IGFycmF5ID0gdGhpcy50b0FycmF5V2l0aExvYyhzdGFydCwgZW5kKTtcbiAgICByZXR1cm4gYXJyYXkucmVkdWNlKChhY2MsIHdvcmQpID0+IGFjYyArIHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnNsaWNlKDEpLCAnJyk7XG4gIH1cblxuICBwdWJsaWMgc2xhc2hTdHJpbmcoc3RhcnQ/OiBSYW5rTG9jLCBlbmQ/OiBSYW5rTG9jKTogc3RyaW5nIHtcbiAgICBjb25zdCBhcnJheSA9IHRoaXMudG9BcnJheVdpdGhMb2Moc3RhcnQsIGVuZCk7XG4gICAgcmV0dXJuIGFycmF5LmpvaW4oJy8nKTtcbiAgfVxuXG4gIHB1YmxpYyBkb3RTdHJpbmcoc3RhcnQ/OiBSYW5rTG9jLCBlbmQ/OiBSYW5rTG9jKTogc3RyaW5nIHtcbiAgICBjb25zdCBhcnJheSA9IHRoaXMudG9BcnJheVdpdGhMb2Moc3RhcnQsIGVuZCk7XG4gICAgcmV0dXJuIGFycmF5LmpvaW4oJy4nKTtcbiAgfVxuXG59XG4iXX0=