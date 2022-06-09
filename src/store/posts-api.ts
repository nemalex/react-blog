import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

interface Post {
	title: string,
	text: string,
	date: Date,
}

export const postsApi = createApi({
	reducerPath : 'postsApi',
	baseQuery : fetchBaseQuery({
		baseUrl : 'https://api.nemalex.xyz',
	}),
	tagTypes : ['Posts'],
	endpoints : (builder) => ({
		getPosts : builder.query({
			query : () => 'posts',
			providesTags : ['Posts'],
		}),
		getEntry : builder.query({
			query : (id) => 'posts/' + id,
			providesTags : ['Posts'],
		}),
		postPost : builder.mutation({
			query : ( post: Post ) => {
				console.log(post);
				return {
					url : `posts`,
					method : 'POST',
					body: { ...post }
				}
			},
			invalidatesTags : ['Posts'],
		}),
		deletePost : builder.mutation({
			query : (id) => ({
				url : `posts/${id}`,
				method : 'DELETE',
			}),
			invalidatesTags : ['Posts'],
		}),
	}),
})

export const { useGetPostsQuery, useGetEntryQuery, usePostPostMutation, useDeletePostMutation } = postsApi;
