export var Tools;
(function (Tools) {
    Tools.PI = (radius) => radius % 7 === 0 ? 22 / 7 : 3.14;
    class Volume {
        static Kubus = (sisi) => sisi ** 3;
        static Balok = (panjang, lebar, tinggi) => panjang * lebar * tinggi;
        static Tabung = (radius, tinggi) => Tools.PI(radius) * radius * radius * tinggi;
        static Bola = (radius) => Tools.PI(radius) * radius * radius * radius;
    }
    Tools.Volume = Volume;
    class Luas {
        static PermukaanKubus = (sisi) => sisi * sisi * 6 + ' cm²';
        static PermukaanBalok = (panjang, lebar, tinggi) => {
            let luasAtasBawah = panjang * lebar;
            let luasSamping = panjang * tinggi;
            let luasDepanBelakang = lebar * tinggi;
            return ((luasAtasBawah + luasSamping + luasDepanBelakang) * 2 + ' cm²');
        };
        static PermukaanTabung = (radius, tinggi) => {
            let kelilingLingkaran = Tools.PI(radius) * radius;
            let luasAlasTutup = Tools.PI(radius) * radius * radius * 2;
            let luasSisiTabung = kelilingLingkaran * tinggi;
            return luasAlasTutup + luasSisiTabung + ' cm²';
        };
    }
    Tools.Luas = Luas;
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
        xValue;
        constructor(data, xValue) {
            this.data = data;
            this.xValue = xValue;
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
            let Y = A + B * this.xValue;
            return `
            X Data = ${x.join(', ')}
            Y Data = ${y.join(', ')}
            X Value = ${this.xValue}
            Y Value = ${Y}`;
        }
    }
    Tools.LinearRegression = LinearRegression;
    class Akar {
        numbers;
        constructor(numbers) {
            this.numbers = numbers;
        }
        get result() {
            return Math.sqrt(this.numbers);
        }
    }
    Tools.Akar = Akar;
    class Factor {
        num1;
        num2;
        constructor(num1, num2) {
            this.num1 = num1;
            this.num2 = num2;
        }
        get RESULT() {
            let FPB = 0;
            let KPK = 0;
            let smaller = Math.min(this.num1, this.num2);
            for (let i = 1; i <= smaller; i++) {
                if (this.num1 % i === 0 && this.num2 % i === 0) {
                    FPB = i;
                }
            }
            function gcd(a, b) {
                for (let temp = b; b !== 0;) {
                    b = a % b;
                    a = temp;
                    temp = b;
                }
                return a;
            }
            function lcmFunction(a, b) {
                const gcdValue = gcd(a, b);
                return (a * b) / gcdValue;
            }
            KPK = lcmFunction(this.num1, this.num2);
            return `
            FPB = ${FPB}
            KPK = ${KPK}`;
        }
    }
    Tools.Factor = Factor;
})(Tools || (Tools = {}));
