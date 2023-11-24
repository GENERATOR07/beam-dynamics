export default function RosterPage() {
  return (
    <main className="bg-background text-primary w-full relative">
      Roster Page
      <div className="flex gap-2 items-center absolute right-10">
        <input
          className="rounded-[8px] p-2 bg-background border-white border-[1px]  "
          placeholder="find player"
        />
        <button className="bg-primary rounded-[8px] text-white p-2">
          Import team
        </button>
      </div>
      <div className="bg-[#2D2D2D] w-[1226px] h-[620px] mt-[100px] ml-[30px] rounded-[8px]">
        table container
      </div>
    </main>
  );
}
