import { API_KEY, CONVERSATION_CONTEXT } from '@/config';
import { IConversation } from '@/types';

export const createConversation = async (): Promise<IConversation> => {
  try {
    const response = await fetch('https://prod-api.tavus.io/proxy/rqh/v2/conversations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
      },
      body: JSON.stringify({
        persona_id: "p58040634b04", // Unique persona ID
        replica_id: "r4dcf61c154d", // Unique replica ID
        conversation_name: "Vlad Sadovskiy - Netevia CEO",
        conversational_context: CONVERSATION_CONTEXT,
        custom_greeting: "Hello! I'm Vlad Sadovskiy's AI avatar. Ready to chat about Netevia, payments, and entrepreneurship?",
        properties: {
          language: "english" // Language for the conversation (30 avalible languages!)
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
