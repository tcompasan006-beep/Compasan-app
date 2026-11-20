import { Ionicons } from "@expo/vector-icons";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const C = {
  ink: "#12263A",
  sea: "#1F6F78",
  foam: "#F3F9F9",
  line: "#D5E3E4",
  muted: "#5F7480",
  sun: "#F2B84B",
};

type Post = {
  id: string;
  username: string;
  avatar: any;
  time: string;
  text: string;
  image?: any;
  likes: number;
  comments: number;
};

const POSTS: Post[] = [
  {
    id: "1",
    username: "Syntia Sterling",
    avatar: { uri: "https://i.pravatar.cc/120?img=47" },
    time: "2h",
    text: "Sunrise at the pier this morning. Worth waking up at 4am for.",
    image: { uri: "https://picsum.photos/id/1015/900/700" },
    likes: 5000,
    comments: 14,
  },
  {
    id: "2",
    username: "Robert Manolo",
    avatar: { uri: "https://i.pravatar.cc/120?img=12" },
    time: "4h",
    text: "Finally finished my first app screen. Design first, functions later!",
    likes: 56,
    comments: 9,
  },
  {
    id: "3",
    username: "Arafave Dangca",
    avatar: { uri: "https://i.pravatar.cc/120?img=32" },
    time: "6h",
    text: "Weekend hike with the group. The view from the top made every step count.",
    image: { uri: "https://picsum.photos/id/1018/900/700" },
    likes: 301,
    comments: 42,
  },
  {
    id: "4",
    username: "Jeo",
    avatar: require("../../../../assets/images/v4.jpg"),
    time: "1d",
    text: "beautiful Gehlee Dangca.",
    image: require("../../../../assets/images/images.jpg"),
    likes: 87,
    comments: 11,
  },
  {
    id: "5",
    username: "Treshi Lapornina",
    avatar: require("../../../../assets/images/v5.jpg"),
    time: "2d",
    text: "Anyone have a good book recommendation? I just finished one and need the next.",
    likes: 23,
    comments: 31,
  },
];


function PostCard({ post }: { post: Post }) {
  return (
    <View style={s.card}>
      <View style={s.header}>
        <Image source={post.avatar } style={s.avatar} />
        <View style={{ flex: 1 }}>
          <Text style={s.username}>{post.username}</Text>
          <Text style={s.time}>{post.time} ago</Text>
        </View>
        <Ionicons name="ellipsis-horizontal" size={20} color={C.muted} />
      </View>

      <Text style={s.body}>{post.text}</Text>

      {post.image && (
        <Image source={post.image} style={s.image} resizeMode="cover" />
      )}

      <View style={s.actions}>
        <Pressable style={s.action}>
          <Ionicons name="heart-outline" size={22} color={C.ink} />
          <Text style={s.count}>{post.likes}</Text>
        </Pressable>
        <Pressable style={s.action}>
          <Ionicons name="chatbubble-outline" size={21} color={C.ink} />
          <Text style={s.count}>{post.comments}</Text>
        </Pressable>
        <Pressable style={[s.action, { marginLeft: "auto" }]}>
          <Ionicons name="paper-plane-outline" size={21} color={C.ink} />
        </Pressable>
      </View>
    </View>
  );
}

export default function Home() {
  return (
    <SafeAreaView style={s.screen} edges={["top"]}>
      <View style={s.topBar}>
        <View style={s.logo}>
          <Ionicons name="water" size={18} color={C.ink} />
        </View>
        <Text style={s.topTitle}>Feed</Text>
        <Ionicons name="notifications-outline" size={24} color={C.ink} />
      </View>

      <FlatList
        data={POSTS}
        keyExtractor={(p) => p.id}
        renderItem={({ item }) => <PostCard post={item} />}
        contentContainerStyle={{ padding: 16, gap: 16 }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: C.foam },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: C.line,
  },
  logo: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: C.sun,
    alignItems: "center",
    justifyContent: "center",
  },
  topTitle: { flex: 1, fontSize: 22, fontWeight: "800", color: C.ink },
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: C.line,
    overflow: "hidden",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 14,
  },
  avatar: { width: 44, height: 44, borderRadius: 22, backgroundColor: C.line },
  username: { fontSize: 15, fontWeight: "700", color: C.ink },
  time: { fontSize: 12, color: C.muted, marginTop: 2 },
  body: {
    fontSize: 15,
    lineHeight: 22,
    color: C.ink,
    paddingHorizontal: 14,
    paddingBottom: 12,
  },
  image: { width: "100%", aspectRatio: 1.25, backgroundColor: C.line },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    padding: 14,
  },
  action: { flexDirection: "row", alignItems: "center", gap: 6 },
  count: { fontSize: 14, color: C.ink, fontWeight: "600" },
});
