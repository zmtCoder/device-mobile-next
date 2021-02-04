"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventBus = (function () {
    function EventBus() {
        this.eventMap = {};
    }
    EventBus.prototype.on = function (eventName, callback) {
        if (!this.eventMap[eventName]) {
            this.eventMap[eventName] = [];
        }
        var cd = this.eventMap[eventName].find(function (cd) { return cd === callback; });
        if (!cd) {
            this.eventMap[eventName].push(callback);
        }
    };
    EventBus.prototype.emit = function (eventName) {
        var arg = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            arg[_i - 1] = arguments[_i];
        }
        var fnArr = this.eventMap[eventName];
        if (!fnArr || fnArr.length === 0)
            return;
        fnArr.forEach(function (fn) {
            fn.apply(void 0, arg);
        });
    };
    EventBus.prototype.off = function (eventName, fn) {
        var fnArr = this.eventMap[eventName];
        if (!fnArr || fnArr.length === 0)
            return;
        if (!fn) {
            this.eventMap[eventName] = [];
            delete this.eventMap[eventName];
        }
        else {
            var index = this.eventMap[eventName].findIndex(function (cd) { return cd === fn; });
            if (index >= 0) {
                this.eventMap[eventName].splice(index, 1);
            }
        }
    };
    return EventBus;
}());
exports.default = new EventBus();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRCdXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJldmVudEJ1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU1BO0lBQUE7UUFDVSxhQUFRLEdBQWEsRUFBRSxDQUFBO0lBdUNqQyxDQUFDO0lBckNDLHFCQUFFLEdBQUYsVUFBSSxTQUFtQixFQUFFLFFBQWtCO1FBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFBO1NBQzlCO1FBRUQsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLEtBQUssUUFBUSxFQUFmLENBQWUsQ0FBQyxDQUFBO1FBRS9ELElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDUCxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtTQUN4QztJQUNILENBQUM7SUFFRCx1QkFBSSxHQUFKLFVBQU0sU0FBbUI7UUFBRSxhQUFhO2FBQWIsVUFBYSxFQUFiLHFCQUFhLEVBQWIsSUFBYTtZQUFiLDRCQUFhOztRQUN0QyxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBRXRDLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQUUsT0FBTTtRQUV4QyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsRUFBRTtZQUNkLEVBQUUsZUFBSSxHQUFHLEVBQUM7UUFDWixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxzQkFBRyxHQUFILFVBQUssU0FBbUIsRUFBRSxFQUFhO1FBQ3JDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUE7UUFFdEMsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUM7WUFBRSxPQUFNO1FBRXhDLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDUCxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQTtZQUM3QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUE7U0FDaEM7YUFBTTtZQUNMLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxLQUFLLEVBQUUsRUFBVCxDQUFTLENBQUMsQ0FBQTtZQUNqRSxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO2FBQzFDO1NBQ0Y7SUFDSCxDQUFDO0lBQ0gsZUFBQztBQUFELENBQUMsQUF4Q0QsSUF3Q0M7QUFFRCxrQkFBZSxJQUFJLFFBQVEsRUFBRSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW1pdEVudW0gfSBmcm9tICcuL2V2ZW50RW1pdEVudW0nXHJcblxyXG5pbnRlcmZhY2UgRXZlbnRNYXAge1xyXG4gIFtwcm9wTmFtZTogc3RyaW5nXTogRnVuY3Rpb25bXVxyXG59XHJcblxyXG5jbGFzcyBFdmVudEJ1cyB7XHJcbiAgcHJpdmF0ZSBldmVudE1hcDogRXZlbnRNYXAgPSB7fVxyXG5cclxuICBvbiAoZXZlbnROYW1lOiBFbWl0RW51bSwgY2FsbGJhY2s6IEZ1bmN0aW9uKSB7XHJcbiAgICBpZiAoIXRoaXMuZXZlbnRNYXBbZXZlbnROYW1lXSkge1xyXG4gICAgICB0aGlzLmV2ZW50TWFwW2V2ZW50TmFtZV0gPSBbXVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNkID0gdGhpcy5ldmVudE1hcFtldmVudE5hbWVdLmZpbmQoY2QgPT4gY2QgPT09IGNhbGxiYWNrKVxyXG5cclxuICAgIGlmICghY2QpIHtcclxuICAgICAgdGhpcy5ldmVudE1hcFtldmVudE5hbWVdLnB1c2goY2FsbGJhY2spXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBlbWl0IChldmVudE5hbWU6IEVtaXRFbnVtLCAuLi5hcmc6IGFueVtdKSB7XHJcbiAgICBjb25zdCBmbkFyciA9IHRoaXMuZXZlbnRNYXBbZXZlbnROYW1lXVxyXG5cclxuICAgIGlmICghZm5BcnIgfHwgZm5BcnIubGVuZ3RoID09PSAwKSByZXR1cm5cclxuXHJcbiAgICBmbkFyci5mb3JFYWNoKGZuID0+IHtcclxuICAgICAgZm4oLi4uYXJnKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIG9mZiAoZXZlbnROYW1lOiBFbWl0RW51bSwgZm4/OiBGdW5jdGlvbikge1xyXG4gICAgY29uc3QgZm5BcnIgPSB0aGlzLmV2ZW50TWFwW2V2ZW50TmFtZV1cclxuXHJcbiAgICBpZiAoIWZuQXJyIHx8IGZuQXJyLmxlbmd0aCA9PT0gMCkgcmV0dXJuXHJcblxyXG4gICAgaWYgKCFmbikge1xyXG4gICAgICB0aGlzLmV2ZW50TWFwW2V2ZW50TmFtZV0gPSBbXVxyXG4gICAgICBkZWxldGUgdGhpcy5ldmVudE1hcFtldmVudE5hbWVdXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuZXZlbnRNYXBbZXZlbnROYW1lXS5maW5kSW5kZXgoY2QgPT4gY2QgPT09IGZuKVxyXG4gICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgIHRoaXMuZXZlbnRNYXBbZXZlbnROYW1lXS5zcGxpY2UoaW5kZXgsIDEpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBFdmVudEJ1cygpIl19