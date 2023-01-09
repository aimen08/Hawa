import { observer } from "mobx-react-lite"
import React, { FC, useState } from "react"
import { ImageSourcePropType } from "react-native"
import { Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import Animated, {
  SlideInRight,
  Layout,
  SlideInLeft,
  FadeIn,
  Easing,
} from "react-native-reanimated"
import { Button, Text } from "../components"
import { isRTL, TxKeyPath } from "../i18n"
import { AppStackScreenProps } from "../navigators/AppNavigator"
import { colors, spacing } from "../theme"
import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle"

interface OnboardingScreenProps extends AppStackScreenProps<"Onboarding"> {}

type OnboardingPagesProps = {
  bg: ImageSourcePropType
  title: TxKeyPath
  discription: TxKeyPath
}
const OnboardingPages: OnboardingPagesProps[] = [
  {
    bg: require("../../assets/images/onb1.png"),
    title: "OnboardingScreen.onb1.title",
    discription: "OnboardingScreen.onb1.discription",
  },
  {
    bg: require("../../assets/images/onb2.png"),
    title: "OnboardingScreen.onb2.title",
    discription: "OnboardingScreen.onb2.discription",
  },
  {
    bg: require("../../assets/images/onb3.png"),
    title: "OnboardingScreen.onb3.title",
    discription: "OnboardingScreen.onb3.discription",
  },
]

export const OnboardingScreen: FC<OnboardingScreenProps> = observer(function OnboardingScreen() {
  const [page, setPage] = useState(0)
  const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"])
  const handleForward = () => {
    setPage(page + 1)
  }
  const handleStart = () => {
    setPage(page - 1)
  }

  return (
    <View style={$container}>
      <Animated.Image
        key={OnboardingPages[page].title}
        style={$welcomeLogo}
        source={OnboardingPages[page].bg}
        resizeMode="contain"
        entering={FadeIn.duration(600).easing(Easing.ease)}
      />

      <View style={[$bottomContainer, $bottomContainerInsets]}>
        <Text tx={OnboardingPages[page].title} size="xl" preset="bold" style={$title} />
        <Text
          tx={OnboardingPages[page].discription}
          size="md"
          preset="default"
          style={$discription}
        />
        <View style={$controlsContainer}>
          <Button
            onPress={handleStart}
            textStyle={{ color: colors.palette.primary600 }}
            tx="OnboardingScreen.skip"
            preset="noOutline"
          />
          <Button
            onPress={handleForward}
            textStyle={{ color: colors.palette.neutral900 }}
            tx="OnboardingScreen.get_started"
            preset="noOutline"
          />
        </View>
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
  textAlign: "center",
}
const $discription: TextStyle = {
  marginTop: 20,
  color: colors.palette.primary600,
  textAlign: "center",
}
const $controlsContainer: ViewStyle = {
  marginTop: 30,
  flexDirection: "row",
  justifyContent: "space-between",
}

const $bottomContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 0,
  flexBasis: "43%",
  bottom: "12%",
  width: 400,
  position: "absolute",
  paddingHorizontal: spacing.large,
  justifyContent: "space-around",
}
const $welcomeLogo: ImageStyle = {
  height: "100%",
  position: "absolute",
  width: "100%",
}
