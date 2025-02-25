import { apiRequest } from "./queryClient";

export async function sendChatMessage(message: string) {
  const response = await apiRequest("POST", "/api/chat", { message });
  return response.json();
}
