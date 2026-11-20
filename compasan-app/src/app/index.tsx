import { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

const photos = [
  {
    image: require('../../assets/images/v1.jpg'),
    likes: 120,
    description: 'The picture shows an elderly indigenous Filipino couple wearing traditional cultural clothing. Their outfits are mostly red, decorated with colorful geometric patterns, beads, and handcrafted accessories. The woman wears layered necklaces and large earrings, while the man wears a traditional headpiece and a beaded design on his clothing. These traditional garments represent their cultural identity, heritage, and pride. Their clothing also reflects the creativity, craftsmanship, and traditions passed down from one generation to another.',
  },
  {
    image: require('../../assets/images/v2.jpg'),
    likes: 200,
    description: 'A professional who uses creativity, passion, and cooking skills to prepare and present delicious meals. A chef carefully combines different ingredients, flavors, and techniques to create food that brings happiness and satisfaction to people.',
  },
  {
    image: require('../../assets/images/v3.jpg'),
    likes: 87,
    description: 'This picture represents love, care, unity, and togetherness within a family. The holding hands symbolize a strong family bond, support, and the importance of staying together through life challenges.',
  },
  {
    image: require('../../assets/images/v4.jpg'),
    likes: 143,
    description: 'A woman stands in prayer with her eyes closed and her hands together, her face lifted toward the light. Behind her, others join in worship, creating a calm and sacred atmosphere. The moment shows that faith can be felt in silence as much as in song',
  },
  {
    image: require('../../assets/images/v5.jpg'),
    likes: 76,
    description: 'Pink blossoming trees line a calm, winding stream under a bright blue sky, with wildflowers in purple and pink covering the grassy banks. The water reflects the pink treetops, giving the whole scene a peaceful, dreamy spring feeling.',
  },
];

function Post({ photo }: { photo: (typeof photos)[number] }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <View style={styles.post}>
      <View style={styles.profile}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>C</Text>
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.username}>Trexie Compasan</Text>
          <Text style={styles.location}>Opol, Philippines</Text>
        </View>
        <Text style={styles.more}>•••</Text>
      </View>

      {/* Photo */}
      <Image source={photo.image} style={styles.postImage} />

      {/* Actions */}
      <View style={styles.actions}>
        <View style={styles.leftActions}>
          <TouchableOpacity onPress={() => setLiked(!liked)}>
            <Text style={styles.actionIcon}>{liked ? '❤️' : '🤍'}</Text>
          </TouchableOpacity>
          <Text style={styles.actionIcon}>💬</Text>
          <Text style={styles.actionIcon}>➤</Text>
        </View>
        <TouchableOpacity onPress={() => setSaved(!saved)}>
          <Text style={styles.actionIcon}>{saved ? '🔖' : '♧'}</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.likes}>
        {liked ? photo.likes + 1 : photo.likes} likes
      </Text>

      <Text style={styles.caption}>
        <Text style={styles.username}>Trexie Compasan</Text>
        {'  '}
        {photo.description}
      </Text>
    </View>
  );
}

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.header}>
        <Text style={styles.logo}>Indigenous Culture</Text>
      </View>

      {photos.map((photo, i) => (
        <Post key={i} photo={photo} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fabeed',
  },
  header: {
    paddingTop: 48,
    paddingBottom: 12,
    paddingHorizontal: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ddd',
  },
  logo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },

  post: {
    marginBottom: 18,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#da5883',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  avatarText: {
    color: '#3ddc84',
    fontWeight: 'bold',
    fontSize: 18,
  },
  profileInfo: {
    flex: 1,
  },
  username: {
    fontWeight: 'bold',
    color: '#000',
  },
  location: {
    fontSize: 12,
    color: '#555',
  },
  more: {
    fontSize: 18,
    color: '#000',
  },

  postImage: {
    width: '100%',
    height: 380,
    resizeMode: 'cover',
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingTop: 10,
  },
  leftActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  actionIcon: {
    fontSize: 26,
    color: '#000',
  },

  likes: {
    fontWeight: 'bold',
    color: '#000',
    paddingHorizontal: 12,
    marginTop: 6,
  },
  caption: {
    color: '#0f0e0e',
    paddingHorizontal: 12,
    marginTop: 4,
  },
});