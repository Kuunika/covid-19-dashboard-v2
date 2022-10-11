import dynamic from "next/dynamic";

import ViewCertificate from "../components/certificate/view-certificate";
// const ViewCertificate = dynamic(
//   () => import("../components/certificate/view-certificate"),
//   { ssr: false }
// );

export default function () {
  return <ViewCertificate />;
}
