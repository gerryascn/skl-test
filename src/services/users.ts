import { httpClient } from "@/utils/httpClient";

type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

type GetUsersResponse = {
  data: User[];
  total: number;
};

const usersAPI = {
  getUsers: (params: { page: number }) => {
    return httpClient.get<GetUsersResponse>("/api/users", { params });
  },
};

export { usersAPI };
