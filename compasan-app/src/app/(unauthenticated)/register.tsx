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

type FieldProps = {
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  placeholder: string;
  value: string;
  onChangeText: (t: string) => void;
  secure?: boolean;
  keyboardType?: "default" | "email-address";
  autoCapitalize?: "none" | "words";
};

function Field({
  label,
  icon,
  placeholder,
  value,
  onChangeText,
  secure,
  keyboardType = "default",
  autoCapitalize = "none",
}: FieldProps) {
  return (
    <>
      <Text style={s.label}>{label}</Text>
      <View style={s.field}>
        <Ionicons name={icon} size={20} color={C.muted} />
        <TextInput
          style={s.input}
          placeholder={placeholder}
          placeholderTextColor="#98A9B1"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secure}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
        />
      </View>
    </>
  );
}

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

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
          <Text style={s.title}>Create your account</Text>
          <Text style={s.subtitle}>It takes less than a minute.</Text>
        </View>

        <View style={s.card}>
          <Field
            label="Name"
            icon="person-outline"
            placeholder="Your full name"
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
          />
          <Field
            label="Email"
            icon="mail-outline"
            placeholder="you@example.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <Field
            label="Password"
            icon="lock-closed-outline"
            placeholder="Create a password"
            value={password}
            onChangeText={setPassword}
            secure
          />
          <Field
            label="Confirm password"
            icon="shield-checkmark-outline"
            placeholder="Type it again"
            value={confirm}
            onChangeText={setConfirm}
            secure
          />

          <Pressable style={({ pressed }) => [s.button, pressed && s.pressed]}>
            <Text style={s.buttonText}>Register</Text>
          </Pressable>
        </View>

        <View style={s.footer}>
          <Text style={s.footerText}>Already have an account?</Text>
          <Link href="/login" style={s.link}>
            Login
          </Link>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const s = StyleSheet.create({
  scroll: { flexGrow: 1, justifyContent: "center", padding: 24 },
  brand: { alignItems: "center", marginBottom: 24 },
  logo: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: C.sun,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },
  title: { fontSize: 28, fontWeight: "800", color: C.ink },
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
    marginBottom: 16,
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
