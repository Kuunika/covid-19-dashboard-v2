import dynamic from "next/dynamic";
const ViewCertificate = dynamic(
  () => import("../components/certificate/view-certificate"),
  { ssr: false }
);

export default function () {
  return <ViewCertificate />;
}
