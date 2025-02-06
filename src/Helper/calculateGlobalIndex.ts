export const calculateGlobalIndex = (
    currentPage: number = 1,
    limit: number = 10,
    localIndex: number = 0
): number => {
    if (currentPage < 1 || limit < 1 || localIndex < 0) {
        throw new Error("Invalid pagination values");
    }
    return (currentPage - 1) * limit + (localIndex + 1);
};