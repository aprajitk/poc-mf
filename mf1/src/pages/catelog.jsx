import dynamic from "next/dynamic";

const page = dynamic(() => import("mf2/pages/catelog"), { ssr: false });

export default page;
