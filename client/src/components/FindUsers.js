import {
  Avatar,
  Box,
  Card,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { MdRefresh } from "react-icons/md";
import { Link, useSearchParams } from "react-router-dom";
import { getRandomUsers } from "../api/users";
import Loading from "./Loading";
import UserAvatar from "./UserAvatar";
import HorizontalStack from "./util/HorizontalStack";

const FindUsers = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState(null);

  const [count, setCount] = useState(0);
  const [search] = useSearchParams();

  const searchExists =
      search && search.get("search") && search.get("search").length > 0;

  const fetchUsers = async () => {
    setLoading(true);
    const data = await getRandomUsers({ size: 5 });
    setLoading(false);
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleClick = () => {
    fetchUsers();
  };

  const filteredUsers = users && users.filter((user) => user.username === search.get("search"));

  console.log(filteredUsers);

  return (
    <Card>
      {searchExists && (
          <Box>
            <Typography variant="h5" gutterBottom>
              Showing results for "{search.get("search")}"
            </Typography>
            {/* <Typography color="text.secondary" variant="span">
              Results found
            </Typography> */}
            <IconButton
            sx={{ padding: 0, color: "#fff" }}
            disabled={loading}
            onClick={handleClick}
          >
            <MdRefresh />
          </IconButton>
          </Box>
        )}

      <Stack spacing={2}>
        <HorizontalStack justifyContent="space-between">
          {/* <HorizontalStack>
            <AiOutlineUser />
            <Typography>Find Others</Typography>
          </HorizontalStack> */}
          {/* <IconButton
            sx={{ padding: 0 }}
            disabled={loading}
            onClick={handleClick}
          >
            <MdRefresh />
          </IconButton> */}
        </HorizontalStack>

        <Divider />

        {loading ? (
          <Loading />
        ) : (
          filteredUsers.map((user) => (
            <HorizontalStack justifyContent="space-between" key={user._id}>
              <HorizontalStack>
                <UserAvatar width={30} height={30} username={user.username} />
                <Typography>{user.username}</Typography>
              </HorizontalStack>
              <Link className="link" to={"/users/" + user.username}>View</Link>
            </HorizontalStack>
          ))
        )}
      </Stack>
    </Card>
  );
};

export default FindUsers;
