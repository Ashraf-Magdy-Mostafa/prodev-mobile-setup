import { BACKGROUNDIMAGE, HEROLOGO } from "@/constants";
import { styles as main } from "@/styles/_mainstyle";
import { useRouter } from "expo-router";
import React from "react";
import { Image, ImageBackground, SafeAreaView, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView style={main.container}>
      <ImageBackground
        source={BACKGROUNDIMAGE}
        resizeMode="cover"
        style={main.backgroundImageContainer}
      >
        <View style={main.logoContainer}>
          <Image source={HEROLOGO} resizeMode="contain" />
        </View>

        <View style={main.titleContainer}>
          <Text style={main.titleText}>Let’s Get You Started</Text>
          <View style={main.titleSubTextContainer}>
            <Text style={main.titleSubText}>
              Explore features and stay productive with your new app.
            </Text>
          </View>
        </View>

        <View style={{ flex: 1 }} />

        <View style={main.buttonGroup}>
          <TouchableOpacity style={main.buttonPrimary} onPress={() => router.push("/sign")}>
            <Text style={main.buttonPrimaryText}>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity style={main.buttonSecondary} onPress={() => router.push("/join")}>
            <Text style={main.buttonSecondaryText}>Join Now</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 40 }} />
      </ImageBackground>
    </SafeAreaView>
  );
}
