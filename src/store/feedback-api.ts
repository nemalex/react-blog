import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Feedback {
    subject: string,
    text: string,
    date: Date,
}

export const feedbackApi = createApi({
    reducerPath: 'feedbackApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.nemalex.xyz',
    }),
    endpoints: (builder) => ({
        postFeedback: builder.mutation({
            query: (msg: Feedback) => ({
                url: `feedback`,
                method: 'POST',
                body: { ...msg }
            }),
        }),
    }),
});

export const { usePostFeedbackMutation } = feedbackApi;