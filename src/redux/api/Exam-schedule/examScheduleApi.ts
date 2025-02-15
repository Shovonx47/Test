import { baseApi } from "../baseApi";



const examScheduleApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createExamSetting: builder.mutation({
            query: (info) => ({
                url: "/exam-schedule",
                method: "POST",
                body: info,
            }),
            invalidatesTags: ["exam_schedule"],
        }),
        getAllExamSettings: builder.query({
            query: ({ page, limit, sort }) => ({
                url: "/exam-schedule",
                method: "GET",
                params: { page, limit, sort }
            }),
            providesTags: ["exam_schedule"],
        }),

        getSingleExamSetting: builder.query({
            query: (id) => ({
                url: `/exam-schedule/${id}`,
                method: "GET",
            }),
            providesTags: ["exam_schedule"],
        }),

        updateExamSetting: builder.mutation({
            query: ({ id, data }) => ({
                url: `/exam-schedule/${id}`,
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["exam_schedule"],
        }),
        deleteExamSetting: builder.mutation({
            query: (id) => ({
                url: `/exam-schedule/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["exam_schedule"],
        }),
    }),
});

export const {
    useCreateExamSettingMutation,
    useGetAllExamSettingsQuery,
    useGetSingleExamSettingQuery,
    useUpdateExamSettingMutation,
    useDeleteExamSettingMutation

} = examScheduleApi;
