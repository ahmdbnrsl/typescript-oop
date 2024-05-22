export namespace Interfaces {
    export type Primitive = string | number | boolean;

    export interface Xy {
        x: number;
        y: number;
    }

    export interface Datas<T> extends Xy {
        [index: number]: T;
    }
}

export namespace Tools {
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
        Type extends Array<Interfaces.Datas<Interfaces.Xy>>,
        XV extends number
    > {
        constructor(
            private data: Type,
            private XValue: XV
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

            let Y: number = A + B * this.XValue;

            return `
            X Data = ${x.join(', ')}
            Y Data = ${y.join(', ')}
            X Value = ${this.XValue}
            Y Value = ${Y}`;
        }
    }
}
