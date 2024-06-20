export namespace Interfaces {
    export type Primitive = string | number | boolean;

    export interface Xy {
        x: number;
        y: number;
    }
}

export namespace Tools {
    export const PI = (radius: number): number =>
        radius % 7 === 0 ? 22 / 7 : 3.14;
    export class Volume {
        static Kubus = (sisi: number): number => sisi ** 3;
        static Balok = (
            panjang: number,
            lebar: number,
            tinggi: number
        ): number => panjang * lebar * tinggi;
        static Tabung = (radius: number, tinggi: number): number =>
            PI(radius) * radius * radius * tinggi;
        static Bola = (radius: number): number =>
            PI(radius) * radius * radius * radius;
    }
    export class Luas {
        static PermukaanKubus = (sisi: number): string =>
            sisi * sisi * 6 + ' cm²';
        static PermukaanBalok = (
            panjang: number,
            lebar: number,
            tinggi: number
        ): string => {
            let luasAtasBawah: number = panjang * lebar;
            let luasSamping: number = panjang * tinggi;
            let luasDepanBelakang: number = lebar * tinggi;

            return (
                (luasAtasBawah + luasSamping + luasDepanBelakang) * 2 + ' cm²'
            );
        };
        static PermukaanTabung = (radius: number, tinggi: number): string => {
            let kelilingLingkaran: number = PI(radius) * radius;
            let luasAlasTutup: number = PI(radius) * radius * radius * 2;
            let luasSisiTabung: number = kelilingLingkaran * tinggi;

            return luasAlasTutup + luasSisiTabung + ' cm²';
        };
    }
    export class MathOperations<Operand, Operators> {
        constructor(
            private data1: Operand,
            private data2: Operand,
            private type: Operators
        ) {}

        get result(): string | number {
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

    export class Print {
        static Log(text: Interfaces.Primitive): void {
            console.log(text);
        }
        static Info(text: Interfaces.Primitive): void {
            console.info(text);
        }
        static Errors(text: Interfaces.Primitive): void {
            console.error(text);
        }
    }

    export class Time {
        static Timer(sec: number): void {
            let count = sec * 100;
            console.log('start...');
            let detik: Array<string> = [];
            let milidetik: Array<string> = [];
            const counting: number = setInterval(() => {
                count--;
                const counts = count.toString().split('');
                if (counts.length < 3) {
                    milidetik = counts;
                    detik = [];
                } else if (counts.length < 4) {
                    milidetik = counts.slice(1);
                    detik = counts.slice(0, 1);
                } else if (counts.length >= 4) {
                    milidetik = counts.slice(2);
                    detik = counts.slice(0, 2);
                }
                console.log(
                    (detik.join('') ? detik.join('') + ' detik ' : '') +
                        milidetik.join('') +
                        ' milidetik'
                );
            }, 10);
            setTimeout(
                () => {
                    clearInterval(counting);
                    console.log(sec + ' detik');
                    console.log('finish!');
                },
                (sec + 0.59) * 1000
            );
        }
    }

    export class Rekursif<T extends number> {
        constructor(
            private num: T,
            private num2?: T,
            private num3?: T
        ) {}

        get Faktorial(): T {
            if (this.num === 0) return 1 as T;
            let result: T = (this.num *
                new Rekursif<number>(this.num - 1).Faktorial) as T;
            console.log(result);
            return result;
        }

        get Fibonacci(): T {
            let nums: T = this.num2 as T;
            if (this.num > nums) return this.num2 as T;
            if (this.num > 0) {
                let history: T = this.num3 as T;
                console.log(this.num);
                return new Rekursif<number>(this.num + history, nums, this.num)
                    .Fibonacci as T;
            }
            console.log(this.num);
            return new Rekursif<number>(this.num + 1, nums, this.num)
                .Fibonacci as T;
        }
    }

    export class LinearRegression<
        Data extends Array<Interfaces.Xy>,
        XValue extends number
    > {
        constructor(
            private data: Data,
            private xValue: XValue
        ) {}

        get SimpleLinearRegression(): string {
            let x: Array<number> = [];
            let y: Array<number> = [];

            for (const item of this.data) {
                x.push(item.x);
                y.push(item.y);
            }

            let totalX: number = x.reduce((a, b) => a + b);
            let totalY: number = y.reduce((a, b) => a + b);

            let A: number =
                (totalY * totalX ** 2 - totalX * (totalX * totalY)) /
                (x.length * totalX ** 2 - totalX ** 2);

            let B: number =
                (x.length * (totalX * totalY) - totalX * totalY) /
                (x.length * totalX ** 2 - totalX ** 2);

            let Y: number = A + B * this.xValue;

            return `
            X Data = ${x.join(', ')}
            Y Data = ${y.join(', ')}
            X Value = ${this.xValue}
            Y Value = ${Y}`;
        }
    }

    export class Akar<T extends number> {
        constructor(private numbers: T) {}

        get result(): T {
            return Math.sqrt(this.numbers) as T;
        }
    }

    export class Factor<T extends number> {
        constructor(
            private num1: T,
            private num2: T
        ) {}

        get RESULT(): string {
            let FPB = 0;
            let KPK = 0;
            let smaller = Math.min(this.num1, this.num2);

            for (let i = 1; i <= smaller; i++) {
                if (this.num1 % i === 0 && this.num2 % i === 0) {
                    FPB = i;
                }
            }

            function gcd(a: number, b: number): number {
                for (let temp = b; b !== 0; ) {
                    b = a % b;
                    a = temp;
                    temp = b;
                }
                return a;
            }

            function lcmFunction(a: number, b: number): number {
                const gcdValue = gcd(a, b);
                return (a * b) / gcdValue;
            }
            KPK = lcmFunction(this.num1, this.num2);

            return `
            FPB = ${FPB}
            KPK = ${KPK}`;
        }
    }
}
