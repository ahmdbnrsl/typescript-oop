import { Tools, Interfaces } from './main.js';
import data from './data.json' assert { type: 'json' };

const linearRegression = new Tools.LinearRegression<
    Array<Interfaces.Datas<Interfaces.Xy>>,
    number
>(data, 10);

console.log(linearRegression.SimpleLinearRegression);
