import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";

/**
 * 
 * @returns 
 */
export default function AllExpenses() {
    const expensesCtx = useContext(ExpensesContext);

    return (
        <ExpensesOutput
            expenses={expensesCtx.expenses}
            expensesPeriod='Total'
            fallbackText='No registered expenses found!'
        />
    )
}