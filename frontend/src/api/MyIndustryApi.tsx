// src/api/MyIndustryApi.tsx
import { Industry } from "@/types"; // Ensure the path is correct for your project structure
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Fetch industries (GET request)
export const useGetMyIndustry = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getMyIndustryRequest = async (): Promise<Industry> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/industry`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorText = await response.text(); // Capture error response
      throw new Error(`Failed to get industry: ${errorText}`);
    }
    return response.json();
  };

  const { data: industry, isLoading, isError } = useQuery(
    "fetchMyIndustry",
    getMyIndustryRequest
  );

  if (isError) {
    toast.error("Error fetching industry data");
  }

  return { industry, isLoading, isError };
};

// Create industry (POST request)
export const useCreateMyIndustry = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createMyIndustryRequest = async (industryFormData: FormData): Promise<Industry> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/industry`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: industryFormData,
    });

    if (!response.ok) {
      const errorText = await response.text(); // Capture error response
      throw new Error(`Failed to create industry: ${errorText}`);
    }

    return response.json();
  };

  const { mutate: createIndustry, isLoading, isSuccess, error } = useMutation(createMyIndustryRequest);

  if (isSuccess) {
    toast.success("Industry created successfully!");
  }

  if (error) {
    toast.error("Error creating industry");
  }

  return { createIndustry, isLoading };
};

// Update industry (PUT request)
export const useUpdateMyIndustry = () => {
  const { getAccessTokenSilently } = useAuth0();

  const updateIndustryRequest = async (industryFormData: FormData): Promise<Industry> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/industry`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: industryFormData,
    });

    if (!response.ok) {
      const errorText = await response.text(); // Capture error response
      throw new Error(`Failed to update industry: ${errorText}`);
    }

    return response.json();
  };

  const { mutate: updateIndustry, isLoading, isSuccess, error } = useMutation(updateIndustryRequest);

  if (isSuccess) {
    toast.success("Industry updated successfully!");
  }

  if (error) {
    toast.error("Error updating industry");
  }

  return { updateIndustry, isLoading };
};
