import { Center, Heading, Image, ScrollView, Text, VStack } from "native-base";
import BackgroungImg from "@assets/background.png";
import LogoSvg from "@assets/logo.svg";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function Signin() {
    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
        >
            <VStack
                flex={1}
                bg="gray.700"
                px={10}
                justifyContent="space-between"
            >
                <Image
                    source={BackgroungImg}
                    alt="Background screen"
                    resizeMode="contain"
                    position="absolute"
                />

                <Center>
                    <LogoSvg />
                    <Text color="gray.100" fontSize="sm">
                        Treine sua mente e seu corpo
                    </Text>
                </Center>

                <Center>
                    <Heading
                        color="gray.100"
                        fontSize="xl"
                        mb={6}
                        fontFamily="heading"
                    >
                        Acesse sua conta
                    </Heading>

                    <Input
                        placeholder="E-mail"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <Input placeholder="Senha" secureTextEntry />

                    <Button title="Acessar" />
                </Center>

                <Center mb={12}>
                    <Text
                        color="gray.100"
                        fontSize="sm"
                        mb={3}
                        fontFamily="body"
                    >
                        Ainda não tem acesso?
                    </Text>

                    <Button title="Criar conta" variant="outline" />
                </Center>
            </VStack>
        </ScrollView>
    );
}
