import { Profile } from "../profile/profile";

export function meta() {
  return [
    { title: "Profiles page" },
    { name: "description", content: "These are profiles" },
  ];
}

export default function Home() {
  return <Profile />;
}
