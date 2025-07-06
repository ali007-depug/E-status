// import Header from "../components/Header";
import Main from "../components/Main";

export default function Home() {
  return (
    <div>
      {/* header */}
      <header className="flex gap-4 items-center justify-center py-4 px-dyp bg-sky-900">
        <img src="logo.webp" alt="logo" width={40} height={40} className="size-20 rounded-full" />
        <h1 className="text-white text-4xl font-bold">كهربتك علينا</h1>
      </header>
      {/* End header */}
      {/* main */}
      <Main />
      {/* end main */}
    </div>
  );
}
