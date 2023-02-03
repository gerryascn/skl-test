import React from "react";
import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

type UserProps = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

function User({ id, email, first_name, last_name, avatar }: UserProps) {
  return (
    <Card
      align="center"
      variant="unstyled"
      m={[2, 5]}
      p={[2, 4]}
      transition=".3s"
      _hover={{ "box-shadow": "0px 0px 17px rgb(0 0 0 / 30%)" }}
    >
      <CardHeader mb={4}>
        <Avatar src={avatar} name={first_name}></Avatar>
      </CardHeader>
      <CardBody>
        <Stack spacing={3}>
          <Text>{id}</Text>
          <Text>
            <Link href={`mailto:${email}`}> {email} </Link>
          </Text>
          <Text>
            {first_name} {last_name}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default User;
