import {
  useCreateMyIndustry,
  useGetMyIndustry,
  useUpdateMyIndustry,
} from "@/api/MyIndustryApi";
import ManageIndustryForm from "@/forms/manage-industry-form/ManageIndustryForm";

const ManageIndustryPage = () => {
  const { createIndustry, isLoading: isCreateLoading } = useCreateMyIndustry();
  const { industry } = useGetMyIndustry();
  const { updateIndustry, isLoading: isUpdateLoading } = useUpdateMyIndustry();

  const isEditing = !!industry;

  return (
    <div className="space-y-5 bg-gray-50 p-10 rounded-lg">
      <ManageIndustryForm
        industry={industry}
        onSave={isEditing ? updateIndustry : createIndustry}
        isLoading={isCreateLoading || isUpdateLoading}
      />
    </div>
  );
};

export default ManageIndustryPage;
