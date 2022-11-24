import Topic from "../features/Topic/types/Topic";

export const loadTopics = async (): Promise<Topic[]> => {
  const res = await fetch('http://localhost:4000/api');
  return res.json();
};

// export const registration = async (item: User): Promise<Res> => {
//   const res = await fetch('http://localhost:4000/auth/registration', {
//     method: 'post',
//     headers: { 'Content-type': 'application/json' },
//     credentials: 'include',
//     body: JSON.stringify(item),
//   });
//   return res.json();
// };

// export const logout = async (): Promise<Res> => {
//   const res = await fetch('http://localhost:4000/auth/logout');
//   return res.json();
// };
