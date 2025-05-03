import { FlatList, Text } from "react-native";
import ExpenseItem from "./ExpenseItem";

/**
 * 
 * @param {*} itemData 
 * @returns 
 */
function renderExpenseItem(itemData) {
    return (
        <ExpenseItem {...itemData.item} />
    )
}

export default function ExpensesList({ expenses }) {
    return (
        <FlatList
            data={expenses}
            renderItem={renderExpenseItem}
            keyExtractor={(item) => item.id}
        />
    );
}