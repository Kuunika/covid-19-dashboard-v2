import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ViewCertificate from "../components/certificate/view-certificate";
import { fetchCertificate } from "../services/api";

export default function () {
  const router = useRouter();
  const [sign, setSign] = useState<any>();
  const { signature } = router.query;

  useEffect(() => {
    if (!signature) return;
    setSign(signature);
  }, [signature]);

  return <ViewCertificate signature={sign} />;
}
