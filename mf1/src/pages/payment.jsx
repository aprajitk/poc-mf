import dynamic from "next/dynamic";

const page = dynamic(() => import("mf3/pages/payment"), { ssr: false });

export default page;
