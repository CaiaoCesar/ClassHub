import axios from 'axios';

const API_URL = process.env.EXPO_PUBLIC_API_CALENDLY_URL;

// Função para criar uma instância do axios com o token de acesso
const createApiInstance = (token: string) => {
  return axios.create({
    baseURL: API_URL,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
};

// Função para trocar o código de autorização por um token de acesso
export const exchangeCodeForToken = async (code: string) => {
  try {
    const response = await axios.post(
      'https://auth.calendly.com/oauth/token',
      {
        client_id: process.env.EXPO_PUBLIC_CLIENT_ID,
        client_secret: process.env.EXPO_PUBLIC_SECRET_ID,
        code,
        grant_type: 'authorization_code',
        redirect_uri: process.env.EXPO_PUBLIC_REDIRECT_URL,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const { access_token, refresh_token } = response.data;
    return { access_token, refresh_token };
  } catch (error) {
    console.error('Error exchanging code for token:', error);
    throw error;
  }
};

// Função para buscar eventos agendados
export const getScheduledEvents = async (token: string) => {
  try {
    const api = createApiInstance(token);
    const response = await api.get('/scheduled_events');
    return response.data.collection;
  } catch (error) {
    console.error('Error fetching scheduled events:', error);
    throw error;
  }
};

// Função para criar um evento
export const createEvent = async (eventData: any, token: string) => {
  try {
    const api = createApiInstance(token);
    const response = await api.post('/scheduled_events', eventData);
    return response.data;
  } catch (error) {
    console.error('Error creating event:', error);
    throw error;
  }
};

// Função para cancelar um evento
export const cancelEvent = async (eventId: string, token: string) => {
  try {
    const api = createApiInstance(token);
    const response = await api.post(`/scheduled_events/${eventId}/cancellation`);
    return response.data;
  } catch (error) {
    console.error('Error canceling event:', error);
    throw error;
  }
};

// Função para buscar horários disponíveis
export const getAvailableTimes = async (date: string, token: string) => {
  try {
    const api = createApiInstance(token);
    const startTime = new Date(`${date}T00:00:00-04:00`).toISOString();
    const endTime = new Date(`${date}T23:59:59-04:00`).toISOString();

    const eventTypesResponse = await api.get('/event_types');
    const eventTypes = eventTypesResponse.data.collection;

    const availableTimes = [];
    for (const eventType of eventTypes) {
      const availabilityResponse = await api.get(`/event_types/${eventType.uri}/availability`, {
        params: {
          start_time: startTime,
          end_time: endTime,
        },
      });
      availableTimes.push(...availabilityResponse.data.collection);
    }

    return availableTimes.map((slot: any) => slot.start_time);
  } catch (error) {
    console.error('Error fetching available times:', error);
    throw error;
  }
};

// Função para configurar webhooks
export const setupWebhook = async (url: string, token: string) => {
  try {
    const api = createApiInstance(token);
    const response = await api.post('/webhook_subscriptions', {
      url,
      events: ['invitee.created', 'invitee.canceled'],
    });
    return response.data;
  } catch (error) {
    console.error('Error setting up webhook:', error);
    throw error; 
  }
};