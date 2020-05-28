export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type ICreateDetailDealInput = {
  postId: Scalars["Int"];
};

export type ICreateFileInput = {
  productId?: Maybe<Scalars["Int"]>;
  imgPath?: Maybe<Scalars["String"]>;
};

export type ICreateHashtagInput = {
  productId?: Maybe<Scalars["Int"]>;
  hashtag?: Maybe<Scalars["String"]>;
};

export type ICreatePostInput = {
  title: Scalars["String"];
  contents: Scalars["String"];
  deal: Scalars["String"];
  /** dealLocation:String! */
  category: Scalars["String"];
  productname: Scalars["String"];
  /** productState : String! */
  price: Scalars["Int"];
  hashtag: Scalars["String"];
  imgPaths: Scalars["String"];
};

export type ICreateProductInput = {
  postId: Scalars["Int"];
  price: Scalars["Int"];
  name: Scalars["String"];
  category: Scalars["String"];
};

export type IDetailDeal = {
  dealId: Scalars["ID"];
  post: IPost;
  user: IUser;
  createdDate?: Maybe<Scalars["String"]>;
  modifiedDate?: Maybe<Scalars["String"]>;
};

export type IDetailOutput = {
  dealId: Scalars["ID"];
  postId: Scalars["Int"];
  imgPaths: Array<Maybe<IFile>>;
  title: Scalars["String"];
  category: Scalars["String"];
  hashtag: Array<Maybe<IHashtag>>;
  contents: Scalars["String"];
  price: Scalars["Int"];
  buyerId: Scalars["Int"];
  sellerId: Scalars["Int"];
  user: IUserInfoResponse;
};

export type IFile = {
  fileId?: Maybe<Scalars["ID"]>;
  product?: Maybe<IProduct>;
  imgPath?: Maybe<Scalars["String"]>;
};

export type IFileArr = {
  imgPath: Scalars["String"];
};

export type IFileOutput = {
  fileId?: Maybe<Scalars["Int"]>;
  productId?: Maybe<Scalars["Int"]>;
  imgPath?: Maybe<Scalars["String"]>;
};

export type IHashtag = {
  hashtagId?: Maybe<Scalars["ID"]>;
  product?: Maybe<IProduct>;
  hashtag?: Maybe<Scalars["String"]>;
};

export type IHashtagOutput = {
  hashtagId?: Maybe<Scalars["ID"]>;
  productId?: Maybe<Scalars["Int"]>;
  hashtag?: Maybe<Scalars["String"]>;
};

export type IHistoryOutput = {
  userId?: Maybe<Scalars["Int"]>;
  postId?: Maybe<Scalars["Int"]>;
  createdDate?: Maybe<Scalars["String"]>;
  modifiedDate?: Maybe<Scalars["String"]>;
};

export type ILoginUserInput = {
  provider?: Maybe<Scalars["String"]>;
  token?: Maybe<Scalars["String"]>;
};

export type ILoginUserOutput = {
  token: Scalars["String"];
};

export type IMutation = {
  updateViewcount: Scalars["Int"];
  updateIsBuy: Scalars["Int"];
  createPost?: Maybe<IPostOutput>;
  updatePost?: Maybe<IPostOutput>;
  deletePost: Scalars["Int"];
  createFile?: Maybe<IFileOutput>;
  updateFile?: Maybe<IFileOutput>;
  deleteFile?: Maybe<Scalars["Int"]>;
  createDetailDeal?: Maybe<IDetailOutput>;
  deleteDetailDeal: Scalars["Int"];
  loginUser?: Maybe<ILoginUserOutput>;
  updateUser?: Maybe<IUserOutput>;
  deleteUser?: Maybe<Scalars["Int"]>;
  createHashtag?: Maybe<IHashtagOutput>;
  updateHashtag?: Maybe<IHashtagOutput>;
  deleteHashtag?: Maybe<Scalars["Int"]>;
  updateProduct?: Maybe<IProductOutput>;
  createProduct?: Maybe<IProductOutput>;
  deleteProduct?: Maybe<Scalars["Int"]>;
  createHistory?: Maybe<IHistoryOutput>;
};

export type IMutationUpdateViewcountArgs = {
  postId: Scalars["Int"];
};

export type IMutationUpdateIsBuyArgs = {
  postId: Scalars["Int"];
};

export type IMutationCreatePostArgs = {
  input: ICreatePostInput;
};

export type IMutationUpdatePostArgs = {
  input: IUpdatePostInput;
};

export type IMutationDeletePostArgs = {
  postId: Scalars["Int"];
};

export type IMutationCreateFileArgs = {
  input: ICreateFileInput;
};

export type IMutationUpdateFileArgs = {
  input: IUpdateFileInput;
};

export type IMutationDeleteFileArgs = {
  id: Scalars["Int"];
};

export type IMutationCreateDetailDealArgs = {
  input: ICreateDetailDealInput;
};

export type IMutationDeleteDetailDealArgs = {
  id: Scalars["Int"];
};

export type IMutationLoginUserArgs = {
  input: ILoginUserInput;
};

export type IMutationUpdateUserArgs = {
  input: IUpdateUserInput;
};

export type IMutationDeleteUserArgs = {
  id: Scalars["Int"];
};

export type IMutationCreateHashtagArgs = {
  input: ICreateHashtagInput;
};

export type IMutationUpdateHashtagArgs = {
  input: IUpdateHashtagInput;
};

export type IMutationDeleteHashtagArgs = {
  id: Scalars["Int"];
};

export type IMutationUpdateProductArgs = {
  input: IUpdateProductInput;
};

export type IMutationCreateProductArgs = {
  input: ICreateProductInput;
};

export type IMutationDeleteProductArgs = {
  id: Scalars["Int"];
};

export type IMutationCreateHistoryArgs = {
  postId: Scalars["Int"];
};

export type IPost = {
  postId?: Maybe<Scalars["ID"]>;
  userId?: Maybe<Scalars["Int"]>;
  isBuy?: Maybe<Scalars["Boolean"]>;
  title?: Maybe<Scalars["String"]>;
  saleDate?: Maybe<Scalars["String"]>;
  contents?: Maybe<Scalars["String"]>;
  viewCount?: Maybe<Scalars["Int"]>;
  deal?: Maybe<Scalars["String"]>;
  dealState?: Maybe<Scalars["String"]>;
  createdDate?: Maybe<Scalars["String"]>;
  modifiedDate?: Maybe<Scalars["String"]>;
};

export type IPostOutput = {
  postId: Scalars["ID"];
  userId: Scalars["Int"];
  /** 게시자 id */
  isBuy: Scalars["Boolean"];
  /** 구매 or 판매 */
  title: Scalars["String"];
  contents: Scalars["String"];
  deal: Scalars["String"];
  dealState: Scalars["String"];
  category: Scalars["String"];
  name: Scalars["String"];
  hashtag: Scalars["String"];
  imgPaths?: Maybe<Array<IFileArr>>;
};

export type IProduct = {
  productId?: Maybe<Scalars["ID"]>;
  post?: Maybe<IPost>;
  name?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["Int"]>;
  category?: Maybe<Scalars["String"]>;
};

export type IProductOutput = {
  productId?: Maybe<Scalars["ID"]>;
  postId?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["Int"]>;
  category?: Maybe<Scalars["String"]>;
};

export type IQuery = {
  findAllPosts?: Maybe<Array<Maybe<IPost>>>;
  findAllPost?: Maybe<Array<Maybe<IPostOutput>>>;
  /** findByUser : [PostOutput] */
  findPostByPostId?: Maybe<IPostOutput>;
  /** findAllPostsByUploaderId(uploader_id: Int):[Post]
   *    findAllPostsByUploaderId(uploader_id: Int):[Post]
   *    findPostByPostId(id: Int): Post
   */
  findRecentPosts?: Maybe<Array<Maybe<IRecentPostResponse>>>;
  findAllFile?: Maybe<Array<Maybe<IFileOutput>>>;
  findAllFiles?: Maybe<Array<Maybe<IFile>>>;
  findFileById?: Maybe<IFileOutput>;
  findAllDetailDeals?: Maybe<Array<Maybe<IDetailDeal>>>;
  findAllDetailDeal?: Maybe<Array<Maybe<IDetailOutput>>>;
  findDetailDealByPost?: Maybe<IDetailOutput>;
  findAllUsers?: Maybe<Array<Maybe<IUser>>>;
  findAllUser?: Maybe<Array<Maybe<IUserOutput>>>;
  findUserInfo?: Maybe<IUserInfoResponse>;
  findAllHashtags?: Maybe<Array<Maybe<IHashtag>>>;
  findAllHashtag?: Maybe<Array<Maybe<IHashtagOutput>>>;
  findByHashtagId?: Maybe<IHashtagOutput>;
  findAllProduct?: Maybe<Array<Maybe<IProductOutput>>>;
  findAllProducts?: Maybe<Array<Maybe<IProduct>>>;
  findByProductId?: Maybe<IProductOutput>;
  findUserHistoryByUserId?: Maybe<Array<Maybe<IUserHistoryResponse>>>;
};

export type IQueryFindPostByPostIdArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type IQueryFindFileByIdArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type IQueryFindDetailDealByPostArgs = {
  postId?: Maybe<Scalars["Int"]>;
};

export type IQueryFindByHashtagIdArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type IQueryFindByProductIdArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type IRecentPostResponse = {
  postId?: Maybe<Scalars["String"]>;
  user?: Maybe<IUser>;
  hashTags?: Maybe<Array<Maybe<IHashtag>>>;
  isBuy?: Maybe<Scalars["Boolean"]>;
  price?: Maybe<Scalars["Int"]>;
  saleDate?: Maybe<Scalars["String"]>;
  imgUrls?: Maybe<Array<Maybe<IFile>>>;
  category?: Maybe<Scalars["String"]>;
  deal?: Maybe<Scalars["String"]>;
  createdDate?: Maybe<Scalars["String"]>;
  modifiedDate?: Maybe<Scalars["String"]>;
};

export type IUpdateFileInput = {
  fileId?: Maybe<Scalars["Int"]>;
  imgPath?: Maybe<Scalars["String"]>;
};

export type IUpdateHashtagInput = {
  hashtagId?: Maybe<Scalars["Int"]>;
  hashtag?: Maybe<Scalars["String"]>;
};

export type IUpdatePostInput = {
  postId: Scalars["Int"];
  title: Scalars["String"];
  contents: Scalars["String"];
  deal: Scalars["String"];
  dealState: Scalars["String"];
  category: Scalars["String"];
  productname: Scalars["String"];
  price: Scalars["Int"];
  hashtag: Scalars["String"];
  imgPaths: Scalars["String"];
};

export type IUpdateProductInput = {
  productId: Scalars["ID"];
  postId: Scalars["Int"];
  price: Scalars["Int"];
  name: Scalars["String"];
  category: Scalars["String"];
};

export type IUpdateUserInput = {
  imageUrl?: Maybe<Scalars["String"]>;
  phone?: Maybe<Scalars["String"]>;
  address?: Maybe<Scalars["String"]>;
  trust?: Maybe<Scalars["Int"]>;
};

export type IUser = {
  userId?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  imageUrl?: Maybe<Scalars["String"]>;
  provider?: Maybe<Scalars["String"]>;
  providerId?: Maybe<Scalars["Int"]>;
  phone?: Maybe<Scalars["String"]>;
  address?: Maybe<Scalars["String"]>;
  trust?: Maybe<Scalars["Int"]>;
};

export type IUserHistoryResponse = {
  user?: Maybe<IUser>;
  postId?: Maybe<Scalars["ID"]>;
  isBuy?: Maybe<Scalars["Boolean"]>;
  title?: Maybe<Scalars["String"]>;
  saleDate?: Maybe<Scalars["String"]>;
  contents?: Maybe<Scalars["String"]>;
  viewCount?: Maybe<Scalars["Int"]>;
  deal?: Maybe<Scalars["String"]>;
  createdDate?: Maybe<Scalars["String"]>;
  modifiedDate?: Maybe<Scalars["String"]>;
  hashTags?: Maybe<Array<Maybe<IHashtag>>>;
  price?: Maybe<Scalars["Int"]>;
  imgUrls?: Maybe<Array<Maybe<IFile>>>;
};

export type IUserInfoResponse = {
  name?: Maybe<Scalars["String"]>;
  address?: Maybe<Scalars["String"]>;
  trust?: Maybe<Scalars["Int"]>;
  numOfPosts?: Maybe<Scalars["Int"]>;
  imgurl?: Maybe<Scalars["String"]>;
};

export type IUserOutput = {
  userId?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  imageUrl?: Maybe<Scalars["String"]>;
  provider?: Maybe<Scalars["String"]>;
  providerId?: Maybe<Scalars["Int"]>;
  phone?: Maybe<Scalars["String"]>;
  address?: Maybe<Scalars["String"]>;
  trust?: Maybe<Scalars["Int"]>;
};
export type IGetLoginMutationVariables = {
  input: ILoginUserInput;
};

export type IGetLoginMutation = { __typename?: "Mutation" } & {
  loginUser: Maybe<
    { __typename?: "LoginUserOutput" } & Pick<ILoginUserOutput, "token">
  >;
};

export type IGetUserInfoQueryVariables = {};

export type IGetUserInfoQuery = { __typename?: "Query" } & {
  findUserInfo: Maybe<
    { __typename?: "UserInfoResponse" } & Pick<
      IUserInfoResponse,
      "name" | "address" | "trust" | "numOfPosts" | "imgurl"
    >
  >;
};

export type IGetHistoryQueryVariables = {};

export type IGetHistoryQuery = { __typename?: "Query" } & {
  findUserHistoryByUserId: Maybe<
    Array<
      Maybe<
        { __typename?: "UserHistoryResponse" } & Pick<
          IUserHistoryResponse,
          | "postId"
          | "isBuy"
          | "title"
          | "saleDate"
          | "viewCount"
          | "deal"
          | "createdDate"
          | "modifiedDate"
          | "price"
        > & {
            hashTags: Maybe<
              Array<
                Maybe<{ __typename?: "Hashtag" } & Pick<IHashtag, "hashtag">>
              >
            >;
            imgUrls: Maybe<
              Array<Maybe<{ __typename?: "File" } & Pick<IFile, "imgPath">>>
            >;
          }
      >
    >
  >;
};

export type IGetRecentQueryVariables = {};

export type IGetRecentQuery = { __typename?: "Query" } & {
  findRecentPosts: Maybe<
    Array<
      Maybe<
        { __typename?: "RecentPostResponse" } & Pick<
          IRecentPostResponse,
          | "postId"
          | "isBuy"
          | "price"
          | "saleDate"
          | "category"
          | "deal"
          | "createdDate"
          | "modifiedDate"
        > & {
            user: Maybe<
              { __typename?: "User" } & Pick<
                IUser,
                "userId" | "name" | "imageUrl" | "address" | "trust"
              >
            >;
            hashTags: Maybe<
              Array<
                Maybe<{ __typename?: "Hashtag" } & Pick<IHashtag, "hashtag">>
              >
            >;
            imgUrls: Maybe<
              Array<Maybe<{ __typename?: "File" } & Pick<IFile, "imgPath">>>
            >;
          }
      >
    >
  >;
};

import gql from "graphql-tag";
import * as React from "react";
import * as ReactApollo from "react-apollo";
import * as ReactApolloHooks from "react-apollo-hooks";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export const GetLoginDocument = gql`
  mutation getLogin($input: LoginUserInput!) {
    loginUser(input: $input) {
      token
    }
  }
`;
export type IGetLoginMutationFn = ReactApollo.MutationFn<
  IGetLoginMutation,
  IGetLoginMutationVariables
>;

export const GetLoginComponent = (
  props: Omit<
    Omit<
      ReactApollo.MutationProps<IGetLoginMutation, IGetLoginMutationVariables>,
      "mutation"
    >,
    "variables"
  > & { variables?: IGetLoginMutationVariables }
) => (
  <ReactApollo.Mutation<IGetLoginMutation, IGetLoginMutationVariables>
    mutation={GetLoginDocument}
    {...props}
  />
);

export type IGetLoginProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<IGetLoginMutation, IGetLoginMutationVariables>
> &
  TChildProps;
export function withGetLogin<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    IGetLoginMutation,
    IGetLoginMutationVariables,
    IGetLoginProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    IGetLoginMutation,
    IGetLoginMutationVariables,
    IGetLoginProps<TChildProps>
  >(GetLoginDocument, {
    alias: "withGetLogin",
    ...operationOptions
  });
}

export function useGetLoginMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    IGetLoginMutation,
    IGetLoginMutationVariables
  >
) {
  return ReactApolloHooks.useMutation<
    IGetLoginMutation,
    IGetLoginMutationVariables
  >(GetLoginDocument, baseOptions);
}
export const GetUserInfoDocument = gql`
  query getUserInfo {
    findUserInfo {
      name
      address
      trust
      numOfPosts
      imgurl
    }
  }
`;

export const GetUserInfoComponent = (
  props: Omit<
    Omit<
      ReactApollo.QueryProps<IGetUserInfoQuery, IGetUserInfoQueryVariables>,
      "query"
    >,
    "variables"
  > & { variables?: IGetUserInfoQueryVariables }
) => (
  <ReactApollo.Query<IGetUserInfoQuery, IGetUserInfoQueryVariables>
    query={GetUserInfoDocument}
    {...props}
  />
);

export type IGetUserInfoProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<IGetUserInfoQuery, IGetUserInfoQueryVariables>
> &
  TChildProps;
export function withGetUserInfo<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    IGetUserInfoQuery,
    IGetUserInfoQueryVariables,
    IGetUserInfoProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    IGetUserInfoQuery,
    IGetUserInfoQueryVariables,
    IGetUserInfoProps<TChildProps>
  >(GetUserInfoDocument, {
    alias: "withGetUserInfo",
    ...operationOptions
  });
}

export function useGetUserInfoQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<IGetUserInfoQueryVariables>
) {
  return ReactApolloHooks.useQuery<
    IGetUserInfoQuery,
    IGetUserInfoQueryVariables
  >(GetUserInfoDocument, baseOptions);
}
export const GetHistoryDocument = gql`
  query getHistory {
    findUserHistoryByUserId {
      postId
      isBuy
      title
      saleDate
      viewCount
      deal
      createdDate
      modifiedDate
      hashTags {
        hashtag
      }
      price
      imgUrls {
        imgPath
      }
    }
  }
`;

export const GetHistoryComponent = (
  props: Omit<
    Omit<
      ReactApollo.QueryProps<IGetHistoryQuery, IGetHistoryQueryVariables>,
      "query"
    >,
    "variables"
  > & { variables?: IGetHistoryQueryVariables }
) => (
  <ReactApollo.Query<IGetHistoryQuery, IGetHistoryQueryVariables>
    query={GetHistoryDocument}
    {...props}
  />
);

export type IGetHistoryProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<IGetHistoryQuery, IGetHistoryQueryVariables>
> &
  TChildProps;
export function withGetHistory<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    IGetHistoryQuery,
    IGetHistoryQueryVariables,
    IGetHistoryProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    IGetHistoryQuery,
    IGetHistoryQueryVariables,
    IGetHistoryProps<TChildProps>
  >(GetHistoryDocument, {
    alias: "withGetHistory",
    ...operationOptions
  });
}

export function useGetHistoryQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<IGetHistoryQueryVariables>
) {
  return ReactApolloHooks.useQuery<IGetHistoryQuery, IGetHistoryQueryVariables>(
    GetHistoryDocument,
    baseOptions
  );
}
export const GetRecentDocument = gql`
  query getRecent {
    findRecentPosts {
      postId
      user {
        userId
        name
        imageUrl
        address
        trust
      }
      hashTags {
        hashtag
      }
      isBuy
      price
      saleDate
      imgUrls {
        imgPath
      }
      category
      deal
      createdDate
      modifiedDate
    }
  }
`;

export const GetRecentComponent = (
  props: Omit<
    Omit<
      ReactApollo.QueryProps<IGetRecentQuery, IGetRecentQueryVariables>,
      "query"
    >,
    "variables"
  > & { variables?: IGetRecentQueryVariables }
) => (
  <ReactApollo.Query<IGetRecentQuery, IGetRecentQueryVariables>
    query={GetRecentDocument}
    {...props}
  />
);

export type IGetRecentProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<IGetRecentQuery, IGetRecentQueryVariables>
> &
  TChildProps;
export function withGetRecent<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    IGetRecentQuery,
    IGetRecentQueryVariables,
    IGetRecentProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    IGetRecentQuery,
    IGetRecentQueryVariables,
    IGetRecentProps<TChildProps>
  >(GetRecentDocument, {
    alias: "withGetRecent",
    ...operationOptions
  });
}

export function useGetRecentQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<IGetRecentQueryVariables>
) {
  return ReactApolloHooks.useQuery<IGetRecentQuery, IGetRecentQueryVariables>(
    GetRecentDocument,
    baseOptions
  );
}
