import { FACEBOOKLOGO, GOOGLELOGO } from "@/constants";
import { styles as join } from "@/styles/_joinstyle";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, Pressable, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Join() {
    const router = useRouter();
    const [name, setName] = useState("");
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
                <Text style={join.titleText}>Create Account</Text>
                <Text style={join.subText}>Join to get started</Text>
            </View>

            <View style={join.formGroup}>
                <View>
                    <Text style={join.formLabel}>Full Name</Text>
                    <TextInput
                        style={join.formControl}
                        placeholder="John Doe"
                        autoCapitalize="words"
                        value={name}
                        onChangeText={setName}
                    />
                </View>

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
                            placeholder="Create a password"
                            secureTextEntry={secure}
                            value={password}
                            onChangeText={setPassword}
                        />
                        <Pressable onPress={() => setSecure(s => !s)}>
                            <Text>{secure ? "Show" : "Hide"}</Text>
                        </Pressable>
                    </View>
                </View>

                <TouchableOpacity style={join.primaryButton} onPress={() => { /* registration action here */ }}>
                    <Text style={join.buttonText}>Join Now</Text>
                </TouchableOpacity>

                <View style={join.dividerGroup}>
                    <View style={join.divider} />
                    <Text style={join.dividerText}>or</Text>
                    <View style={join.divider} />
                </View>

                <View style={join.secondaryButtonGroup}>
                    <TouchableOpacity style={join.secondaryButton} onPress={() => { }}>
                        <Image source={GOOGLELOGO} />
                        <Text style={join.secondaryButtonText}>Sign up with Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={join.secondaryButton} onPress={() => { }}>
                        <Image source={FACEBOOKLOGO} />
                        <Text style={join.secondaryButtonText}>Sign up with Facebook</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={join.signupgroup}>
                <Text style={join.signupTitleText}>Already have an account? </Text>
                <TouchableOpacity onPress={() => router.push("/sign")}>
                    <Text style={join.signupSubTitleText}>Sign in</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
