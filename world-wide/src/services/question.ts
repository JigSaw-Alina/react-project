import { QuestionApi } from '../lib/quizApi';

export async function fetchQuestion() {
  const questions = await QuestionApi();
  return questions;
}
