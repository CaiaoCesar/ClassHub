import { VercelRequest, VercelResponse } from '@vercel/node';

export default (req: VercelRequest, res: VercelResponse) => {
  const event = req.body;
  console.log('Webhook received:', event);

  if (event.event === 'invitee.created') {
    console.log('Novo agendamento:', event.payload);
  } else if (event.event === 'invitee.canceled') {
    console.log('Agendamento cancelado:', event.payload);
  }

  res.status(200).send('Webhook received');
}; 