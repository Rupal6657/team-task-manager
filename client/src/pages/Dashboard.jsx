function Dashboard() {

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold">
        Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-4 mt-6">

        <div className="border p-4">
          Total Tasks
        </div>

        <div className="border p-4">
          Completed
        </div>

        <div className="border p-4">
          Pending
        </div>

      </div>

    </div>
  );
}

export default Dashboard;