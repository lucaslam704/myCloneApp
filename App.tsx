import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, SafeAreaView } from 'react-native';
import React from "react";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Top Navigation */}
      <View style={styles.header}>
        <Text style={styles.logoText}>Instagram</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity onPress={() => alert("Redirecting to notification page")}>
            <Image source={require('./assets/pic/icon_notification.png')} style={styles.headerIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert("Redirecting to message page")}>
            <Image source={require('./assets/pic/icon_chat.webp')} style={styles.headerIcon} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.content}>
        {/* Stories */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.storiesContainer}>
          {/* User Story */}
          <View style={styles.storyItem}>
          <TouchableOpacity onPress={() => alert("Opening your story")}>
            <View style={styles.storyPlus}>
              <Image source={require('./assets/pic/icon_profile.webp')} style={styles.storyImage} />
              <View style={styles.addStoryButton}>
                <Text style={styles.plusIcon}>+</Text>
              </View>
            </View>
            <Text style={styles.storyText}>Your Story</Text>
            </TouchableOpacity>
          </View>
          
          {/* Other Stories */}
          {["jaded.ellen", "pia.in.a.pod", "lil.wyatt838", "freddy323", "a_virus"].map((item) => (
            <TouchableOpacity key={item} style={styles.storyItem} onPress={() => alert("Opening story")}>
              <View style={styles.storyRing}>
                <Image source={require('./assets/pic/icon_profile.webp')} style={styles.storyImage} />
              </View>
              <Text style={styles.storyText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Posts Feed */}
        {["jaded.ellen", "pia.in.a.pod", "lil.wyatt838", "freddy323"].map((post) => (
          <View key={post} style={styles.post}>
            <View style={styles.postHeader}>
              <View style={styles.postHeaderLeft}>
                <Image source={require('./assets/pic/icon_profile.webp')} style={styles.postProfilePic} />
                <View>
                  <Text style={styles.postUsername}>{post}</Text>
                  <Text style={styles.postLocation}>Calgary, AB</Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => alert("More options")}>
                <Text style={styles.moreOptions}>•••</Text>
              </TouchableOpacity>
            </View>

            <Image source={require('./assets/pic/icon_profile.webp')} style={styles.postImage} />

            <View style={styles.postActions}>
              <View style={styles.postActionsLeft}>
                <TouchableOpacity onPress={() => alert("You liked the post")}>
                  <Image source={require('./assets/pic/icon_like.png')} style={styles.actionIcon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert("This is comment section")}>
                  <Image source={require('./assets/pic/icon_comment.png')} style={styles.actionIcon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert("Sharing this post")}>
                  <Image source={require('./assets/pic/icon_share.png')} style={styles.actionIcon} />
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={() => alert("This post saved in your collection")}>
                <Image source={require('./assets/pic/icon_save.png')} style={styles.actionIcon} />
              </TouchableOpacity>
            </View>

            <View style={styles.postFooter}>
              <Text style={styles.likes}>99 likes</Text>
              <Text style={styles.caption}>
                <Text style={styles.postUsername}>username_{post}</Text> Your favorite duo ♥
              </Text>
              <TouchableOpacity onPress={() => alert("Opening all comments section")}>
              <Text style={styles.comments}>View all 12 comments</Text>
              </TouchableOpacity>
              <Text style={styles.timestamp}>6 HOURS AGO</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => alert("Redirecting to home page")}>
          <Image source={require('./assets/pic/icon_home.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("Redirecting to search page")}>
          <Image source={require('./assets/pic/icon_search.webp')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("Redirecting to new post page")}>
          <Image source={require('./assets/pic/icon_newpost.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("Redirecting to reels page")}>
          <Image source={require('./assets/pic/icon_reels.webp')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("Redirecting to profile page")}>
          <Image source={require('./assets/pic/icon_profile.webp')} style={styles.navIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 90,
    paddingTop: 40,
  },
  logoText: {
    fontSize: 28,
    fontFamily: 'cursive',
  },
  headerRight: {
    flexDirection: 'row',
    gap: 20,
  },
  headerIcon: {
    width: 28,
    height: 28,
  },
  content: {
    flex: 1,
  },
  storiesContainer: {
    height: 120,
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#dadada',
  },
  storyItem: {
    alignItems: 'center',
    marginRight: 15,
  },
  storyPlus: {
    position: 'relative',
  },
  storyRing: {
    width: 68,
    height: 68,
    borderRadius: 34,
    borderWidth: 2,
    borderColor: '#ff8501',
    alignItems: 'center',
    justifyContent: 'center',
  },
  storyImage: {
    width: 60,
    height: 67,
    borderRadius: 30,
  },
  addStoryButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#0095f6',
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  plusIcon: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    height: 22,
  },
  storyText: {
    fontSize: 12,
    marginTop: 5,
  },
  post: {
    marginBottom: 10,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  postHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  postProfilePic: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  postUsername: {
    fontWeight: 'bold',
  },
  postLocation: {
    fontSize: 12,
    color: '#666',
  },
  moreOptions: {
    fontSize: 16,
  },
  postImage: {
    width: '100%',
    height: 400,
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  postActionsLeft: {
    flexDirection: 'row',
    gap: 15,
  },
  actionIcon: {
    width: 28,
    height: 28,
  },
  postFooter: {
    padding: 10,
  },
  likes: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  caption: {
    marginBottom: 5,
  },
  comments: {
    color: '#666',
    marginBottom: 5,
  },
  timestamp: {
    color: '#666',
    fontSize: 10,
    textTransform: 'uppercase',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    borderTopWidth: 0.5,
    borderTopColor: '#dadada',
    backgroundColor: '#fff',
  },
  navIcon: {
    width: 28,
    height: 28,
  }
});
