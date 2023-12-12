import { Image, VStack } from "native-base";
import BackgroungImg from "@assets/background.png"

export function Signin() {
    return (
        <VStack flex={1} bg="gray.700">
            <Image source={BackgroungImg} alt="Background screen" resizeMode="contain" position="absolute" />
        </VStack>
    )
}