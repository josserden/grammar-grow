import ky from "ky";

import { queryOptions } from "@tanstack/react-query";

import { QuizListProps, WordQuizResponseProps } from "@/shared/api/api.types";

const url = process.env.EXPO_PUBLIC_WORD_QUIZ_API_URL;

const api = ky.create({
  headers: {
    "x-rapidapi-host": process.env.EXPO_PUBLIC_WORD_QUIZ_RAPIDAPI_HOST,
    "x-rapidapi-key": process.env.EXPO_PUBLIC_WORD_QUIZ_RAPIDAPI_KEY,
  },
});

export const WordQuizApi = {
  options(testId: string, level: string) {
    return queryOptions({
      queryKey: ["word-quiz", testId, level],
      queryFn: async (): Promise<WordQuizResponseProps> =>
        await api.get(`${url}/?area=${testId}&level=${level}`).json<WordQuizResponseProps>(),
      enabled: !!testId && !!level,
      select: (data): QuizListProps[] => data.quizlist,
    });
  },
};
