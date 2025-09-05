import { FACEBOOKLOGO, GOOGLELOGO } from "@/constants";
import { styles as join } from "@/styles/_joinstyle";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, Pressable, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function SignIn() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [secure, setSecure] = useState(true);

    return (
        <SafeAreaView style={join.container}>
            <View style={join.iconsection}>
                <Pressable onPress={() => router.back()}>
                    <Text>{"< Back"}</Text>
                </Pressable>
                <Pressable>
                    <Text>Help</Text>
                </Pressable>
            </View>

            <View style={join.titleTextGroup}>
                <Text style={join.titleText}>Welcome Back!</Text>
                <Text style={join.subText}>Sign in to continue</Text>
            </View>

            <View style={join.formGroup}>
                <View>
                    <Text style={join.formLabel}>Email</Text>
                    <TextInput
                        style={join.formControl}
                        placeholder="you@example.com"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                <View>
                    <Text style={join.formLabel}>Password</Text>
                    <View style={join.formPasswordControl}>
                        <TextInput
                            style={join.passwordControl}
                            placeholder="••••••••"
                            secureTextEntry={secure}
                            value={password}
                            onChangeText={setPassword}
                        />
                        <Pressable onPress={() => setSecure(s => !s)}>
                            <Text>{secure ? "Show" : "Hide"}</Text>
                        </Pressable>
                    </View>
                    <Text style={join.forgotPasswordText}>Forgot Password?</Text>
                </View>

                <TouchableOpacity style={join.primaryButton} onPress={() => { /* auth action here */ }}>
                    <Text style={join.buttonText}>Sign In</Text>
                </TouchableOpacity>

                <View style={join.dividerGroup}>
                    <View style={join.divider} />
                    <Text style={join.dividerText}>or</Text>
                    <View style={join.divider} />
                </View>

                <View style={join.secondaryButtonGroup}>
                    <TouchableOpacity style={join.secondaryButton} onPress={() => { }}>
                        <Image source={GOOGLELOGO} />
                        <Text style={join.secondaryButtonText}>Continue with Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={join.secondaryButton} onPress={() => { }}>
                        <Image source={FACEBOOKLOGO} />
                        <Text style={join.secondaryButtonText}>Continue with Facebook</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={join.signupgroup}>
                <Text style={join.signupTitleText}>Don’t have an account? </Text>
                <TouchableOpacity onPress={() => router.push("/join")}>
                    <Text style={join.signupSubTitleText}>Join now</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
