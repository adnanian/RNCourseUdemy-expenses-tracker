import axios from "axios";

const BACKEND_URL = 'https://react-native-course-40f70-default-rtdb.firebaseio.com';

/**
 * 
 * @param {*} expenseData 
 * @returns 
 */
export async function storeExpense(expenseData) {
    const response = await axios.post(BACKEND_URL + '/expenses.json', expenseData);
    const id = response.data.name;
    return id;
}

/**
 * 
 * @returns 
 */
export async function fetchExpenses() {
    const response = await axios.get(BACKEND_URL + '/expenses.json');
    const expenses = [];
    for (const key in response.data) {
        const expenseObject = {
            id: key,
            amount: response.data[key].amount,
            date: new Date(response.data[key].date),
            description: response.data[key].description
        }
        expenses.push(expenseObject);
    };
    return expenses;
}


export function updateExpense(id, expenseData) {
    return axios.put(BACKEND_URL + `/expenses/${id}.json`, expenseData);
}

export function deleteExpense(id) {
    return axios.delete(BACKEND_URL + `/expenses/${id}.json`);
}