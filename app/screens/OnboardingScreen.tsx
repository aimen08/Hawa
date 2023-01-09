import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import { Button, Text } from "../components"
import { isRTL } from "../i18n"
import { AppStackScreenProps } from "../navigators/AppNavigator"
import { colors, spacing } from "../theme"
import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle"

interface OnboardingScreenProps extends AppStackScreenProps<"Onboarding"> {}

const OnboardingImage1 = require("../../assets/images/onb1.png")
const OnboardingImage2 = require("../../assets/images/onb2.png")
const OnboardingImage3 = require("../../assets/images/onb3.png")

export const OnboardingScreen: FC<OnboardingScreenProps> = observer(function OnboardingScreen() {
  const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"])

  return (
    <View style={$container}>
      <Image style={$welcomeLogo} source={OnboardingImage1} resizeMode="contain" />

      <View style={[$bottomContainer, $bottomContainerInsets]}>
        <Text tx="OnboardingScreen.onb1.title" size="xl" preset="bold" style={$title} />
      </View>
    </View>
  )
})

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
  alignItems: "center",
}

const $title: TextStyle = {
  color: colors.palette.primary600,
}
const $bottomContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 0,
  flexBasis: "43%",
  bottom: "20%",
  position: "absolute",
  paddingHorizontal: spacing.large,
  justifyContent: "space-around",
}
const $welcomeLogo: ImageStyle = {
  height: "100%",
  position: "absolute",
  width: "100%",
}

const $welcomeHeading: TextStyle = {
  marginBottom: spacing.medium,
  color: colors.palette.primary600,
}
