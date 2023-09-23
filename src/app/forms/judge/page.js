import Judge from "@/components/forms/Judge";
import ProtectedPage from "@/components/ProtectedPage";

const Page = () => {
  return (
    <ProtectedPage title="Form | judges" restrictions={[]}>
      <Judge />
    </ProtectedPage>
  );
};

export default Page;
