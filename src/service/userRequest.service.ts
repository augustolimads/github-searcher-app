export async function userRequest(request) {
  return await request.data.items.map((item) => ({
    id: item.id,
    avatar: item.avatar_url,
    username: item.login,
    repos: item.repos_url,
  }));
}
