import React from "react";
import useSWR from "swr";

export const App: React.FC = () => {
  return (
    <div>
      <Topic />
      <List />
    </div>
  );
};

const USER_NAME = "vercel";
const FETCH_URL = `https://api.github.com/users/${USER_NAME}/repos?sort=updated`;

const fetcher = async () => {
  const res = await fetch(FETCH_URL, {
    method: "GET",
    headers: {
      Accept: "application/vnd.github.v3+json",
    },
  });

  if (!res.ok) {
    const err = {
      error: new Error("An error occurred while fetching the data."),
      info: res.json(),
      status: res.status,
    };

    throw err;
  }

  return res.json();
};

const Topic: React.FC = () => {
  const { data, error } = useSWR(FETCH_URL, fetcher);

  if (!data || error) return null;
  if (data.length < 1) return null;

  const repo = data[0];

  return <h1>Recent Updated Repo: {repo.name}</h1>;
};

const List: React.FC = () => {
  const { data, error } = useSWR(FETCH_URL, fetcher);

  if (!data) return <div>Loading...</div>;
  if (error) return <div>err: {error.status}</div>;

  return (
    <ul>
      {data.map((repo: any) => {
        return <li key={repo.id}>{repo.name}</li>;
      })}
    </ul>
  );
};
