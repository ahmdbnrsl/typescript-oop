import { Tools, Interfaces } from './main.js';
import data from './data.json' assert { type: 'json' };

const linearRegression = new Tools.LinearRegression<
    Array<Interfaces.Xy>,
    number
>(data, 7653);

console.log(linearRegression.SimpleLinearRegression);
