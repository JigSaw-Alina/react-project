import axios from 'axios';
import { env } from '@/config/env';

export async function QuestionApi() {
  const url = `${env.QUIZ_BASE_URL}`;
  const res = await axios.get(url);
  if (res.status !== 200) throw new Error('Failed to fetch question');
  return res.data;
}
