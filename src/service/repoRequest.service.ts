export async function repoRequest(request) {
  return await request.map((item) => ({
    id: item.id,
    name: item.name,
    description: item.description,
  }));
}
