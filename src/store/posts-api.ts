import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

interface Post {
	title: string,
	text: string,
	date: Date,
}

export const postsApi = createApi({
	reducerPath : 'postsApi',
	baseQuery : fetchBaseQuery({
		baseUrl : 'http://localhost:5000/',
	}),
	tagTypes : ['Posts'],
	endpoints : (builder) => ({
		getPosts : builder.query({
			query : () => 'posts',
			providesTags : ['Posts'],
		}),
		postPost : builder.mutation({
			query : ( post: Post ) => ({
				url : `posts`,
				method : 'POST',
				body: JSON.stringify({...post})
			})
		}),
		deletePost : builder.mutation({
			query : ({ id }) => ({
				url : `posts/${id}`,
				method : 'DELETE',
			}),
			invalidatesTags : ['Posts'],
		}),
	}),
})

export const { useGetPostsQuery, usePostPostMutation, useDeletePostMutation } = postsApi;