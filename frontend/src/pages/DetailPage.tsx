import { useGetIndustry } from "@/api/IndustryApi"; // Updated import
import IndustryInfo from "@/components/IndustryInfo"; // Updated component
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useParams } from "react-router-dom";
import { UserFormData } from "@/forms/user-profile-form/UserProfileForm";
import CheckoutButton from "@/components/CheckoutButton"; // Import the CheckoutButton
import { Card, CardFooter } from "@/@/components/card";
import OrderSummary from "@/components/OrderSummary";

const DetailPage = () => {
  const { industryId } = useParams(); // Updated to industryId
  const { industry, isLoading } = useGetIndustry(industryId); // Updated to useGetIndustry

  if (isLoading || !industry) {
    return "Loading...";
  }

  const onCheckout = (userFormData: UserFormData) => {
    // Handle the checkout process here, such as saving user details or redirecting
    console.log("Checkout with user data:", userFormData);
  };

  return (
    <div className="flex flex-col gap-10">
      <AspectRatio ratio={16 / 5}>
        <img
          src={industry.imageUrl} // Updated to industry
          className="rounded-md object-cover h-full w-full"
        />
      </AspectRatio>
      <div className="grid md:grid-cols-[4fr_2fr] gap-5 md:px-32">
        <div className="flex flex-col gap-4">
          <IndustryInfo industry={industry} /> {/* Updated to IndustryInfo */}
          <span className="text-2xl font-bold tracking-tight">Details</span> {/* Updated title */}
        </div>

        <div>
          <Card>
            <OrderSummary
            industry={industry}/>
             <CardFooter>
            <CheckoutButton 
              onCheckout={onCheckout} 
              disabled={false} // Adjust this based on your requirements
              isLoading={false} // Manage loading state if neede
            />
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
