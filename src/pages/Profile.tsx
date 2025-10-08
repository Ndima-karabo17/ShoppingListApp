import account from '../assets/images/account.png';

function Profile() {
  return (
    <div className="min-h-screen bg-white text-black px-4 py-8">
      {/* Header */}
      <header className="max-w-4xl mx-auto mb-8">
        <h2 className="text-2xl sm:text-3xl font-mono mb-2">Update your profile</h2>
        <p className="text-base sm:text-lg text-zinc-500">
          Ensure your contact info is current to <br />
          keep your account safe and recoverable.
        </p>
      </header>

      {/* Profile Info */}
      <section className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-10">
        <img src={account} alt="Profile" className="w-24 h-24 object-cover rounded-full border" />
        <div>
          <h3 className="text-lg font-semibold">Ndima Mhangwani</h3>
          <p className="text-sm text-zinc-600">ndima@com</p>
        </div>
      </section>

      {/* Form */}
      <main className="max-w-4xl mx-auto bg-gray-50 p-6 rounded-lg shadow">
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Current Password */}
            <div>
              <label htmlFor="currentPassword" className="block text-gray-700 text-sm font-medium mb-1">
                Current Password
              </label>
              <input
                type="password"
                id="currentPassword"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400 outline-none"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400 outline-none"
                required
              />
            </div>

            {/* Re-enter Password */}
            <div>
              <label htmlFor="reenterPassword" className="block text-gray-700 text-sm font-medium mb-1">
                Re-enter Password
              </label>
              <input
                type="password"
                id="reenterPassword"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400 outline-none"
                required
              />
            </div>

            {/* Current Cell Number */}
            <div>
              <label htmlFor="currentCell" className="block text-gray-700 text-sm font-medium mb-1">
                Current Cell Number
              </label>
              <input
                type="tel"
                id="currentCell"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400 outline-none"
                required
              />
            </div>

            {/* New Password */}
            <div>
              <label htmlFor="newPassword" className="block text-gray-700 text-sm font-medium mb-1">
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400 outline-none"
              />
            </div>

            {/* New Cell Number */}
            <div>
              <label htmlFor="newCell" className="block text-gray-700 text-sm font-medium mb-1">
                New Cell Number
              </label>
              <input
                type="tel"
                id="newCell"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400 outline-none"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-400 text-white font-semibold px-6 py-2 rounded-md text-lg"
            >
              Update Profile
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Profile;
