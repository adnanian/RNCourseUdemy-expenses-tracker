import { useContext, useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../components/ui/IconButton";
import { GlobalStyles } from "../constants/styles";
import CustomButton from "../components/ui/CustomButton";
import { ExpensesContext } from "../store/expenses-context";
export default function ManageExpense({ route, navigation }) {
    const expensesCtx = useContext(ExpensesContext);
    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        });
    }, [navigation, isEditing]);

    function cancelHandler() {
        navigation.goBack();
    }

    function confirmHandler() {
        if (isEditing) {
            expensesCtx.updateExpense(editedExpenseId, { description: 'TEST_UPDATE', amount: 29.99, date: new Date('2025-04-29') });
        } else {
            expensesCtx.addExpense({ description: 'TEST_ADD', amount: 19.99, date: new Date('2025-04-28') });
        }
        navigation.goBack();
    }

    function deleteExpenseHandler() {
        expensesCtx.deleteExpense(editedExpenseId);
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <CustomButton
                    style={styles.button}
                    mode='flat'
                    onPress={cancelHandler}
                >
                    Cancel
                </CustomButton>
                <CustomButton
                    style={styles.button}
                    mode='button'
                    onPress={confirmHandler}
                >
                    {isEditing ? 'Update' : 'Add'}
                </CustomButton>
            </View>
            {isEditing && (
                <View style={styles.deleteContainer}>
                    <IconButton
                        icon='trash'
                        color={GlobalStyles.colors.error500}
                        size={36}
                        onPress={deleteExpenseHandler}
                    />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center'
    }
})