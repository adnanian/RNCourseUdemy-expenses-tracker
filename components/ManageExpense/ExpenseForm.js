import { StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import { useState } from "react";
import CustomButton from "../UI/CustomButton";

export default function ExpenseForm({ onCancel, onSubmit }) {
    const [inputValues, setInputValues] = useState({
        amount: '',
        date: '',
        description: ''
    });

    function inputChangeHandler(inputIdentifier, enteredValue) {
        setInputValues((currentInputValues) => {
            return {
                ...currentInputValues,
                [inputIdentifier]: enteredValue
            }
        });
    }

    function submitHandler() {

    }

    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputsRow}>
                <Input label='Amount' style={styles.rowInput} textInputConfig={{
                    keyboardType: 'decimal-pad',
                    onChangeText: inputChangeHandler.bind(this, 'amount'),
                    value: inputValues.amount
                }} />
                <Input label='Date' style={styles.rowInput} textInputConfig={{
                    placeholder: 'YYYY-MM-DD',
                    maxLength: 10,
                    onChangeText: inputChangeHandler.bind(this, 'date'),
                    value: inputValues.date
                }} />
            </View>
            <Input label='Description' textInputConfig={{
                multiline: true,
                onChangeText: inputChangeHandler.bind(this, 'description'),
                value: inputValues.description
            }} />
            <View style={styles.buttonContainer}>
                <CustomButton
                    style={styles.button}
                    mode='flat'
                    onPress={onCancel}
                >
                    Cancel
                </CustomButton>
                <CustomButton
                    style={styles.button}
                    mode='button'
                    onPress={submitHandler}
                >
                    {submitButtonLabel}
                </CustomButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    form: {
        marginTop: 40
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 24,
        textAlign: 'center'
    },
    inputsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowInput: {
        flex: 1
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
});