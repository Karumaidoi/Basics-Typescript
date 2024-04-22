import { useQuery, useQueryClient, useMutation } from "react-query";
import { getData } from "../services/apiTest";

export function useGetData(): any {
  const {
    data: newData,
    isLoading,
    error,
  } = useQuery(["newData"], () => getData("Test"));

  return { newData, isLoading, error };
}

export function useMutateData(): object {
  const queryClient = useQueryClient();
  const {
    mutate: fn,
    isLoading,
    error,
  } = useMutation({
    mutationFn: getData,
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries({ queryKey: ["newData"] });
    },
    onError: () => {},
  });

  return { fn, isLoading, error };
}
