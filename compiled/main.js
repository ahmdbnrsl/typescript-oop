export var Tools;
(function (Tools) {
    class MathOperations {
        data1;
        data2;
        type;
        constructor(data1, data2, type) {
            this.data1 = data1;
            this.data2 = data2;
            this.type = type;
        }
        get result() {
            switch (this.type) {
                case 'tambah':
                    return Number(this.data1) + Number(this.data2);
                    break;
                case 'kurang':
                    return Number(this.data1) - Number(this.data2);
                    break;
                case 'bagi':
                    return Number(this.data1) / Number(this.data2);
                    break;
                case 'kali':
                    return Number(this.data1) * Number(this.data2);
                    break;
                case 'pangkat':
                    return Number(this.data1) ** Number(this.data2);
                    break;
                default:
                    return 'invalid query';
                    break;
            }
        }
    }
    Tools.MathOperations = MathOperations;
    class Print {
        static Log(text) {
            console.log(text);
        }
        static Info(text) {
            console.info(text);
        }
        static Errors(text) {
            console.error(text);
        }
    }
    Tools.Print = Print;
    class Time {
        static Timer(sec) {
            let count = sec * 100;
            console.log('start...');
            let detik = [];
            let milidetik = [];
            const counting = setInterval(() => {
                count--;
                const counts = count.toString().split('');
                if (counts.length < 3) {
                    milidetik = counts;
                    detik = [];
                }
                else if (counts.length < 4) {
                    milidetik = counts.slice(1);
                    detik = counts.slice(0, 1);
                }
                else if (counts.length >= 4) {
                    milidetik = counts.slice(2);
                    detik = counts.slice(0, 2);
                }
                console.log((detik.join('') ? detik.join('') + ' detik ' : '') +
                    milidetik.join('') +
                    ' milidetik');
            }, 10);
            setTimeout(() => {
                clearInterval(counting);
                console.log(sec + ' detik');
                console.log('finish!');
            }, (sec + 0.59) * 1000);
        }
    }
    Tools.Time = Time;
    class Rekursif {
        num;
        num2;
        num3;
        constructor(num, num2, num3) {
            this.num = num;
            this.num2 = num2;
            this.num3 = num3;
        }
        get Faktorial() {
            if (this.num === 0)
                return 1;
            let result = (this.num *
                new Rekursif(this.num - 1).Faktorial);
            console.log(result);
            return result;
        }
        get Fibonacci() {
            let nums = this.num2;
            if (this.num > nums)
                return this.num2;
            if (this.num > 0) {
                let history = this.num3;
                console.log(this.num);
                return new Rekursif(this.num + history, nums, this.num)
                    .Fibonacci;
            }
            console.log(this.num);
            return new Rekursif(this.num + 1, nums, this.num)
                .Fibonacci;
        }
    }
    Tools.Rekursif = Rekursif;
    class LinearRegression {
        data;
        XValue;
        constructor(data, XValue) {
            this.data = data;
            this.XValue = XValue;
        }
        get SimpleLinearRegression() {
            let x = [];
            let y = [];
            for (const item of this.data) {
                x.push(item.x);
                y.push(item.y);
            }
            let totalX = x.reduce((a, b) => a + b);
            let totalY = y.reduce((a, b) => a + b);
            let A = (totalY * totalX ** 2 - totalX * (totalX * totalY)) /
                (x.length * totalX ** 2 - totalX ** 2);
            let B = (x.length * (totalX * totalY) - totalX * totalY) /
                (x.length * totalX ** 2 - totalX ** 2);
            let Y = A + B * this.XValue;
            return `
            X Data = ${x.join(', ')}
            Y Data = ${y.join(', ')}
            X Value = ${this.XValue}
            Y Value = ${Y}`;
        }
    }
    Tools.LinearRegression = LinearRegression;
})(Tools || (Tools = {}));
