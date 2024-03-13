import { Button, HStack, Heading } from "@chakra-ui/react";

export default function Header({ isLoggedIn, handleLogout }) {
    return (<Button onClick={handleLogout}>登出</Button>);
};