import { createApplication } from "@/actions/posts";
import ApplicationForm from "@/components/ApplicationForm";

export default function ApplicationPage({ post }) {
  return (
    <div>
      <ApplicationForm
        handler={createApplication}
        post={post?._id?.toString()}
      />
    </div>
  );
}
