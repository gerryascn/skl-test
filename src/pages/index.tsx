import {  useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Button, SimpleGrid} from "@chakra-ui/react";
import { usersAPI } from "@/services/users";

interface Query {
  page: number;
}

interface Users {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

const User = dynamic(() => import('@/components/User'))

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState<Query>({ page: 1 });
  const [users, setUsers] = useState(Array<Users>);
  const [totalItem , setTotalItem] = useState(0);
  
  useEffect(() => {
    async function fetchData () {
      const { data  } = await usersAPI.getUsers(query);
      setUsers(prevSate => [...prevSate, ...data.data] );
      setTotalItem(data.total)
      setTimeout(() => setLoading(false), 500) ;
    }
    
    (async () => {
      await fetchData()
    })();
    
  }, [query])
  
  const loadMore = () => {
    setLoading(true);
    setQuery({ ...query, page: query.page + 1 });
  };

  return (
    <>
      <Head>
        <title>React Test</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="This serves a react skill test output." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <SimpleGrid columns={{base: 1, md: 2, lg: 3}} mb={5}>
            {users.map(({ id, email, first_name, last_name, avatar }, key) => {
              return (
                <User
                  key={key}
                  id={id}
                  email={email}
                  first_name={first_name}
                  last_name={last_name}
                  avatar={avatar}
                />
              );
            })}
          </SimpleGrid>
          <div>
            <Button
              colorScheme="teal"
              variant="solid"
              isLoading={loading}
              onClick={() => loadMore()}
              disabled
              isDisabled={users.length === totalItem}
            >
              Load more
            </Button>
          </div>
        </div>
      </main>;
    </>
  );
}