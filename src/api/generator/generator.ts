// export const generateReport = async (
//   size: number = 0.01,
//   withErrors: string = 'on',
//   maxSpend: string = '1000'
// ): Promise<Blob> => {
//   const query = new URLSearchParams({
//     size: size.toString(),
//     withErrors,
//     maxSpend,
//   }).toString();

//   const response = await fetch(`${API_BASE_URL}/report?${query}`);
//   if (!response.ok) throw new Error('Report generation failed');
//   return await response.blob();
// };
