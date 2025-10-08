import { Link } from "react-router";

function Privacy(){
    return(
        <>
           <main className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-6">Issued: July 2025</p>

      <ul className="space-y-6 list-disc list-inside">
        <li>
          <strong>Your Consent Matters:</strong> By submitting your details through our contact form, you are giving us
          permission to use your information—but only for the purpose of responding to your message. We will never misuse your trust.
        </li>
        <li>
          <strong>Purpose-Driven Collection:</strong> We collect only the information we need (your name, email, and message) to provide you with
          the best possible service. Nothing more, nothing unnecessary.
        </li>
        <li>
          <strong>Confidentiality is a Priority:</strong> The information you share with us is kept strictly confidential and will not be shared
          with any third parties without your explicit permission.
        </li>
        <li>
          <strong>Your Information is Safe:</strong> We’ve put in place strong security measures to ensure that your personal information is
          protected from unauthorized access, loss, or misuse.
        </li>
        <li>
          <strong>You’re in Control:</strong> At any point, you have the right to request access to the information we have about you, and you can
          ask us to update or correct it if needed.
        </li>
        <li>
          <strong>No Long-Term Storage:</strong> We keep your information only for as long as it’s needed to fulfill
          the purpose of our communication. After that, it is securely deleted.
        </li>
        <li>
          <strong>Transparency is Key:</strong> If you have any questions or concerns about how your personal
          information is being used, we encourage you to contact us directly. We're here to help.
        </li>
        <li>
          <strong>We Respect Your Rights:</strong> As per the POPIA Act, your privacy is a legal right—and we are fully committed to upholding that
          right in every interaction you have with us.
        </li>
      </ul>

      <div className="mt-10">
        <Link
          to="/"
          className="inline-block px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded"
        >
          Back to Home
        </Link>
      </div>
    </main>
        </>
    )
}
export default Privacy;