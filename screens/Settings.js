import { useTheme } from "@emotion/react";
import axios from "axios";
import { Alert, Text } from "react-native";
import Button from "../components/Button";
import Card from "../components/Card";
import KeyboardAvoidingScrollView from "../components/KeyboardAvoidingScrollView";
import { clearBudget, clearBudgetExpenses } from "../state/budgetSlice";
import { clearExpenses } from "../state/expensesSlice";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import useColor from "../useColor";

export default function Settings({ navigation }) {
  const theme = useTheme();
  const token = useAppSelector((state) => state.auth.token);
  const state = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const color = useColor();
  function handleLogout() {
    resetApp();
    navigation.reset({
      index: 0,
      routes: [{ name: "Start" }],
    });
  }

  function resetApp() {
    dispatch(clearBudget());
    dispatch(clearExpenses());
  }
  function handleSync() {
    axios
      .patch("https://cs-backend.herokuapp.com/data", state, {
        headers: { "auth-token": token },
      })
      .then((res) => {
        Alert.alert("Data synced to the cloud!");
      });
  }
  function handleDelete() {
    axios
      .delete("https://cs-backend.herokuapp.com/data", {
        headers: { "auth-token": token },
      })
      .then((res) => {
        handleLogout();
      });
  }
  function handleNewBudget() {
    Alert.alert(`Create a new Budget`, undefined, [
      { text: "Cancel", style: "cancel" },
      {
        text: "Clear Expenses",
        onPress: () => {
          dispatch(clearExpenses());
          dispatch(clearBudgetExpenses());
          Alert.alert("Expenses Cleared");
        },
      },
      {
        text: "Clear Budget & Expenses",
        onPress: () => {
          resetApp();
          Alert.alert("Budget & Expenses Cleared");
        },
      },
    ]);
  }
  const { name, email, phone } = state.auth;
  return (
    <KeyboardAvoidingScrollView>
      {token ? (
        <>
          <Text
            style={{
              fontSize: 20,
              margin: 10,
              fontWeight: "bold",
              color: color.font,
            }}
          >
            Account Info
          </Text>
          <Info title="Name" value={name} />
          <Info title="Email" value={email} />
          <Info title="Phone Number" value={phone} />
          <Text
            style={{
              fontSize: 20,
              margin: 10,
              fontWeight: "bold",
              color: color.font,
            }}
          >
            Actions
          </Text>
          <Button title="Logout" onPress={handleLogout} />
          <Button title="Delete Account" onPress={handleDelete} />
          <Button title="Sync To Cloud" onPress={handleSync} />
        </>
      ) : (
        <>
          <Text
            style={{
              fontSize: 20,
              margin: 10,
              fontWeight: "bold",
              color: color.font,
            }}
          >
            Actions
          </Text>
          <Button title="Use an Account" onPress={handleLogout} />
        </>
      )}
      <Button title="Start New Budget" onPress={handleNewBudget} />
    </KeyboardAvoidingScrollView>
  );
}

function Info({ title, value }) {
  const color = useColor();
  return (
    <Card margin>
      <Text style={{ fontSize: 20, fontWeight: "bold", color: color.font }}>
        {title}
      </Text>
      <Text
        style={{
          fontSize: 25,
          flexDirection: "row",
          textAlign: "left",
          color: color.font,
        }}
      >
        {value}
      </Text>
    </Card>
  );
}
