import { Ionicons } from "@expo/vector-icons";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
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

const DETAILS: { icon: keyof typeof Ionicons.glyphMap; label: string; value: string }[] = [
  { icon: "mail-outline", label: "Email", value: "tcompasan006@gmail.com" },
  { icon: "call-outline", label: "Phone", value: "+63 936141212" },
  { icon: "location-outline", label: "Location", value: "Opol, Misamis oriental, Philippines" },
  { icon: "calendar-outline", label: "Joined", value: "November 17 2026" },
];

const STATS = [
  { label: "Posts", value: "24" },
  { label: "Followers", value: "1.12M" },
  { label: "Following", value: "2M" },
];

export default function Profile() {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: C.foam }}
      contentContainerStyle={{ paddingBottom: 40 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={s.cover} />

      <View style={s.top}>
        <Image
          source={require("../../../../assets/images/crown.jpg")}
          style={s.avatar}
        />
        <Text style={s.name}>Trexie Compasan</Text>
        <Text style={s.username}>@trexie.com</Text>
        <Text style={s.bio}>
          Sunrise chaser, coffee drinker, and Nature lover.
        </Text>

        <Pressable style={({ pressed }) => [s.button, pressed && { opacity: 0.85 }]}>
          <Ionicons name="create-outline" size={18} color="#fff" />
          <Text style={s.buttonText}>Edit Profile</Text>
        </Pressable>
      </View>

      <View style={s.stats}>
        {STATS.map((st, i) => (
          <View
            key={st.label}
            style={[s.stat, i < STATS.length - 1 && s.statDivider]}
          >
            <Text style={s.statValue}>{st.value}</Text>
            <Text style={s.statLabel}>{st.label}</Text>
          </View>
        ))}
      </View>

      <View style={s.details}>
        <Text style={s.sectionTitle}>Personal details</Text>
        {DETAILS.map((d, i) => (
          <View
            key={d.label}
            style={[s.row, i < DETAILS.length - 1 && s.rowDivider]}
          >
            <View style={s.iconWrap}>
              <Ionicons name={d.icon} size={18} color={C.sea} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={s.rowLabel}>{d.label}</Text>
              <Text style={s.rowValue}>{d.value}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  cover: { height: 140, backgroundColor: C.sea },
  top: { alignItems: "center", paddingHorizontal: 24, marginTop: -56 },
  avatar: {
    width: 112,
    height: 112,
    borderRadius: 56,
    borderWidth: 4,
    borderColor: C.foam,
    backgroundColor: C.line,
  },
  name: { fontSize: 24, fontWeight: "800", color: C.ink, marginTop: 12 },
  username: { fontSize: 15, color: C.muted, marginTop: 2 },
  bio: {
    fontSize: 15,
    lineHeight: 22,
    color: C.ink,
    textAlign: "center",
    marginTop: 12,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: C.sea,
    paddingHorizontal: 24,
    height: 46,
    borderRadius: 23,
    marginTop: 18,
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "700" },
  stats: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: C.line,
    marginHorizontal: 16,
    marginTop: 24,
    paddingVertical: 16,
  },
  stat: { flex: 1, alignItems: "center" },
  statDivider: { borderRightWidth: 1, borderRightColor: C.line },
  statValue: { fontSize: 20, fontWeight: "800", color: C.ink },
  statLabel: { fontSize: 13, color: C.muted, marginTop: 2 },
  details: {
    backgroundColor: "#fff",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: C.line,
    marginHorizontal: 16,
    marginTop: 16,
    padding: 18,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: C.ink,
    marginBottom: 6,
  },
  row: { flexDirection: "row", alignItems: "center", gap: 14, paddingVertical: 12 },
  rowDivider: { borderBottomWidth: 1, borderBottomColor: C.line },
  iconWrap: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: C.foam,
    alignItems: "center",
    justifyContent: "center",
  },
  rowLabel: { fontSize: 12, color: C.muted },
  rowValue: { fontSize: 15, fontWeight: "600", color: C.ink, marginTop: 2 },
});
