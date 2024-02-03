import React from "react";
import * as WebBrowser from "expo-web-browser";
import { Button, Dimensions, Text, TouchableOpacity } from "react-native";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../hooks/warmUpBrowser";
import Colors from "../Shared/Colors";
 
WebBrowser.maybeCompleteAuthSession();
 
const SignInWithOAuth = () => {
  // Warm up the android browser to improve UX
  // https://docs.expo.dev/guides/authentication/#improving-user-experience
  useWarmUpBrowser();
 
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
 
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
 
  return (
    <TouchableOpacity
          onPress={onPress}
          style={{
            padding: 25,
            backgroundColor: Colors.pink,
            borderRadius: 120,
            alignItems: "center",
            marginTop: 20,
            width: Dimensions.get("screen").width * 0.6,
          }}
        >
          <Text style={{fontSize:19, color: Colors.fontColor, fontWeight: "bold"}}>Sign in with Google</Text>
        </TouchableOpacity>
  );
}
export default SignInWithOAuth;