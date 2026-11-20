import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const C = {
  ink: "#12263A",
  sea: "#1F6F78",
  foam: "#F3F9F9",
  line: "#D5E3E4",
  muted: "#5F7480",
  sun: "#F2B84B",
};

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: C.foam }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={s.scroll}
        keyboardShouldPersistTaps="handled"
      >
        <View style={s.brand}>
          <View style={s.logo}>
            <Ionicons name="water" size={30} color={C.ink} />
          </View>
          <Text style={s.title}>Welcome back</Text>
          <Text style={s.subtitle}>Log in to see what your friends posted.</Text>
        </View>

        <View style={s.card}>
          <Text style={s.label}>Email</Text>
          <View style={s.field}>
            <Ionicons name="mail-outline" size={20} color={C.muted} />
            <TextInput
              style={s.input}
              placeholder="you@example.com"
              placeholderTextColor="#98A9B1"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
            />
          </View>

          <Text style={s.label}>Password</Text>
          <View style={s.field}>
            <Ionicons name="lock-closed-outline" size={20} color={C.muted} />
            <TextInput
              style={s.input}
              placeholder="Enter your password"
              placeholderTextColor="#98A9B1"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!show}
              autoCapitalize="none"
            />
            <Pressable onPress={() => setShow(!show)} hitSlop={10}>
              <Ionicons
                name={show ? "eye-off-outline" : "eye-outline"}
                size={20}
                color={C.muted}
              />
            </Pressable>
          </View>

          <Pressable style={({ pressed }) => [s.button, pressed && s.pressed]}>
            <Text style={s.buttonText}>Login</Text>
          </Pressable>
        </View>

        <View style={s.footer}>
          <Text style={s.footerText}>New here?</Text>
          <Link href="/register" style={s.link}>
            Create an account
          </Link>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const s = StyleSheet.create({
  scroll: { flexGrow: 1, justifyContent: "center", padding: 24 },
  brand: { alignItems: "center", marginBottom: 28 },
  logo: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: C.sun,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },
  title: { fontSize: 30, fontWeight: "800", color: C.ink },
  subtitle: { fontSize: 15, color: C.muted, marginTop: 6, textAlign: "center" },
  card: {
    backgroundColor: "#fff",
    borderRadius: 24,
    padding: 22,
    borderWidth: 1,
    borderColor: C.line,
  },
  label: { fontSize: 14, fontWeight: "600", color: C.ink, marginBottom: 8 },
  field: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: C.foam,
    borderWidth: 1,
    borderColor: C.line,
    borderRadius: 14,
    paddingHorizontal: 14,
    height: 52,
    marginBottom: 18,
  },
  input: { flex: 1, fontSize: 16, color: C.ink },
  button: {
    backgroundColor: C.sea,
    height: 54,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
  },
  pressed: { opacity: 0.85 },
  buttonText: { color: "#fff", fontSize: 17, fontWeight: "700" },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 6,
    marginTop: 24,
  },
  footerText: { color: C.muted, fontSize: 15 },
  link: { color: C.sea, fontSize: 15, fontWeight: "700" },
});
